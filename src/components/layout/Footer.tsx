import Link from "next/link";
import { FOOTER_LINKS, siteConfig } from "@/lib/site-config";
import { services } from "@/lib/data/services";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto max-w-[1400px] px-6 pb-10 pt-16 md:px-10 md:pt-24">
        <div className="mb-16 md:mb-24">
          <p className="max-w-3xl text-2xl font-medium tracking-tight text-balance md:text-4xl">
            ¿Listo para construir algo que tu marca realmente necesita?
          </p>
          <Link
            href="/contacto"
            className="hover-underline mt-6 inline-flex items-center gap-2 text-lg font-medium"
          >
            Cuéntanos tu proyecto
            <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-10 border-t border-black/10 pt-12 md:grid-cols-5">
          <div className="col-span-2">
            <p className="text-sm font-semibold tracking-tight">ADRIAN CABALLERO STUDIO</p>
            <p className="mt-3 max-w-xs text-sm text-neutral-500">{siteConfig.description}</p>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-wide text-neutral-500">Servicios</p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/servicios/${service.slug}`}
                    className="hover-underline text-sm text-neutral-700"
                  >
                    {service.navTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-wide text-neutral-500">Studio</p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {FOOTER_LINKS.studio.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover-underline text-sm text-neutral-700">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-wide text-neutral-500">Contacto</p>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-neutral-700">
              <li>
                <a href={`mailto:${siteConfig.contact.email}`} className="hover-underline">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-underline"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-underline"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-underline"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-underline"
                >
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse items-start justify-between gap-4 border-t border-black/10 pt-6 text-xs text-neutral-500 md:flex-row md:items-center">
          <p>© {year} {siteConfig.name}. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            {FOOTER_LINKS.legal.map((link) => (
              <Link key={link.href} href={link.href} className="hover-underline">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
