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
}

export const CATEGORY_LABELS: Record<ServiceCategory, { label: string; description: string }> = {
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
      "Equipos que necesitan un sitio que puedan seguir actualizando sin depender de un desarrollador para cada cambio.",
    ],
    includes: [
      "Arquitectura del sitio y mapa de páginas.",
      "Diseño UI/UX a medida, responsive desde el primer boceto.",
      "Desarrollo con estándares modernos de rendimiento y accesibilidad.",
      "SEO técnico: metadata, sitemap, datos estructurados y velocidad.",
      "Capacitación básica o estructura de contenido editable.",
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
      { question: "¿Podré editar el contenido yo mismo?", answer: "Diseñamos la arquitectura de datos para que el contenido de portafolio y blog sea editable sin tocar código, o migrable a un CMS." },
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
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getRelatedServices(service: Service) {
  return service.relatedSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is Service => Boolean(s));
}

export function getServicesByCategory(category: ServiceCategory) {
  return services.filter((service) => service.category === category);
}
