/**
 * Proyectos de portafolio. Estos son registros DE EJEMPLO para dejar la
 * arquitectura lista: clientes, resultados y métricas están marcados
 * explícitamente como placeholder y deben sustituirse por casos reales.
 * No se inventan clientes, logos, testimonios ni cifras.
 */

import { defaultLocale, type Locale } from "@/lib/i18n/config";

export type ProjectCategory =
  | "video"
  | "fotografia"
  | "dron"
  | "web"
  | "apps"
  | "sistemas"
  | "social";

const PROJECT_CATEGORY_LABELS_ES: Record<ProjectCategory, string> = {
  video: "Video",
  fotografia: "Fotografía",
  dron: "Dron",
  web: "Web",
  apps: "Apps",
  sistemas: "Sistemas",
  social: "Social Media",
};

const PROJECT_CATEGORY_LABELS_EN: Record<ProjectCategory, string> = {
  video: "Video",
  fotografia: "Photography",
  dron: "Drone",
  web: "Web",
  apps: "Apps",
  sistemas: "Systems",
  social: "Social Media",
};

export function getProjectCategoryLabels(locale: Locale = defaultLocale) {
  return locale === "en" ? PROJECT_CATEGORY_LABELS_EN : PROJECT_CATEGORY_LABELS_ES;
}

/** @deprecated Usa getProjectCategoryLabels(locale). Se mantiene para compatibilidad con el español por defecto. */
export const PROJECT_CATEGORY_LABELS = PROJECT_CATEGORY_LABELS_ES;

export interface ProjectMedia {
  type: "image" | "image-vertical" | "video-vertical" | "video-horizontal";
  label: string;
  /** Ruta del archivo en /public, ej. "/portfolio/mi-proyecto/portada.jpg". */
  src?: string;
  /** Si se define, la miniatura enlaza a esta URL externa (ej. el reel en Instagram) en vez de abrir el visor interno. */
  href?: string;
}

/** Proporción de PlaceholderMedia adecuada según el tipo de contenido. */
export function mediaRatio(item: ProjectMedia): "video" | "portrait" | "feed-vertical" {
  if (item.type === "video-vertical") return "portrait";
  if (item.type === "image-vertical") return "feed-vertical";
  return "video";
}

export interface ProjectMetric {
  label: string;
  value: string;
  isPlaceholder: boolean;
}

export interface Project {
  slug: string;
  title: string;
  client: string;
  industry: string;
  categories: ProjectCategory[];
  services: string[];
  year: string;
  isPlaceholder: boolean;
  summary: string;
  objective: string;
  challenge: string;
  solution: string;
  processNotes: string[];
  results: string;
  metrics: ProjectMetric[];
  featuredMedia: ProjectMedia;
  gallery: ProjectMedia[];
  /** Sección opcional "Artes" para piezas gráficas verticales, debajo de la galería principal. */
  artGallery?: ProjectMedia[];
  seoTitle: string;
  seoDescription: string;
}

