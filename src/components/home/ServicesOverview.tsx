import Link from "next/link";
import { getCategoryLabels, getServicesByCategory, type ServiceCategory } from "@/lib/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { withLocale, type Locale } from "@/lib/i18n/config";

const categories: ServiceCategory[] = ["contenido", "marketing", "tecnologia"];

export function ServicesOverview({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);
  const categoryLabels = getCategoryLabels(lang);

  return (
    <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
      <RevealOnScroll>
        <SectionHeading
          eyebrow={dict.home.servicesOverview.eyebrow}
          title={dict.home.servicesOverview.title}
          description={dict.home.servicesOverview.description}
        />
      </RevealOnScroll>

      <div className="mt-14 grid gap-10 md:mt-16 md:grid-cols-3 md:gap-6">
        {categories.map((category) => {
          const { label, description } = categoryLabels[category];
          const categoryServices = getServicesByCategory(category, lang);
          return (
            <RevealOnScroll key={category}>
              <div className="border-t border-black/10 pt-6">
                <h3 className="text-xl font-medium tracking-tight md:text-2xl">{label}</h3>
                <p className="mt-2 text-sm text-neutral-500">{description}</p>
                <ul className="mt-6 flex flex-col gap-3">
                  {categoryServices.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={withLocale(lang, `/servicios/${service.slug}`)}
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
        <Link href={withLocale(lang, "/servicios")} className="hover-underline inline-flex items-center gap-2 text-sm font-medium">
          {dict.home.servicesOverview.viewAll}
          <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
