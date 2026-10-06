import type { Locale } from "./config";

const es = {
  site: {
    tagline: "Creatividad, tecnología y estrategia para marcas que quieren avanzar.",
    description:
      "Estudio creativo y tecnológico especializado en contenido audiovisual, diseño, publicidad y desarrollo de soluciones digitales para marcas que buscan fortalecer su imagen, comunicar con mayor impacto, vender más y optimizar su operación.",
    founderRole: "Fundador y Director del Studio",
    founderBio:
      "Fundador y Director de Adrian Caballero Studio. Su trabajo integra contenido audiovisual, marketing, diseño y tecnología para crear soluciones que ayuden a las marcas a comunicar mejor, crecer y diferenciarse.",
    hours: "Lun–Sáb 8:00 AM – 5:00 PM",
  },
  skipToContent: "Saltar al contenido principal",
  header: {
    navLabel: "Navegación principal",
    logoAlt: "Adrian Caballero Studio — inicio",
    langSwitchLabel: "Cambiar idioma",
  },
  links: {
    work: "Trabajo",
    services: "Servicios",
    studio: "Studio",
    blog: "Blog",
    contact: "Contacto",
    portfolio: "Portafolio",
    privacy: "Privacidad",
    terms: "Términos",
    calendars: "Calendarios",
  },
  mobileMenu: {
    navLabel: "Navegación principal móvil",
    openLabel: "Abrir menú",
    closeLabel: "Cerrar menú",
  },
  footer: {
    ctaHeading: "¿Listo para construir algo que tu marca realmente necesita?",
    ctaLink: "Cuéntanos tu proyecto",
    servicesHeading: "Servicios",
    whatsapp: "WhatsApp",
    rights: "Todos los derechos reservados.",
  },
  breadcrumbs: {
    home: "Inicio",
    ariaLabel: "Breadcrumb",
  },
  cta: {
    defaultPrimaryLabel: "Cuéntanos tu proyecto",
    talkToUs: "Hablemos",
  },
  home: {
    metaTitle: "Adrian Caballero Studio — Contenido, diseño y tecnología",
    hero: {
      line1: "Hacemos que tu marca",
      line2: "se vea, conecte",
      line3: "y avance.",
      description:
        "Somos un estudio creativo y tecnológico. Producimos video, fotografía y campañas, y construimos los sitios, aplicaciones y sistemas que las sostienen.",
      ctaPrimary: "Cuéntanos tu proyecto",
      ctaSecondary: "Ver nuestro trabajo",
    },
    servicesOverview: {
      eyebrow: "Lo que hacemos",
      title: "Tres disciplinas, una sola forma de trabajar.",
      description:
        "Cada servicio existe por separado, pero funcionan mejor juntos: el contenido alimenta la estrategia y la tecnología sostiene todo lo demás.",
      viewAll: "Ver todos los servicios",
    },
    featuredProjects: {
      eyebrow: "Trabajo",
      title: "Proyectos recientes.",
      description: "Una muestra de cómo unimos contenido, diseño y tecnología en proyectos reales.",
      viewPortfolio: "Ver portafolio completo",
    },
    process: {
      eyebrow: "Cómo trabajamos",
      title: "Un proceso claro, de principio a fin.",
      description:
        "Te mantenemos al tanto en cada etapa, con avances claros, decisiones compartidas y resultados sin sorpresas.",
    },
    metrics: {
      trustedBrands: "Marcas que han confiado en el studio",
    },
    about: {
      eyebrow: "El Studio",
      title: "Un equipo que entiende de creatividad y de tecnología, en el mismo lugar.",
      description:
        "No trabajamos por proyectos aislados. Cada pieza de contenido, cada campaña y cada línea de código responden a un mismo objetivo: que tu marca funcione mejor, de principio a fin.",
      cta: "Conoce el studio",
    },
    latestArticles: {
      eyebrow: "Blog",
      title: "Ideas sobre contenido, tecnología y marca.",
      viewAll: "Ver todos los artículos",
    },
    finalCta: {
      heading: "¿Conversamos sobre tu proyecto?",
      description:
        "Cuéntanos qué necesita tu marca. Te respondemos con una propuesta concreta, no con un formulario genérico.",
      secondaryLabel: "Ver nuestro trabajo",
    },
  },
  servicesPage: {
    metaTitle: "Servicios",
    metaDescription:
      "Contenido, marketing y tecnología: producción audiovisual, fotografía, dron, desarrollo web, aplicaciones, sistemas empresariales, Meta Ads y redes sociales.",
    breadcrumb: "Servicios",
    eyebrow: "Servicios",
    title: "Contenido, marketing y tecnología, bajo un mismo criterio.",
    description:
      "No vendemos servicios sueltos. Cada disciplina está pensada para conectarse con las demás y sostener el crecimiento real de una marca.",
    ctaHeading: "¿No sabes por dónde empezar?",
    ctaDescription: "Cuéntanos qué necesita tu marca y te ayudamos a definir el servicio correcto.",
  },
  serviceDetail: {
    breadcrumbServices: "Servicios",
    whatWeDoEyebrow: "Qué hacemos",
    whatWeDoTitle: "El servicio, en concreto.",
    forWhoEyebrow: "Para quién",
    forWhoTitle: "¿Es esto para tu marca?",
    includesEyebrow: "Qué incluye",
    includesTitle: "Lo que vas a recibir.",
    processEyebrow: "Nuestro proceso",
    processTitle: "Cómo trabajamos este servicio.",
    examplesEyebrow: "Ejemplos",
    examplesTitle: "Proyectos relacionados.",
    viewFullPortfolio: "Ver portafolio completo →",
    faqEyebrow: "Preguntas frecuentes",
    faqTitle: "Lo que suelen preguntarnos.",
    relatedEyebrow: "Servicios relacionados",
    relatedTitle: "Con esto también suele ir de la mano.",
    viewService: "Ver servicio",
  },
  portfolioPage: {
    metaTitle: "Portafolio",
    metaDescription:
      "Proyectos de video, fotografía, dron, desarrollo web, aplicaciones, sistemas y campañas de Adrian Caballero Studio.",
    breadcrumb: "Portafolio",
    eyebrow: "Portafolio",
    title: "Proyectos reales. Resultados reales.",
    description:
      "Una selección de proyectos donde combinamos creatividad, tecnología y estrategia para fortalecer marcas, mejorar su comunicación y generar resultados.",
    ctaHeading: "¿Tienes un proyecto parecido en mente?",
    ctaDescription: "Cuéntanos qué necesitas y revisamos si encaja con lo que hacemos.",
    filterAll: "Todos",
    filterAriaLabel: "Filtrar proyectos por categoría",
    emptyCategory: "Todavía no hay proyectos publicados en esta categoría.",
  },
  projectDetail: {
    breadcrumbPortfolio: "Portafolio",
    placeholderTag: "Caso de ejemplo — pendiente de reemplazar con proyecto real",
    client: "Cliente",
    industry: "Industria",
    year: "Año",
    category: "Categoría",
    objective: "Objetivo",
    challenge: "El reto",
    solution: "La solución",
    processEyebrow: "Proceso",
    processTitle: "Cómo lo construimos.",
    contentEyebrow: "Contenido",
    videosTitle: "Videos.",
    galleryTitle: "Galería del proyecto.",
    designEyebrow: "Diseño",
    artTitle: "Artes.",
    result: "Resultado",
    usedServices: "Servicios utilizados",
    ctaHeading: "¿Tienes un proyecto parecido?",
    ctaDescription: "Cuéntanos qué necesitas y evaluamos cómo abordarlo.",
  },
  aboutPage: {
    metaTitle: "Nosotros",
    metaDescription:
      "Adrian Caballero Studio es un estudio creativo y tecnológico que une contenido, diseño y desarrollo bajo un mismo criterio de trabajo.",
    breadcrumb: "Studio",
    heroTitle: "Un estudio que combina criterio creativo y capacidad técnica real.",
    heroDescription:
      "Adrian Caballero Studio nace para resolver un problema concreto: la mayoría de las marcas contratan producción de contenido por un lado y desarrollo de tecnología por otro, y ninguno de los dos termina de conversar con el otro. Nosotros los ponemos a trabajar juntos.",
    believeEyebrow: "En qué creemos",
    believeTitle: "Lo que nos diferencia no es una lista de servicios.",
    believeDescription: "Es la forma en la que los conectamos entre sí.",
    beliefs: [
      {
        title: "El contenido sin estrategia se olvida",
        description:
          "Producir por producir no mueve una marca. Cada pieza que hacemos responde a un objetivo definido antes de encender una cámara o abrir un editor de código.",
      },
      {
        title: "La tecnología debe resolver, no solo existir",
        description:
          "Un sitio, una app o un sistema no valen por su tecnología, sino por el problema real que resuelven para el negocio y para quien lo usa.",
      },
      {
        title: "Creatividad y tecnología funcionan mejor juntas",
        description:
          "Separar el contenido de la plataforma que lo sostiene es la razón por la que muchas estrategias digitales se sienten desconectadas entre sí.",
      },
    ],
    processEyebrow: "Cómo trabajamos",
    processTitle: "Un proceso ordenado, sin fórmulas genéricas.",
    ctaHeading: "¿Quieres saber si encajamos con tu proyecto?",
    ctaDescription: "Cuéntanos en qué estás pensando y conversemos sin compromiso.",
  },
  contactPage: {
    metaTitle: "Contacto",
    metaDescription:
      "Cuéntanos tu proyecto de video, fotografía, dron, desarrollo web, aplicaciones, sistemas empresariales, Meta Ads o redes sociales.",
    breadcrumb: "Contacto",
    eyebrow: "Contacto",
    title: "Cuéntanos tu proyecto.",
    description:
      "Entre más contexto nos des, más rápido podemos responderte con algo concreto en lugar de preguntas genéricas.",
    emailLabel: "Correo",
    whatsappLabel: "WhatsApp",
    locationLabel: "Ubicación",
    hoursLabel: "Horario",
    whatsappCta: "Escríbenos por WhatsApp",
  },
  contactForm: {
    name: "Nombre",
    company: "Empresa",
    email: "Correo",
    phone: "WhatsApp / Teléfono",
    service: "Servicio de interés",
    servicePlaceholder: "Selecciona una opción",
    budget: "Presupuesto aproximado",
    budgetPlaceholder: "Opcional",
    message: "Cuéntanos sobre tu proyecto",
    submitting: "Enviando...",
    submit: "Enviar",
    errors: {
      name: "Cuéntanos tu nombre.",
      email: "Escribe un correo válido.",
      service: "Selecciona el servicio de tu interés.",
      message: "Cuéntanos un poco más sobre tu proyecto.",
    },
    fieldErrors: "Revisa los campos marcados.",
    successMessage: "Gracias. Recibimos tu mensaje y te contactaremos pronto.",
    errorMessage: "No pudimos enviar tu mensaje en este momento. Escríbenos por WhatsApp mientras lo resolvemos.",
    serviceOptions: {
      video: "Video",
      fotografia: "Fotografía",
      dron: "Dron",
      paginaWeb: "Página web",
      aplicacion: "Aplicación",
      sistemaEmpresarial: "Sistema empresarial",
      metaAds: "Meta Ads",
      redesSociales: "Redes sociales",
      otro: "Otro",
    },
    honeypotLabel: "No completar este campo",
  },
  legal: {
    privacyMetaTitle: "Política de privacidad",
    privacyMetaDescription:
      "Cómo Adrian Caballero Studio recopila, usa y protege la información de sus usuarios y clientes.",
    privacyBreadcrumb: "Política de privacidad",
    privacyTitle: "Política de privacidad",
    termsMetaTitle: "Términos y condiciones",
    termsMetaDescription: "Términos y condiciones de uso del sitio web de Adrian Caballero Studio.",
    termsBreadcrumb: "Términos",
    termsTitle: "Términos y condiciones",
    lastUpdated: "Última actualización: 13 de septiembre de 2026.",
    privacySections: [
      {
        title: "1. Responsable del tratamiento",
        body: "es responsable del tratamiento de los datos personales recopilados a través de este sitio web. Puedes contactarnos en",
      },
      {
        title: "2. Información que recopilamos",
        body: "Recopilamos la información que proporcionas voluntariamente a través del formulario de contacto: nombre, empresa, correo electrónico, teléfono, servicio de interés, presupuesto aproximado y el contenido de tu mensaje.",
      },
      {
        title: "3. Uso de la información",
        body: "Utilizamos esta información exclusivamente para responder a tu solicitud, preparar propuestas comerciales y, si nos autorizas, mantenerte informado sobre nuestros servicios. No vendemos ni compartimos tus datos con terceros ajenos a la operación del studio.",
      },
      {
        title: "4. Cookies y analítica",
        body: "Este sitio puede utilizar herramientas de analítica (como Google Analytics) y píxeles de publicidad (como Meta Pixel) para entender el uso del sitio y medir el desempeño de campañas publicitarias.",
      },
      {
        title: "5. Tus derechos",
        body: "Puedes solicitar acceso, corrección o eliminación de tus datos personales escribiendo a",
      },
      {
        title: "6. Cambios a esta política",
        body: "Podemos actualizar esta política de privacidad ocasionalmente. La fecha de la última actualización se indica al inicio de este documento.",
      },
    ],
    termsSections: [
      {
        title: "1. Aceptación de los términos",
        body: "Al acceder y utilizar este sitio web, aceptas los presentes términos y condiciones. Si no estás de acuerdo con ellos, te pedimos no utilizar el sitio.",
      },
      {
        title: "2. Propiedad intelectual",
        body: "El contenido de este sitio —textos, imágenes, video y diseño— es propiedad de {legalName} o de sus clientes, según corresponda, y no puede reproducirse sin autorización previa por escrito.",
      },
      {
        title: "3. Uso del sitio",
        body: "Te comprometes a utilizar este sitio de forma lícita y a no realizar acciones que puedan dañar, sobrecargar o afectar su funcionamiento normal.",
      },
      {
        title: "4. Servicios y cotizaciones",
        body: "La información publicada sobre servicios tiene fines informativos. Los alcances, tiempos y costos definitivos de cada proyecto se establecen en una propuesta o contrato específico entre {legalName} y el cliente.",
      },
      {
        title: "5. Enlaces a terceros",
        body: "Este sitio puede incluir enlaces a redes sociales o plataformas externas. No somos responsables del contenido ni las políticas de privacidad de esos sitios de terceros.",
      },
      {
        title: "6. Contacto",
        body: "Para consultas sobre estos términos, escríbenos a",
      },
    ],
  },
  notFound: {
    code: "404",
    title: "Esta página no existe, o todavía no la hemos construido.",
    description: "Vuelve al inicio o revisa nuestro portafolio y servicios.",
    home: "Volver al inicio",
    contact: "Contactar",
  },
  gallery: {
    viewOnTiktok: "Ver en TikTok",
    viewOnInstagram: "Ver en Instagram",
    viewOnYoutube: "Ver en YouTube",
    viewVideo: "Ver video",
    enlarge: "Ampliar",
    expandedGallery: "Galería ampliada",
    closeGallery: "Cerrar galería",
    previous: "Anterior",
    next: "Siguiente",
  },
} as const;

