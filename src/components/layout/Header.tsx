"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

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
        <Link href="/" className="z-50 flex items-center" aria-label="Adrian Caballero Studio — inicio">
          <Image
            src="/logo.svg"
            alt="Adrian Caballero Studio"
            width={220}
            height={40}
            priority
            className="h-8 w-auto md:h-9"
          />
        </Link>

        <nav aria-label="Navegación principal" className="hidden md:block">
          <ul className="flex items-center gap-9">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover-underline text-sm font-medium tracking-tight"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
          >
            Hablemos
          </Link>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
