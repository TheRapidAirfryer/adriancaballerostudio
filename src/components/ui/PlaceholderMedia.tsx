import { cn } from "@/lib/utils";

interface PlaceholderMediaProps {
  label: string;
  ratio?: "video" | "square" | "portrait" | "wide";
  className?: string;
  dark?: boolean;
}

const ratios: Record<NonNullable<PlaceholderMediaProps["ratio"]>, string> = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[9/16]",
  wide: "aspect-[21/9]",
};

/**
 * Marcador visual elegante para espacios donde debe ir fotografía o video
 * real del cliente. No usamos imágenes de stock: dejamos explícito qué
 * contenido falta y en qué formato.
 */
export function PlaceholderMedia({
  label,
  ratio = "video",
  className,
  dark = false,
}: PlaceholderMediaProps) {
  return (
    <div
      className={cn(
        "relative flex items-end overflow-hidden border",
        ratios[ratio],
        dark ? "border-white/15 bg-neutral-900" : "border-black/10 bg-neutral-50",
        className
      )}
    >
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 opacity-[0.35]",
          "bg-[linear-gradient(135deg,transparent_49%,currentColor_49.5%,currentColor_50.5%,transparent_51%)]",
          "bg-[length:22px_22px]",
          dark ? "text-white/10" : "text-black/10"
        )}
      />
      <span
        className={cn(
          "relative z-10 m-4 max-w-[80%] font-mono text-[11px] uppercase tracking-wide",
          dark ? "text-white/60" : "text-black/50"
        )}
      >
        {label}
      </span>
    </div>
  );
}