export const projects: Project[] = [
  {
    slug: "redes-sociales-jf-maritimos",
    title: "Gestión de redes sociales — JF Marítimos",
    client: "JF Marítimos",
    industry: "Náutica y marítima",
    categories: ["social"],
    services: ["redes-sociales", "videos-redes-sociales", "meta-ads"],
    year: "2025",
    isPlaceholder: false,
    summary: "Gestión estratégica de redes sociales, creación de contenido y campañas en Meta Ads para fortalecer la presencia digital de JF Marítimos y generar nuevas oportunidades comerciales.",
    objective: "Fortalecer la presencia digital y generar más ventas.",
    challenge: "Comunicar una oferta amplia de productos y servicios náuticos.",
    solution: "Contenido para redes sociales y campañas en Meta Ads orientadas a alcance y ventas.",
    processNotes: [
      "Gestión mensual de contenido para redes sociales.",
      "Producción de piezas gráficas y video para publicaciones.",
      "Configuración, optimización y reporte de campañas en Meta Ads.",
    ],
    results: "Crecimiento sostenido de la comunidad y del alcance en Facebook, Instagram y TikTok, con un fuerte aumento en interacciones con el contenido publicado.",
    metrics: [
      { label: "Crecimiento de comunidad", value: "+87.2%", isPlaceholder: false },
      { label: "Interacciones", value: "16.4 mil", isPlaceholder: false },
      { label: "Alcance en TikTok", value: "815.2K reproducciones", isPlaceholder: false },
    ],
    featuredMedia: {
      type: "image",
      label: "Gestión de redes sociales de JF Marítimos",
      src: "/portfolio/jfmaritimos/jfmaritimos-manejoderedes.png",
    },
    gallery: [
      {
        type: "video-vertical",
        label: "Reel de JF Marítimos",
        src: "/portfolio/jfmaritimos/jf-video1.png",
        href: "https://www.instagram.com/reel/DcymlwJRKDt/",
      },
      {
        type: "video-vertical",
        label: "Reel de JF Marítimos",
        src: "/portfolio/jfmaritimos/jf-video2.png",
        href: "https://www.instagram.com/reel/DcgzXsORXBM/",
      },
      {
        type: "video-vertical",
        label: "Reel de JF Marítimos",
        src: "/portfolio/jfmaritimos/jf-video3.png",
        href: "https://www.instagram.com/reel/Dc6XDOWxsbx/",
      },
    ],
    artGallery: [
      {
        type: "image-vertical",
        label: "Arte gráfico de JF Marítimos",
        src: "/portfolio/jfmaritimos/jf-arte1.png",
      },
      {
        type: "image-vertical",
        label: "Arte gráfico de JF Marítimos",
        src: "/portfolio/jfmaritimos/jf-arte2.png",
      },
      {
        type: "image-vertical",
        label: "Arte gráfico de JF Marítimos",
        src: "/portfolio/jfmaritimos/jf-arte3.png",
      },
    ],
    seoTitle: "Gestión de redes sociales para JF Marítimos | Portafolio Adrian Caballero Studio",
    seoDescription: "Caso de estudio: manejo de redes sociales, creación de contenido y campañas en Meta Ads para JF Marítimos.",
  },
  {
    slug: "sitio-web-corporativo",
    title: "Desarrollo web — Adcopro",
    client: "Adcopro",
    industry: "Bienes raíces",
    categories: ["web"],
    services: ["desarrollo-web"],
    year: "2026",
    isPlaceholder: false,
    summary: "Diseño y desarrollo de un sitio web multipágina construido desde cero para una empresa inmobiliaria.",
    objective: "Crear una plataforma inmobiliaria moderna para promocionar propiedades y generar contactos.",
    challenge: "Organizar diferentes tipos de propiedades en una experiencia clara y fácil de usar.",
    solution: "Diseño y desarrollo de un sitio web responsive, intuitivo y enfocado en conectar propietarios con clientes..",
    processNotes: [
      "Arquitectura de información y mapa de páginas.",
      "Diseño UI a medida basado en la identidad de marca del cliente.",
      "Desarrollo con foco en SEO técnico y rendimiento.",
    ],
    results: "Sitio web inmobiliario moderno, funcional y preparado para captar clientes interesados en propiedades.",
    metrics: [
      { label: "Plataforma operativa", value: "Sitio publicado", isPlaceholder: false },
      { label: "Optimizado para móvil y escritorio", value: "100% responsive", isPlaceholder: false },
      { label: "Integración con WhatsApp", value: "Contacto directo", isPlaceholder: false },
    ],
    featuredMedia: {
      type: "image",
      label: "Vista del sitio web de Adcopro",
      src: "/portfolio/adcopro/adcopro-website.png",
    },
    gallery: [
      {
        type: "image",
        label: "Vista de homepage en escritorio",
        src: "/portfolio/adcopro/adcopro-website.png",
      },
      {
        type: "image",
        label: "Vista móvil del sitio web de Adcopro",
        src: "/portfolio/adcopro/adcopro-website-phone.png",
      },
      {
        type: "image",
        label: "Vista de página de contacto",
        src: "/portfolio/adcopro/adcopro-contacto.png",
      },
    ],
    seoTitle: "Sitio web para inmobiliaria | Portafolio Adrian Caballero Studio",
    seoDescription: "Caso de estudio: diseño y desarrollo desde cero de un sitio web multipágina para una empresa inmobiliaria.",
  },
  {
    slug: "cobertura-fotografica-feria-salud-peniel",
    title: "Cobertura Fotográfica — Compeniel",
    client: "Cooperativa Peniel",
    industry: "Servicios financieros / Cooperativa",
    categories: ["fotografia"],
    services: ["fotografia"],
    year: "2026",
    isPlaceholder: false,
    summary: "Cobertura fotográfica profesional de la Feria de Salud organizada por Cooperativa Peniel, documentando las actividades, atención médica y participación de sus afiliados.",
    objective: "Crear contenido fotográfico profesional para documentar la Feria de Salud y fortalecer la comunicación institucional de Cooperativa Peniel.",
    challenge: "Capturar las principales actividades y momentos del evento manteniendo una imagen natural, profesional y coherente con la marca.",
    solution: "Realizamos una cobertura fotográfica enfocada en documentar la atención, participación de los afiliados y momentos más importantes de la jornada.",
    processNotes: [
      "Levantamiento previo de la locación y agenda del evento.",
      "Cobertura fotográfica de las actividades y espacios de la feria.",
      "Selección y edición de las fotografías finales.",
    ],
    results: "Cobertura fotográfica profesional con imágenes editadas y listas para comunicación institucional y redes sociales.",
    metrics: [
      { label: "Fotografías entregadas y editadas", value: "90 fotos", isPlaceholder: false },
    ],
    featuredMedia: {
      type: "image",
      label: "Feria de la salud — Cooperativa Peniel",
      src: "/portfolio/compeniel/compeniel-evento.png",
    },
    gallery: [
      {
        type: "image",
        label: "Registro de la feria de la salud",
        src: "/portfolio/compeniel/registro-evento1.png",
      },
      {
        type: "image",
        label: "Registro de la feria de la salud",
        src: "/portfolio/compeniel/registro-evento2.png",
      },
      {
        type: "image",
        label: "Registro de la feria de la salud",
        src: "/portfolio/compeniel/registro-evento3.png",
      },
    ],
    seoTitle: "Cobertura fotográfica — Feria de Salud | Portafolio Adrian Caballero Studio",
    seoDescription: "Caso de estudio: cobertura fotográfica de la Feria de Salud organizada por Cooperativa Peniel.",
  },
  {
    slug: "cobertura-evento-jf-maritimos",
    title: "Cobertura de evento — Día del Pescador",
    client: "JF Marítimos",
    industry: "Náutica y marítima",
    categories: ["video", "dron"],
    services: ["produccion-audiovisual", "dron"],
    year: "2026",
    isPlaceholder: false,
    summary: "Cobertura audiovisual del Día del Pescador, una carrera de kayaks patrocinada por JF Marítimos.",
    objective: "Documentar la participación de JF Marítimos como patrocinador del Día del Pescador y su carrera de kayaks.",
    challenge: "Grabar en La Ceiba bajo sol fuerte y desde lanchas en movimiento, logrando buenas tomas de la carrera.",
    solution: "Grabación de un video resumen del evento y la carrera de kayaks, incluyendo una entrevista con el ganador.",
    processNotes: [
      "Levantamiento previo de la locación y agenda del evento.",
      "Cobertura en video del evento y la carrera de kayaks.",
      "Tomas aéreas con dron de la carrera y la locación.",
      "Entrevista al ganador de la carrera.",
      "Edición de video resumen para redes sociales.",
    ],
    results: "Video bien recibido por los pescadores y la comunidad, reflejando el apoyo de JF Marítimos al evento.",
    metrics: [],
    featuredMedia: {
      type: "image",
      label: "Cobertura del Día del Pescador",
      src: "/portfolio/jfmaritimos/dia-del-pescador/diadelpescador-portada.png",
    },
    gallery: [
      {
        type: "image",
        label: "Registro del evento",
        src: "/portfolio/jfmaritimos/dia-del-pescador/foto-2.png",
        href: "https://www.instagram.com/reel/DbwL-eTOEwX/",
      },
      {
        type: "image",
        label: "Registro del evento",
        src: "/portfolio/jfmaritimos/dia-del-pescador/foto-3.png",
        href: "https://www.instagram.com/reel/DbwL-eTOEwX/",
      },
      {
        type: "video-horizontal",
        label: "Entrevista al ganador",
        src: "/portfolio/jfmaritimos/dia-del-pescador/foto-video.png",
        href: "https://www.instagram.com/reel/DbwL-eTOEwX/",
      },
    ],
    seoTitle: "Cobertura del Día del Pescador para JF Marítimos | Portafolio Adrian Caballero Studio",
    seoDescription: "Caso de estudio: cobertura audiovisual del Día del Pescador, carrera de kayaks patrocinada por JF Marítimos.",
  },
  {
    slug: "sitio-web-ciudad-pinares",
    title: "Desarrollo web — Ciudad Pinares",
    client: "Ciudad Pinares",
    industry: "Proyecto residencial",
    categories: ["web"],
    services: ["desarrollo-web"],
    year: "2025",
    isPlaceholder: false,
    summary: "Diseño y desarrollo de un sitio web para Ciudad Pinares, un proyecto residencial en Choloma.",
    objective: "Crear una plataforma para promocionar el proyecto residencial de Choloma y generar contactos.",
    challenge: "Organizar la información del proyecto residencial en una experiencia clara y fácil de usar.",
    solution: "Diseño y desarrollo de un sitio web responsive, intuitivo y enfocado en conectar el proyecto residencial con interesados.",
    processNotes: [
      "Arquitectura de información y mapa de páginas.",
      "Diseño UI a medida basado en la identidad de marca del cliente.",
      "Desarrollo con foco en SEO técnico y rendimiento.",
    ],
    results: "Sitio web moderno, funcional y preparado para captar interesados en el proyecto residencial.",
    metrics: [
      { label: "Plataforma operativa", value: "Sitio publicado", isPlaceholder: false },
      { label: "Optimizado para móvil y escritorio", value: "100% responsive", isPlaceholder: false },
      { label: "Integración con WhatsApp", value: "Contacto directo", isPlaceholder: false },
    ],
    featuredMedia: {
      type: "image",
      label: "Vista del sitio web de Ciudad Pinares",
      src: "/portfolio/ciudad-pinares/ciudadpinares-website.png",
    },
    gallery: [
      {
        type: "image",
        label: "Vista de homepage en escritorio",
        src: "/portfolio/ciudad-pinares/ciudadpinares-website.png",
      },
      {
        type: "image",
        label: "Vista móvil del sitio web",
        src: "/portfolio/ciudad-pinares/ciudadpinares-website-phone.png",
      },
      {
        type: "image",
        label: "Vista de página interna",
        src: "/portfolio/ciudad-pinares/ciudadpinares-preview.png",
      },
    ],
    seoTitle: "Sitio web para Ciudad Pinares | Portafolio Adrian Caballero Studio",
    seoDescription: "Caso de estudio: diseño y desarrollo de un sitio web para el proyecto residencial Ciudad Pinares.",
  },
  {
    slug: "redes-sociales-bodega-marisol",
    title: "Gestión de redes sociales — Bodega Marisol",
    client: "Bodega Marisol",
    industry: "Abarrotes y productos para el hogar",
    categories: ["social"],
    services: ["redes-sociales", "videos-redes-sociales"],
    year: "2026",
    isPlaceholder: false,
    summary: "Manejo de redes sociales y creación de contenido (video y diseño gráfico) para Bodega Marisol.",
    objective: "Fortalecer la presencia digital de la marca con contenido constante y alineado a su identidad.",
    challenge: "Mantener una comunicación activa, profesional y atractiva en redes sociales.",
    solution: "Producción y gestión de contenido para redes sociales mediante fotografía, video y piezas gráficas.",
    processNotes: [
      "Gestión mensual de contenido para redes sociales.",
      "Producción de piezas gráficas y video para publicaciones.",
    ],
    results: "En el primer mes se lograron más de 500,000 visualizaciones orgánicas, +700 seguidores orgánicos entre las tres redes sociales y un incremento en ventas.",
    metrics: [
      { label: "Crecimiento de comunidad", value: "+700 seguidores", isPlaceholder: false },
      { label: "Visualizaciones orgánicas", value: "+500,000", isPlaceholder: false },
    ],
    featuredMedia: {
      type: "image",
      label: "Gestión de redes sociales de Bodega Marisol",
      src: "/portfolio/bodega-marisol/bodegamarisol-showcase.png",
    },
    gallery: [
      {
        type: "video-vertical",
        label: "Reel de Bodega Marisol",
        src: "/portfolio/bodega-marisol/bm-video1.png",
        href: "https://www.instagram.com/reel/DdR3EAZvJga/",
      },
      {
        type: "video-vertical",
        label: "Reel de Bodega Marisol",
        src: "/portfolio/bodega-marisol/bm-video2.png",
        href: "https://www.instagram.com/reel/DdHU7D5KJuQ/",
      },
      {
        type: "video-vertical",
        label: "Video de Bodega Marisol en TikTok",
        src: "/portfolio/bodega-marisol/bm-video3.png",
        href: "https://www.tiktok.com/@bodega.marisol/video/7678378995322260754",
      },
    ],
    artGallery: [
      {
        type: "image-vertical",
        label: "Arte gráfico de Bodega Marisol",
        src: "/portfolio/bodega-marisol/bm-arte1.png",
      },
      {
        type: "image-vertical",
        label: "Arte gráfico de Bodega Marisol",
        src: "/portfolio/bodega-marisol/bm-arte2.png",
      },
      {
        type: "image-vertical",
        label: "Arte gráfico de Bodega Marisol",
        src: "/portfolio/bodega-marisol/bm-arte3.png",
      },
    ],
    seoTitle: "Gestión de redes sociales para Bodega Marisol | Portafolio Adrian Caballero Studio",
    seoDescription: "Caso de estudio: manejo de redes sociales, creación de contenido y campañas en Meta Ads para Bodega Marisol.",
  },
];

