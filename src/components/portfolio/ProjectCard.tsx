import Link from "next/link";
import { PlaceholderMedia } from "@/components/ui/PlaceholderMedia";
import { getProjectCategoryLabels, type Project } from "@/lib/data/projects";
import { withLocale, type Locale } from "@/lib/i18n/config";

export function ProjectCard({ project, lang }: { project: Project; lang: Locale }) {
  const categoryLabels = getProjectCategoryLabels(lang);

  return (
    <Link href={withLocale(lang, `/proyectos/${project.slug}`)} className="group block">
      <div className="overflow-hidden">
        <div className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]">
          <PlaceholderMedia
            label={project.featuredMedia.label}
            src={project.featuredMedia.src}
            ratio="video"
          />
        </div>
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-medium tracking-tight md:text-xl">{project.title}</h3>
          <p className="mt-1 text-sm text-neutral-500">
            {project.client} — {project.year}
          </p>
        </div>
        <span className="mt-1 shrink-0 font-mono text-[10px] uppercase tracking-wide text-neutral-500">
          {project.categories.map((c) => categoryLabels[c]).join(" · ")}
        </span>
      </div>
    </Link>
  );
}
