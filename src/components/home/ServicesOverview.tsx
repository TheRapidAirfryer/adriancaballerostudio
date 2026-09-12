import Link from "next/link";
import { CATEGORY_LABELS, getServicesByCategory, type ServiceCategory } from "@/lib/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const categories: ServiceCategory[] = ["contenido", "marketing", "tecnologia"];

export function ServicesOverview() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
      <RevealOnScroll>
        <SectionHeading
          eyebrow="Lo que hacemos"
          title="Tres disciplinas, una sola forma de trabajar."
          description="Cada servicio existe por separado, pero funcionan mejor juntos: el contenido alimenta la estrategia y la tecnología sostiene todo lo demás."
        />
      </RevealOnScroll>

      <div className="mt-14 grid gap-10 md:mt-16 md:grid-cols-3 md:gap-6">
        {categories.map((category) => {
          const { label, description } = CATEGORY_LABELS[category];
          const categoryServices = getServicesByCategory(category);
          return (
            <RevealOnScroll key={category}>
              <div className="border-t border-black/10 pt-6">
                <h3 className="text-xl font-medium tracking-tight md:text-2xl">{label}</h3>
                <p className="mt-2 text-sm text-neutral-500">{description}</p>
                <ul className="mt-6 flex flex-col gap-3">
                  {categoryServices.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/servicios/${service.slug}`}
                        className="hover-underline text-sm font-medium"
                      >
                        {service.navTitle}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          );
        })}
      </div>

      <div className="mt-14 md:mt-16">
        <Link href="/servicios" className="hover-underline inline-flex items-center gap-2 text-sm font-medium">
          Ver todos los servicios
          <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
