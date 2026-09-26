export const locales = ["es", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Antepone el prefijo de idioma a una ruta interna, ej. withLocale("en", "/servicios") -> "/en/servicios". */
export function withLocale(locale: Locale, path: string) {
  return `/${locale}${path === "/" ? "" : path}`;
}
