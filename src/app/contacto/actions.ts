"use server";

export interface ContactFormState {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<"name" | "email" | "message" | "service", string>>;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitize(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim().slice(0, 2000) : "";
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

  const payload = { name, company, email, phone, service, budget, message, receivedAt: new Date().toISOString() };

  // [EDITAR]: conectar aquí el envío real (correo transaccional, CRM o
  // webhook). Si se define CONTACT_WEBHOOK_URL en las variables de entorno,
  // reenviamos el lead automáticamente; si no, queda registrado en el log
  // del servidor para no perder ninguna solicitud durante la puesta en marcha.
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch {
      return {
        status: "error",
        message: "No pudimos enviar tu mensaje en este momento. Escríbenos por WhatsApp mientras lo resolvemos.",
      };
    }
  } else {
    console.info("[contacto] Nuevo lead recibido:", payload);
  }

  return {
    status: "success",
    message: "Gracias. Recibimos tu mensaje y te contactaremos pronto.",
  };
}
