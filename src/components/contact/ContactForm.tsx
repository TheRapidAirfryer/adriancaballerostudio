"use client";

import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { submitContactForm, type ContactFormState } from "@/app/[lang]/contacto/actions";
import { cn } from "@/lib/utils";
import { getDictionary, type Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const initialState: ContactFormState = { status: "idle" };

const inputClasses =
  "w-full border-b border-black/20 bg-transparent py-3 text-base outline-none transition-colors focus:border-black placeholder:text-neutral-500";

function SubmitButton({ dict }: { dict: Dictionary["contactForm"] }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="mt-4 inline-flex w-full cursor-pointer items-center justify-center rounded-full bg-black px-6 py-4 text-sm font-medium text-white transition-colors hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
    >
      {pending ? dict.submitting : dict.submit}
    </button>
  );
}

export function ContactForm({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang).contactForm;
  const boundAction = submitContactForm.bind(null, lang);
  const [state, formAction] = useActionState(boundAction, initialState);

  const SERVICE_OPTIONS = [
    { value: "video", label: dict.serviceOptions.video },
    { value: "fotografia", label: dict.serviceOptions.fotografia },
    { value: "dron", label: dict.serviceOptions.dron },
    { value: "pagina-web", label: dict.serviceOptions.paginaWeb },
    { value: "aplicacion", label: dict.serviceOptions.aplicacion },
    { value: "sistema-empresarial", label: dict.serviceOptions.sistemaEmpresarial },
    { value: "meta-ads", label: dict.serviceOptions.metaAds },
    { value: "redes-sociales", label: dict.serviceOptions.redesSociales },
    { value: "otro", label: dict.serviceOptions.otro },
  ];

  useEffect(() => {
    if (state.status === "success" && typeof window.fbq === "function") {
      window.fbq("track", "Lead");
    }
  }, [state.status]);

  return (
    <form action={formAction} noValidate className="flex flex-col gap-6">
      {/* Honeypot anti-spam: oculto para personas, visible para bots. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company_website">{dict.honeypotLabel}</label>
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
            {dict.name}
          </label>
          <input id="name" name="name" type="text" required className={inputClasses} />
          {state.fieldErrors?.name ? (
            <p className="mt-1 text-xs text-neutral-600">{state.fieldErrors.name}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="company" className="text-sm text-neutral-500">
            {dict.company}
          </label>
          <input id="company" name="company" type="text" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="email" className="text-sm text-neutral-500">
            {dict.email}
          </label>
          <input id="email" name="email" type="email" required className={inputClasses} />
          {state.fieldErrors?.email ? (
            <p className="mt-1 text-xs text-neutral-600">{state.fieldErrors.email}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="phone" className="text-sm text-neutral-500">
            {dict.phone}
          </label>
          <input id="phone" name="phone" type="tel" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="service" className="text-sm text-neutral-500">
            {dict.service}
          </label>
          <select id="service" name="service" required defaultValue="" className={cn(inputClasses, "appearance-none")}>
            <option value="" disabled>
              {dict.servicePlaceholder}
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
            {dict.budget}
          </label>
          <input id="budget" name="budget" type="text" placeholder={dict.budgetPlaceholder} className={inputClasses} />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-sm text-neutral-500">
          {dict.message}
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

      <SubmitButton dict={dict} />

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
