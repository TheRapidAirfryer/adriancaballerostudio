export interface ClientLogo {
  name: string;
  /** Ruta del archivo en /public, ej. "/clients/nombre-cliente.png". */
  src?: string;
}

/**
 * No inventamos clientes ni logos. Mientras no haya un logo real, el slot
 * se muestra como texto placeholder; en cuanto agregues el archivo a
 * /public/clients/ y completes "src" aquí, se reemplaza automáticamente.
 */
export const clients: ClientLogo[] = [
  { name: "Diproc", src: "/clients/jflogo.png" },
  { name: "Diproc", src: "/clients/marisollogo.png" },
  { name: "Diproc", src: "/clients/trulylogo.png" },
  { name: "Diproc", src: "/clients/compeniellogo.png" },
  { name: "Diproc", src: "/clients/inomoalogos.png" },
  { name: "Diproc", src: "/clients/diproclogo.png" },
];
