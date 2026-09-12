import Link from "next/link";
import type { Service } from "@/lib/data/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/servicios/${service.slug}`}
      className="group flex flex-col justify-between border-t border-black/10 py-8 transition-colors first:border-t-0 md:border-t md:py-10"
    >
      <div>
        <h3 className="text-xl font-medium tracking-tight md:text-2xl">{service.navTitle}</h3>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-neutral-500 md:text-base">
          {service.summary}
        </p>
      </div>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium">
        Ver servicio
        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
          →
        </span>
      </span>
    </Link>
  );
}
