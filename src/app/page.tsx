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
import { siteConfig } from "@/lib/site-config";

export const metadata = buildMetadata({
  title: `${siteConfig.name} — Contenido, diseño y tecnología`,
  description: siteConfig.description,
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      {/* <ShowreelSection /> — sin reel real todavía */}
      <ServicesOverview />
      <FeaturedProjects />
      <ProcessSection />
      <MetricsSection />
      <AboutTeaser />
      {/* <LatestArticles /> — Blog desactivado temporalmente */}
      <CTA
        heading="¿Conversamos sobre tu proyecto?"
        description="Cuéntanos qué necesita tu marca. Te respondemos con una propuesta concreta, no con un formulario genérico."
        secondaryLabel="Ver nuestro trabajo"
        secondaryHref="/portafolio"
      />
    </>
  );
}
