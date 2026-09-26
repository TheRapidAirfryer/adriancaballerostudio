import Link from "next/link";
import { getProjects } from "@/lib/data/projects";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { withLocale, type Locale } from "@/lib/i18n/config";

export function FeaturedProjects({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);
  const featured = getProjects(lang).slice(0, 4);

  return (
    <section className="border-t border-black/10 bg-neutral-50 py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <RevealOnScroll>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow={dict.home.featuredProjects.eyebrow}
              title={dict.home.featuredProjects.title}
              description={dict.home.featuredProjects.description}
            />
            <Link
              href={withLocale(lang, "/portafolio")}
              className="hover-underline hidden shrink-0 items-center gap-2 text-sm font-medium md:inline-flex"
            >
              {dict.home.featuredProjects.viewPortfolio}
              <span aria-hidden>→</span>
            </Link>
          </div>
        </RevealOnScroll>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 md:mt-16 md:gap-x-8 md:gap-y-14">
          {featured.map((project) => (
            <RevealOnScroll key={project.slug}>
              <ProjectCard project={project} lang={lang} />
            </RevealOnScroll>
          ))}
        </div>

        <div className="mt-12 md:hidden">
          <Link href={withLocale(lang, "/portafolio")} className="hover-underline inline-flex items-center gap-2 text-sm font-medium">
            {dict.home.featuredProjects.viewPortfolio}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
