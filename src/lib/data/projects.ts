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
    year: "2025",
    isPlaceholder: true,
    summary: "Diseño y desarrollo de un sitio web multipágina construido desde cero para una empresa inmobiliaria.",
    objective: "[EDITAR: objetivo — ej. generar más contactos de clientes interesados en propiedades].",
    challenge: "[EDITAR: descripción del reto — ej. la empresa no contaba con presencia web previa].",
    solution: "[EDITAR: arquitectura y decisiones técnicas tomadas para resolver el reto].",
    processNotes: [
      "Arquitectura de información y mapa de páginas.",
      "Diseño UI a medida basado en la identidad de marca del cliente.",
      "Desarrollo con foco en SEO técnico y rendimiento.",
    ],
    results: "[EDITAR: resultados reales tras el lanzamiento del sitio].",
    metrics: [
      { label: "Velocidad (Lighthouse)", value: "Pendiente por definir", isPlaceholder: true },
      { label: "Tráfico orgánico", value: "Pendiente por definir", isPlaceholder: true },
      { label: "Leads generados", value: "Pendiente por definir", isPlaceholder: true },
    ],
    featuredMedia: {
      type: "image",
      label: "Vista del sitio web de Adcopro",
      src: "/portfolio/adcopro/adcopro-website.png",
    },
    gallery: [
      { type: "image", label: "Vista de homepage en escritorio" },
      { type: "image", label: "Vista de página de servicios en móvil" },
      { type: "image", label: "Vista de página de contacto" },
    ],
    seoTitle: "Sitio web para inmobiliaria | Portafolio Adrian Caballero Studio",
    seoDescription: "Caso de estudio: diseño y desarrollo desde cero de un sitio web multipágina para una empresa inmobiliaria.",
  },
  {
    slug: "cobertura-evento-corporativo",
    title: "Cobertura audiovisual de evento corporativo",
    client: "[EDITAR: Nombre del cliente]",
    industry: "[EDITAR: Industria]",
    categories: ["video", "dron"],
    services: ["produccion-audiovisual", "dron"],
    year: "2024",
    isPlaceholder: true,
    summary: "Registro multicámara y tomas aéreas de un evento corporativo de un día completo.",
    objective: "[EDITAR: objetivo del cliente para la cobertura del evento].",
    challenge: "[EDITAR: reto particular — ej. múltiples actividades simultáneas, locación grande].",
    solution: "[EDITAR: cómo se organizó la cobertura para resolverlo].",
    processNotes: [
      "Levantamiento previo de la locación y agenda del evento.",
      "Cobertura multicámara en tierra y tomas aéreas con dron.",
      "Edición de video resumen y recortes para redes sociales.",
    ],
    results: "[EDITAR: resultados reales de la cobertura].",
    metrics: [
      { label: "Piezas entregadas", value: "Pendiente por definir", isPlaceholder: true },
      { label: "Reproducciones", value: "Pendiente por definir", isPlaceholder: true },
    ],
    featuredMedia: { type: "video-horizontal", label: "Resumen del evento — [EDITAR]" },
    gallery: [
      { type: "image", label: "Toma aérea de la locación" },
      { type: "image", label: "Registro de conferencia" },
      { type: "video-vertical", label: "Recorte para Instagram" },
    ],
    seoTitle: "Cobertura de evento corporativo | Portafolio Adrian Caballero Studio",
    seoDescription: "Caso de estudio: producción audiovisual y tomas aéreas para la cobertura de un evento corporativo.",
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
    slug: "estrategia-redes-sociales",
    title: "Estrategia y gestión de redes sociales",
    client: "[EDITAR: Nombre del cliente]",
    industry: "[EDITAR: Industria]",
    categories: ["social"],
    services: ["redes-sociales", "videos-redes-sociales"],
    year: "2025",
    isPlaceholder: true,
    summary: "Reestructuración de la estrategia de contenido y calendario editorial de una marca con presencia activa pero sin resultados claros.",
    objective: "[EDITAR: objetivo — ej. aumentar comunidad calificada, no solo seguidores].",
    challenge: "[EDITAR: reto — ej. publicaciones sin línea editorial, resultados estancados].",
    solution: "[EDITAR: pilares de contenido y estrategia aplicada].",
    processNotes: [
      "Auditoría de redes existentes y definición de pilares de contenido.",
      "Calendario editorial mensual y coordinación de producción.",
      "Gestión, publicación y reporte mensual de resultados.",
    ],
    results: "[EDITAR: resultados reales tras los primeros meses de gestión].",
    metrics: [
      { label: "Crecimiento de comunidad", value: "Pendiente por definir", isPlaceholder: true },
      { label: "Interacciones", value: "Pendiente por definir", isPlaceholder: true },
    ],
    featuredMedia: { type: "image", label: "Grid de contenido — [EDITAR]" },
    gallery: [
      { type: "image", label: "Calendario editorial" },
      { type: "video-vertical", label: "Pieza de contenido destacada" },
    ],
    seoTitle: "Estrategia de redes sociales | Portafolio Adrian Caballero Studio",
    seoDescription: "Caso de estudio: estrategia de contenido y gestión profesional de redes sociales.",
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
