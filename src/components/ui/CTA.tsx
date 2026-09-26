import { Button } from "./Button";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { withLocale, type Locale } from "@/lib/i18n/config";

interface CTAProps {
  lang: Locale;
  heading: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTA({
  lang,
  heading,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CTAProps) {
  const dict = getDictionary(lang);
  const resolvedPrimaryLabel = primaryLabel ?? dict.cta.defaultPrimaryLabel;
  const resolvedPrimaryHref = primaryHref ?? withLocale(lang, "/contacto");
  return (
    <section className="border-t border-black/10 bg-black py-20 text-white md:py-28">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2 className="text-balance text-3xl font-medium leading-[1.1] tracking-tight md:text-5xl">
              {heading}
            </h2>
            {description ? (
              <p className="mt-4 max-w-lg text-base text-neutral-500 md:text-lg">{description}</p>
            ) : null}
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button href={resolvedPrimaryHref} variant="inverted">
              {resolvedPrimaryLabel}
            </Button>
            {secondaryLabel && secondaryHref ? (
              <Button href={secondaryHref} variant="secondary-inverted">
                {secondaryLabel}
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
