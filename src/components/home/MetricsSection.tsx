import { homeMetrics } from "@/lib/data/home-data";
import { Metrics } from "@/components/ui/Metrics";
import { ClientLogos } from "@/components/ui/ClientLogos";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function MetricsSection() {
  return (
    <section className="border-t border-black/10 py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <RevealOnScroll>
          <Metrics items={homeMetrics} />
        </RevealOnScroll>

        <div className="mt-20 md:mt-24">
          <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500">
            Marcas que han confiado en el studio
          </p>
          <RevealOnScroll>
            <ClientLogos />
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
