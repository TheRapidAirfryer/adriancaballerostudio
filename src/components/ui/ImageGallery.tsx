"use client";

import { useCallback, useEffect, useState } from "react";
import { PlaceholderMedia } from "./PlaceholderMedia";
import type { ProjectMedia } from "@/lib/data/projects";

function ratioFor(item: ProjectMedia) {
  return item.type === "video-vertical" ? "portrait" : "video";
}

export function ImageGallery({ items }: { items: ProjectMedia[] }) {
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
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {items.map((item, index) => (
          <button
            key={`${item.label}-${index}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="text-left transition-opacity duration-300 hover:opacity-80"
            aria-label={`Ampliar: ${item.label}`}
          >
            <PlaceholderMedia label={item.label} src={item.src} ratio={ratioFor(item)} />
          </button>
        ))}
      </div>

      {activeIndex !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Galería ampliada"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-6"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Cerrar galería"
            className="absolute right-6 top-6 text-3xl font-light text-white"
          >
            ×
          </button>
          <button
            type="button"
            onClick={showPrev}
            aria-label="Anterior"
            className="absolute left-4 text-3xl font-light text-white md:left-8"
          >
            ‹
          </button>
          <div className="w-full max-w-3xl">
            <PlaceholderMedia
              label={items[activeIndex].label}
              src={items[activeIndex].src}
              ratio={ratioFor(items[activeIndex])}
              dark
              className="border-white/20"
            />
          </div>
          <button
            type="button"
            onClick={showNext}
            aria-label="Siguiente"
            className="absolute right-4 text-3xl font-light text-white md:right-8"
          >
            ›
          </button>
        </div>
      ) : null}
    </>
  );
}
