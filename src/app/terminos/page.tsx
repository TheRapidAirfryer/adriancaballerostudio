import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { siteConfig } from "@/lib/site-config";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Términos y condiciones",
  description: "Términos y condiciones de uso del sitio web de Adrian Caballero Studio.",
  path: "/terminos",
  noIndex: true,
});

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-10 md:px-10 md:py-16">
      <Breadcrumbs items={[{ label: "Términos", href: "/terminos" }]} />
      <h1 className="text-3xl font-medium tracking-tight md:text-5xl">Términos y condiciones</h1>
      <p className="mt-4 text-sm text-neutral-500">
        Última actualización: [EDITAR: fecha de publicación].
      </p>

      <div className="mt-10 flex flex-col gap-8 text-sm leading-relaxed text-neutral-600 md:text-base">
        <section>
          <h2 className="text-lg font-medium tracking-tight text-black">1. Aceptación de los términos</h2>
          <p className="mt-2">
            Al acceder y utilizar este sitio web, aceptas los presentes términos y
            condiciones. Si no estás de acuerdo con ellos, te pedimos no utilizar el
            sitio.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium tracking-tight text-black">2. Propiedad intelectual</h2>
          <p className="mt-2">
            El contenido de este sitio —textos, imágenes, video y diseño— es propiedad de
            {" "}{siteConfig.legalName} o de sus clientes, según corresponda, y no puede
            reproducirse sin autorización previa por escrito.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium tracking-tight text-black">3. Uso del sitio</h2>
          <p className="mt-2">
            Te comprometes a utilizar este sitio de forma lícita y a no realizar
            acciones que puedan dañar, sobrecargar o afectar su funcionamiento normal.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium tracking-tight text-black">4. Servicios y cotizaciones</h2>
          <p className="mt-2">
            La información publicada sobre servicios tiene fines informativos. Los
            alcances, tiempos y costos definitivos de cada proyecto se establecen en una
            propuesta o contrato específico entre {siteConfig.legalName} y el cliente.
            [EDITAR: ajustar según los términos comerciales reales del studio.]
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium tracking-tight text-black">5. Enlaces a terceros</h2>
          <p className="mt-2">
            Este sitio puede incluir enlaces a redes sociales o plataformas externas. No
            somos responsables del contenido ni las políticas de privacidad de esos
            sitios de terceros.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium tracking-tight text-black">6. Contacto</h2>
          <p className="mt-2">
            Para consultas sobre estos términos, escríbenos a {siteConfig.contact.email}.
          </p>
        </section>
      </div>
    </div>
  );
}
