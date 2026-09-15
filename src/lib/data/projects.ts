/**
 * Proyectos de portafolio. Estos son registros DE EJEMPLO para dejar la
 * arquitectura lista: clientes, resultados y métricas están marcados
 * explícitamente como placeholder y deben sustituirse por casos reales.
 * No se inventan clientes, logos, testimonios ni cifras.
 */

export type ProjectCategory =
  | "video"
  | "fotografia"
  | "dron"
  | "web"
  | "apps"
  | "sistemas"
  | "social";

export const PROJECT_CATEGORY_LABELS: Record<ProjectCategory, string> = {
  video: "Video",
  fotografia: "Fotografía",
  dron: "Dron",
  web: "Web",
  apps: "Apps",
  sistemas: "Sistemas",
  social: "Social Media",
};

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

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsByCategory(category: ProjectCategory) {
  return projects.filter((project) => project.categories.includes(category));
}

export function getRelatedProjects(project: Project, limit = 3) {
  return projects
    .filter(
      (p) =>
        p.slug !== project.slug &&
        p.categories.some((c) => project.categories.includes(c))
    )
    .slice(0, limit);
}