type Dictionary = typeof es;

function deepMerge<T>(base: T, overrides: unknown): T {
  if (Array.isArray(base)) return (overrides as T) ?? base;
  if (typeof base === "object" && base !== null && typeof overrides === "object" && overrides !== null) {
    const result: Record<string, unknown> = { ...(base as Record<string, unknown>) };
    for (const key of Object.keys(overrides as Record<string, unknown>)) {
      result[key] = deepMerge((base as Record<string, unknown>)[key], (overrides as Record<string, unknown>)[key]);
    }
    return result as T;
  }
  return (overrides as T) ?? base;
}

const enOverrides = {
  site: {
    tagline: "Creativity, technology, and strategy for brands that want to move forward.",
    description:
      "A creative technology studio specialized in audiovisual content, design, advertising, and digital solutions for brands that want a stronger image, bigger-impact communication, more sales, and a smoother-running operation.",
    founderRole: "Founder and Director of the Studio",
    founderBio:
      "Founder and Director of Adrian Caballero Studio. His work brings together audiovisual content, marketing, design and technology to build solutions that help brands communicate better, grow and stand out.",
    hours: "Mon–Sat 8:00 AM – 5:00 PM",
  },
  skipToContent: "Skip to main content",
  header: {
    navLabel: "Main navigation",
    logoAlt: "Adrian Caballero Studio — home",
    langSwitchLabel: "Switch language",
  },
  links: {
    work: "Work",
    services: "Services",
    studio: "Studio",
    blog: "Blog",
    contact: "Contact",
    portfolio: "Portfolio",
    privacy: "Privacy",
    terms: "Terms",
    calendars: "Calendars",
  },
  mobileMenu: {
    navLabel: "Mobile main navigation",
    openLabel: "Open menu",
    closeLabel: "Close menu",
  },
  footer: {
    ctaHeading: "Ready to build something your brand actually needs?",
    ctaLink: "Tell us about your project",
    servicesHeading: "Services",
    whatsapp: "WhatsApp",
    rights: "All rights reserved.",
  },
  breadcrumbs: {
    home: "Home",
    ariaLabel: "Breadcrumb",
  },
  cta: {
    defaultPrimaryLabel: "Tell us about your project",
    talkToUs: "Let's talk",
  },
  home: {
    metaTitle: "Adrian Caballero Studio — Content, design and technology",
    hero: {
      line1: "We help your brand",
      line2: "look sharp, connect,",
      line3: "and grow.",
      description:
        "We're a creative technology studio. We produce video, photography, and campaigns — and build the sites, apps, and systems that bring them to life.",
      ctaPrimary: "Tell us about your project",
      ctaSecondary: "See our work",
    },
    servicesOverview: {
      eyebrow: "What we do",
      title: "Three disciplines, one way of working.",
      description:
        "Every service stands on its own, but they're built to work together — content fuels the strategy, and technology keeps it all running.",
      viewAll: "View all services",
    },
    featuredProjects: {
      eyebrow: "Work",
      title: "Recent projects.",
      description: "A look at how we bring content, design, and technology together on real projects.",
      viewPortfolio: "View full portfolio",
    },
    process: {
      eyebrow: "How we work",
      title: "A clear process, from start to finish.",
      description: "We keep you in the loop at every stage — clear updates, shared decisions, and no surprises at the end.",
    },
    metrics: {
      trustedBrands: "Brands that trust the studio",
    },
    about: {
      eyebrow: "The Studio",
      title: "A team that gets both creativity and technology, under one roof.",
      description:
        "We don't think in one-off projects. Every piece of content, every campaign, and every line of code serves the same goal: making your brand work better, end to end.",
      cta: "Meet the studio",
    },
    latestArticles: {
      eyebrow: "Blog",
      title: "Ideas on content, technology and brand.",
      viewAll: "View all articles",
    },
    finalCta: {
      heading: "Ready to talk about your project?",
      description: "Tell us what your brand needs, and we'll come back with a real proposal — not a canned response.",
      secondaryLabel: "See our work",
    },
  },
  servicesPage: {
    metaTitle: "Services",
    metaDescription:
      "Content, marketing and technology: audiovisual production, photography, drone, web development, apps, business systems, Meta Ads and social media.",
    breadcrumb: "Services",
    eyebrow: "Services",
    title: "Content, marketing, and technology, working from the same playbook.",
    description:
      "We don't sell one-off services. Every discipline is built to connect with the others and fuel real growth for your brand.",
    ctaHeading: "Not sure where to start?",
    ctaDescription: "Tell us what your brand needs and we'll help you find the right service.",
  },
  serviceDetail: {
    breadcrumbServices: "Services",
    whatWeDoEyebrow: "What we do",
    whatWeDoTitle: "The service, in detail.",
    forWhoEyebrow: "Who it's for",
    forWhoTitle: "Is this right for your brand?",
    includesEyebrow: "What's included",
    includesTitle: "What you'll get.",
    processEyebrow: "Our process",
    processTitle: "How we approach this service.",
    examplesEyebrow: "Examples",
    examplesTitle: "Related projects.",
    viewFullPortfolio: "View full portfolio →",
    faqEyebrow: "FAQ",
    faqTitle: "Questions we hear a lot.",
    relatedEyebrow: "Related services",
    relatedTitle: "Often paired with this one.",
    viewService: "View service",
  },
  portfolioPage: {
    metaTitle: "Portfolio",
    metaDescription: "Video, photography, drone, web development, apps, systems and campaign projects by Adrian Caballero Studio.",
    breadcrumb: "Portfolio",
    eyebrow: "Portfolio",
    title: "Real projects. Real results.",
    description:
      "A selection of projects where we combine creativity, technology, and strategy to strengthen brands, sharpen their communication, and drive results.",
    ctaHeading: "Have a similar project in mind?",
    ctaDescription: "Tell us what you need and we'll see if it's a fit.",
    filterAll: "All",
    filterAriaLabel: "Filter projects by category",
    emptyCategory: "No projects published in this category yet.",
  },
  projectDetail: {
    breadcrumbPortfolio: "Portfolio",
    placeholderTag: "Example case — pending replacement with a real project",
    client: "Client",
    industry: "Industry",
    year: "Year",
    category: "Category",
    objective: "Objective",
    challenge: "The challenge",
    solution: "The solution",
    processEyebrow: "Process",
    processTitle: "How we built it.",
    contentEyebrow: "Content",
    videosTitle: "Videos.",
    galleryTitle: "Project gallery.",
    designEyebrow: "Design",
    artTitle: "Artwork.",
    result: "Result",
    usedServices: "Services used",
    ctaHeading: "Have a similar project?",
    ctaDescription: "Tell us what you need and we'll figure out how to approach it.",
  },
  aboutPage: {
    metaTitle: "About",
    metaDescription:
      "Adrian Caballero Studio is a creative technology studio that brings content, design, and development together under one roof.",
    breadcrumb: "Studio",
    heroTitle: "A studio that pairs sharp creative judgment with real technical chops.",
    heroDescription:
      "Adrian Caballero Studio was built to solve a specific problem: most brands hire content production on one side and tech development on the other, and the two rarely talk to each other. We make them work together.",
    believeEyebrow: "What we believe",
    believeTitle: "What sets us apart isn't a list of services.",
    believeDescription: "It's how we connect them.",
    beliefs: [
      {
        title: "Content without strategy gets forgotten",
        description:
          "Producing for the sake of producing doesn't move a brand. Everything we make starts with a clear goal, before we ever pick up a camera or open a code editor.",
      },
      {
        title: "Technology should solve problems, not just exist",
        description:
          "A site, an app, or a system isn't worth its tech stack — it's worth the real problem it solves for the business and the people using it.",
      },
      {
        title: "Creativity and technology work better together",
        description:
          "Separating content from the platform that powers it is why so many digital strategies end up feeling disjointed.",
      },
    ],
    processEyebrow: "How we work",
    processTitle: "An organized process, no cookie-cutter formulas.",
    ctaHeading: "Want to know if we're a fit for your project?",
    ctaDescription: "Tell us what you're thinking — no strings attached.",
  },
  contactPage: {
    metaTitle: "Contact",
    metaDescription:
      "Tell us about your video, photography, drone, web development, app, business systems, Meta Ads or social media project.",
    breadcrumb: "Contact",
    eyebrow: "Contact",
    title: "Tell us about your project.",
    description: "The more context you give us, the faster we can get back to you with something concrete instead of generic follow-up questions.",
    emailLabel: "Email",
    whatsappLabel: "WhatsApp",
    locationLabel: "Location",
    hoursLabel: "Hours",
    whatsappCta: "Message us on WhatsApp",
  },
  contactForm: {
    name: "Name",
    company: "Company",
    email: "Email",
    phone: "WhatsApp / Phone",
    service: "Service of interest",
    servicePlaceholder: "Select an option",
    budget: "Estimated budget",
    budgetPlaceholder: "Optional",
    message: "Tell us about your project",
    submitting: "Sending...",
    submit: "Send",
    errors: {
      name: "Please enter your name.",
      email: "Please enter a valid email.",
      service: "Please select a service.",
      message: "Tell us a bit more about your project.",
    },
    fieldErrors: "Check the highlighted fields.",
    successMessage: "Thanks — we got your message and will be in touch soon.",
    errorMessage: "We couldn't send your message right now. Message us on WhatsApp while we sort it out.",
    serviceOptions: {
      video: "Video",
      fotografia: "Photography",
      dron: "Drone",
      paginaWeb: "Website",
      aplicacion: "App",
      sistemaEmpresarial: "Business system",
      metaAds: "Meta Ads",
      redesSociales: "Social media",
      otro: "Other",
    },
    honeypotLabel: "Do not fill out this field",
  },
  legal: {
    privacyMetaTitle: "Privacy policy",
    privacyMetaDescription: "How Adrian Caballero Studio collects, uses and protects its users' and clients' information.",
    privacyBreadcrumb: "Privacy policy",
    privacyTitle: "Privacy policy",
    termsMetaTitle: "Terms and conditions",
    termsMetaDescription: "Terms and conditions of use for the Adrian Caballero Studio website.",
    termsBreadcrumb: "Terms",
    termsTitle: "Terms and conditions",
    lastUpdated: "Last updated: September 13, 2026.",
    privacySections: [
      {
        title: "1. Data controller",
        body: "is responsible for processing the personal data collected through this website. You can contact us at",
      },
      {
        title: "2. Information we collect",
        body: "We collect the information you voluntarily provide through the contact form: name, company, email, phone, service of interest, approximate budget and the content of your message.",
      },
      {
        title: "3. Use of information",
        body: "We use this information exclusively to respond to your request, prepare business proposals and, if you authorize it, keep you informed about our services. We do not sell or share your data with third parties outside the studio's operations.",
      },
      {
        title: "4. Cookies and analytics",
        body: "This site may use analytics tools (such as Google Analytics) and advertising pixels (such as Meta Pixel) to understand site usage and measure ad campaign performance.",
      },
      {
        title: "5. Your rights",
        body: "You can request access to, correction of, or deletion of your personal data by writing to",
      },
      {
        title: "6. Changes to this policy",
        body: "We may update this privacy policy from time to time. The date of the last update is shown at the top of this document.",
      },
    ],
    termsSections: [
      {
        title: "1. Acceptance of terms",
        body: "By accessing and using this website, you accept these terms and conditions. If you do not agree with them, please do not use the site.",
      },
      {
        title: "2. Intellectual property",
        body: "The content on this site — text, images, video and design — is the property of {legalName} or its clients, as applicable, and may not be reproduced without prior written authorization.",
      },
      {
        title: "3. Use of the site",
        body: "You agree to use this site lawfully and not to take any action that could damage, overload or affect its normal operation.",
      },
      {
        title: "4. Services and quotes",
        body: "Information published about services is for informational purposes. The final scope, timelines and costs of each project are set out in a specific proposal or contract between {legalName} and the client.",
      },
      {
        title: "5. Third-party links",
        body: "This site may include links to social media or external platforms. We are not responsible for the content or privacy policies of those third-party sites.",
      },
      {
        title: "6. Contact",
        body: "For questions about these terms, write to us at",
      },
    ],
  },
  notFound: {
    code: "404",
    title: "This page doesn't exist, or we haven't built it yet.",
    description: "Head back home or check out our portfolio and services.",
    home: "Back to home",
    contact: "Contact us",
  },
  gallery: {
    viewOnTiktok: "View on TikTok",
    viewOnInstagram: "View on Instagram",
    viewOnYoutube: "View on YouTube",
    viewVideo: "View video",
    enlarge: "Enlarge",
    expandedGallery: "Expanded gallery",
    closeGallery: "Close gallery",
    previous: "Previous",
    next: "Next",
  },
};

const en: Dictionary = deepMerge(es, enOverrides);

const dictionaries: Record<Locale, Dictionary> = { es, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary };
