import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { siteConfig } from "@/lib/site-config";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Política de privacidad",
  description: "Cómo Adrian Caballero Studio recopila, usa y protege la información de sus usuarios y clientes.",
  path: "/politica-de-privacidad",
  noIndex: true,
});

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-10 md:px-10 md:py-16">
      <Breadcrumbs items={[{ label: "Política de privacidad", href: "/politica-de-privacidad" }]} />
      <h1 className="text-3xl font-medium tracking-tight md:text-5xl">Política de privacidad</h1>
      <p className="mt-4 text-sm text-neutral-500">
        Última actualización: 13 de septiembre de 2026.
      </p>

      <div className="prose-legal mt-10 flex flex-col gap-8 text-sm leading-relaxed text-neutral-600 md:text-base">
        <section>
          <h2 className="text-lg font-medium tracking-tight text-black">1. Responsable del tratamiento</h2>
          <p className="mt-2">
            {siteConfig.legalName}, con domicilio en {siteConfig.address.city},{" "}
            {siteConfig.address.country} Barrio Paz Barhaona, 5 avenida, es responsable del
            tratamiento de los datos personales recopilados a través de este sitio web.
            Puedes contactarnos en {siteConfig.contact.email}.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium tracking-tight text-black">2. Información que recopilamos</h2>
          <p className="mt-2">
            Recopilamos la información que proporcionas voluntariamente a través del
            formulario de contacto: nombre, empresa, correo electrónico, teléfono,
            servicio de interés, presupuesto aproximado y el contenido de tu mensaje.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium tracking-tight text-black">3. Uso de la información</h2>
          <p className="mt-2">
            Utilizamos esta información exclusivamente para responder a tu solicitud,
            preparar propuestas comerciales y, si nos autorizas, mantenerte informado
            sobre nuestros servicios. No vendemos ni compartimos tus datos con terceros
            ajenos a la operación del studio.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium tracking-tight text-black">4. Cookies y analítica</h2>
          <p className="mt-2">
            Este sitio puede utilizar herramientas de analítica (como Google Analytics)
            y píxeles de publicidad (como Meta Pixel) para entender el uso del sitio y
            medir el desempeño de campañas publicitarias.  
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium tracking-tight text-black">5. Tus derechos</h2>
          <p className="mt-2">
            Puedes solicitar acceso, corrección o eliminación de tus datos personales
            escribiendo a {siteConfig.contact.email}.  
          </p>
        </section>

        <section>
          <h2 className="text-lg font-medium tracking-tight text-black">6. Cambios a esta política</h2>
          <p className="mt-2">
            Podemos actualizar esta política de privacidad ocasionalmente. La fecha de la
            última actualización se indica al inicio de este documento.
          </p>
        </section>
      </div>
    </div>
  );
}
