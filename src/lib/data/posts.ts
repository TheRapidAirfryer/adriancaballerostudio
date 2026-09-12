/**
 * Contenido del blog como datos estructurados (JSON tipado), pensado para
 * ser fácilmente migrable a un CMS headless (Sanity u otro) sin cambiar los
 * componentes que lo consumen.
 */

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string; id: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string };

export interface BlogPost {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  category: string;
  excerpt: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  content: ContentBlock[];
  relatedServiceSlugs: string[];
}

export const BLOG_CATEGORIES = [
  "Marketing",
  "Video",
  "Producción audiovisual",
  "Fotografía",
  "Dron",
  "Desarrollo web",
  "Tecnología",
  "Redes sociales",
  "Publicidad",
] as const;

export const posts: BlogPost[] = [
  {
    slug: "por-que-tus-videos-para-redes-no-generan-resultados",
    title: "Por qué la mayoría de los videos para redes sociales no generan resultados",
    seoTitle: "Por qué tus videos para redes sociales no generan resultados",
    seoDescription:
      "La mayoría de los videos para redes fallan antes de grabarse. Estas son las razones más comunes y cómo evitarlas en tu próxima producción.",
    category: "Video",
    excerpt:
      "Casi nunca es un problema de cámara o de plataforma. El problema empieza antes: en la falta de un guion con intención.",
    publishedAt: "2025-08-12",
    author: "Adrian Caballero Studio",
    relatedServiceSlugs: ["videos-redes-sociales", "redes-sociales"],
    content: [
      {
        type: "paragraph",
        text: "Es común escuchar que \"el algoritmo ya no favorece a las marcas\" o que \"el video corto ya no funciona como antes\". La realidad, en la mayoría de los casos, es más simple e incómoda: el video no tenía una razón clara para existir.",
      },
      { type: "heading", level: 2, text: "El error empieza antes de grabar", id: "el-error-empieza-antes" },
      {
        type: "paragraph",
        text: "Cuando un video se graba sin guion, sin gancho definido y sin un mensaje central, ninguna edición lo va a salvar después. La edición puede mejorar el ritmo, pero no puede inventar un mensaje que nunca existió.",
      },
      {
        type: "list",
        items: [
          "No hay un gancho en los primeros dos segundos.",
          "El mensaje central no está claro ni para quien lo grabó.",
          "Se graba pensando en la cámara y no en quien lo va a ver.",
          "No existe una llamada a la acción, ni implícita ni explícita.",
        ],
      },
      { type: "heading", level: 2, text: "El formato no es la estrategia", id: "el-formato-no-es-la-estrategia" },
      {
        type: "paragraph",
        text: "Publicar en formato vertical no es una estrategia de contenido. Es un formato. La estrategia es decidir qué va a comunicar la marca, a quién y con qué frecuencia, y el formato es simplemente el vehículo.",
      },
      {
        type: "quote",
        text: "Un video con guion y sin presupuesto de producción suele superar a un video costoso sin guion.",
      },
      { type: "heading", level: 2, text: "Qué cambia con un proceso real de producción", id: "que-cambia-con-produccion" },
      {
        type: "paragraph",
        text: "Cuando el video pasa por una etapa de guion, planificación de rodaje y edición con criterio, el resultado deja de depender de la suerte. No garantiza viralidad —nadie puede prometer eso honestamente— pero sí garantiza que la pieza comunica lo que la marca necesita comunicar.",
      },
      {
        type: "paragraph",
        text: "Si tu marca necesita ordenar la producción de contenido para redes, en nuestro servicio de producción de video para redes sociales explicamos cómo estructuramos ese proceso.",
      },
    ],
  },
  {
    slug: "senales-de-que-tu-sitio-web-te-esta-costando-clientes",
    title: "Señales de que tu sitio web le está costando clientes a tu negocio",
    seoTitle: "Señales de que tu sitio web le está costando clientes",
    seoDescription:
      "Un sitio lento, desordenado o invisible en Google no está ayudando a tu negocio. Estas son las señales más comunes de que necesita un rediseño.",
    category: "Desarrollo web",
    excerpt:
      "No siempre es evidente. Un sitio puede verse bien y seguir alejando clientes por razones que no se notan a simple vista.",
    publishedAt: "2025-07-20",
    author: "Adrian Caballero Studio",
    relatedServiceSlugs: ["desarrollo-web", "meta-ads"],
    content: [
      {
        type: "paragraph",
        text: "Un sitio web mal construido rara vez se anuncia como tal. No hay una alerta que diga \"esta página está perdiendo clientes\". Se manifiesta en cosas más sutiles: menos consultas de las esperadas, tráfico que llega y se va rápido, o simplemente no aparecer cuando alguien busca el servicio en Google.",
      },
      { type: "heading", level: 2, text: "1. Tarda más de tres segundos en cargar", id: "tarda-en-cargar" },
      {
        type: "paragraph",
        text: "La velocidad de carga no es un detalle técnico menor: es una de las razones principales de abandono, especialmente en móvil. Si tu sitio tarda en mostrar contenido, una parte importante de las visitas se va antes de leer una sola palabra.",
      },
      { type: "heading", level: 2, text: "2. No aparece en Google para lo que ofreces", id: "no-aparece-en-google" },
      {
        type: "paragraph",
        text: "Si buscas el servicio que ofrece tu negocio y tu sitio no aparece en las primeras posiciones, probablemente no fue construido pensando en SEO desde el inicio. Esto no se soluciona agregando palabras clave después: requiere una arquitectura pensada para eso desde el principio.",
      },
      { type: "heading", level: 2, text: "3. No queda claro qué se supone que hagas al entrar", id: "no-queda-claro-que-hacer" },
      {
        type: "list",
        items: [
          "No hay una llamada a la acción visible en la primera pantalla.",
          "El menú de navegación tiene demasiadas opciones sin jerarquía.",
          "El formulario de contacto está escondido varios clics después.",
        ],
      },
      { type: "heading", level: 2, text: "4. Se ve distinto —y peor— en el celular", id: "se-ve-peor-en-movil" },
      {
        type: "paragraph",
        text: "La mayoría del tráfico de un sitio hoy llega desde el celular. Un sitio que fue diseñado primero para escritorio y luego \"adaptado\" a móvil casi siempre se siente incómodo de usar, aunque técnicamente sea responsive.",
      },
      {
        type: "paragraph",
        text: "Si alguna de estas señales te resulta familiar, en nuestro servicio de diseño y desarrollo de páginas web explicamos cómo abordamos la arquitectura, la velocidad y el SEO desde el primer boceto.",
      },
    ],
  },
  {
    slug: "como-saber-si-tu-marca-necesita-un-sistema-a-medida",
    title: "Cómo saber si tu marca necesita un sistema a medida (y cuándo no)",
    seoTitle: "Cómo saber si tu empresa necesita un sistema a medida",
    seoDescription:
      "No todos los procesos internos necesitan software a medida. Estas son las señales que indican cuándo sí tiene sentido y cuándo conviene esperar.",
    category: "Tecnología",
    excerpt:
      "Desarrollar un sistema a medida no siempre es la respuesta correcta. Estas son las señales que ayudan a decidir.",
    publishedAt: "2025-06-15",
    author: "Adrian Caballero Studio",
    relatedServiceSlugs: ["sistemas-empresariales", "desarrollo-apps"],
    content: [
      {
        type: "paragraph",
        text: "Un sistema a medida es una inversión, no un gasto menor. Antes de construir uno, vale la pena preguntarse si el proceso realmente lo necesita o si un ajuste más simple resuelve el problema por ahora.",
      },
      { type: "heading", level: 2, text: "Señales de que sí tiene sentido", id: "senales-si" },
      {
        type: "list",
        items: [
          "El proceso se repite todos los días y consume horas del equipo.",
          "La información vive en varias hojas de cálculo que nadie termina de conciliar.",
          "Los errores manuales ya generaron pérdidas concretas (dinero, tiempo o clientes).",
          "El negocio dejó de caber en las herramientas genéricas que usa hoy.",
        ],
      },
      { type: "heading", level: 2, text: "Señales de que todavía no", id: "senales-todavia-no" },
      {
        type: "list",
        items: [
          "El proceso ocurre pocas veces al mes y no genera fricción real.",
          "Una plantilla o herramienta ya existente resuelve el 80% del problema.",
          "El equipo aún no tiene claro cómo debería funcionar el proceso ideal.",
        ],
      },
      { type: "heading", level: 2, text: "Empezar por el diagnóstico, no por el desarrollo", id: "empezar-por-diagnostico" },
      {
        type: "paragraph",
        text: "El error más común es saltar directo a \"necesitamos una app\" sin entender primero el proceso que se quiere resolver. Un buen sistema empresarial empieza con un diagnóstico honesto de cómo opera el negocio hoy, no con una lista de funcionalidades deseadas.",
      },
      {
        type: "paragraph",
        text: "Si quieres revisar si tu proceso interno es un buen candidato para un sistema a medida, en nuestro servicio de sistemas empresariales explicamos cómo hacemos ese diagnóstico antes de escribir una sola línea de código.",
      },
    ],
  },
  {
    slug: "meta-ads-sin-creatividad-propia-no-funciona",
    title: "Meta Ads: por qué invertir en pauta sin creatividad propia no funciona",
    seoTitle: "Por qué la pauta en Meta Ads no funciona sin creatividad propia",
    seoDescription:
      "La segmentación correcta no compensa una creatividad débil. Por qué el contenido es la variable que más afecta el resultado de una campaña.",
    category: "Publicidad",
    excerpt:
      "La segmentación importa, pero la variable que más mueve el resultado de una campaña sigue siendo la creatividad.",
    publishedAt: "2025-05-30",
    author: "Adrian Caballero Studio",
    relatedServiceSlugs: ["meta-ads", "videos-redes-sociales"],
    content: [
      {
        type: "paragraph",
        text: "Es común pensar que el éxito de una campaña en Meta Ads depende sobre todo de la segmentación: encontrar a la audiencia correcta. La segmentación importa, pero las plataformas publicitarias han optimizado tanto ese proceso que hoy la variable que más diferencia a una campaña buena de una mediocre es la creatividad.",
      },
      { type: "heading", level: 2, text: "Reutilizar contenido orgánico no es una estrategia de pauta", id: "reutilizar-contenido" },
      {
        type: "paragraph",
        text: "Un video pensado para consumo orgánico y uno pensado para pauta no son lo mismo. El primero necesita enganchar en un feed que el usuario controla; el segundo interrumpe un contenido que la persona no pidió ver, y tiene menos margen de error en el gancho inicial.",
      },
      { type: "heading", level: 2, text: "Qué sí mueve el resultado", id: "que-mueve-el-resultado" },
      {
        type: "list",
        items: [
          "Un gancho claro en los primeros segundos, pensado específicamente para interrumpir el scroll.",
          "Múltiples variaciones creativas probadas en paralelo, no una sola pieza para toda la campaña.",
          "Mensajes ajustados a cada etapa del embudo, no el mismo video para todos los objetivos.",
          "Una estructura de campaña y segmentación configurada correctamente desde la base.",
        ],
      },
      {
        type: "quote",
        text: "Una segmentación perfecta con una creatividad débil sigue dando resultados débiles.",
      },
      {
        type: "paragraph",
        text: "Por eso gestionamos Meta Ads junto con la producción de las creatividades: no tiene sentido separar la estrategia de pauta de las piezas que finalmente van a competir por la atención de alguien en su feed.",
      },
    ],
  },
  {
    slug: "fotografia-de-producto-y-ventas-en-ecommerce",
    title: "Fotografía de producto: el detalle que más afecta las ventas en e-commerce",
    seoTitle: "Cómo la fotografía de producto afecta las ventas en e-commerce",
    seoDescription:
      "En una tienda en línea la fotografía reemplaza al vendedor. Por qué la consistencia visual del catálogo importa más de lo que parece.",
    category: "Fotografía",
    excerpt:
      "En una tienda física alguien puede tocar el producto. En una tienda en línea, la fotografía es lo único que tiene el cliente para decidir.",
    publishedAt: "2025-04-18",
    author: "Adrian Caballero Studio",
    relatedServiceSlugs: ["fotografia", "desarrollo-web"],
    content: [
      {
        type: "paragraph",
        text: "En un local físico, un cliente puede tocar el producto, verlo de cerca y resolver dudas con un vendedor. En una tienda en línea, la fotografía tiene que hacer todo ese trabajo sola.",
      },
      { type: "heading", level: 2, text: "La consistencia importa más que la perfección de una sola foto", id: "consistencia-importa" },
      {
        type: "paragraph",
        text: "Un catálogo con fotografías de distintos estilos, fondos e iluminación —aunque cada una sea bonita por separado— transmite desorden. La percepción de calidad de una tienda en línea depende mucho de que su catálogo se sienta como un solo sistema visual coherente.",
      },
      { type: "heading", level: 2, text: "Qué debería resolver una buena sesión de producto", id: "que-deberia-resolver" },
      {
        type: "list",
        items: [
          "Mostrar el producto con precisión de color y detalle real.",
          "Mantener un mismo criterio de iluminación y fondo en todo el catálogo.",
          "Contemplar los formatos y proporciones que necesita la plataforma de venta.",
          "Incluir tomas de detalle que resuelvan las dudas más comunes del comprador.",
        ],
      },
      {
        type: "paragraph",
        text: "Cuando el catálogo se produce con esos criterios desde el inicio, no solo se ve mejor: reduce dudas antes de la compra, y eso impacta directamente en la tasa de conversión de la tienda.",
      },
    ],
  },
  {
    slug: "publicar-todos-los-dias-no-es-una-estrategia",
    title: "Redes sociales: por qué publicar todos los días no es una estrategia",
    seoTitle: "Por qué publicar todos los días no es una estrategia de redes sociales",
    seoDescription:
      "La frecuencia de publicación no es el objetivo. Por qué es más importante definir pilares de contenido antes que un calendario diario.",
    category: "Redes sociales",
    excerpt:
      "La frecuencia es una táctica, no un objetivo. Sin una estrategia detrás, publicar seguido solo acelera el ritmo de nada.",
    publishedAt: "2025-03-10",
    author: "Adrian Caballero Studio",
    relatedServiceSlugs: ["redes-sociales", "meta-ads"],
    content: [
      {
        type: "paragraph",
        text: "\"Hay que publicar todos los días\" es uno de los consejos más repetidos en redes sociales, y también uno de los más incompletos. La frecuencia sin dirección solo produce más contenido, no mejores resultados.",
      },
      { type: "heading", level: 2, text: "Antes del calendario, los pilares de contenido", id: "pilares-de-contenido" },
      {
        type: "paragraph",
        text: "Antes de decidir cuántas veces por semana publicar, hay una pregunta más importante: ¿de qué va a hablar la marca, consistentemente, en sus redes? Sin pilares de contenido definidos, cada publicación se decide sobre la marcha, y eso se nota.",
      },
      { type: "heading", level: 2, text: "Qué medir en lugar de solo la frecuencia", id: "que-medir" },
      {
        type: "list",
        items: [
          "Qué tipo de contenido genera guardados y compartidos, no solo likes.",
          "Qué publicaciones llevan tráfico real hacia el sitio web o el contacto.",
          "Cómo evoluciona la calidad de la conversación en los comentarios.",
        ],
      },
      {
        type: "quote",
        text: "Tres publicaciones semanales con una línea editorial clara suelen rendir más que siete sin ninguna.",
      },
      {
        type: "paragraph",
        text: "La gestión de redes sociales funciona mejor cuando se trata como una extensión de la estrategia comercial del negocio, no como una tarea aislada de \"mantener la cuenta activa\".",
      },
    ],
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function getRelatedPosts(post: BlogPost, limit = 3) {
  return posts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, limit);
}

export function getPostsByCategory(category: string) {
  return posts.filter((post) => post.category === category);
}
