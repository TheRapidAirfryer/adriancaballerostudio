export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function readingTime(text: string) {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min de lectura`;
}

/**
 * Elimina de forma recursiva cualquier campo cuyo valor sea un placeholder
 * [EDITAR: ...] pendiente. Evita publicar datos estructurados (JSON-LD) con
 * marcadores sin resolver que Google marcaría como inválidos.
 */
export function omitPlaceholders<T>(value: T): T {
  if (typeof value === "string") {
    return (value.includes("[EDITAR") ? undefined : value) as T;
  }
  if (Array.isArray(value)) {
    const cleaned = value.map(omitPlaceholders).filter((v) => v !== undefined);
    return (cleaned.length > 0 ? cleaned : undefined) as T;
  }
  if (value && typeof value === "object") {
    const result: Record<string, unknown> = {};
    for (const [key, val] of Object.entries(value)) {
      const cleaned = omitPlaceholders(val);
      if (cleaned !== undefined) result[key] = cleaned;
    }
    return result as T;
  }
  return value;
}
