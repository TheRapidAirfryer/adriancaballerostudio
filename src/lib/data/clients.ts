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
  { name: "Jfmaritimos", src: "/clients/jflogo.png" },
  { name: "Bodega Marisol", src: "/clients/marisollogo.png" },
  { name: "Trulynolen", src: "/clients/trulylogo.png" },
  { name: "Compeniel", src: "/clients/compeniellogo.png" },
  { name: "Inomoa", src: "/clients/inomoalogos.png" },
  { name: "Costello", src: "/clients/costellologo.png" },
  { name: "centpro", src: "/clients/centprologo.png" },
  { name: "MultiserviciosPremium", src: "/clients/multiservicioslogo.png" },
  { name: "SazondelaNegra", src: "/clients/sazonlogo.png" },
  { name: "Adcopro", src: "/clients/adcoprologo.png" },
  { name: "CiudadPinares", src: "/clients/ciudadpinareslogo.png" },
  { name: "Diproc", src: "/clients/diproclogo.png" },
];
