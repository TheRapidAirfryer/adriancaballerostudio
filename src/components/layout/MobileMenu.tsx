"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px]"
      >
        <span
          className={cn(
            "block h-px w-6 bg-black transition-transform duration-300",
            open && "translate-y-[3.5px] rotate-45"
          )}
        />
        <span
          className={cn(
            "block h-px w-6 bg-black transition-transform duration-300",
            open && "-translate-y-[3.5px] -rotate-45"
          )}
        />
      </button>

      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 z-40 flex flex-col justify-between bg-white px-6 pb-8 pt-24 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          open ? "translate-y-0" : "-translate-y-full pointer-events-none"
        )}
      >
        <nav aria-label="Navegación principal móvil">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link, i) => (
              <li
                key={link.href}
                className="border-b border-black/10 py-4"
                style={{
                  transitionDelay: open ? `${i * 40}ms` : "0ms",
                }}
              >
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-3xl font-medium tracking-tight"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link
          href="/contacto"
          onClick={() => setOpen(false)}
          className="inline-flex w-full items-center justify-center rounded-full bg-black px-6 py-4 text-base font-medium text-white"
        >
          Hablemos
        </Link>
      </div>
    </div>
  );
}
