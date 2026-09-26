import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlaceholderMedia } from "@/components/ui/PlaceholderMedia";
import { CTA } from "@/components/ui/CTA";
import { getProcessSteps } from "@/lib/data/home-data";
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
    title: dict.aboutPage.metaTitle,
    description: dict.aboutPage.metaDescription,
    path: "/nosotros",
    locale: lang,
  });
}

export default async function AboutPage({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <>
      <div className="mx-auto max-w-[1400px] px-6 pt-10 md:px-10">
        <Breadcrumbs items={[{ label: dict.aboutPage.breadcrumb, href: "/nosotros" }]} lang={lang} />
        <h1 className="max-w-3xl text-balance text-4xl font-medium leading-[1.1] tracking-tight md:text-6xl">
          {dict.aboutPage.heroTitle}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
          {dict.aboutPage.heroDescription}
        </p>
      </div>

      <section className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <PlaceholderMedia
            label={`${siteConfig.founder.name} — [EDITAR: fotografía del fundador]`}
            src={siteConfig.founder.photo}
            ratio="feed-vertical"
          />
          <div className="flex flex-col justify-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500">
              {dict.site.founderRole}
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-4xl">
              {siteConfig.founder.name}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-neutral-600 md:text-lg">
              {dict.site.founderBio}
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 bg-neutral-50 py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <SectionHeading
            eyebrow={dict.aboutPage.believeEyebrow}
            title={dict.aboutPage.believeTitle}
            description={dict.aboutPage.believeDescription}
            className="max-w-2xl"
          />
          <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-3">
            {dict.aboutPage.beliefs.map((belief) => (
              <div key={belief.title} className="border-t border-black/10 pt-6">
                <h3 className="text-lg font-medium tracking-tight">{belief.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">{belief.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
        <SectionHeading eyebrow={dict.aboutPage.processEyebrow} title={dict.aboutPage.processTitle} className="max-w-2xl" />
        <ol className="mt-10 grid gap-8 md:mt-12 md:grid-cols-4 md:gap-6">
          {getProcessSteps(lang).map((step) => (
            <li key={step.number} className="border-t border-black/10 pt-5">
              <span className="font-mono text-xs text-neutral-500">{step.number}</span>
              <h3 className="mt-3 text-base font-medium tracking-tight">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">{step.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <CTA
        lang={lang}
        heading={dict.aboutPage.ctaHeading}
        description={dict.aboutPage.ctaDescription}
      />
    </>
  );
}
