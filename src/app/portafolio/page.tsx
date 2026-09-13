import { projects } from "@/lib/data/projects";
import { PortfolioFilter } from "@/components/portfolio/PortfolioFilter";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CTA } from "@/components/ui/CTA";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Portafolio",
  description:
    "Proyectos de video, fotografía, dron, desarrollo web, aplicaciones, sistemas y campañas de Adrian Caballero Studio.",
  path: "/portafolio",
});

export default function PortfolioPage() {
  return (
    <>
      <div className="mx-auto max-w-[1400px] px-6 pt-10 md:px-10">
        <Breadcrumbs items={[{ label: "Portafolio", href: "/portafolio" }]} />
        <SectionHeading
          eyebrow="Portafolio"
          title="Proyectos reales. Resultados reales."
          description="Una selección de proyectos donde combinamos creatividad, tecnología y estrategia para fortalecer marcas, mejorar su comunicación y generar resultados."
          className="max-w-3xl"
        />
      </div>

      <div className="mx-auto max-w-[1400px] px-6 py-14 md:px-10 md:py-20">
        <PortfolioFilter projects={projects} />
      </div>

      <CTA
        heading="¿Tienes un proyecto parecido en mente?"
        description="Cuéntanos qué necesitas y revisamos si encaja con lo que hacemos."
      />
    </>
  );
}