export const projectsEn: Project[] = [
  {
    slug: "redes-sociales-jf-maritimos",
    title: "Social media management — JF Marítimos",
    client: "JF Marítimos",
    industry: "Marine and boating",
    categories: ["social"],
    services: ["redes-sociales", "videos-redes-sociales", "meta-ads"],
    year: "2025",
    isPlaceholder: false,
    summary:
      "Strategic social media management, content creation and Meta Ads campaigns to strengthen JF Marítimos' digital presence and generate new business opportunities.",
    objective: "Strengthen the digital presence and generate more sales.",
    challenge: "Communicate a wide range of marine products and services.",
    solution: "Social media content and Meta Ads campaigns focused on reach and sales.",
    processNotes: [
      "Monthly social media content management.",
      "Production of graphic and video pieces for posts.",
      "Setup, optimization and reporting of Meta Ads campaigns.",
    ],
    results:
      "Sustained growth in community and reach on Facebook, Instagram and TikTok, with a strong increase in engagement with published content.",
    metrics: [
      { label: "Community growth", value: "+87.2%", isPlaceholder: false },
      { label: "Interactions", value: "16.4K", isPlaceholder: false },
      { label: "TikTok reach", value: "815.2K views", isPlaceholder: false },
    ],
    featuredMedia: {
      type: "image",
      label: "JF Marítimos social media management",
      src: "/portfolio/jfmaritimos/jfmaritimos-manejoderedes.png",
    },
    gallery: [
      {
        type: "video-vertical",
        label: "JF Marítimos reel",
        src: "/portfolio/jfmaritimos/jf-video1.png",
        href: "https://www.instagram.com/reel/DcymlwJRKDt/",
      },
      {
        type: "video-vertical",
        label: "JF Marítimos reel",
        src: "/portfolio/jfmaritimos/jf-video2.png",
        href: "https://www.instagram.com/reel/DcgzXsORXBM/",
      },
      {
        type: "video-vertical",
        label: "JF Marítimos reel",
        src: "/portfolio/jfmaritimos/jf-video3.png",
        href: "https://www.instagram.com/reel/Dc6XDOWxsbx/",
      },
    ],
    artGallery: [
      {
        type: "image-vertical",
        label: "JF Marítimos graphic artwork",
        src: "/portfolio/jfmaritimos/jf-arte1.png",
      },
      {
        type: "image-vertical",
        label: "JF Marítimos graphic artwork",
        src: "/portfolio/jfmaritimos/jf-arte2.png",
      },
      {
        type: "image-vertical",
        label: "JF Marítimos graphic artwork",
        src: "/portfolio/jfmaritimos/jf-arte3.png",
      },
    ],
    seoTitle: "Social media management for JF Marítimos | Adrian Caballero Studio Portfolio",
    seoDescription: "Case study: social media management, content creation and Meta Ads campaigns for JF Marítimos.",
  },
  {
    slug: "sitio-web-corporativo",
    title: "Web development — Adcopro",
    client: "Adcopro",
    industry: "Real estate",
    categories: ["web"],
    services: ["desarrollo-web"],
    year: "2026",
    isPlaceholder: false,
    summary: "Design and development of a multi-page website built from scratch for a real estate company.",
    objective: "Create a modern real estate platform to promote properties and generate leads.",
    challenge: "Organize different property types into a clear, easy-to-use experience.",
    solution: "Design and development of a responsive, intuitive website focused on connecting property owners with clients.",
    processNotes: [
      "Information architecture and page map.",
      "Custom UI design based on the client's brand identity.",
      "Development with a focus on technical SEO and performance.",
    ],
    results: "A modern, functional real estate website ready to capture leads interested in properties.",
    metrics: [
      { label: "Live platform", value: "Site published", isPlaceholder: false },
      { label: "Optimized for mobile and desktop", value: "100% responsive", isPlaceholder: false },
      { label: "WhatsApp integration", value: "Direct contact", isPlaceholder: false },
    ],
    featuredMedia: {
      type: "image",
      label: "Adcopro website view",
      src: "/portfolio/adcopro/adcopro-website.png",
    },
    gallery: [
      {
        type: "image",
        label: "Desktop homepage view",
        src: "/portfolio/adcopro/adcopro-website.png",
      },
      {
        type: "image",
        label: "Adcopro website mobile view",
        src: "/portfolio/adcopro/adcopro-website-phone.png",
      },
      {
        type: "image",
        label: "Contact page view",
        src: "/portfolio/adcopro/adcopro-contacto.png",
      },
    ],
    seoTitle: "Website for real estate company | Adrian Caballero Studio Portfolio",
    seoDescription: "Case study: design and development from scratch of a multi-page website for a real estate company.",
  },
  {
    slug: "cobertura-fotografica-feria-salud-peniel",
    title: "Photo coverage — Compeniel",
    client: "Cooperativa Peniel",
    industry: "Financial services / Cooperative",
    categories: ["fotografia"],
    services: ["fotografia"],
    year: "2026",
    isPlaceholder: false,
    summary:
      "Professional photo coverage of the Health Fair organized by Cooperativa Peniel, documenting activities, medical care and member participation.",
    objective: "Create professional photo content to document the Health Fair and strengthen Cooperativa Peniel's institutional communication.",
    challenge: "Capture the event's main activities and moments while keeping the imagery natural, professional and consistent with the brand.",
    solution: "We carried out photo coverage focused on documenting the care provided, member participation and the day's key moments.",
    processNotes: [
      "Advance survey of the venue and event schedule.",
      "Photo coverage of the fair's activities and spaces.",
      "Selection and editing of the final photographs.",
    ],
    results: "Professional photo coverage with edited images ready for institutional communication and social media.",
    metrics: [{ label: "Photos delivered and edited", value: "90 photos", isPlaceholder: false }],
    featuredMedia: {
      type: "image",
      label: "Health Fair — Cooperativa Peniel",
      src: "/portfolio/compeniel/compeniel-evento.png",
    },
    gallery: [
      {
        type: "image",
        label: "Health fair coverage",
        src: "/portfolio/compeniel/registro-evento1.png",
      },
      {
        type: "image",
        label: "Health fair coverage",
        src: "/portfolio/compeniel/registro-evento2.png",
      },
      {
        type: "image",
        label: "Health fair coverage",
        src: "/portfolio/compeniel/registro-evento3.png",
      },
    ],
    seoTitle: "Photo coverage — Health Fair | Adrian Caballero Studio Portfolio",
    seoDescription: "Case study: photo coverage of the Health Fair organized by Cooperativa Peniel.",
  },
  {
    slug: "cobertura-evento-jf-maritimos",
    title: "Event coverage — Fisherman's Day",
    client: "JF Marítimos",
    industry: "Marine and boating",
    categories: ["video", "dron"],
    services: ["produccion-audiovisual", "dron"],
    year: "2026",
    isPlaceholder: false,
    summary: "Audiovisual coverage of Fisherman's Day, a kayak race sponsored by JF Marítimos.",
    objective: "Document JF Marítimos' participation as a sponsor of Fisherman's Day and its kayak race.",
    challenge: "Film in La Ceiba under strong sun and from moving boats, capturing good shots of the race.",
    solution: "Filmed a recap video of the event and the kayak race, including an interview with the winner.",
    processNotes: [
      "Advance survey of the venue and event schedule.",
      "Video coverage of the event and the kayak race.",
      "Aerial drone shots of the race and the venue.",
      "Interview with the race winner.",
      "Editing of the recap video for social media.",
    ],
    results: "The video was well received by the fishermen and the community, reflecting JF Marítimos' support for the event.",
    metrics: [],
    featuredMedia: {
      type: "image",
      label: "Fisherman's Day coverage",
      src: "/portfolio/jfmaritimos/dia-del-pescador/diadelpescador-portada.png",
    },
    gallery: [
      {
        type: "image",
        label: "Event coverage",
        src: "/portfolio/jfmaritimos/dia-del-pescador/foto-2.png",
        href: "https://www.instagram.com/reel/DbwL-eTOEwX/",
      },
      {
        type: "image",
        label: "Event coverage",
        src: "/portfolio/jfmaritimos/dia-del-pescador/foto-3.png",
        href: "https://www.instagram.com/reel/DbwL-eTOEwX/",
      },
      {
        type: "video-horizontal",
        label: "Winner interview",
        src: "/portfolio/jfmaritimos/dia-del-pescador/foto-video.png",
        href: "https://www.instagram.com/reel/DbwL-eTOEwX/",
      },
    ],
    seoTitle: "Fisherman's Day coverage for JF Marítimos | Adrian Caballero Studio Portfolio",
    seoDescription: "Case study: audiovisual coverage of Fisherman's Day, a kayak race sponsored by JF Marítimos.",
  },
  {
    slug: "sitio-web-ciudad-pinares",
    title: "Web development — Ciudad Pinares",
    client: "Ciudad Pinares",
    industry: "Residential development",
    categories: ["web"],
    services: ["desarrollo-web"],
    year: "2025",
    isPlaceholder: false,
    summary: "Design and development of a website for Ciudad Pinares, a residential project in Choloma.",
    objective: "Create a platform to promote the Choloma residential project and generate leads.",
    challenge: "Organize the residential project's information into a clear, easy-to-use experience.",
    solution: "Design and development of a responsive, intuitive website focused on connecting the residential project with interested buyers.",
    processNotes: [
      "Information architecture and page map.",
      "Custom UI design based on the client's brand identity.",
      "Development with a focus on technical SEO and performance.",
    ],
    results: "A modern, functional website ready to capture people interested in the residential project.",
    metrics: [
      { label: "Live platform", value: "Site published", isPlaceholder: false },
      { label: "Optimized for mobile and desktop", value: "100% responsive", isPlaceholder: false },
      { label: "WhatsApp integration", value: "Direct contact", isPlaceholder: false },
    ],
    featuredMedia: {
      type: "image",
      label: "Ciudad Pinares website view",
      src: "/portfolio/ciudad-pinares/ciudadpinares-website.png",
    },
    gallery: [
      {
        type: "image",
        label: "Desktop homepage view",
        src: "/portfolio/ciudad-pinares/ciudadpinares-website.png",
      },
      {
        type: "image",
        label: "Website mobile view",
        src: "/portfolio/ciudad-pinares/ciudadpinares-website-phone.png",
      },
      {
        type: "image",
        label: "Internal page view",
        src: "/portfolio/ciudad-pinares/ciudadpinares-preview.png",
      },
    ],
    seoTitle: "Website for Ciudad Pinares | Adrian Caballero Studio Portfolio",
    seoDescription: "Case study: design and development of a website for the Ciudad Pinares residential project.",
  },
  {
    slug: "redes-sociales-bodega-marisol",
    title: "Social media management — Bodega Marisol",
    client: "Bodega Marisol",
    industry: "Groceries and household goods",
    categories: ["social"],
    services: ["redes-sociales", "videos-redes-sociales"],
    year: "2026",
    isPlaceholder: false,
    summary: "Social media management and content creation (video and graphic design) for Bodega Marisol.",
    objective: "Strengthen the brand's digital presence with consistent content aligned with its identity.",
    challenge: "Maintain active, professional and engaging communication on social media.",
    solution: "Content production and management for social media through photography, video and graphic pieces.",
    processNotes: [
      "Monthly social media content management.",
      "Production of graphic and video pieces for posts.",
    ],
    results: "In the first month, over 500,000 organic views, +700 organic followers across the three social networks, and an increase in sales.",
    metrics: [
      { label: "Community growth", value: "+700 followers", isPlaceholder: false },
      { label: "Organic views", value: "+500,000", isPlaceholder: false },
    ],
    featuredMedia: {
      type: "image",
      label: "Bodega Marisol social media management",
      src: "/portfolio/bodega-marisol/bodegamarisol-showcase.png",
    },
    gallery: [
      {
        type: "video-vertical",
        label: "Bodega Marisol reel",
        src: "/portfolio/bodega-marisol/bm-video1.png",
        href: "https://www.instagram.com/reel/DdR3EAZvJga/",
      },
      {
        type: "video-vertical",
        label: "Bodega Marisol reel",
        src: "/portfolio/bodega-marisol/bm-video2.png",
        href: "https://www.instagram.com/reel/DdHU7D5KJuQ/",
      },
      {
        type: "video-vertical",
        label: "Bodega Marisol video on TikTok",
        src: "/portfolio/bodega-marisol/bm-video3.png",
        href: "https://www.tiktok.com/@bodega.marisol/video/7678378995322260754",
      },
    ],
    artGallery: [
      {
        type: "image-vertical",
        label: "Bodega Marisol graphic artwork",
        src: "/portfolio/bodega-marisol/bm-arte1.png",
      },
      {
        type: "image-vertical",
        label: "Bodega Marisol graphic artwork",
        src: "/portfolio/bodega-marisol/bm-arte2.png",
      },
      {
        type: "image-vertical",
        label: "Bodega Marisol graphic artwork",
        src: "/portfolio/bodega-marisol/bm-arte3.png",
      },
    ],
    seoTitle: "Social media management for Bodega Marisol | Adrian Caballero Studio Portfolio",
    seoDescription: "Case study: social media management and content creation for Bodega Marisol.",
  },
];

const projectsByLocale: Record<Locale, Project[]> = { es: projects, en: projectsEn };

export function getProjects(locale: Locale = defaultLocale) {
  return projectsByLocale[locale];
}

export function getProjectBySlug(slug: string, locale: Locale = defaultLocale) {
  return projectsByLocale[locale].find((project) => project.slug === slug);
}

export function getProjectsByCategory(category: ProjectCategory, locale: Locale = defaultLocale) {
  return projectsByLocale[locale].filter((project) => project.categories.includes(category));
}

export function getRelatedProjects(project: Project, limit = 3, locale: Locale = defaultLocale) {
  return projectsByLocale[locale]
    .filter(
      (p) =>
        p.slug !== project.slug &&
        p.categories.some((c) => project.categories.includes(c))
    )
    .slice(0, limit);
}
