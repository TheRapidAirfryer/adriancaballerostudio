export interface CalendarioMes {
  /** Carpeta del mes en public/calendarios/<cliente>/, ej. "octubre-2026". */
  slug: string;
  /** Nombre que se muestra, ej. "Octubre 2026". */
  label: string;
}

export interface ClienteCalendario {
  /** Carpeta del cliente en public/calendarios/, ej. "jfmaritimos". */
  slug: string;
  name: string;
  /** Logo en /public, ej. "/clients/jflogo.png". Sin logo se muestra el nombre. */
  logo?: string;
  /** Meses publicados, el más reciente primero. Vacío = "Próximamente". */
  meses: CalendarioMes[];
}

/**
 * Para agregar un mes: sube su index.html a public/calendarios/<cliente>/<mes-anio>/
 * y ponlo al inicio de "meses". Para un cliente nuevo, agrega otro bloque aquí.
 */
export const calendarios: ClienteCalendario[] = [
  {
    slug: "jfmaritimos",
    name: "JF Marítimos",
    logo: "/clients/jflogo.png",
    meses: [{ slug: "octubre-2026", label: "Octubre 2026" }],
  },
  {
    slug: "zltlogistics",
    name: "ZLT Logistics",
    logo: "/clients/zltlogo.png",
    meses: [{ slug: "octubre-2026", label: "Octubre 2026" }],
  },
  {
    slug: "trulynolen",
    name: "Truly Nolen",
    logo: "/clients/trulylogo.png",
    meses: [],
  },
  {
    slug: "bodegamarisol",
    name: "Bodega Marisol",
    logo: "/clients/marisollogo.png",
    meses: [],
  },
];
