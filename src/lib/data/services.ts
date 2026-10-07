import { defaultLocale, type Locale } from "@/lib/i18n/config";

export type ServiceCategory = "contenido" | "marketing" | "tecnologia";

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceProcessStep {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  category: ServiceCategory;
  navTitle: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  summary: string;
  intro: string[];
  whatWeDo: { title: string; description: string }[];
  forWho: string[];
  includes: string[];
  process: ServiceProcessStep[];
  faqs: ServiceFaq[];
  portfolioFilter: string;
  relatedSlugs: string[];
  ctaHeading: string;
  ctaText: string;
  /** ID del producto en el catálogo de Meta, si este servicio está publicado ahí. */
  metaCatalogId?: string;
}

const CATEGORY_LABELS_ES: Record<ServiceCategory, { label: string; description: string }> = {
  contenido: {
    label: "Contenido",
    description: "Video, fotografía y producción audiovisual con criterio de dirección de arte.",
  },
  marketing: {
    label: "Marketing",
    description: "Estrategia, pauta y gestión de redes para que el contenido trabaje para el negocio.",
  },
  tecnologia: {
    label: "Tecnología",
    description: "Sitios, aplicaciones y sistemas construidos para operar, no solo para existir.",
  },
};

const CATEGORY_LABELS_EN: Record<ServiceCategory, { label: string; description: string }> = {
  contenido: {
    label: "Content",
    description: "Video, photography and audiovisual production with real art direction.",
  },
  marketing: {
    label: "Marketing",
    description: "Strategy, ad spend and social management so content works for the business.",
  },
  tecnologia: {
    label: "Technology",
    description: "Sites, apps and systems built to operate, not just to exist.",
  },
};

export function getCategoryLabels(locale: Locale = defaultLocale) {
  return locale === "en" ? CATEGORY_LABELS_EN : CATEGORY_LABELS_ES;
}

/** @deprecated Usa getCategoryLabels(locale). Se mantiene para compatibilidad con el español por defecto. */
export const CATEGORY_LABELS = CATEGORY_LABELS_ES;

