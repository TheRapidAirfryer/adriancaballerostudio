import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlaceholderMedia } from "@/components/ui/PlaceholderMedia";
import { CTA } from "@/components/ui/CTA";
import { processSteps } from "@/lib/data/home-data";
import { siteConfig } from "@/lib/site-config";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Nosotros",
  description:
    "Adrian Caballero Studio es un estudio creativo y tecnológico que une contenido, diseño y desarrollo bajo un mismo criterio de trabajo.",
  path: "/nosotros",
});

const beliefs = [
  {
    title: "El contenido sin estrategia se olvida",
    description:
      "Producir por producir no mueve una marca. Cada pieza que hacemos responde a un objetivo definido antes de encender una cámara o abrir un editor de código.",
  },
  {
    title: "La tecnología debe resolver, no solo existir",
    description:
      "Un sitio, una app o un sistema no valen por su tecnología, sino por el problema real que resuelven para el negocio y para quien lo usa.",
  },
  {
    title: "Creatividad y tecnología funcionan mejor juntas",
    description:
      "Separar el contenido de la plataforma que lo sostiene es la razón por la que muchas estrategias digitales se sienten desconectadas entre sí.",
  },
];

export default function AboutPage() {
  return (
    <>
      <div className="mx-auto max-w-[1400px] px-6 pt-10 md:px-10">
        <Breadcrumbs items={[{ label: "Studio", href: "/nosotros" }]} />
        <h1 className="max-w-3xl text-balance text-4xl font-medium leading-[1.1] tracking-tight md:text-6xl">
          Un estudio que combina criterio creativo y capacidad técnica real.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
          Adrian Caballero Studio nace para resolver un problema concreto: la mayoría de
          las marcas contratan producción de contenido por un lado y desarrollo de
          tecnología por otro, y ninguno de los dos termina de conversar con el otro.
          Nosotros los ponemos a trabajar juntos.
        </p>
      </div>

      <section className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <PlaceholderMedia label={`${siteConfig.founder.name} — [EDITAR: fotografía del fundador]`} ratio="square" />
          <div className="flex flex-col justify-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500">
              {siteConfig.founder.role}
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-4xl">
              {siteConfig.founder.name}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-neutral-600 md:text-lg">
              [EDITAR: biografía breve del fundador — formación, trayectoria y qué lo llevó
              a fundar el studio. Escribir en primera o tercera persona, con datos reales,
              sin inventar premios ni cifras de experiencia.]
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 bg-neutral-50 py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <SectionHeading
            eyebrow="En qué creemos"
            title="Lo que nos diferencia no es una lista de servicios."
            description="Es la forma en la que los conectamos entre sí."
            className="max-w-2xl"
          />
          <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-3">
            {beliefs.map((belief) => (
              <div key={belief.title} className="border-t border-black/10 pt-6">
                <h3 className="text-lg font-medium tracking-tight">{belief.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">{belief.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
        <SectionHeading eyebrow="Cómo trabajamos" title="Un proceso ordenado, sin fórmulas genéricas." className="max-w-2xl" />
        <ol className="mt-10 grid gap-8 md:mt-12 md:grid-cols-4 md:gap-6">
          {processSteps.map((step) => (
            <li key={step.number} className="border-t border-black/10 pt-5">
              <span className="font-mono text-xs text-neutral-500">{step.number}</span>
              <h3 className="mt-3 text-base font-medium tracking-tight">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">{step.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <CTA
        heading="¿Quieres saber si encajamos con tu proyecto?"
        description="Cuéntanos en qué estás pensando y conversemos sin compromiso."
      />
    </>
  );
}
