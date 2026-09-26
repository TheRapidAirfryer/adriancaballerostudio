import { getCategoryLabels, getServicesByCategory, type ServiceCategory } from "@/lib/data/services";
import { ServiceCard } from "@/components/services/ServiceCard";
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
    title: dict.servicesPage.metaTitle,
    description: dict.servicesPage.metaDescription,
    path: "/servicios",
    locale: lang,
  });
}

const categories: ServiceCategory[] = ["contenido", "marketing", "tecnologia"];

export default async function ServicesPage({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const categoryLabels = getCategoryLabels(lang);

  return (
    <>
      <div className="mx-auto max-w-[1400px] px-6 pt-10 md:px-10">
        <Breadcrumbs items={[{ label: dict.servicesPage.breadcrumb, href: "/servicios" }]} lang={lang} />
        <SectionHeading
          eyebrow={dict.servicesPage.eyebrow}
          title={dict.servicesPage.title}
          description={dict.servicesPage.description}
          className="max-w-3xl"
        />
      </div>

      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
        {categories.map((category) => {
          const { label, description } = categoryLabels[category];
          const categoryServices = getServicesByCategory(category, lang);
          return (
            <div key={category} className="mb-16 last:mb-0 md:mb-24">
              <div className="mb-6 flex flex-col gap-2 md:mb-8 md:flex-row md:items-end md:justify-between">
                <h2 className="text-2xl font-medium tracking-tight md:text-3xl">{label}</h2>
                <p className="max-w-md text-sm text-neutral-500">{description}</p>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-x-10">
                {categoryServices.map((service) => (
                  <ServiceCard key={service.slug} service={service} lang={lang} />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <CTA
        lang={lang}
        heading={dict.servicesPage.ctaHeading}
        description={dict.servicesPage.ctaDescription}
      />
    </>
  );
}
