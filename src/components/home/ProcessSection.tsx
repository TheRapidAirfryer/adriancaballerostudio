import { getProcessSteps } from "@/lib/data/home-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";

export function ProcessSection({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);

  return (
    <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
      <RevealOnScroll>
        <SectionHeading
          eyebrow={dict.home.process.eyebrow}
          title={dict.home.process.title}
          description={dict.home.process.description}
        />
      </RevealOnScroll>

      <div className="mt-14 grid gap-10 md:mt-16 md:grid-cols-4 md:gap-6">
        {getProcessSteps(lang).map((step) => (
          <RevealOnScroll key={step.number}>
            <div className="border-t border-black/10 pt-6">
              <span className="font-mono text-xs text-neutral-500">{step.number}</span>
              <h3 className="mt-3 text-lg font-medium tracking-tight">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">{step.description}</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
