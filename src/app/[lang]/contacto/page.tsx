import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/lib/site-config";
import { buildMetadata } from "@/lib/metadata";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { isLocale } from "@/lib/i18n/config";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = getDictionary(lang);

  return buildMetadata({
    title: dict.contactPage.metaTitle,
    description: dict.contactPage.metaDescription,
    path: "/contacto",
    locale: lang,
  });
}

export default async function ContactPage({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <div className="mx-auto max-w-[1400px] px-6 py-10 md:px-10 md:py-16">
      <Breadcrumbs items={[{ label: dict.contactPage.breadcrumb, href: "/contacto" }]} lang={lang} />

      <div className="grid gap-16 md:grid-cols-[1fr_1.2fr] md:gap-20">
        <div>
          <SectionHeading
            eyebrow={dict.contactPage.eyebrow}
            title={dict.contactPage.title}
            description={dict.contactPage.description}
          />

          <div className="mt-10 flex flex-col gap-6 border-t border-black/10 pt-8">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wide text-neutral-500">
                {dict.contactPage.emailLabel}
              </p>
              <a href={`mailto:${siteConfig.contact.email}`} className="hover-underline mt-1 inline-block text-base">
                {siteConfig.contact.email}
              </a>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wide text-neutral-500">
                {dict.contactPage.whatsappLabel}
              </p>
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
              <p className="font-mono text-[11px] uppercase tracking-wide text-neutral-500">
                {dict.contactPage.locationLabel}
              </p>
              <p className="mt-1 text-base">
                {siteConfig.address.city}, {siteConfig.address.country}
              </p>
            </div>
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wide text-neutral-500">
                {dict.contactPage.hoursLabel}
              </p>
              <p className="mt-1 text-base">{dict.site.hours}</p>
            </div>
          </div>

          <a
            href={siteConfig.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex w-full items-center justify-center gap-2 rounded-full border border-black/80 px-6 py-4 text-sm font-medium transition-colors hover:bg-black hover:text-white sm:w-auto"
          >
            {dict.contactPage.whatsappCta}
          </a>
        </div>

        <div className="border-t border-black/10 pt-10 md:border-t-0 md:border-l md:pl-16 md:pt-0">
          <ContactForm lang={lang} />
        </div>
      </div>
    </div>
  );
}
