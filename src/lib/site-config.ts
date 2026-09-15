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
  tagline: "Creatividad, tecnología y estrategia para marcas que quieren avanzar.",
  description:
    "Estudio creativo y tecnológico especializado en contenido audiovisual, diseño, publicidad y desarrollo de soluciones digitales para marcas que buscan fortalecer su imagen, comunicar con mayor impacto, vender más y optimizar su operación.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.adriancaballero.studio",
  locale: "es",
  founder: {
    name: "Adrian Caballero",
    role: "Fundador y Director del Studio",
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
  hours: "Lun–Sáb 8:00 AM – 5:00 PM",
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

export const NAV_LINKS = [
  { href: "/portafolio", label: "Trabajo" },
  { href: "/servicios", label: "Servicios" },
  { href: "/nosotros", label: "Studio" },
  // { href: "/blog", label: "Blog" }, // Blog desactivado temporalmente — ver src/app/blog/page.tsx
  { href: "/contacto", label: "Contacto" },
] as const;

export const FOOTER_LINKS = {
  studio: [
    { href: "/nosotros", label: "Studio" },
    { href: "/portafolio", label: "Portafolio" },
    // { href: "/blog", label: "Blog" }, // Blog desactivado temporalmente — ver src/app/blog/page.tsx
    { href: "/contacto", label: "Contacto" },
  ],
  legal: [
    { href: "/politica-de-privacidad", label: "Privacidad" },
    { href: "/terminos", label: "Términos" },
  ],
} as const;
