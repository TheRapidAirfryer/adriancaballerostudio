import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { siteConfig } from "@/lib/site-config";
import { buildMetadata } from "@/lib/metadata";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { isLocale } from "@/lib/i18n/config";

interface Props {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = getDictionary(lang);

  return buildMetadata({
    title: dict.legal.termsMetaTitle,
    description: dict.legal.termsMetaDescription,
    path: "/terminos",
    noIndex: true,
    locale: lang,
  });
}

export default async function TermsPage({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <div className="mx-auto max-w-3xl px-6 py-10 md:px-10 md:py-16">
      <Breadcrumbs items={[{ label: dict.legal.termsBreadcrumb, href: "/terminos" }]} lang={lang} />
      <h1 className="text-3xl font-medium tracking-tight md:text-5xl">{dict.legal.termsTitle}</h1>
      <p className="mt-4 text-sm text-neutral-500">{dict.legal.lastUpdated}</p>

      <div className="mt-10 flex flex-col gap-8 text-sm leading-relaxed text-neutral-600 md:text-base">
        {dict.legal.termsSections.map((section, index) => (
          <section key={section.title}>
            <h2 className="text-lg font-medium tracking-tight text-black">{section.title}</h2>
            <p className="mt-2">
              {index === 5 ? (
                <>
                  {section.body} {siteConfig.contact.email}.
                </>
              ) : (
                section.body.replace("{legalName}", siteConfig.legalName)
              )}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
}
