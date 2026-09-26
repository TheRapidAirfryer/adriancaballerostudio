import type { Metadata } from "next";
import { siteConfig } from "./site-config";
import type { Locale } from "./i18n/config";

interface PageMetaInput {
  title: string;
  description: string;
  /** Ruta sin prefijo de idioma, ej. "/servicios". */
  path: string;
  image?: string;
  type?: "website" | "article";
  noIndex?: boolean;
  /** Idioma de esta página; agrega el prefijo a la URL y genera hreflang alternates. */
  locale?: Locale;
}

export function buildMetadata({
  title,
  description,
  path,
  image,
  type = "website",
  noIndex = false,
  locale,
}: PageMetaInput): Metadata {
  const localizedPath = locale ? `/${locale}${path === "/" ? "" : path}` : path;
  const url = `${siteConfig.url}${localizedPath}`;
  const ogImage = image ?? "/opengraph-image";
  const ogLocale = locale === "en" ? "en_US" : "es_HN";

  return {
    title,
    description,
    alternates: {
      canonical: url,
      ...(locale
        ? {
            languages: {
              es: `${siteConfig.url}/es${path === "/" ? "" : path}`,
              en: `${siteConfig.url}/en${path === "/" ? "" : path}`,
              "x-default": `${siteConfig.url}/es${path === "/" ? "" : path}`,
            },
          }
        : {}),
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: ogLocale,
      type,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  } satisfies Metadata;
}
