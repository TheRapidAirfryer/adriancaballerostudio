import { getProjects } from "@/lib/data/projects";
import { PortfolioFilter } from "@/components/portfolio/PortfolioFilter";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CTA } from "@/components/ui/CTA";
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
    title: dict.portfolioPage.metaTitle,
    description: dict.portfolioPage.metaDescription,
    path: "/portafolio",
    locale: lang,
  });
}

export default async function PortfolioPage({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <>
      <div className="mx-auto max-w-[1400px] px-6 pt-10 md:px-10">
        <Breadcrumbs items={[{ label: dict.portfolioPage.breadcrumb, href: "/portafolio" }]} lang={lang} />
        <SectionHeading
          eyebrow={dict.portfolioPage.eyebrow}
          title={dict.portfolioPage.title}
          description={dict.portfolioPage.description}
          className="max-w-3xl"
        />
      </div>

      <div className="mx-auto max-w-[1400px] px-6 py-14 md:px-10 md:py-20">
        <PortfolioFilter projects={getProjects(lang)} lang={lang} />
      </div>

      <CTA
        lang={lang}
        heading={dict.portfolioPage.ctaHeading}
        description={dict.portfolioPage.ctaDescription}
      />
    </>
  );
}
