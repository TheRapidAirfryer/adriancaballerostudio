import { Hero } from "@/components/home/Hero";
// import { ShowreelSection } from "@/components/home/ShowreelSection"; // Sin reel real todavía
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { ProcessSection } from "@/components/home/ProcessSection";
import { MetricsSection } from "@/components/home/MetricsSection";
import { AboutTeaser } from "@/components/home/AboutTeaser";
// import { LatestArticles } from "@/components/home/LatestArticles"; // Blog desactivado temporalmente
import { CTA } from "@/components/ui/CTA";
import { buildMetadata } from "@/lib/metadata";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { isLocale, withLocale } from "@/lib/i18n/config";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = getDictionary(lang);

  return buildMetadata({
    title: dict.home.metaTitle,
    description: dict.site.description,
    path: "/",
    locale: lang,
  });
}

export default async function Home({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <>
      <Hero lang={lang} />
      {/* <ShowreelSection /> — sin reel real todavía */}
      <ServicesOverview lang={lang} />
      <FeaturedProjects lang={lang} />
      <ProcessSection lang={lang} />
      <MetricsSection lang={lang} />
      <AboutTeaser lang={lang} />
      {/* <LatestArticles /> — Blog desactivado temporalmente */}
      <CTA
        lang={lang}
        heading={dict.home.finalCta.heading}
        description={dict.home.finalCta.description}
        secondaryLabel={dict.home.finalCta.secondaryLabel}
        secondaryHref={withLocale(lang, "/portafolio")}
      />
    </>
  );
}
