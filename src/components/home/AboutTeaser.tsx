import Link from "next/link";
import { PlaceholderMedia } from "@/components/ui/PlaceholderMedia";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { siteConfig } from "@/lib/site-config";

export function AboutTeaser() {
  return (
    <section className="border-t border-black/10 bg-neutral-50 py-20 md:py-28">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-6 md:grid-cols-2 md:gap-16 md:px-10">
        <RevealOnScroll>
          <PlaceholderMedia label={`${siteConfig.founder.name} — [EDITAR: fotografía del fundador]`} ratio="square" />
        </RevealOnScroll>
        <RevealOnScroll>
          <div className="flex h-full flex-col justify-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500">El Studio</p>
            <h2 className="mt-4 text-balance text-3xl font-medium leading-[1.1] tracking-tight md:text-4xl">
              Un equipo que entiende de creatividad y de tecnología, en el mismo lugar.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-neutral-500 md:text-lg">
              No trabajamos por proyectos aislados. Cada pieza de contenido, cada campaña
              y cada línea de código responden a un mismo objetivo: que tu marca funcione
              mejor, de principio a fin.
            </p>
            <Link
              href="/nosotros"
              className="hover-underline mt-8 inline-flex w-fit items-center gap-2 text-sm font-medium"
            >
              Conoce el studio
              <span aria-hidden>→</span>
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
