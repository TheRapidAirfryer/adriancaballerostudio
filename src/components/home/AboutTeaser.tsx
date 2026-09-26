import Link from "next/link";
import { PlaceholderMedia } from "@/components/ui/PlaceholderMedia";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { siteConfig } from "@/lib/site-config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { withLocale, type Locale } from "@/lib/i18n/config";

export function AboutTeaser({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);

  return (
    <section className="border-t border-black/10 bg-neutral-50 py-20 md:py-28">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-6 md:grid-cols-2 md:gap-16 md:px-10">
        <RevealOnScroll>
          <PlaceholderMedia
            label={`${siteConfig.founder.name} — [EDITAR: fotografía del fundador]`}
            src={siteConfig.founder.photo}
            ratio="feed-vertical"
          />
        </RevealOnScroll>
        <RevealOnScroll>
          <div className="flex h-full flex-col justify-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500">
              {dict.home.about.eyebrow}
            </p>
            <h2 className="mt-4 text-balance text-3xl font-medium leading-[1.1] tracking-tight md:text-4xl">
              {dict.home.about.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-neutral-500 md:text-lg">
              {dict.home.about.description}
            </p>
            <Link
              href={withLocale(lang, "/nosotros")}
              className="hover-underline mt-8 inline-flex w-fit items-center gap-2 text-sm font-medium"
            >
              {dict.home.about.cta}
              <span aria-hidden>→</span>
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
