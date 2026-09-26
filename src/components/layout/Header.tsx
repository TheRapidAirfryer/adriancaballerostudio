"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { locales, withLocale, type Locale } from "@/lib/i18n/config";

export function Header({ lang }: { lang: Locale }) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const dict = getDictionary(lang);
  const pathWithoutLocale = pathname.replace(new RegExp(`^/(${locales.join("|")})`), "") || "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-black/10 bg-white/90 backdrop-blur-sm"
          : "border-transparent bg-white"
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-[1400px] items-center justify-between px-6 transition-[padding] duration-300 md:px-10",
          scrolled ? "py-4" : "py-6"
        )}
      >
        <Link href={withLocale(lang, "/")} className="z-50 flex items-center" aria-label={dict.header.logoAlt}>
          <Image
            src="/logo.svg"
            alt="Adrian Caballero Studio"
            width={1108}
            height={249}
            priority
            className="h-9 w-auto md:h-10"
          />
        </Link>

        <nav aria-label={dict.header.navLabel} className="hidden md:flex md:items-center md:gap-9">
          <ul className="flex items-center gap-9">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={withLocale(lang, link.href)}
                  className="hover-underline text-sm font-medium tracking-tight"
                >
                  {dict.links[link.labelKey]}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2 text-xs font-medium tracking-wide text-neutral-500" aria-label={dict.header.langSwitchLabel}>
            {locales.map((locale, index) => (
              <span key={locale} className="flex items-center gap-2">
                {index > 0 ? <span aria-hidden>/</span> : null}
                <Link
                  href={withLocale(locale, pathWithoutLocale)}
                  className={cn("hover-underline uppercase", locale === lang && "text-black")}
                  aria-current={locale === lang ? "true" : undefined}
                >
                  {locale}
                </Link>
              </span>
            ))}
          </div>
        </nav>

        <div className="hidden md:block">
          <Link
            href={withLocale(lang, "/contacto")}
            className="inline-flex items-center justify-center rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
          >
            {dict.cta.talkToUs}
          </Link>
        </div>

        <MobileMenu lang={lang} />
      </div>
    </header>
  );
}
