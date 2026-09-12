"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContactForm, type ContactFormState } from "@/app/contacto/actions";
import { cn } from "@/lib/utils";

const SERVICE_OPTIONS = [
  { value: "video", label: "Video" },
  { value: "fotografia", label: "Fotografía" },
  { value: "dron", label: "Dron" },
  { value: "pagina-web", label: "Página web" },
  { value: "aplicacion", label: "Aplicación" },
  { value: "sistema-empresarial", label: "Sistema empresarial" },
  { value: "meta-ads", label: "Meta Ads" },
  { value: "redes-sociales", label: "Redes sociales" },
  { value: "otro", label: "Otro" },
];

const initialState: ContactFormState = { status: "idle" };

const inputClasses =
  "w-full border-b border-black/20 bg-transparent py-3 text-base outline-none transition-colors focus:border-black placeholder:text-neutral-500";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-black px-6 py-4 text-sm font-medium text-white transition-colors hover:bg-neutral-800 disabled:opacity-50 sm:w-auto"
    >
      {pending ? "Enviando..." : "Cuéntanos tu proyecto"}
    </button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState);

  return (
    <form action={formAction} noValidate className="flex flex-col gap-6">
      {/* Honeypot anti-spam: oculto para personas, visible para bots. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company_website">No completar este campo</label>
        <input
          type="text"
          id="company_website"
          name="company_website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm text-neutral-500">
            Nombre
          </label>
          <input id="name" name="name" type="text" required className={inputClasses} />
          {state.fieldErrors?.name ? (
            <p className="mt-1 text-xs text-neutral-600">{state.fieldErrors.name}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="company" className="text-sm text-neutral-500">
            Empresa
          </label>
          <input id="company" name="company" type="text" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="email" className="text-sm text-neutral-500">
            Correo
          </label>
          <input id="email" name="email" type="email" required className={inputClasses} />
          {state.fieldErrors?.email ? (
            <p className="mt-1 text-xs text-neutral-600">{state.fieldErrors.email}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="phone" className="text-sm text-neutral-500">
            WhatsApp / Teléfono
          </label>
          <input id="phone" name="phone" type="tel" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="service" className="text-sm text-neutral-500">
            Servicio de interés
          </label>
          <select id="service" name="service" required defaultValue="" className={cn(inputClasses, "appearance-none")}>
            <option value="" disabled>
              Selecciona una opción
            </option>
            {SERVICE_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {state.fieldErrors?.service ? (
            <p className="mt-1 text-xs text-neutral-600">{state.fieldErrors.service}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="budget" className="text-sm text-neutral-500">
            Presupuesto aproximado
          </label>
          <input id="budget" name="budget" type="text" placeholder="Opcional" className={inputClasses} />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-sm text-neutral-500">
          Cuéntanos sobre tu proyecto
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={cn(inputClasses, "resize-none")}
        />
        {state.fieldErrors?.message ? (
          <p className="mt-1 text-xs text-neutral-600">{state.fieldErrors.message}</p>
        ) : null}
      </div>

      <SubmitButton />

      <div role="status" aria-live="polite">
        {state.status === "success" ? (
          <p className="text-sm text-neutral-700">{state.message}</p>
        ) : null}
        {state.status === "error" && state.message ? (
          <p className="text-sm text-neutral-700">{state.message}</p>
        ) : null}
      </div>
    </form>
  );
}