export const services: Service[] = [
  {
    slug: "videos-redes-sociales",
    category: "contenido",
    navTitle: "Video para redes",
    title: "Producción de videos para redes sociales",
    seoTitle: "Producción de videos para redes sociales | Adrian Caballero Studio",
    seoDescription:
      "Producción de video vertical y horizontal para Instagram, TikTok y YouTube. Guion, grabación, edición y formatos listos para publicar.",
    summary: "Video con guion, ritmo y dirección de arte, pensado para el algoritmo y para la marca.",
    intro: [
      "La mayoría del contenido que se publica en redes se olvida en tres segundos. El problema casi nunca es la plataforma: es que el video se grabó sin una idea clara detrás.",
      "Producimos video de formato corto y medio para Instagram, TikTok y YouTube con un proceso real de preproducción, grabación y edición. No es contenido genérico para llenar un calendario: cada pieza responde a un objetivo específico de la marca.",
    ],
    whatWeDo: [
      { title: "Guion y estructura", description: "Definimos el gancho, el mensaje central y el cierre antes de encender la cámara." },
      { title: "Grabación", description: "Producción en locación o estudio, con equipo de audio y video adaptado a cada formato." },
      { title: "Edición y ritmo", description: "Montaje pensado para retención: cortes, subtítulos, música y motion gráfico cuando aporta." },
      { title: "Adaptación de formatos", description: "Entrega en vertical, horizontal y cuadrado según cada plataforma y su comportamiento." },
    ],
    forWho: [
      "Marcas que publican sin una línea editorial clara y quieren orden y consistencia.",
      "Negocios que necesitan contenido recurrente sin depender de improvisar cada semana.",
      "Equipos que ya tienen estrategia de redes pero les falta producción de calidad.",
      "Lanzamientos de producto que necesitan una batería de contenido en poco tiempo.",
    ],
    includes: [
      "Preproducción: brief, guion y planificación de grabación.",
      "Dirección de arte y locación.",
      "Grabación con cámara, audio y luz profesional.",
      "Edición, subtítulos y música con licencia.",
      "Exportación en los formatos de cada plataforma.",
    ],
    process: [
      { title: "Brief y objetivo", description: "Entendemos qué necesita comunicar la marca y a quién le habla." },
      { title: "Guion y plan de rodaje", description: "Estructuramos cada pieza antes de grabar, no en edición." },
      { title: "Producción", description: "Grabamos con el equipo necesario según la complejidad del proyecto." },
      { title: "Edición", description: "Montamos, corregimos color y ajustamos ritmo para cada plataforma." },
      { title: "Entrega y feedback", description: "Revisamos contigo y ajustamos hasta que el resultado esté listo para publicar." },
    ],
    faqs: [
      { question: "¿Cuántos videos se producen por sesión de grabación?", answer: "Depende del guion y el tiempo de rodaje, pero normalmente organizamos cada jornada para obtener varias piezas y no solo una." },
      { question: "¿Ustedes escriben el guion o lo hace la marca?", answer: "Lo escribimos nosotros a partir de un brief, aunque si el equipo interno ya tiene ideas o mensajes clave, los incorporamos al proceso." },
      { question: "¿Trabajan con influencers o solo con marca propia?", answer: "Producimos contenido con el equipo de la marca, con vocero interno o coordinando talento externo si el proyecto lo requiere." },
      { question: "¿El precio incluye la pauta publicitaria?", answer: "No. Esto es producción de contenido. La gestión de pauta se cotiza junto al servicio de Meta Ads si se necesita." },
    ],
    portfolioFilter: "video",
    relatedSlugs: ["produccion-audiovisual", "redes-sociales", "fotografia"],
    ctaHeading: "¿Necesitas contenido que sí se vea?",
    ctaText: "Cuéntanos qué quiere comunicar tu marca y armamos un plan de producción a tu medida.",
  },
  {
    slug: "produccion-audiovisual",
    category: "contenido",
    navTitle: "Producción audiovisual",
    title: "Producción audiovisual para empresas y eventos",
    seoTitle: "Producción audiovisual para empresas y eventos | Adrian Caballero Studio",
    seoDescription:
      "Cobertura audiovisual profesional para eventos corporativos, lanzamientos y video institucional. Equipo, dirección y postproducción completa.",
    summary: "Cobertura y producción de video institucional, corporativo y de eventos con estándar cinematográfico.",
    intro: [
      "Un evento o un video institucional bien producido comunica algo que ningún texto logra: que la marca sabe lo que hace y cuida los detalles.",
      "Nos encargamos de la producción audiovisual completa para empresas: desde la cobertura de un evento en vivo hasta piezas institucionales, videos corporativos y contenido de marca con dirección real.",
    ],
    whatWeDo: [
      { title: "Cobertura de eventos", description: "Registro multicámara de conferencias, lanzamientos, activaciones y eventos corporativos." },
      { title: "Video institucional", description: "Piezas que presentan a la empresa, su equipo, su cultura o su proceso de trabajo." },
      { title: "Testimoniales y entrevistas", description: "Producción con iluminación y audio controlado para contenido de voceros y clientes." },
      { title: "Postproducción", description: "Edición, corrección de color y sonido para un resultado con nivel profesional." },
    ],
    forWho: [
      "Empresas que organizan eventos, conferencias o lanzamientos y necesitan registro profesional.",
      "Marcas que quieren un video institucional para su sitio web o presentaciones comerciales.",
      "Equipos de recursos humanos o marca empleadora que necesitan contenido de cultura interna.",
      "Negocios que buscan testimoniales de clientes con producción cuidada.",
    ],
    includes: [
      "Visita técnica o levantamiento de locación cuando aplica.",
      "Equipo de cámara, audio e iluminación según la escala del evento.",
      "Dirección de producción durante el evento o grabación.",
      "Edición del material en formato largo y en recortes para redes.",
      "Entrega en la resolución y formato que necesite cada uso.",
    ],
    process: [
      { title: "Levantamiento", description: "Revisamos el evento, la locación o el objetivo del video institucional." },
      { title: "Plan de producción", description: "Definimos equipo, cronograma y tomas necesarias." },
      { title: "Grabación", description: "Cobertura el día del evento o producción programada para video institucional." },
      { title: "Edición", description: "Montamos el material principal y los recortes derivados para redes." },
      { title: "Entrega final", description: "Compartimos los archivos finales en los formatos acordados." },
    ],
    faqs: [
      { question: "¿Cubren eventos de un día completo?", answer: "Sí, adaptamos el equipo y el número de camarógrafos según la duración y la cantidad de actividades simultáneas." },
      { question: "¿Entregan también piezas cortas para redes del mismo evento?", answer: "Sí, del material del evento generamos recortes optimizados para Instagram, TikTok o LinkedIn." },
      { question: "¿Necesitamos guion para un video institucional?", answer: "Ayudamos a estructurarlo. Definimos mensajes clave y entrevistas antes de grabar para que el resultado tenga hilo narrativo." },
      { question: "¿Trabajan fuera de la ciudad?", answer: "Sí, coordinamos producción en otras ubicaciones según el alcance del proyecto." },
    ],
    portfolioFilter: "video",
    relatedSlugs: ["dron", "fotografia", "videos-redes-sociales"],
    ctaHeading: "¿Tienes un evento o proyecto institucional en puerta?",
    ctaText: "Hablemos del formato, la fecha y lo que necesitas registrar.",
    metaCatalogId: "s1m1u8mp90",
  },
  {
    slug: "dron",
    category: "contenido",
    navTitle: "Dron",
    title: "Fotografía y video con dron",
    seoTitle: "Fotografía y video con dron | Adrian Caballero Studio",
    seoDescription:
      "Tomas aéreas profesionales con dron para inmobiliarias, eventos, turismo y producción audiovisual corporativa.",
    summary: "Tomas aéreas que dan escala y perspectiva a proyectos inmobiliarios, eventos y producción de marca.",
    intro: [
      "Hay tomas que solo un dron puede lograr: la escala real de un proyecto, el contexto de una locación o el movimiento aéreo que le da otra dimensión a un video.",
      "Ofrecemos producción con dron para fotografía y video, integrada como parte de un proyecto audiovisual más amplio o como servicio independiente cuando el objetivo es puntual.",
    ],
    whatWeDo: [
      { title: "Tomas aéreas fotográficas", description: "Fotografía de propiedades, terrenos, instalaciones y eventos desde el aire." },
      { title: "Video aéreo", description: "Planos en movimiento que se integran a producciones audiovisuales o piezas para redes." },
      { title: "Inspección visual", description: "Registro de fachadas, techos o instalaciones de difícil acceso con fines documentales." },
      { title: "Integración con producción en tierra", description: "Coordinamos tomas aéreas junto con cámaras en tierra para un resultado narrativo completo." },
    ],
    forWho: [
      "Inmobiliarias y desarrolladores que necesitan mostrar la escala de un proyecto.",
      "Organizadores de eventos al aire libre o de gran formato.",
      "Marcas de turismo, hotelería o negocios con locaciones atractivas desde el aire.",
      "Producciones audiovisuales que necesitan planos aéreos como parte de su narrativa.",
    ],
    includes: [
      "Evaluación de la zona y condiciones de vuelo.",
      "Piloto y equipo de dron profesional.",
      "Fotografía aérea en alta resolución.",
      "Video aéreo en 4K con estabilización.",
      "Edición y entrega en el formato requerido.",
    ],
    process: [
      { title: "Evaluación del sitio", description: "Revisamos la locación, restricciones de vuelo y condiciones climáticas." },
      { title: "Planificación de tomas", description: "Definimos los ángulos y movimientos según el objetivo del proyecto." },
      { title: "Vuelo y captura", description: "Ejecutamos la sesión con los permisos y precauciones necesarias." },
      { title: "Edición", description: "Procesamos el material fotográfico o de video para su entrega final." },
    ],
    faqs: [
      { question: "¿Vuelan en zonas restringidas?", answer: "No. Operamos dentro de las regulaciones aéreas aplicables y evaluamos cada locación antes de confirmar el vuelo." },
      { question: "¿El servicio de dron se puede contratar solo, sin producción en tierra?", answer: "Sí, se puede contratar como servicio independiente o integrado a una producción audiovisual más amplia." },
      { question: "¿Qué pasa si el clima no permite volar el día programado?", answer: "Reprogramamos la sesión. La seguridad del vuelo siempre está antes que la fecha." },
    ],
    portfolioFilter: "dron",
    relatedSlugs: ["produccion-audiovisual", "fotografia", "videos-redes-sociales"],
    ctaHeading: "¿Tu proyecto necesita verse desde otra perspectiva?",
    ctaText: "Cuéntanos la locación y el objetivo de las tomas aéreas.",
    metaCatalogId: "z5rqny26b6",
  },
  {
    slug: "fotografia",
    category: "contenido",
    navTitle: "Fotografía",
    title: "Fotografía profesional",
    seoTitle: "Fotografía profesional para marcas | Adrian Caballero Studio",
    seoDescription:
      "Fotografía de producto, corporativa, de espacios y de marca con dirección de arte. Producción en estudio o en locación.",
    summary: "Fotografía de producto, marca y corporativa con dirección de arte consistente con tu identidad visual.",
    intro: [
      "Una fotografía bien dirigida comunica calidad antes de que alguien lea una sola palabra. Una mal iluminada o sin criterio hace exactamente lo contrario, sin importar qué tan bueno sea el producto o servicio.",
      "Producimos fotografía profesional de producto, marca, espacios y equipo, con dirección de arte que respeta la identidad visual de cada cliente en lugar de aplicar una fórmula genérica.",
    ],
    whatWeDo: [
      { title: "Fotografía de producto", description: "Producción en estudio con iluminación controlada para catálogo, e-commerce o campañas." },
      { title: "Fotografía corporativa", description: "Retratos de equipo, espacios de trabajo y cultura de marca con dirección de arte." },
      { title: "Fotografía de espacios", description: "Registro de locales, oficinas o instalaciones para uso comercial o inmobiliario." },
      { title: "Fotografía de marca", description: "Sesiones conceptuales alineadas a la identidad visual para campañas y redes." },
    ],
    forWho: [
      "Marcas de producto que necesitan imágenes consistentes para su tienda o e-commerce.",
      "Empresas que quieren renovar su banco de fotografía corporativa.",
      "Negocios con espacios físicos que quieren mostrarlos de forma profesional.",
      "Equipos de marketing que necesitan fotografía original en lugar de banco de imágenes.",
    ],
    includes: [
      "Dirección de arte previa a la sesión.",
      "Producción en estudio o en locación.",
      "Iluminación y equipo fotográfico profesional.",
      "Retoque y edición de color.",
      "Entrega en los formatos y resoluciones necesarias para cada uso.",
    ],
    process: [
      { title: "Dirección de arte", description: "Definimos estilo, referencias e identidad visual antes de la sesión." },
      { title: "Producción", description: "Realizamos la sesión en estudio o en la locación acordada." },
      { title: "Selección", description: "Curamos junto al cliente las mejores tomas de cada set." },
      { title: "Retoque y entrega", description: "Editamos las imágenes seleccionadas y las entregamos en los formatos requeridos." },
    ],
    faqs: [
      { question: "¿Ofrecen sesiones en estudio y en exteriores?", answer: "Sí, dependiendo del tipo de producto o marca, recomendamos el formato que mejor sirva al objetivo." },
      { question: "¿Cuántas fotos finales se entregan?", answer: "Varía según la duración de la sesión. Lo definimos juntos antes de producir para que el número tenga sentido con el uso que le darás." },
      { question: "¿Incluye retoque avanzado?", answer: "Incluye corrección de color y retoque estándar. El retoque avanzado (composición, remoción compleja) se cotiza aparte." },
    ],
    portfolioFilter: "fotografia",
    relatedSlugs: ["dron", "produccion-audiovisual", "redes-sociales"],
    ctaHeading: "¿Tu marca necesita imágenes propias, no de banco?",
    ctaText: "Cuéntanos qué necesitas fotografiar y diseñamos la sesión.",
  },
  {
    slug: "desarrollo-web",
    category: "tecnologia",
    navTitle: "Sitios web",
    title: "Diseño y desarrollo de páginas web",
    seoTitle: "Diseño y desarrollo de páginas web | Adrian Caballero Studio",
    seoDescription:
      "Diseño y desarrollo de sitios web rápidos, optimizados para SEO y pensados para convertir. Sitios a medida, no plantillas genéricas.",
    summary: "Sitios rápidos, ordenados y optimizados para SEO, diseñados a medida en lugar de sobre una plantilla.",
    intro: [
      "Un sitio web lento, desordenado o que no aparece en Google no está ayudando al negocio, aunque se vea bonito en el momento del lanzamiento.",
      "Diseñamos y desarrollamos sitios web a medida: arquitectura pensada desde el inicio para SEO, velocidad y conversión, no una plantilla genérica con el logo cambiado.",
    ],
    whatWeDo: [
      { title: "Diseño UI/UX", description: "Arquitectura de información, wireframes y diseño visual alineado a la marca." },
      { title: "Desarrollo a medida", description: "Construcción con tecnología moderna, código limpio y mantenible." },
      { title: "SEO técnico", description: "Metadata, datos estructurados, velocidad y arquitectura pensada para posicionar." },
      { title: "Optimización de conversión", description: "Rutas claras hacia contacto o compra, sin fricción innecesaria." },
    ],
    forWho: [
      "Empresas que necesitan un sitio web nuevo o una renovación completa.",
      "Marcas cuyo sitio actual es lento, desactualizado o no genera clientes.",
      "Negocios que quieren un sitio multipágina con portafolio, blog y SEO real.",
      "Equipos que quieren un sitio que se mantenga al día, con soporte para hacer los cambios después del lanzamiento.",
    ],
    includes: [
      "Arquitectura del sitio y mapa de páginas.",
      "Diseño UI/UX a medida, responsive desde el primer boceto.",
      "Desarrollo con estándares modernos de rendimiento y accesibilidad.",
      "SEO técnico: metadata, sitemap, datos estructurados y velocidad.",
      "Soporte para actualizaciones y cambios después del lanzamiento.",
    ],
    process: [
      { title: "Descubrimiento", description: "Entendemos el negocio, la competencia y el objetivo real del sitio." },
      { title: "Arquitectura y UX", description: "Definimos páginas, navegación y flujo antes de diseñar visualmente." },
      { title: "Diseño UI", description: "Diseñamos cada página con la identidad de marca y foco en conversión." },
      { title: "Desarrollo", description: "Construimos el sitio con buenas prácticas de rendimiento y SEO." },
      { title: "QA y lanzamiento", description: "Probamos en dispositivos reales, optimizamos y publicamos." },
    ],
    faqs: [
      { question: "¿El sitio queda optimizado para Google desde el lanzamiento?", answer: "Sí. El SEO técnico (metadata, velocidad, estructura de datos) se construye desde la arquitectura, no se agrega después." },
      { question: "¿Qué pasa si necesito cambiar algo después del lanzamiento?", answer: "Nosotros hacemos los cambios por ti — el soporte para actualizaciones está contemplado en el servicio, así que no necesitas saber de código ni contratar a alguien más." },
      { question: "¿Cuánto tiempo toma desarrollar un sitio multipágina?", answer: "Depende del número de páginas y funcionalidades. Lo definimos en la etapa de descubrimiento con un cronograma claro." },
      { question: "¿Incluye hosting y dominio?", answer: "La configuración de hosting y dominio se coordina según la plataforma que prefieras; te asesoramos en esa decisión." },
    ],
    portfolioFilter: "web",
    relatedSlugs: ["desarrollo-apps", "sistemas-empresariales", "meta-ads"],
    ctaHeading: "Construyamos tu próxima web.",
    ctaText: "Cuéntanos qué necesita lograr tu sitio y te proponemos la arquitectura.",
  },
  {
    slug: "desarrollo-apps",
    category: "tecnologia",
    navTitle: "Aplicaciones",
    title: "Desarrollo de aplicaciones",
    seoTitle: "Desarrollo de aplicaciones móviles y web | Adrian Caballero Studio",
    seoDescription:
      "Desarrollo de aplicaciones móviles y web a medida, desde la idea hasta el producto funcional. Diseño de producto y desarrollo en un mismo equipo.",
    summary: "Desde la idea hasta el producto funcional, con diseño de producto y desarrollo en el mismo equipo.",
    intro: [
      "Una buena idea de aplicación no se convierte en producto solo por tener código funcionando. Necesita diseño de producto, decisiones técnicas correctas y una hoja de ruta clara.",
      "Desarrollamos aplicaciones móviles y web a medida, acompañando desde la definición del producto hasta su lanzamiento, con foco en resolver un problema real para el usuario final.",
    ],
    whatWeDo: [
      { title: "Definición de producto", description: "Aclaramos el problema a resolver, el usuario objetivo y el alcance real del MVP." },
      { title: "Diseño UX/UI", description: "Flujos de usuario y diseño de interfaz pensados para uso real, no solo para verse bien en una presentación." },
      { title: "Desarrollo", description: "Construcción de la aplicación con tecnología adecuada al proyecto y a su escala." },
      { title: "Lanzamiento y soporte", description: "Publicación en tiendas o despliegue web, con acompañamiento posterior al lanzamiento." },
    ],
    forWho: [
      "Emprendedores con una idea de aplicación que necesitan un primer producto funcional.",
      "Empresas que quieren digitalizar un proceso interno o de cara al cliente.",
      "Negocios que necesitan una app complementaria a su plataforma web.",
      "Equipos que ya tienen una app y necesitan rediseñarla o escalarla.",
    ],
    includes: [
      "Definición de alcance y funcionalidades del MVP.",
      "Diseño de experiencia e interfaz de usuario.",
      "Desarrollo del producto con arquitectura escalable.",
      "Pruebas funcionales antes del lanzamiento.",
      "Acompañamiento en la publicación y primeras iteraciones.",
    ],
    process: [
      { title: "Descubrimiento", description: "Entendemos el problema que la aplicación necesita resolver." },
      { title: "Definición de alcance", description: "Priorizamos funcionalidades para un primer producto viable." },
      { title: "Diseño de producto", description: "Diseñamos los flujos y la interfaz antes de programar." },
      { title: "Desarrollo", description: "Construimos la aplicación en ciclos revisables, no como una caja negra." },
      { title: "Lanzamiento", description: "Publicamos y acompañamos las primeras iteraciones post-lanzamiento." },
    ],
    faqs: [
      { question: "¿Desarrollan para iOS, Android o ambos?", answer: "Evaluamos junto contigo la tecnología más conveniente según el público objetivo y el presupuesto del proyecto." },
      { question: "¿Puedo empezar solo con un MVP?", answer: "Es lo que recomendamos en la mayoría de los casos: validar con un producto mínimo antes de invertir en funcionalidades adicionales." },
      { question: "¿Qué pasa después del lanzamiento?", answer: "Ofrecemos acompañamiento para ajustes, corrección de errores y nuevas iteraciones según el uso real de los usuarios." },
    ],
    portfolioFilter: "apps",
    relatedSlugs: ["sistemas-empresariales", "desarrollo-web", "meta-ads"],
    ctaHeading: "Hablemos de tu idea.",
    ctaText: "Cuéntanos el problema que quieres resolver y evaluamos cómo construirlo.",
  },
  {
    slug: "sistemas-empresariales",
    category: "tecnologia",
    navTitle: "Sistemas empresariales",
    title: "Software y sistemas empresariales personalizados",
    seoTitle: "Desarrollo de sistemas empresariales a medida | Adrian Caballero Studio",
    seoDescription:
      "Desarrollo de software y sistemas internos a medida para automatizar procesos, gestionar información y eliminar hojas de cálculo dispersas.",
    summary: "Software a medida que ordena procesos internos que hoy dependen de hojas de cálculo y mensajes sueltos.",
    intro: [
      "Muchas empresas siguen operando con hojas de cálculo, mensajes de WhatsApp y procesos manuales que consumen tiempo y generan errores evitables.",
      "Desarrollamos sistemas empresariales a medida: plataformas internas de gestión, paneles administrativos y herramientas que automatizan procesos específicos de cada negocio.",
    ],
    whatWeDo: [
      { title: "Diagnóstico de procesos", description: "Identificamos qué procesos manuales tienen sentido convertir en software." },
      { title: "Diseño del sistema", description: "Definimos módulos, roles de usuario y flujos de información." },
      { title: "Desarrollo a medida", description: "Construimos el sistema ajustado a la operación real del negocio, no a un molde genérico." },
      { title: "Integraciones", description: "Conectamos el sistema con otras herramientas que ya utiliza la empresa cuando es necesario." },
    ],
    forWho: [
      "Empresas que gestionan inventario, pedidos o clientes en hojas de cálculo dispersas.",
      "Negocios con procesos repetitivos que consumen tiempo del equipo.",
      "Organizaciones que necesitan un panel de control interno para su operación.",
      "Empresas que ya tienen un sistema pero se les quedó pequeño o difícil de mantener.",
    ],
    includes: [
      "Levantamiento de procesos actuales.",
      "Diseño de flujos y roles del sistema.",
      "Desarrollo de la plataforma con panel administrativo.",
      "Pruebas con el equipo que usará el sistema en el día a día.",
      "Documentación básica de uso.",
    ],
    process: [
      { title: "Diagnóstico", description: "Revisamos cómo opera hoy el proceso que se quiere sistematizar." },
      { title: "Diseño del sistema", description: "Definimos módulos, permisos y flujo de información." },
      { title: "Desarrollo", description: "Construimos el sistema en etapas revisables junto al equipo del cliente." },
      { title: "Pruebas internas", description: "Validamos con usuarios reales antes de poner el sistema en producción." },
      { title: "Puesta en marcha", description: "Acompañamos el paso del proceso manual al sistema nuevo." },
    ],
    faqs: [
      { question: "¿Esto reemplaza un ERP comercial?", answer: "En algunos casos sí, cuando el negocio necesita algo específico que un ERP genérico no resuelve bien. Lo evaluamos según cada caso." },
      { question: "¿Cuánto tiempo toma desarrollar un sistema interno?", answer: "Depende del alcance. Un sistema enfocado en un proceso puntual toma menos tiempo que una plataforma con múltiples módulos." },
      { question: "¿El equipo necesita capacitación para usarlo?", answer: "Sí, incluimos una etapa de acompañamiento y documentación básica para la transición del proceso manual al sistema." },
    ],
    portfolioFilter: "sistemas",
    relatedSlugs: ["desarrollo-apps", "desarrollo-web"],
    ctaHeading: "¿Un proceso manual te está costando tiempo?",
    ctaText: "Cuéntanos cómo opera hoy tu equipo y evaluamos si tiene sentido sistematizarlo.",
  },
  {
    slug: "meta-ads",
    category: "marketing",
    navTitle: "Meta Ads",
    title: "Campañas publicitarias en Meta Ads",
    seoTitle: "Gestión de campañas en Meta Ads | Adrian Caballero Studio",
    seoDescription:
      "Gestión profesional de campañas publicitarias en Facebook e Instagram Ads: estrategia, creatividades, segmentación y optimización continua.",
    summary: "Campañas en Facebook e Instagram con creatividad propia, segmentación real y optimización constante.",
    intro: [
      "Invertir en pauta sin una estrategia clara detrás casi siempre termina en un gasto que no se puede explicar. El problema rara vez es la plataforma: es la falta de creatividad, segmentación y seguimiento.",
      "Gestionamos campañas de Meta Ads de principio a fin: estrategia, creatividades, configuración técnica y optimización continua según los resultados reales de cada campaña.",
    ],
    whatWeDo: [
      { title: "Estrategia de campaña", description: "Definimos objetivo, audiencia y estructura de campaña antes de invertir un solo peso." },
      { title: "Creatividades", description: "Producimos o adaptamos piezas específicas para publicidad, no reutilizamos contenido orgánico sin criterio." },
      { title: "Configuración técnica", description: "Píxel, eventos de conversión y segmentación configurados correctamente desde el inicio." },
      { title: "Optimización", description: "Revisión constante de métricas para ajustar presupuesto, segmentación y creatividades." },
    ],
    forWho: [
      "Marcas que ya invierten en pauta pero no ven resultados claros.",
      "Negocios que quieren empezar a pautar con una estructura correcta desde el inicio.",
      "E-commerce que necesita generar ventas de forma constante, no solo alcance.",
      "Empresas que necesitan generar leads calificados de forma predecible.",
    ],
    includes: [
      "Configuración de cuenta publicitaria, píxel y eventos de conversión.",
      "Estrategia de campaña y estructura de segmentación.",
      "Producción o adaptación de creatividades para pauta.",
      "Gestión y optimización continua del presupuesto.",
      "Reportes periódicos con métricas reales, no vanidosas.",
    ],
    process: [
      { title: "Diagnóstico", description: "Revisamos objetivos de negocio, cuenta publicitaria e historial si ya existe." },
      { title: "Estrategia", description: "Definimos audiencia, objetivo de campaña y estructura de pauta." },
      { title: "Creatividades", description: "Producimos las piezas específicas para cada campaña." },
      { title: "Lanzamiento", description: "Configuramos y activamos las campañas con seguimiento desde el primer día." },
      { title: "Optimización", description: "Ajustamos con base en resultados reales, no en supuestos." },
    ],
    faqs: [
      { question: "¿Cuál es la inversión mínima recomendada?", answer: "Depende del objetivo y la industria. Lo revisamos en el diagnóstico inicial para proponer un presupuesto realista." },
      { question: "¿Incluye la producción de las creatividades?", answer: "Sí, producimos o adaptamos piezas específicas para pauta; también podemos trabajar con material que ya tenga la marca." },
      { question: "¿Cómo se reportan los resultados?", answer: "Con reportes periódicos enfocados en métricas de negocio: costo por resultado, conversiones y retorno, no solo alcance o me gusta." },
      { question: "¿Trabajan también con TikTok Ads o Google Ads?", answer: "Nuestro foco actual es Meta Ads. Si tu estrategia necesita otras plataformas, lo conversamos caso por caso." },
    ],
    portfolioFilter: "publicidad",
    relatedSlugs: ["redes-sociales", "videos-redes-sociales", "desarrollo-web"],
    ctaHeading: "¿Tu pauta no está dando resultados claros?",
    ctaText: "Cuéntanos qué has intentado y revisamos juntos qué está fallando.",
  },
  {
    slug: "redes-sociales",
    category: "marketing",
    navTitle: "Redes sociales",
    title: "Manejo profesional de redes sociales",
    seoTitle: "Manejo y estrategia de redes sociales | Adrian Caballero Studio",
    seoDescription:
      "Gestión profesional de redes sociales: estrategia de contenido, calendario editorial, producción y comunidad. Contenido con propósito, no por llenar un calendario.",
    summary: "Estrategia, calendario y producción de contenido para que tus redes trabajen con un propósito claro.",
    intro: [
      "Publicar todos los días no es una estrategia. Muchas marcas mantienen sus redes activas sin saber realmente qué objetivo persigue cada publicación.",
      "Gestionamos redes sociales con estrategia de contenido real: definimos objetivos, línea editorial, calendario y producción, y medimos resultados más allá de likes y seguidores.",
    ],
    whatWeDo: [
      { title: "Estrategia de contenido", description: "Definimos pilares de contenido, tono de marca y objetivos por plataforma." },
      { title: "Calendario editorial", description: "Planificación mensual de publicaciones alineada a fechas y momentos clave del negocio." },
      { title: "Producción de contenido", description: "Coordinamos la producción audiovisual y gráfica necesaria para cada publicación." },
      { title: "Gestión de comunidad", description: "Respuesta y seguimiento de la interacción según los lineamientos de la marca." },
    ],
    forWho: [
      "Marcas que publican sin estrategia y no ven crecimiento real.",
      "Negocios que necesitan presencia constante pero no tienen equipo interno de contenido.",
      "Empresas que quieren integrar redes sociales con su estrategia comercial completa.",
      "Marcas que ya producen contenido audiovisual con nosotros y necesitan gestión estratégica.",
    ],
    includes: [
      "Auditoría de redes actuales y definición de estrategia.",
      "Calendario editorial mensual.",
      "Coordinación de producción de contenido.",
      "Publicación y gestión básica de comunidad.",
      "Reporte mensual de desempeño por plataforma.",
    ],
    process: [
      { title: "Auditoría", description: "Revisamos el estado actual de las redes y su desempeño histórico." },
      { title: "Estrategia", description: "Definimos pilares de contenido, tono y objetivos por plataforma." },
      { title: "Calendario", description: "Planificamos el contenido del mes con fechas y temas definidos." },
      { title: "Producción y publicación", description: "Coordinamos la producción necesaria y publicamos según el calendario." },
      { title: "Reporte y ajuste", description: "Medimos resultados y ajustamos la estrategia del siguiente mes." },
    ],
    faqs: [
      { question: "¿La producción de contenido está incluida en la gestión de redes?", answer: "La estrategia, el calendario y la gestión sí. La producción audiovisual se coordina junto al servicio de video o fotografía según el volumen necesario." },
      { question: "¿En cuánto tiempo se ven resultados?", answer: "Depende del punto de partida y el objetivo. Lo conversamos en la auditoría inicial para establecer expectativas realistas." },
      { question: "¿Gestionan todas las plataformas o puedo elegir?", answer: "Definimos juntos en qué plataformas tiene sentido invertir esfuerzo según tu audiencia y objetivos." },
    ],
    portfolioFilter: "social",
    relatedSlugs: ["meta-ads", "videos-redes-sociales", "fotografia"],
    ctaHeading: "¿Tus redes necesitan una estrategia real?",
    ctaText: "Cuéntanos cómo va tu presencia actual y qué te gustaría lograr.",
    metaCatalogId: "exouxp5uv5",
  },
];

