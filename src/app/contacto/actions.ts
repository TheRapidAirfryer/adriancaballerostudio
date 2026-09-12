"use server";

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

/**
 * Envía el lead por correo usando la API HTTP de Resend (sin SDK: una sola
 * llamada fetch, cero dependencias nuevas). Requiere RESEND_API_KEY.
 * CONTACT_TO_EMAIL / CONTACT_FROM_EMAIL son opcionales para sobreescribir
 * los valores por defecto.
 */
async function sendLeadEmail(lead: LeadPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { sent: false, reason: "no-api-key" as const };

  const to = process.env.CONTACT_TO_EMAIL || siteConfig.contact.email;
  const from = process.env.CONTACT_FROM_EMAIL || "Adrian Caballero Studio <onboarding@resend.dev>";

  const html = `
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
      html,
    }),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw new Error(`Resend respondió ${response.status}: ${detail}`);
  }

  return { sent: true as const };
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
    const result = await sendLeadEmail(lead);

    if (!result.sent) {
      // Sin RESEND_API_KEY configurada: intentamos un webhook alterno y,
      // si tampoco existe, dejamos el lead en el log para no perderlo
      // mientras se activa el envío de correo real.
      const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(lead),
        });
      } else {
        console.info("[contacto] Nuevo lead recibido (falta configurar RESEND_API_KEY):", lead);
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
