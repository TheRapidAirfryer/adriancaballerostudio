"use client";

import { useCallback, useEffect, useState } from "react";
import { PlaceholderMedia } from "./PlaceholderMedia";
import { mediaRatio, type ProjectMedia } from "@/lib/data/projects";
import { getDictionary, type Dictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";

function platformLabel(href: string, dict: Dictionary) {
  if (href.includes("tiktok.com")) return dict.gallery.viewOnTiktok;
  if (href.includes("instagram.com")) return dict.gallery.viewOnInstagram;
  if (href.includes("youtube.com") || href.includes("youtu.be")) return dict.gallery.viewOnYoutube;
  return dict.gallery.viewVideo;
}

export function ImageGallery({ items, lang }: { items: ProjectMedia[]; lang: Locale }) {
  const dict = getDictionary(lang);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i - 1 + items.length) % items.length)),
    [items.length]
  );
  const showNext = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % items.length)),
    [items.length]
  );

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [activeIndex, close, showPrev, showNext]);

  return (
    <>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {items.map((item, index) =>
          item.href ? (
            <a
              key={`${item.label}-${index}`}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block text-left transition-opacity duration-300 hover:opacity-80"
              aria-label={`${platformLabel(item.href, dict)}: ${item.label}`}
            >
              <PlaceholderMedia label={item.label} src={item.src} ratio={mediaRatio(item)} />
              <span className="pointer-events-none absolute bottom-2 right-2 rounded-full bg-black/70 px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {platformLabel(item.href, dict)}
              </span>
            </a>
          ) : (
            <button
              key={`${item.label}-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="text-left transition-opacity duration-300 hover:opacity-80"
              aria-label={`${dict.gallery.enlarge}: ${item.label}`}
            >
              <PlaceholderMedia label={item.label} src={item.src} ratio={mediaRatio(item)} />
            </button>
          )
        )}
      </div>

      {activeIndex !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={dict.gallery.expandedGallery}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-6"
        >
          <button
            type="button"
            onClick={close}
            aria-label={dict.gallery.closeGallery}
            className="absolute right-6 top-6 text-3xl font-light text-white"
          >
            ×
          </button>
          <button
            type="button"
            onClick={showPrev}
            aria-label={dict.gallery.previous}
            className="absolute left-4 text-3xl font-light text-white md:left-8"
          >
            ‹
          </button>
          <div className="w-full max-w-3xl">
            <PlaceholderMedia
              label={items[activeIndex].label}
              src={items[activeIndex].src}
              ratio={mediaRatio(items[activeIndex])}
              dark
              className="border-white/20"
            />
          </div>
          <button
            type="button"
            onClick={showNext}
            aria-label={dict.gallery.next}
            className="absolute right-4 text-3xl font-light text-white md:right-8"
          >
            ›
          </button>
        </div>
      ) : null}
    </>
  );
}
