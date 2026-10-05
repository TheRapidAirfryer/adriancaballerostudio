import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { calendarios } from "@/lib/data/calendarios";
import { buildMetadata } from "@/lib/metadata";
import { isLocale } from "@/lib/i18n/config";

interface Props {
  params: Promise<{ lang: string }>;
}

const copy = {
  es: {
    title: "Calendarios",
    description: "Calendarios de publicaciones de nuestros clientes.",
    intro: "Elige un cliente para ver su calendario de publicaciones.",
    latest: "Último calendario",
    others: "Meses anteriores",
    soon: "Próximamente",
  },
  en: {
    title: "Calendars",
    description: "Our clients' content calendars.",
    intro: "Choose a client to see their content calendar.",
    latest: "Latest calendar",
    others: "Previous months",
    soon: "Coming soon",
  },
} as const;

export async function generateMetadata({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = copy[lang];

  return {
    ...buildMetadata({
      title: t.title,
      description: t.description,
      path: "/calendarios",
      locale: lang,
      noIndex: true,
    }),
    // Al agregarla a la pantalla de inicio del celular, abre esta página y no el inicio.
    manifest: "/calendarios/app.webmanifest",
    appleWebApp: { capable: true, title: t.title, statusBarStyle: "default" },
  };
}

export default async function CalendariosPage({ params }: Props) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = copy[lang];

  return (
    <div className="mx-auto max-w-[1400px] px-6 pb-24 pt-10 md:px-10">
      <Breadcrumbs items={[{ label: t.title, href: "/calendarios" }]} lang={lang} />
      <h1 className="text-4xl font-medium leading-[1.1] tracking-tight md:text-6xl">{t.title}</h1>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">{t.intro}</p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {calendarios.map((cliente) => {
          const [ultimo, ...anteriores] = cliente.meses;
          const logo = cliente.logo ? (
            <Image src={cliente.logo} alt={cliente.name} width={300} height={200} className="h-24 w-auto object-contain" />
          ) : (
            <span className="text-2xl font-medium tracking-tight">{cliente.name}</span>
          );

          if (!ultimo) {
            return (
              <div key={cliente.slug} className="flex flex-col rounded-2xl border border-dashed border-black/15 p-6 opacity-60">
                <div className="flex h-32 items-center justify-center">{logo}</div>
                <p className="mt-6 text-lg font-medium tracking-tight">{cliente.name}</p>
                <p className="mt-1 text-sm text-neutral-500">{t.soon}</p>
              </div>
            );
          }

          return (
            <div key={cliente.slug} className="group relative flex flex-col rounded-2xl border border-black/10 p-6 transition hover:border-black/40 hover:shadow-lg">
              <div className="flex h-32 items-center justify-center">{logo}</div>
              <a
                href={`/calendarios/${cliente.slug}/${ultimo.slug}`}
                className="mt-6 text-lg font-medium tracking-tight after:absolute after:inset-0 after:content-['']"
              >
                {cliente.name}
              </a>
              <p className="mt-1 text-sm text-neutral-500">
                {t.latest}: {ultimo.label} →
              </p>
              {anteriores.length > 0 && (
                <div className="relative z-10 mt-4 border-t border-black/10 pt-3 text-xs text-neutral-500">
                  <p>{t.others}:</p>
                  <ul className="mt-1 flex flex-wrap gap-x-3 gap-y-1">
                    {anteriores.map((mes) => (
                      <li key={mes.slug}>
                        <a href={`/calendarios/${cliente.slug}/${mes.slug}`} className="hover-underline">
                          {mes.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
