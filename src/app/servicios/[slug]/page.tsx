import { notFound } from "next/navigation";
import Link from "next/link";
import { getServiceBySlug, getRelatedServices, services } from "@/lib/data/services";
import { getProjectsByCategory, type ProjectCategory } from "@/lib/data/projects";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { ServiceCard } from "@/components/services/ServiceCard";
import { FAQ } from "@/components/ui/FAQ";
import { CTA } from "@/components/ui/CTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";
import { omitPlaceholders } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return buildMetadata({
    title: service.seoTitle,
    description: service.seoDescription,
    path: `/servicios/${service.slug}`,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const relatedServices = getRelatedServices(service);
  const relatedProjects = getProjectsByCategory(service.portfolioFilter as ProjectCategory).slice(0, 3);

  const serviceJsonLd = omitPlaceholders({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.seoDescription,
    provider: {
      "@type": "ProfessionalService",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: "[EDITAR: área de servicio]",
    url: `${siteConfig.url}/servicios/${service.slug}`,
  });

  return (
    <>
      <JsonLd data={serviceJsonLd} />

      <div className="mx-auto max-w-[1400px] px-6 pt-10 md:px-10">
        <Breadcrumbs
          items={[
            { label: "Servicios", href: "/servicios" },
            { label: service.navTitle, href: `/servicios/${service.slug}` },
          ]}
        />
        <h1 className="max-w-3xl text-balance text-4xl font-medium leading-[1.1] tracking-tight md:text-6xl">
          {service.title}
        </h1>
        <div className="mt-8 max-w-2xl space-y-4">
          {service.intro.map((paragraph) => (
            <p key={paragraph} className="text-base leading-relaxed text-neutral-600 md:text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
        <SectionHeading eyebrow="Qué hacemos" title="El servicio, en concreto." className="max-w-2xl" />
        <div className="mt-10 grid gap-8 md:mt-12 md:grid-cols-2 md:gap-x-12 md:gap-y-10">
          {service.whatWeDo.map((item) => (
            <div key={item.title} className="border-t border-black/10 pt-5">
              <h3 className="text-lg font-medium tracking-tight">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-black/10 bg-neutral-50 py-16 md:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 md:grid-cols-2 md:px-10">
          <div>
            <SectionHeading eyebrow="Para quién" title="¿Es esto para tu marca?" />
            <ul className="mt-8 flex flex-col gap-4">
              {service.forWho.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-neutral-600 md:text-base">
                  <span aria-hidden className="mt-1 text-neutral-500">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Qué incluye" title="Lo que vas a recibir." />
            <ul className="mt-8 flex flex-col gap-4">
              {service.includes.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-neutral-600 md:text-base">
                  <span aria-hidden className="mt-1 text-neutral-500">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
        <SectionHeading eyebrow="Nuestro proceso" title="Cómo trabajamos este servicio." className="max-w-2xl" />
        <ol className="mt-10 grid gap-8 md:mt-12 md:grid-cols-5 md:gap-6">
          {service.process.map((step, index) => (
            <li key={step.title} className="border-t border-black/10 pt-5">
              <span className="font-mono text-xs text-neutral-500">0{index + 1}</span>
              <h3 className="mt-3 text-base font-medium tracking-tight">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">{step.description}</p>
            </li>
          ))}
        </ol>
      </section>

      {relatedProjects.length > 0 ? (
        <section className="border-t border-black/10 bg-neutral-50 py-16 md:py-24">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
              <SectionHeading eyebrow="Ejemplos" title="Proyectos relacionados." />
              <Link href="/portafolio" className="hover-underline hidden text-sm font-medium md:inline-flex">
                Ver portafolio completo →
              </Link>
            </div>
            <div className="mt-10 grid gap-10 sm:grid-cols-2 md:mt-12 md:grid-cols-3">
              {relatedProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
        <SectionHeading eyebrow="Preguntas frecuentes" title="Lo que suelen preguntarnos." className="max-w-2xl" />
        <div className="mt-10 md:mt-12">
          <FAQ items={service.faqs} />
        </div>
      </section>

      {relatedServices.length > 0 ? (
        <section className="border-t border-black/10 py-16 md:py-24">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <SectionHeading eyebrow="Servicios relacionados" title="Con esto también suele ir de la mano." />
            <div className="mt-8 md:mt-10 md:grid md:grid-cols-3 md:gap-x-10">
              {relatedServices.map((related) => (
                <ServiceCard key={related.slug} service={related} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CTA heading={service.ctaHeading} description={service.ctaText} />
    </>
  );
}
