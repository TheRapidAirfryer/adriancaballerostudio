import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/lib/site-config";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Contacto",
  description:
    "Cuéntanos tu proyecto de video, fotografía, dron, desarrollo web, aplicaciones, sistemas empresariales, Meta Ads o redes sociales.",
  path: "/contacto",
});

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 py-10 md:px-10 md:py-16">
      <Breadcrumbs items={[{ label: "Contacto", href: "/contacto" }]} />

      <div className="grid gap-16 md:grid-cols-[1fr_1.2fr] md:gap-20">
        <div>
          <SectionHeading
            eyebrow="Contacto"
            title="Cuéntanos tu proyecto."
            description="Entre más contexto nos des, más rápido podemos responderte con algo concreto en lugar de preguntas genéricas."
          />

          <div className="mt-10 flex flex-col gap-6 border-t border-black/10 pt-8">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wide text-neutral-500">Correo</p>
              <a href={`mailto:${siteConfig.contact.email}`} className="hover-underline mt-1 inline-block text-base">
                {siteConfig.contact.email}
              </a>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wide text-neutral-500">WhatsApp</p>
              <a
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-underline mt-1 inline-block text-base"
              >
                {siteConfig.contact.whatsapp}
              </a>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wide text-neutral-500">Ubicación</p>
              <p className="mt-1 text-base">
                {siteConfig.address.city}, {siteConfig.address.country}
              </p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wide text-neutral-500">Horario</p>
              <p className="mt-1 text-base">{siteConfig.hours}</p>
            </div>
          </div>

          <a
            href={siteConfig.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex w-full items-center justify-center gap-2 rounded-full border border-black/80 px-6 py-4 text-sm font-medium transition-colors hover:bg-black hover:text-white sm:w-auto"
          >
            Escríbenos por WhatsApp
          </a>
        </div>

        <div className="border-t border-black/10 pt-10 md:border-t-0 md:border-l md:pl-16 md:pt-0">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