export const servicesEn: Service[] = [
  {
    slug: "videos-redes-sociales",
    category: "contenido",
    navTitle: "Social Video",
    title: "Social media video production",
    seoTitle: "Social media video production | Adrian Caballero Studio",
    seoDescription:
      "Vertical and horizontal video production for Instagram, TikTok and YouTube. Script, filming, editing and platform-ready formats.",
    summary: "Video with script, pacing and art direction, built for the algorithm and for the brand.",
    intro: [
      "Most content published on social media is forgotten in three seconds. The problem is almost never the platform: it's that the video was shot without a clear idea behind it.",
      "We produce short- and mid-length video for Instagram, TikTok and YouTube with a real pre-production, filming and editing process. This isn't generic content to fill a calendar — every piece ties back to a specific brand objective.",
    ],
    whatWeDo: [
      { title: "Script and structure", description: "We define the hook, the core message and the close before turning on the camera." },
      { title: "Filming", description: "Production on location or in studio, with audio and video gear adapted to each format." },
      { title: "Editing and pacing", description: "Editing built for retention: cuts, subtitles, music and motion graphics when they add value." },
      { title: "Format adaptation", description: "Delivered in vertical, horizontal and square formats depending on each platform and its behavior." },
    ],
    forWho: [
      "Brands publishing without a clear editorial line that want order and consistency.",
      "Businesses that need recurring content without relying on improvising every week.",
      "Teams that already have a social strategy but are missing quality production.",
      "Product launches that need a batch of content in a short time.",
    ],
    includes: [
      "Pre-production: brief, script and shoot planning.",
      "Art direction and location.",
      "Filming with professional camera, audio and lighting.",
      "Editing, subtitles and licensed music.",
      "Export in each platform's required formats.",
    ],
    process: [
      { title: "Brief and objective", description: "We understand what the brand needs to communicate and to whom." },
      { title: "Script and shoot plan", description: "We structure each piece before filming, not in editing." },
      { title: "Production", description: "We film with the crew needed for the project's complexity." },
      { title: "Editing", description: "We edit, color-correct and adjust pacing for each platform." },
      { title: "Delivery and feedback", description: "We review with you and adjust until the result is ready to publish." },
    ],
    faqs: [
      { question: "How many videos are produced per filming session?", answer: "It depends on the script and shoot time, but we typically plan each day to get several pieces, not just one." },
      { question: "Do you write the script or does the brand?", answer: "We write it based on a brief, though if the internal team already has ideas or key messages, we work them into the process." },
      { question: "Do you work with influencers or only with in-house talent?", answer: "We produce content with the brand's own team, an internal spokesperson, or by coordinating outside talent if the project requires it." },
      { question: "Does the price include ad spend?", answer: "No. This is content production. Ad management is quoted alongside the Meta Ads service if needed." },
    ],
    portfolioFilter: "video",
    relatedSlugs: ["produccion-audiovisual", "redes-sociales", "fotografia"],
    ctaHeading: "Need content that actually gets seen?",
    ctaText: "Tell us what your brand wants to communicate and we'll put together a production plan tailored to you.",
  },
  {
    slug: "produccion-audiovisual",
    category: "contenido",
    navTitle: "Audiovisual production",
    title: "Audiovisual production for businesses and events",
    seoTitle: "Audiovisual production for businesses and events | Adrian Caballero Studio",
    seoDescription:
      "Professional audiovisual coverage for corporate events, launches and institutional video. Full crew, direction and post-production.",
    summary: "Coverage and production of institutional, corporate and event video with a cinematic standard.",
    intro: [
      "A well-produced event or institutional video communicates something no text can: that the brand knows what it's doing and cares about the details.",
      "We handle full audiovisual production for companies: from live event coverage to institutional pieces, corporate videos and brand content with real direction.",
    ],
    whatWeDo: [
      { title: "Event coverage", description: "Multi-camera recording of conferences, launches, activations and corporate events." },
      { title: "Institutional video", description: "Pieces that present the company, its team, its culture or its way of working." },
      { title: "Testimonials and interviews", description: "Production with controlled lighting and audio for spokesperson and client content." },
      { title: "Post-production", description: "Editing, color correction and sound for a professional-level result." },
    ],
    forWho: [
      "Companies organizing events, conferences or launches that need professional coverage.",
      "Brands that want an institutional video for their website or sales presentations.",
      "HR or employer-brand teams that need internal culture content.",
      "Businesses looking for well-produced client testimonials.",
    ],
    includes: [
      "Technical site visit or venue survey when applicable.",
      "Camera, audio and lighting crew scaled to the event.",
      "Production direction during the event or shoot.",
      "Editing of the material in long form and in cutdowns for social.",
      "Delivery in the resolution and format each use requires.",
    ],
    process: [
      { title: "Survey", description: "We review the event, the venue or the institutional video's objective." },
      { title: "Production plan", description: "We define crew, schedule and required shots." },
      { title: "Filming", description: "Coverage on the day of the event or scheduled institutional video production." },
      { title: "Editing", description: "We edit the main piece and the cutdowns for social." },
      { title: "Final delivery", description: "We share the final files in the agreed formats." },
    ],
    faqs: [
      { question: "Do you cover full-day events?", answer: "Yes, we adapt the crew and number of camera operators based on the length and number of simultaneous activities." },
      { question: "Do you also deliver short pieces for social from the same event?", answer: "Yes, from the event material we create cutdowns optimized for Instagram, TikTok or LinkedIn." },
      { question: "Do we need a script for an institutional video?", answer: "We help structure it. We define key messages and interviews before filming so the result has a narrative thread." },
      { question: "Do you work outside the city?", answer: "Yes, we coordinate production in other locations depending on the project's scope." },
    ],
    portfolioFilter: "video",
    relatedSlugs: ["dron", "fotografia", "videos-redes-sociales"],
    ctaHeading: "Have an event or institutional project coming up?",
    ctaText: "Let's talk about the format, the date and what you need covered.",
    metaCatalogId: "s1m1u8mp90",
  },
  {
    slug: "dron",
    category: "contenido",
    navTitle: "Drone",
    title: "Drone photography and video",
    seoTitle: "Drone photography and video | Adrian Caballero Studio",
    seoDescription:
      "Professional drone footage for real estate, events, tourism and corporate audiovisual production.",
    summary: "Aerial footage that gives scale and perspective to real estate projects, events and brand production.",
    intro: [
      "There are shots only a drone can capture: the real scale of a project, the context of a location, or the aerial movement that gives a video another dimension.",
      "We offer drone production for photography and video, integrated as part of a larger audiovisual project or as a standalone service when the objective is specific.",
    ],
    whatWeDo: [
      { title: "Aerial photography", description: "Photography of properties, land, facilities and events from the air." },
      { title: "Aerial video", description: "Moving shots that integrate into audiovisual productions or social pieces." },
      { title: "Visual inspection", description: "Documentation of facades, roofs or hard-to-reach facilities for record-keeping purposes." },
      { title: "Integration with ground production", description: "We coordinate aerial shots alongside ground cameras for a complete narrative result." },
    ],
    forWho: [
      "Real estate companies and developers that need to show the scale of a project.",
      "Organizers of outdoor or large-format events.",
      "Tourism or hospitality brands, or businesses with visually striking locations from the air.",
      "Audiovisual productions that need aerial shots as part of their narrative.",
    ],
    includes: [
      "Assessment of the area and flight conditions.",
      "Professional drone pilot and equipment.",
      "High-resolution aerial photography.",
      "4K aerial video with stabilization.",
      "Editing and delivery in the required format.",
    ],
    process: [
      { title: "Site assessment", description: "We review the location, flight restrictions and weather conditions." },
      { title: "Shot planning", description: "We define angles and movements based on the project's objective." },
      { title: "Flight and capture", description: "We carry out the session with the necessary permits and precautions." },
      { title: "Editing", description: "We process the photo or video material for final delivery." },
    ],
    faqs: [
      { question: "Do you fly in restricted zones?", answer: "No. We operate within applicable aviation regulations and assess each location before confirming the flight." },
      { question: "Can the drone service be hired on its own, without ground production?", answer: "Yes, it can be hired as a standalone service or integrated into a larger audiovisual production." },
      { question: "What happens if the weather doesn't allow flying on the scheduled day?", answer: "We reschedule the session. Flight safety always comes before the date." },
    ],
    portfolioFilter: "dron",
    relatedSlugs: ["produccion-audiovisual", "fotografia", "videos-redes-sociales"],
    ctaHeading: "Does your project need to be seen from another perspective?",
    ctaText: "Tell us the location and the objective of the aerial shots.",
    metaCatalogId: "z5rqny26b6",
  },
  {
    slug: "fotografia",
    category: "contenido",
    navTitle: "Photography",
    title: "Professional photography",
    seoTitle: "Professional photography for brands | Adrian Caballero Studio",
    seoDescription:
      "Product, corporate, space and brand photography with art direction. Studio or on-location production.",
    summary: "Product, brand and corporate photography with art direction consistent with your visual identity.",
    intro: [
      "A well-directed photograph communicates quality before anyone reads a single word. A poorly lit one, or one shot without judgment, does exactly the opposite, no matter how good the product or service is.",
      "We produce professional photography of product, brand, spaces and teams, with art direction that respects each client's visual identity instead of applying a generic formula.",
    ],
    whatWeDo: [
      { title: "Product photography", description: "Studio production with controlled lighting for catalog, e-commerce or campaigns." },
      { title: "Corporate photography", description: "Team portraits, workspaces and brand culture with art direction." },
      { title: "Space photography", description: "Documentation of stores, offices or facilities for commercial or real estate use." },
      { title: "Brand photography", description: "Concept sessions aligned to visual identity for campaigns and social media." },
    ],
    forWho: [
      "Product brands that need consistent images for their store or e-commerce.",
      "Companies that want to refresh their corporate photo library.",
      "Businesses with physical spaces that want to show them off professionally.",
      "Marketing teams that need original photography instead of stock images.",
    ],
    includes: [
      "Art direction ahead of the session.",
      "Studio or on-location production.",
      "Professional lighting and photography equipment.",
      "Retouching and color editing.",
      "Delivery in the formats and resolutions each use requires.",
    ],
    process: [
      { title: "Art direction", description: "We define style, references and visual identity before the session." },
      { title: "Production", description: "We carry out the session in studio or at the agreed location." },
      { title: "Selection", description: "We curate the best shots from each set together with the client." },
      { title: "Retouching and delivery", description: "We edit the selected images and deliver them in the required formats." },
    ],
    faqs: [
      { question: "Do you offer studio and outdoor sessions?", answer: "Yes, depending on the type of product or brand, we recommend the format that best serves the objective." },
      { question: "How many final photos are delivered?", answer: "It varies with the session's length. We define this together before shooting so the number makes sense for how you'll use it." },
      { question: "Does it include advanced retouching?", answer: "It includes color correction and standard retouching. Advanced retouching (compositing, complex removal) is quoted separately." },
    ],
    portfolioFilter: "fotografia",
    relatedSlugs: ["dron", "produccion-audiovisual", "redes-sociales"],
    ctaHeading: "Does your brand need its own images, not stock?",
    ctaText: "Tell us what you need photographed and we'll design the session.",
  },
  {
    slug: "desarrollo-web",
    category: "tecnologia",
    navTitle: "Websites",
    title: "Web design and development",
    seoTitle: "Web design and development | Adrian Caballero Studio",
    seoDescription:
      "Design and development of fast, SEO-optimized websites built to convert. Custom sites, not generic templates.",
    summary: "Fast, well-structured, SEO-optimized sites, designed to measure instead of built on a template.",
    intro: [
      "A slow, cluttered website that doesn't show up on Google isn't helping the business, no matter how good it looked at launch.",
      "We design and develop custom websites: architecture planned from the start for SEO, speed and conversion, not a generic template with the logo swapped out.",
    ],
    whatWeDo: [
      { title: "UI/UX design", description: "Information architecture, wireframes and visual design aligned with the brand." },
      { title: "Custom development", description: "Built with modern technology, clean and maintainable code." },
      { title: "Technical SEO", description: "Metadata, structured data, speed and architecture built to rank." },
      { title: "Conversion optimization", description: "Clear paths to contact or purchase, with no unnecessary friction." },
    ],
    forWho: [
      "Companies that need a new website or a full redesign.",
      "Brands whose current site is slow, outdated, or just isn't bringing in clients.",
      "Businesses that want a multi-page site with portfolio, blog and real SEO.",
      "Teams that want a site that stays current, with support for changes after launch.",
    ],
    includes: [
      "Site architecture and page map.",
      "Custom UI/UX design, responsive from the first sketch.",
      "Development with modern performance and accessibility standards.",
      "Technical SEO: metadata, sitemap, structured data and speed.",
      "Support for updates and changes after launch.",
    ],
    process: [
      { title: "Discovery", description: "We understand the business, the competition and the site's real objective." },
      { title: "Architecture and UX", description: "We define pages, navigation and flow before designing visually." },
      { title: "UI design", description: "We design each page with the brand identity and a focus on conversion." },
      { title: "Development", description: "We build the site with performance and SEO best practices." },
      { title: "QA and launch", description: "We test on real devices, optimize and publish." },
    ],
    faqs: [
      { question: "Is the site optimized for Google from launch?", answer: "Yes. Technical SEO (metadata, speed, data structure) is built into the architecture, not added afterward." },
      { question: "What happens if I need to change something after launch?", answer: "We make the changes for you — support for updates is included in the service, so you don't need to know how to code or hire anyone else." },
      { question: "How long does it take to develop a multi-page site?", answer: "It depends on the number of pages and features. We define this in the discovery stage with a clear timeline." },
      { question: "Does it include hosting and domain?", answer: "Hosting and domain setup is coordinated based on your preferred platform; we advise you on that decision." },
    ],
    portfolioFilter: "web",
    relatedSlugs: ["desarrollo-apps", "sistemas-empresariales", "meta-ads"],
    ctaHeading: "Let's build your next website.",
    ctaText: "Tell us what your site needs to achieve and we'll propose the architecture.",
  },
  {
    slug: "desarrollo-apps",
    category: "tecnologia",
    navTitle: "Apps",
    title: "App development",
    seoTitle: "Mobile and web app development | Adrian Caballero Studio",
    seoDescription:
      "Custom mobile and web app development, from idea to functional product. Product design and development in one team.",
    summary: "From idea to functional product, with product design and development on the same team.",
    intro: [
      "A good app idea doesn't become a product just by having working code. It needs product design, the right technical decisions and a clear roadmap.",
      "We develop custom mobile and web apps, guiding you from product definition through launch, focused on solving a real problem for the end user.",
    ],
    whatWeDo: [
      { title: "Product definition", description: "We clarify the problem to solve, the target user and the real scope of the MVP." },
      { title: "UX/UI design", description: "User flows and interface design built for real use, not just to look good in a presentation." },
      { title: "Development", description: "We build the app with technology suited to the project and its scale." },
      { title: "Launch and support", description: "We publish to app stores or deploy to the web, with support after launch." },
    ],
    forWho: [
      "Entrepreneurs with an app idea who need a first functional product.",
      "Companies that want to digitize an internal or customer-facing process.",
      "Businesses that need an app to complement their web platform.",
      "Teams that already have an app and need to redesign or scale it.",
    ],
    includes: [
      "Definition of MVP scope and features.",
      "User experience and interface design.",
      "Product development with scalable architecture.",
      "Functional testing before launch.",
      "Support through publishing and the first iterations.",
    ],
    process: [
      { title: "Discovery", description: "We understand the problem the app needs to solve." },
      { title: "Scope definition", description: "We prioritize features for a first viable product." },
      { title: "Product design", description: "We design the flows and interface before coding." },
      { title: "Development", description: "We build the app in reviewable cycles, not as a black box." },
      { title: "Launch", description: "We publish and support the first post-launch iterations." },
    ],
    faqs: [
      { question: "Do you develop for iOS, Android or both?", answer: "We evaluate the most suitable technology with you based on the target audience and project budget." },
      { question: "Can I start with just an MVP?", answer: "That's what we recommend in most cases: validate with a minimum product before investing in additional features." },
      { question: "What happens after launch?", answer: "We offer support for adjustments, bug fixes and new iterations based on real user behavior." },
    ],
    portfolioFilter: "apps",
    relatedSlugs: ["sistemas-empresariales", "desarrollo-web", "meta-ads"],
    ctaHeading: "Let's talk about your idea.",
    ctaText: "Tell us the problem you want to solve and we'll evaluate how to build it.",
  },
  {
    slug: "sistemas-empresariales",
    category: "tecnologia",
    navTitle: "Business systems",
    title: "Custom business software and systems",
    seoTitle: "Custom business system development | Adrian Caballero Studio",
    seoDescription:
      "Custom software and internal systems development to automate processes, manage information and eliminate scattered spreadsheets.",
    summary: "Custom software that organizes internal processes that today depend on spreadsheets and loose messages.",
    intro: [
      "Many companies still operate with spreadsheets, WhatsApp messages and manual processes that eat up time and create avoidable errors.",
      "We develop custom business systems: internal management platforms, admin dashboards and tools that automate each business's specific processes.",
    ],
    whatWeDo: [
      { title: "Process diagnosis", description: "We identify which manual processes make sense to turn into software." },
      { title: "System design", description: "We define modules, user roles and information flows." },
      { title: "Custom development", description: "We build the system fitted to the business's real operation, not a generic mold." },
      { title: "Integrations", description: "We connect the system with other tools the company already uses when needed." },
    ],
    forWho: [
      "Companies managing inventory, orders or clients in scattered spreadsheets.",
      "Businesses with repetitive processes that eat up the team's time.",
      "Organizations that need an internal control panel for their operation.",
      "Companies that already have a system but have outgrown it or find it hard to maintain.",
    ],
    includes: [
      "Survey of current processes.",
      "Design of system flows and roles.",
      "Development of the platform with an admin panel.",
      "Testing with the team that will use the system day to day.",
      "Basic usage documentation.",
    ],
    process: [
      { title: "Diagnosis", description: "We review how the process to be systematized operates today." },
      { title: "System design", description: "We define modules, permissions and information flow." },
      { title: "Development", description: "We build the system in reviewable stages together with the client's team." },
      { title: "Internal testing", description: "We validate with real users before putting the system into production." },
      { title: "Rollout", description: "We support the transition from the manual process to the new system." },
    ],
    faqs: [
      { question: "Does this replace a commercial ERP?", answer: "In some cases yes, when the business needs something specific that a generic ERP doesn't handle well. We evaluate case by case." },
      { question: "How long does it take to develop an internal system?", answer: "It depends on the scope. A system focused on one specific process takes less time than a platform with multiple modules." },
      { question: "Does the team need training to use it?", answer: "Yes, we include a support stage and basic documentation for the transition from the manual process to the system." },
    ],
    portfolioFilter: "sistemas",
    relatedSlugs: ["desarrollo-apps", "desarrollo-web"],
    ctaHeading: "Is a manual process costing you time?",
    ctaText: "Tell us how your team operates today and we'll evaluate whether it makes sense to systematize it.",
  },
  {
    slug: "meta-ads",
    category: "marketing",
    navTitle: "Meta Ads",
    title: "Meta Ads advertising campaigns",
    seoTitle: "Meta Ads campaign management | Adrian Caballero Studio",
    seoDescription:
      "Professional management of Facebook and Instagram Ads campaigns: strategy, creative, targeting and continuous optimization.",
    summary: "Facebook and Instagram campaigns with original creative, real targeting and constant optimization.",
    intro: [
      "Investing in ads without a clear strategy behind them almost always ends in spend you can't explain. The problem is rarely the platform: it's the lack of creative, targeting and follow-through.",
      "We manage Meta Ads campaigns end to end: strategy, creative, technical setup and continuous optimization based on each campaign's real results.",
    ],
    whatWeDo: [
      { title: "Campaign strategy", description: "We define objective, audience and campaign structure before spending a single dollar." },
      { title: "Creative", description: "We produce or adapt pieces specifically for advertising, not reuse organic content without judgment." },
      { title: "Technical setup", description: "Pixel, conversion events and targeting set up correctly from the start." },
      { title: "Optimization", description: "Constant review of metrics to adjust budget, targeting and creative." },
    ],
    forWho: [
      "Brands already spending on ads but not seeing clear results.",
      "Businesses that want to start advertising with the right structure from day one.",
      "E-commerce that needs to generate sales consistently, not just reach.",
      "Companies that need to generate qualified leads predictably.",
    ],
    includes: [
      "Ad account, pixel and conversion event setup.",
      "Campaign strategy and targeting structure.",
      "Production or adaptation of ad creative.",
      "Ongoing budget management and optimization.",
      "Regular reports with real metrics, not vanity ones.",
    ],
    process: [
      { title: "Diagnosis", description: "We review business goals, ad account and history if it already exists." },
      { title: "Strategy", description: "We define audience, campaign objective and ad structure." },
      { title: "Creative", description: "We produce the specific pieces for each campaign." },
      { title: "Launch", description: "We set up and activate the campaigns with tracking from day one." },
      { title: "Optimization", description: "We adjust based on real results, not assumptions." },
    ],
    faqs: [
      { question: "What's the recommended minimum ad spend?", answer: "It depends on the objective and industry. We review this in the initial diagnosis to propose a realistic budget." },
      { question: "Does it include creative production?", answer: "Yes, we produce or adapt specific pieces for ads; we can also work with material the brand already has." },
      { question: "How are results reported?", answer: "With regular reports focused on business metrics: cost per result, conversions and return, not just reach or likes." },
      { question: "Do you also work with TikTok Ads or Google Ads?", answer: "Our current focus is Meta Ads. If your strategy needs other platforms, we discuss it case by case." },
    ],
    portfolioFilter: "publicidad",
    relatedSlugs: ["redes-sociales", "videos-redes-sociales", "desarrollo-web"],
    ctaHeading: "Isn't your ad spend giving you clear results?",
    ctaText: "Tell us what you've tried and we'll review together what's not working.",
  },
  {
    slug: "redes-sociales",
    category: "marketing",
    navTitle: "Social media",
    title: "Professional social media management",
    seoTitle: "Social media management and strategy | Adrian Caballero Studio",
    seoDescription:
      "Professional social media management: content strategy, editorial calendar, production and community. Purposeful content, not just filling a calendar.",
    summary: "Strategy, calendar and content production so your social media works toward a clear purpose.",
    intro: [
      "Posting every day isn't a strategy. Many brands keep their social media active without really knowing what objective each post is pursuing.",
      "We manage social media with a real content strategy: we define goals, editorial line, calendar and production, and we measure results beyond likes and followers.",
    ],
    whatWeDo: [
      { title: "Content strategy", description: "We define content pillars, brand tone and objectives per platform." },
      { title: "Editorial calendar", description: "Monthly post planning aligned with key dates and moments for the business." },
      { title: "Content production", description: "We coordinate the audiovisual and graphic production each post needs." },
      { title: "Community management", description: "We respond to and follow up on interactions, in line with the brand's voice and guidelines." },
    ],
    forWho: [
      "Brands posting without a strategy and not seeing real growth.",
      "Businesses that need a constant presence but have no in-house content team.",
      "Companies that want to integrate social media with their overall business strategy.",
      "Brands that already produce audiovisual content with us and need strategic management.",
    ],
    includes: [
      "Audit of current social media and strategy definition.",
      "Monthly editorial calendar.",
      "Coordination of content production.",
      "Publishing and basic community management.",
      "Monthly performance report per platform.",
    ],
    process: [
      { title: "Audit", description: "We review the current state of the social accounts and their historical performance." },
      { title: "Strategy", description: "We define content pillars, tone and objectives per platform." },
      { title: "Calendar", description: "We plan the month's content with set dates and topics." },
      { title: "Production and publishing", description: "We coordinate the needed production and publish according to the calendar." },
      { title: "Report and adjustment", description: "We measure results and adjust next month's strategy." },
    ],
    faqs: [
      { question: "Is content production included in social media management?", answer: "Strategy, calendar and management are. Audiovisual production is coordinated alongside the video or photography service depending on the volume needed." },
      { question: "How soon do you see results?", answer: "It depends on the starting point and the objective. We discuss this in the initial audit to set realistic expectations." },
      { question: "Do you manage all platforms or can I choose?", answer: "We decide together which platforms are worth the effort based on your audience and objectives." },
    ],
    portfolioFilter: "social",
    relatedSlugs: ["meta-ads", "videos-redes-sociales", "fotografia"],
    ctaHeading: "Does your social media need a real strategy?",
    ctaText: "Tell us how your current presence is doing and what you'd like to achieve.",
    metaCatalogId: "exouxp5uv5",
  },
];

const servicesByLocale: Record<Locale, Service[]> = { es: services, en: servicesEn };

export function getServices(locale: Locale = defaultLocale) {
  return servicesByLocale[locale];
}

export function getServiceBySlug(slug: string, locale: Locale = defaultLocale) {
  return servicesByLocale[locale].find((service) => service.slug === slug);
}

export function getRelatedServices(service: Service, locale: Locale = defaultLocale) {
  return service.relatedSlugs
    .map((slug) => getServiceBySlug(slug, locale))
    .filter((s): s is Service => Boolean(s));
}

export function getServicesByCategory(category: ServiceCategory, locale: Locale = defaultLocale) {
  return servicesByLocale[locale].filter((service) => service.category === category);
}
