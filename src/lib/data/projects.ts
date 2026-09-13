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
  | "social"
  | "publicidad";

export const PROJECT_CATEGORY_LABELS: Record<ProjectCategory, string> = {
  video: "Video",
  fotografia: "Fotografía",
  dron: "Dron",
  web: "Web",
  apps: "Apps",
  sistemas: "Sistemas",
  social: "Social Media",
  publicidad: "Publicidad",
};

export interface ProjectMedia {
  type: "image" | "video-vertical" | "video-horizontal";
  label: string;
  /** Ruta del archivo en /public, ej. "/portfolio/mi-proyecto/portada.jpg". */
  src?: string;
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
  seoTitle: string;
  seoDescription: string;
}

export const projects: Project[] = [
  {
    slug: "lanzamiento-linea-producto",
    title: "Campaña de lanzamiento para línea de producto",
    client: "[EDITAR: Nombre del cliente]",
    industry: "[EDITAR: Industria — ej. Retail]",
    categories: ["video", "social", "publicidad"],
    services: ["videos-redes-sociales", "redes-sociales", "meta-ads"],
    year: "2025",
    isPlaceholder: true,
    summary: "Batería de contenido y campaña de pauta para el lanzamiento de una nueva línea de producto.",
    objective: "[EDITAR: objetivo específico acordado con el cliente para este lanzamiento].",
    challenge: "[EDITAR: descripción del reto — ej. poco reconocimiento de marca antes del lanzamiento, plazo ajustado, etc.].",
    solution: "[EDITAR: cómo se resolvió — línea creativa, formatos producidos, estrategia de pauta aplicada].",
    processNotes: [
      "Definición de línea creativa y guion para la batería de contenido.",
      "Producción de video vertical y horizontal en una jornada de grabación.",
      "Configuración y lanzamiento de campaña en Meta Ads con las piezas producidas.",
    ],
    results: "[EDITAR: resultados reales una vez finalizada la campaña].",
    metrics: [
      { label: "Alcance", value: "Pendiente por definir", isPlaceholder: true },
      { label: "Engagement", value: "Pendiente por definir", isPlaceholder: true },
      { label: "Costo por resultado", value: "Pendiente por definir", isPlaceholder: true },
    ],
    featuredMedia: { type: "video-horizontal", label: "Video principal de campaña — [EDITAR]" },
    gallery: [
      { type: "video-vertical", label: "Recorte vertical para Reels/TikTok" },
      { type: "image", label: "Fotograma de producción" },
      { type: "image", label: "Still de producto" },
    ],
    seoTitle: "Campaña de lanzamiento de producto | Portafolio Adrian Caballero Studio",
    seoDescription: "Caso de estudio: producción de video y campaña de pauta para el lanzamiento de una línea de producto.",
  },
  {
    slug: "sitio-web-corporativo",
    title: "Sitio web para empresa inmobiliaria",
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
    title: "Cobertura fotográfica — Feria de Salud",
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
    slug: "app-gestion-interna",
    title: "Aplicación de gestión interna",
    client: "[EDITAR: Nombre del cliente]",
    industry: "[EDITAR: Industria]",
    categories: ["apps", "sistemas"],
    services: ["desarrollo-apps", "sistemas-empresariales"],
    year: "2025",
    isPlaceholder: true,
    summary: "Aplicación para digitalizar un proceso interno que antes se gestionaba en hojas de cálculo.",
    objective: "[EDITAR: objetivo — ej. eliminar procesos manuales de seguimiento de pedidos].",
    challenge: "[EDITAR: reto del proceso manual anterior].",
    solution: "[EDITAR: cómo se diseñó la aplicación para resolverlo].",
    processNotes: [
      "Diagnóstico del proceso manual y definición de alcance del MVP.",
      "Diseño de flujos de usuario y panel administrativo.",
      "Desarrollo, pruebas con el equipo interno y puesta en marcha.",
    ],
    results: "[EDITAR: resultados reales tras la implementación].",
    metrics: [
      { label: "Tiempo de proceso", value: "Pendiente por definir", isPlaceholder: true },
      { label: "Adopción del equipo", value: "Pendiente por definir", isPlaceholder: true },
    ],
    featuredMedia: { type: "image", label: "Interfaz de la aplicación — [EDITAR]" },
    gallery: [
      { type: "image", label: "Panel administrativo" },
      { type: "image", label: "Vista móvil de la aplicación" },
    ],
    seoTitle: "Aplicación de gestión interna a medida | Portafolio Adrian Caballero Studio",
    seoDescription: "Caso de estudio: desarrollo de una aplicación a medida para digitalizar un proceso interno.",
  },
  {
    slug: "sesion-fotografia-producto",
    title: "Sesión de fotografía de producto para e-commerce",
    client: "[EDITAR: Nombre del cliente]",
    industry: "[EDITAR: Industria — ej. Moda]",
    categories: ["fotografia"],
    services: ["fotografia"],
    year: "2024",
    isPlaceholder: true,
    summary: "Producción fotográfica en estudio para renovar el catálogo de producto de una tienda en línea.",
    objective: "[EDITAR: objetivo — ej. estandarizar la fotografía del catálogo].",
    challenge: "[EDITAR: reto — ej. fotografías inconsistentes entre productos].",
    solution: "[EDITAR: enfoque de dirección de arte aplicado].",
    processNotes: [
      "Definición de estilo visual y referencias con el cliente.",
      "Producción en estudio con iluminación controlada.",
      "Retoque y entrega en los formatos requeridos por la tienda en línea.",
    ],
    results: "[EDITAR: resultados reales tras el uso de las nuevas fotografías].",
    metrics: [
      { label: "Productos fotografiados", value: "Pendiente por definir", isPlaceholder: true },
    ],
    featuredMedia: { type: "image", label: "Fotografía de producto — [EDITAR]" },
    gallery: [
      { type: "image", label: "Detalle de producto" },
      { type: "image", label: "Composición de catálogo" },
    ],
    seoTitle: "Fotografía de producto para e-commerce | Portafolio Adrian Caballero Studio",
    seoDescription: "Caso de estudio: producción fotográfica de producto para renovar un catálogo de e-commerce.",
  },
  {
    slug: "redes-sociales-jf-maritimos",
    title: "Gestión de redes sociales — JF Marítimos",
    client: "JF Marítimos",
    industry: "Náutica y marítima",
    categories: ["social"],
    services: ["redes-sociales", "videos-redes-sociales", "meta-ads"],
    year: "2025",
    isPlaceholder: true,
    summary: "Manejo de redes sociales y creación de contenido (video y diseño gráfico) para JF Marítimos, además de la gestión de sus campañas publicitarias en Meta.",
    objective: "[EDITAR: objetivo acordado con el cliente para la gestión de redes y campañas].",
    challenge: "[EDITAR: reto particular del cliente antes de este servicio].",
    solution: "Producción constante de contenido para redes sociales (fotografía, video y piezas gráficas) junto con la configuración y optimización de campañas publicitarias en Meta Ads.",
    processNotes: [
      "Gestión mensual de contenido para redes sociales.",
      "Producción de piezas gráficas y video para publicaciones.",
      "Configuración, optimización y reporte de campañas en Meta Ads.",
    ],
    results: "[EDITAR: resultados reales de la gestión de redes y campañas].",
    metrics: [
      { label: "Crecimiento de comunidad", value: "Pendiente por definir", isPlaceholder: true },
      { label: "Interacciones", value: "Pendiente por definir", isPlaceholder: true },
    ],
    featuredMedia: { type: "image", label: "Contenido de JF Marítimos — [EDITAR]" },
    gallery: [
      { type: "image", label: "Pieza gráfica de campaña" },
      { type: "video-vertical", label: "Contenido de video destacado" },
    ],
    seoTitle: "Gestión de redes sociales para JF Marítimos | Portafolio Adrian Caballero Studio",
    seoDescription: "Caso de estudio: manejo de redes sociales, creación de contenido y campañas en Meta Ads para JF Marítimos.",
  },
  {
    slug: "redes-sociales-truly-nolen",
    title: "Gestión de redes sociales — Truly Nolen",
    client: "Truly Nolen",
    industry: "Control de plagas",
    categories: ["social"],
    services: ["redes-sociales", "videos-redes-sociales", "meta-ads"],
    year: "2025",
    isPlaceholder: true,
    summary: "Manejo de redes sociales y creación de contenido (video y diseño gráfico) para Truly Nolen, además de la gestión de sus campañas publicitarias en Meta.",
    objective: "[EDITAR: objetivo acordado con el cliente para la gestión de redes y campañas].",
    challenge: "[EDITAR: reto particular del cliente antes de este servicio].",
    solution: "Producción constante de contenido para redes sociales (fotografía, video y piezas gráficas) junto con la configuración y optimización de campañas publicitarias en Meta Ads.",
    processNotes: [
      "Gestión mensual de contenido para redes sociales.",
      "Producción de piezas gráficas y video para publicaciones.",
      "Configuración, optimización y reporte de campañas en Meta Ads.",
    ],
    results: "[EDITAR: resultados reales de la gestión de redes y campañas].",
    metrics: [
      { label: "Crecimiento de comunidad", value: "Pendiente por definir", isPlaceholder: true },
      { label: "Interacciones", value: "Pendiente por definir", isPlaceholder: true },
    ],
    featuredMedia: { type: "image", label: "Contenido de Truly Nolen — [EDITAR]" },
    gallery: [
      { type: "image", label: "Pieza gráfica de campaña" },
      { type: "video-vertical", label: "Contenido de video destacado" },
    ],
    seoTitle: "Gestión de redes sociales para Truly Nolen | Portafolio Adrian Caballero Studio",
    seoDescription: "Caso de estudio: manejo de redes sociales, creación de contenido y campañas en Meta Ads para Truly Nolen.",
  },
  {
    slug: "redes-sociales-ciudad-pinares",
    title: "Gestión de redes sociales — Ciudad Pinares",
    client: "Ciudad Pinares",
    industry: "Proyecto residencial",
    categories: ["social"],
    services: ["redes-sociales", "videos-redes-sociales", "meta-ads"],
    year: "2025",
    isPlaceholder: true,
    summary: "Manejo de redes sociales y creación de contenido (video y diseño gráfico) para Ciudad Pinares, además de la gestión de sus campañas publicitarias en Meta.",
    objective: "[EDITAR: objetivo acordado con el cliente para la gestión de redes y campañas].",
    challenge: "[EDITAR: reto particular del cliente antes de este servicio].",
    solution: "Producción constante de contenido para redes sociales (fotografía, video y piezas gráficas) junto con la configuración y optimización de campañas publicitarias en Meta Ads.",
    processNotes: [
      "Gestión mensual de contenido para redes sociales.",
      "Producción de piezas gráficas y video para publicaciones.",
      "Configuración, optimización y reporte de campañas en Meta Ads.",
    ],
    results: "[EDITAR: resultados reales de la gestión de redes y campañas].",
    metrics: [
      { label: "Crecimiento de comunidad", value: "Pendiente por definir", isPlaceholder: true },
      { label: "Interacciones", value: "Pendiente por definir", isPlaceholder: true },
    ],
    featuredMedia: { type: "image", label: "Contenido de Ciudad Pinares — [EDITAR]" },
    gallery: [
      { type: "image", label: "Pieza gráfica de campaña" },
      { type: "video-vertical", label: "Contenido de video destacado" },
    ],
    seoTitle: "Gestión de redes sociales para Ciudad Pinares | Portafolio Adrian Caballero Studio",
    seoDescription: "Caso de estudio: manejo de redes sociales, creación de contenido y campañas en Meta Ads para Ciudad Pinares.",
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
