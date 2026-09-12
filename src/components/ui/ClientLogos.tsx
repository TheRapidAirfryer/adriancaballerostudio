import Image from "next/image";
import { clients, type ClientLogo } from "@/lib/data/clients";

/**
 * No inventamos clientes ni logos. Cada slot sin "src" real se muestra
 * como texto placeholder; en cuanto agregues el archivo de imagen, se
 * reemplaza automáticamente.
 */
export function ClientLogos({ logos = clients }: { logos?: ClientLogo[] }) {
  return (
    <ul className="grid grid-cols-2 divide-x divide-y divide-black/10 border border-black/10 sm:grid-cols-3 md:grid-cols-6 md:divide-y-0">
      {logos.map((client) => (
        <li
          key={client.name}
          className="flex h-24 items-center justify-center px-6"
        >
          {client.src ? (
            <Image
              src={client.src}
              alt={client.name}
              width={160}
              height={64}
              className="h-10 w-auto object-contain grayscale transition-[filter] duration-300 hover:grayscale-0"
            />
          ) : (
            <span className="text-center font-mono text-[10px] uppercase tracking-wide text-neutral-500">
              {client.name}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
