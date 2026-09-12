const placeholderSlots = Array.from({ length: 6 }, (_, i) => `[EDITAR: Logo cliente ${i + 1}]`);

/**
 * No inventamos clientes ni logos. Este componente deja el espacio listo
 * para reemplazar cada slot por el logo real en cuanto esté disponible.
 */
export function ClientLogos({ names = placeholderSlots }: { names?: string[] }) {
  return (
    <ul className="grid grid-cols-2 divide-x divide-y divide-black/10 border border-black/10 sm:grid-cols-3 md:grid-cols-6 md:divide-y-0">
      {names.map((name) => (
        <li
          key={name}
          className="flex h-24 items-center justify-center px-4 text-center font-mono text-[10px] uppercase tracking-wide text-neutral-500"
        >
          {name}
        </li>
      ))}
    </ul>
  );
}
