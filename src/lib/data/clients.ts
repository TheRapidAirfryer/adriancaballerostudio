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
  { name: "Diproc", src: "/clients/diproclogo.png" },
  { name: "[EDITAR: Logo cliente 2]" },
  { name: "[EDITAR: Logo cliente 3]" },
  { name: "[EDITAR: Logo cliente 4]" },
  { name: "[EDITAR: Logo cliente 5]" },
  { name: "[EDITAR: Logo cliente 6]" },
];
