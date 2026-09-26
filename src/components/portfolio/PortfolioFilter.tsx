"use client";

import { useMemo, useState } from "react";
import { getProjectCategoryLabels, type Project, type ProjectCategory } from "@/lib/data/projects";
import { ProjectCard } from "./ProjectCard";
import { cn } from "@/lib/utils";
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";

const ALL = "todos" as const;

export function PortfolioFilter({ projects, lang }: { projects: Project[]; lang: Locale }) {
  const [active, setActive] = useState<ProjectCategory | typeof ALL>(ALL);
  const dict = getDictionary(lang);
  const categoryLabels = getProjectCategoryLabels(lang);

  const categories = useMemo(() => Object.keys(categoryLabels) as ProjectCategory[], [categoryLabels]);

  const filtered = useMemo(
    () => (active === ALL ? projects : projects.filter((p) => p.categories.includes(active))),
    [projects, active]
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label={dict.portfolioPage.filterAriaLabel}>
        <button
          type="button"
          onClick={() => setActive(ALL)}
          aria-pressed={active === ALL}
          className={cn(
            "rounded-full border px-4 py-2 text-sm transition-colors",
            active === ALL ? "border-black bg-black text-white" : "border-black/20 hover:border-black"
          )}
        >
          {dict.portfolioPage.filterAll}
        </button>
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            aria-pressed={active === category}
            className={cn(
              "rounded-full border px-4 py-2 text-sm transition-colors",
              active === category ? "border-black bg-black text-white" : "border-black/20 hover:border-black"
            )}
          >
            {categoryLabels[category]}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-12 grid gap-10 sm:grid-cols-2 md:mt-16 md:grid-cols-3 md:gap-x-8 md:gap-y-14">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} lang={lang} />
          ))}
        </div>
      ) : (
        <p className="mt-16 text-sm text-neutral-500">{dict.portfolioPage.emptyCategory}</p>
      )}
    </div>
  );
}
