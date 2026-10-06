import { defaultLocale, type Locale } from "@/lib/i18n/config";

const processStepsEs = [
  {
    number: "01",
    title: "Entender",
    description: "Escuchamos el negocio antes de proponer nada. Sin diagnóstico, cualquier solución es una adivinanza.",
  },
  {
    number: "02",
    title: "Diseñar",
    description: "Definimos la estrategia, la dirección creativa o la arquitectura técnica según lo que el proyecto necesite.",
  },
  {
    number: "03",
    title: "Producir",
    description: "Ejecutamos con el equipo y las herramientas correctas, sin atajos que se noten después.",
  },
  {
    number: "04",
    title: "Medir y ajustar",
    description: "Revisamos resultados reales y ajustamos. Un proyecto no termina en la entrega inicial.",
  },
];

const processStepsEn = [
  {
    number: "01",
    title: "Understand",
    description: "We listen to the business before proposing anything. Without a diagnosis, any solution is a guess.",
  },
  {
    number: "02",
    title: "Design",
    description: "We define the strategy, creative direction or technical architecture the project needs.",
  },
  {
    number: "03",
    title: "Produce",
    description: "We execute with the right team and tools — no shortcuts that come back to bite you later.",
  },
  {
    number: "04",
    title: "Measure and adjust",
    description: "We review real results and adjust. A project doesn't end at initial delivery.",
  },
];

const homeMetricsEs = [
  { value: "+100", label: "Proyectos entregados", isPlaceholder: false },
  { value: "+25", label: "Marcas acompañadas", isPlaceholder: false },
  { value: "+5", label: "Años de experiencia", isPlaceholder: false },
  { value: "9", label: "Servicios integrados", isPlaceholder: false },
];

const homeMetricsEn = [
  { value: "+100", label: "Projects delivered", isPlaceholder: false },
  { value: "+25", label: "Brands supported", isPlaceholder: false },
  { value: "+5", label: "Years of experience", isPlaceholder: false },
  { value: "9", label: "Integrated services", isPlaceholder: false },
];

export function getProcessSteps(locale: Locale = defaultLocale) {
  return locale === "en" ? processStepsEn : processStepsEs;
}

export function getHomeMetrics(locale: Locale = defaultLocale) {
  return locale === "en" ? homeMetricsEn : homeMetricsEs;
}

/** @deprecated Usa getProcessSteps(locale). Se mantiene para compatibilidad con el español por defecto. */
export const processSteps = processStepsEs;
/** @deprecated Usa getHomeMetrics(locale). Se mantiene para compatibilidad con el español por defecto. */
export const homeMetrics = homeMetricsEs;
