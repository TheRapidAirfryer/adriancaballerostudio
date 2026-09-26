/**
 * Configuración central de la marca. Todo lo marcado con [EDITAR] es un
 * placeholder que debe reemplazarse con información real del negocio antes
 * de publicar en producción. Nada de esto se inventa como dato de hecho:
 * son campos de configuración, no afirmaciones de contenido.
 */

export const siteConfig = {
  name: "Adrian Caballero Studio",
  shortName: "ACS",
  legalName: "Inversiones Cabsan S. de R. L.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.adriancaballero.studio",
  founder: {
    name: "Adrián Caballero",
    /** Ruta de la foto en /public, ej. "/team/adrian-caballero.jpg". Undefined muestra el placeholder. */
    photo: "/team/adriancaballero.png" as string | undefined,
  },
  contact: {
    email: "contacto@adriancaballero.studio",
    phone: "+504 8879-5325",
    whatsapp: "+504 8879-5325",
    whatsappLink: "https://wa.me/50488795325",
  },
  address: {
    street: "15 y 16 calle",
    city: "San Pedro Sula",
    region: "Cortés",
    country: "Honduras",
    postalCode: "21101",
  },
  social: {
    instagram: "https://www.instagram.com/adriancaballero.studio/",
    facebook: "https://www.facebook.com/profile.php?id=61594193676032",
    tiktok: "https://www.tiktok.com/@cabsan28",
  },
  analytics: {
    ga4Id: process.env.NEXT_PUBLIC_GA4_ID ?? "",
    gtmId: process.env.NEXT_PUBLIC_GTM_ID ?? "",
    metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "",
  },
} as const;

/**
 * Rutas internas (sin prefijo de idioma) para nav/footer. Las etiquetas
 * visibles viven en dict.links (src/lib/i18n/dictionaries.ts), ya que los
 * links en sí no cambian entre "es" y "en".
 */
export const NAV_LINKS = [
  { href: "/portafolio", labelKey: "work" },
  { href: "/servicios", labelKey: "services" },
  { href: "/nosotros", labelKey: "studio" },
  // { href: "/blog", labelKey: "blog" }, // Blog desactivado temporalmente — ver src/app/[lang]/blog/page.tsx
  { href: "/contacto", labelKey: "contact" },
] as const;

export const FOOTER_LINKS = {
  studio: [
    { href: "/nosotros", labelKey: "studio" },
    { href: "/portafolio", labelKey: "portfolio" },
    // { href: "/blog", labelKey: "blog" }, // Blog desactivado temporalmente — ver src/app/[lang]/blog/page.tsx
    { href: "/contacto", labelKey: "contact" },
  ],
  legal: [
    { href: "/politica-de-privacidad", labelKey: "privacy" },
    { href: "/terminos", labelKey: "terms" },
  ],
} as const;
