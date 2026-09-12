"use server";

import nodemailer from "nodemailer";
import { siteConfig } from "@/lib/site-config";

export interface ContactFormState {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<"name" | "email" | "message" | "service", string>>;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitize(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim().slice(0, 2000) : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

interface LeadPayload {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
  receivedAt: string;
}

function buildEmailHtml(lead: LeadPayload) {
  return `
    <h2>Nuevo mensaje desde el sitio web</h2>
    <p><strong>Nombre:</strong> ${escapeHtml(lead.name)}</p>
    <p><strong>Empresa:</strong> ${escapeHtml(lead.company) || "—"}</p>
    <p><strong>Correo:</strong> ${escapeHtml(lead.email)}</p>
    <p><strong>Teléfono:</strong> ${escapeHtml(lead.phone) || "—"}</p>
    <p><strong>Servicio de interés:</strong> ${escapeHtml(lead.service)}</p>
    <p><strong>Presupuesto:</strong> ${escapeHtml(lead.budget) || "—"}</p>
    <p><strong>Mensaje:</strong></p>
    <p>${escapeHtml(lead.message).replace(/\n/g, "<br />")}</p>
  `;
}

type SendResult = { sent: true } | { sent: false; reason: "not-configured" };

/**
 * Envía el lead por SMTP usando la cuenta de correo del hosting (ej.
 * Hostinger): host, usuario y contraseña de un correo real como
 * contacto@adriancaballero.studio. No agrega ningún servicio externo.
 */
async function sendViaSmtp(lead: LeadPayload): Promise<SendResult> {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) return { sent: false, reason: "not-configured" };

  const port = Number(process.env.SMTP_PORT ?? 465);

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  const to = process.env.CONTACT_TO_EMAIL || siteConfig.contact.email;
  const from = process.env.CONTACT_FROM_EMAIL || user;

  await transporter.sendMail({
    from,
    to,
    replyTo: lead.email,
    subject: `Nuevo proyecto de ${lead.name} — ${lead.service}`,
    html: buildEmailHtml(lead),
  });

  return { sent: true };
}

/**
 * Alternativa: envía el lead por correo usando la API HTTP de Resend (sin
 * SDK, una sola llamada fetch). Requiere RESEND_API_KEY. Se usa solo si no
 * hay credenciales SMTP configuradas.
 */
async function sendViaResend(lead: LeadPayload): Promise<SendResult> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { sent: false, reason: "not-configured" };

  const to = process.env.CONTACT_TO_EMAIL || siteConfig.contact.email;
  const from = process.env.CONTACT_FROM_EMAIL || "Adrian Caballero Studio <onboarding@resend.dev>";

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: lead.email,
      subject: `Nuevo proyecto de ${lead.name} — ${lead.service}`,
      html: buildEmailHtml(lead),
    }),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw new Error(`Resend respondió ${response.status}: ${detail}`);
  }

  return { sent: true };
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Honeypot: los bots suelen rellenar todos los campos, incluido este,
  // que está oculto visualmente para personas reales.
  const honeypot = sanitize(formData.get("company_website"));
  if (honeypot) {
    return { status: "success", message: "Gracias, hemos recibido tu mensaje." };
  }

  const name = sanitize(formData.get("name"));
  const company = sanitize(formData.get("company"));
  const email = sanitize(formData.get("email"));
  const phone = sanitize(formData.get("phone"));
  const service = sanitize(formData.get("service"));
  const budget = sanitize(formData.get("budget"));
  const message = sanitize(formData.get("message"));

  const fieldErrors: ContactFormState["fieldErrors"] = {};
  if (!name) fieldErrors.name = "Cuéntanos tu nombre.";
  if (!email || !EMAIL_RE.test(email)) fieldErrors.email = "Escribe un correo válido.";
  if (!service) fieldErrors.service = "Selecciona el servicio de tu interés.";
  if (!message || message.length < 10) fieldErrors.message = "Cuéntanos un poco más sobre tu proyecto.";

  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", message: "Revisa los campos marcados.", fieldErrors };
  }

  const lead: LeadPayload = {
    name,
    company,
    email,
    phone,
    service,
    budget,
    message,
    receivedAt: new Date().toISOString(),
  };

  try {
    // Orden de intento: SMTP (ej. Hostinger) → Resend → webhook → log.
    // Cada uno se usa solo si el anterior no está configurado.
    let result = await sendViaSmtp(lead);
    if (!result.sent) result = await sendViaResend(lead);

    if (!result.sent) {
      const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(lead),
        });
      } else {
        console.info("[contacto] Nuevo lead recibido (falta configurar el envío de correo):", lead);
      }
    }
  } catch (error) {
    console.error("[contacto] Error enviando el lead:", error);
    return {
      status: "error",
      message: "No pudimos enviar tu mensaje en este momento. Escríbenos por WhatsApp mientras lo resolvemos.",
    };
  }

  return {
    status: "success",
    message: "Gracias. Recibimos tu mensaje y te contactaremos pronto.",
  };
}
