import { notFound } from "next/navigation";
import Link from "next/link";
// getRelatedProjects se deja sin usar mientras la sección "Más proyectos" está comentada.
import { getProjectBySlug, mediaRatio, projects, PROJECT_CATEGORY_LABELS } from "@/lib/data/projects";
import { getServiceBySlug } from "@/lib/data/services";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PlaceholderMedia } from "@/components/ui/PlaceholderMedia";
import { ImageGallery } from "@/components/ui/ImageGallery";
import { SectionHeading } from "@/components/ui/SectionHeading";
// import { ProjectCard } from "@/components/portfolio/ProjectCard"; // usado solo por la sección "Más proyectos"
import { CTA } from "@/components/ui/CTA";
import { buildMetadata } from "@/lib/metadata";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return buildMetadata({
    title: project.seoTitle,
    description: project.seoDescription,
    path: `/proyectos/${project.slug}`,
  });
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  // Sección "Más proyectos" desactivada temporalmente — ver más abajo.
  // const relatedProjects = getRelatedProjects(project);
  const usedServices = project.services
    .map((s) => getServiceBySlug(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <div className="mx-auto max-w-[1400px] px-6 pt-10 md:px-10">
        <Breadcrumbs
          items={[
            { label: "Portafolio", href: "/portafolio" },
            { label: project.title, href: `/proyectos/${project.slug}` },
          ]}
        />

        {project.isPlaceholder ? (
          <p className="mb-4 inline-block border border-black/15 px-3 py-1 font-mono text-[10px] uppercase tracking-wide text-neutral-500">
            Caso de ejemplo — pendiente de reemplazar con proyecto real
          </p>
        ) : null}

        <h1 className="max-w-3xl text-balance text-4xl font-medium leading-[1.1] tracking-tight md:text-6xl">
          {project.title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
          {project.summary}
        </p>

        <dl className="mt-10 grid grid-cols-2 gap-6 border-y border-black/10 py-6 md:grid-cols-4">
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-wide text-neutral-500">Cliente</dt>
            <dd className="mt-1 text-sm">{project.client}</dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-wide text-neutral-500">Industria</dt>
            <dd className="mt-1 text-sm">{project.industry}</dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-wide text-neutral-500">Año</dt>
            <dd className="mt-1 text-sm">{project.year}</dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-wide text-neutral-500">Categoría</dt>
            <dd className="mt-1 text-sm">
              {project.categories.map((c) => PROJECT_CATEGORY_LABELS[c]).join(", ")}
            </dd>
          </div>
        </dl>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 pt-10 md:px-10">
        <PlaceholderMedia
          label={project.featuredMedia.label}
          src={project.featuredMedia.src}
          ratio={mediaRatio(project.featuredMedia)}
          dark
          priority
        />
      </div>

      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h2 className="text-lg font-medium tracking-tight">Objetivo</h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">{project.objective}</p>
          </div>
          <div>
            <h2 className="text-lg font-medium tracking-tight">El reto</h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">{project.challenge}</p>
          </div>
          <div>
            <h2 className="text-lg font-medium tracking-tight">La solución</h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">{project.solution}</p>
          </div>
        </div>

        <div className="mt-14 md:mt-20">
          <SectionHeading eyebrow="Proceso" title="Cómo lo construimos." className="max-w-2xl" />
          <ol className="mt-8 flex flex-col gap-4">
            {project.processNotes.map((note, index) => (
              <li key={note} className="flex gap-4 border-t border-black/10 pt-4 text-sm text-neutral-600 md:text-base">
                <span className="font-mono text-xs text-neutral-500">0{index + 1}</span>
                {note}
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-14 md:mt-20">
          <SectionHeading eyebrow="Contenido" title="Galería del proyecto." className="max-w-2xl" />
          <div className="mt-8">
            <ImageGallery items={project.gallery} />
          </div>
        </div>

        {project.artGallery && project.artGallery.length > 0 ? (
          <div className="mt-14 md:mt-20">
            <SectionHeading eyebrow="Diseño" title="Artes." className="max-w-2xl" />
            <div className="mt-8">
              <ImageGallery items={project.artGallery} />
            </div>
          </div>
        ) : null}

        <div className="mt-14 grid gap-12 border-t border-black/10 pt-12 md:mt-20 md:grid-cols-2">
          <div>
            <h2 className="text-lg font-medium tracking-tight">Resultado</h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">{project.results}</p>
            <dl className="mt-6 grid grid-cols-2 gap-6">
              {project.metrics.map((metric) => (
                <div key={metric.label}>
                  <dd className="text-2xl font-medium tracking-tight">{metric.value}</dd>
                  <dt className="mt-1 text-xs text-neutral-500">{metric.label}</dt>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <h2 className="text-lg font-medium tracking-tight">Servicios utilizados</h2>
            <ul className="mt-3 flex flex-col gap-2">
              {usedServices.map((service) => (
                <li key={service.slug}>
                  <Link href={`/servicios/${service.slug}`} className="hover-underline text-sm font-medium">
                    {service.navTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Sección "Más proyectos" desactivada temporalmente — descomentar junto con
          la línea de relatedProjects más arriba cuando se vuelva a necesitar.
      {relatedProjects.length > 0 ? (
        <section className="border-t border-black/10 bg-neutral-50 py-16 md:py-24">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <SectionHeading eyebrow="Más proyectos" title="Otros casos relacionados." />
            <div className="mt-10 grid gap-10 sm:grid-cols-2 md:mt-12 md:grid-cols-3">
              {relatedProjects.map((related) => (
                <ProjectCard key={related.slug} project={related} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
      */}

      <CTA
        heading="¿Tienes un proyecto parecido?"
        description="Cuéntanos qué necesitas y evaluamos cómo abordarlo."
      />
    </>
  );
}
