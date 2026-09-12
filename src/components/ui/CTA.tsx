import { Button } from "./Button";

interface CTAProps {
  heading: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTA({
  heading,
  description,
  primaryLabel = "Cuéntanos tu proyecto",
  primaryHref = "/contacto",
  secondaryLabel,
  secondaryHref,
}: CTAProps) {
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
            <Button href={primaryHref} variant="primary" className="bg-white text-black hover:bg-neutral-200">
              {primaryLabel}
            </Button>
            {secondaryLabel && secondaryHref ? (
              <Button
                href={secondaryHref}
                variant="secondary"
                className="border-white/40 text-white hover:bg-white hover:text-black"
              >
                {secondaryLabel}
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
