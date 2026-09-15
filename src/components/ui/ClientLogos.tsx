import Image from "next/image";
import { clients, type ClientLogo } from "@/lib/data/clients";

/**
 * No inventamos clientes ni logos. Cada slot sin "src" real se muestra
 * como texto placeholder; en cuanto agregues el archivo de imagen, se
 * reemplaza automáticamente.
 */
export function ClientLogos({ logos = clients }: { logos?: ClientLogo[] }) {
  return (
    <ul className="flex flex-wrap border-b border-r border-black/10">
      {logos.map((client) => (
        <li
          key={client.name}
          className="flex h-28 w-1/2 items-center justify-center border-l border-t border-black/10 px-6 sm:w-1/4"
        >
          {client.src ? (
            <Image
              src={client.src}
              alt={client.name}
              width={200}
              height={80}
              className="h-14 w-auto object-contain grayscale transition-[filter] duration-300 hover:grayscale-0"
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
