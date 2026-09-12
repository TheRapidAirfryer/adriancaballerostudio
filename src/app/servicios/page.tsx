import { CATEGORY_LABELS, getServicesByCategory, type ServiceCategory } from "@/lib/data/services";
import { ServiceCard } from "@/components/services/ServiceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CTA } from "@/components/ui/CTA";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Servicios",
  description:
    "Contenido, marketing y tecnología: producción audiovisual, fotografía, dron, desarrollo web, aplicaciones, sistemas empresariales, Meta Ads y redes sociales.",
  path: "/servicios",
});

const categories: ServiceCategory[] = ["contenido", "marketing", "tecnologia"];

export default function ServicesPage() {
  return (
    <>
      <div className="mx-auto max-w-[1400px] px-6 pt-10 md:px-10">
        <Breadcrumbs items={[{ label: "Servicios", href: "/servicios" }]} />
        <SectionHeading
          eyebrow="Servicios"
          title="Contenido, marketing y tecnología, bajo un mismo criterio."
          description="No vendemos servicios sueltos. Cada disciplina está pensada para conectarse con las demás y sostener el crecimiento real de una marca."
          className="max-w-3xl"
        />
      </div>

      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
        {categories.map((category) => {
          const { label, description } = CATEGORY_LABELS[category];
          const categoryServices = getServicesByCategory(category);
          return (
            <div key={category} className="mb-16 last:mb-0 md:mb-24">
              <div className="mb-6 flex flex-col gap-2 md:mb-8 md:flex-row md:items-end md:justify-between">
                <h2 className="text-2xl font-medium tracking-tight md:text-3xl">{label}</h2>
                <p className="max-w-md text-sm text-neutral-500">{description}</p>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-x-10">
                {categoryServices.map((service) => (
                  <ServiceCard key={service.slug} service={service} />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <CTA
        heading="¿No sabes por dónde empezar?"
        description="Cuéntanos qué necesita tu marca y te ayudamos a definir el servicio correcto."
      />
    </>
  );
}
