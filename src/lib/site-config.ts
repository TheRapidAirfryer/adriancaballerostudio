/**
 * Configuración central de la marca. Todo lo marcado con [EDITAR] es un
 * placeholder que debe reemplazarse con información real del negocio antes
 * de publicar en producción. Nada de esto se inventa como dato de hecho:
 * son campos de configuración, no afirmaciones de contenido.
 */

export const siteConfig = {
  name: "Adrian Caballero Studio",
  shortName: "ACS",
  legalName: "Adrian Caballero Studio [EDITAR: razón social]",
  tagline: "Creatividad, tecnología y estrategia para marcas que quieren avanzar.",
  description:
    "Estudio creativo y tecnológico especializado en contenido audiovisual, diseño, publicidad y desarrollo de tecnología para marcas que quieren verse mejor, comunicar mejor, vender mejor y operar mejor.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.adriancaballerostudio.com",
  locale: "es",
  founder: {
    name: "Adrian Caballero",
    role: "Fundador y Director del Studio",
  },
  contact: {
    email: "contacto@adriancaballero.studio",
    phone: "+00 000 000 0000 [EDITAR]",
    whatsapp: "+00 000 000 0000 [EDITAR]",
    whatsappLink: "https://wa.me/000000000000 [EDITAR: número real]",
  },
  address: {
    street: "[EDITAR: dirección]",
    city: "[EDITAR: ciudad]",
    region: "[EDITAR: estado / provincia]",
    country: "[EDITAR: país]",
    postalCode: "[EDITAR]",
  },
  hours: "[EDITAR: horario de atención, ej. Lun–Vie 9:00–18:00]",
  social: {
    instagram: "https://instagram.com/adriancaballerostudio [EDITAR]",
    tiktok: "https://tiktok.com/@adriancaballerostudio [EDITAR]",
    youtube: "https://youtube.com/@adriancaballerostudio [EDITAR]",
    linkedin: "https://linkedin.com/company/adriancaballerostudio [EDITAR]",
    behance: "https://behance.net/adriancaballerostudio [EDITAR]",
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
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
] as const;

export const FOOTER_LINKS = {
  studio: [
    { href: "/nosotros", label: "Studio" },
    { href: "/portafolio", label: "Portafolio" },
    { href: "/blog", label: "Blog" },
    { href: "/contacto", label: "Contacto" },
  ],
  legal: [
    { href: "/politica-de-privacidad", label: "Privacidad" },
    { href: "/terminos", label: "Términos" },
  ],
} as const;
