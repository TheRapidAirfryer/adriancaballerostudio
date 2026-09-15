import Link from "next/link";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function Hero() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 pt-14 md:px-10 md:pt-20">
      <RevealOnScroll>
        <h1 className="max-w-4xl text-balance text-[2.5rem] font-medium leading-[1.05] tracking-tight md:text-7xl">
          Hacemos que tu marca
          <br />
          se vea, conecte
          <br />
          y avance.
        </h1>
      </RevealOnScroll>

      <RevealOnScroll>
        <div className="mt-8 flex flex-col items-start justify-between gap-8 md:mt-10 md:flex-row md:items-end">
          <p className="max-w-md text-balance text-base leading-relaxed text-neutral-500 md:text-lg">
            Somos un estudio creativo y tecnológico. Producimos video, fotografía y
            campañas, y construimos los sitios, aplicaciones y sistemas que las
            sostienen.
          </p>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
            >
              Cuéntanos tu proyecto
            </Link>
            <Link
              href="/portafolio"
              className="inline-flex items-center justify-center rounded-full border border-black/80 px-6 py-3.5 text-sm font-medium transition-colors hover:bg-black hover:text-white"
            >
              Ver nuestro trabajo
            </Link>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
