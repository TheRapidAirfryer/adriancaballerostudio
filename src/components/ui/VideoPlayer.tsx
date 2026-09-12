"use client";

import { useState } from "react";
import { PlaceholderMedia } from "./PlaceholderMedia";
import { cn } from "@/lib/utils";

interface VideoPlayerProps {
  posterLabel: string;
  src?: string;
  embedUrl?: string;
  orientation?: "horizontal" | "vertical";
  className?: string;
}

/**
 * Facade de video: no carga ningún recurso pesado hasta que la persona
 * decide reproducir. Evita penalizar LCP/INP con iframes o video
 * precargado que nadie pidió ver todavía.
 */
export function VideoPlayer({
  posterLabel,
  src,
  embedUrl,
  orientation = "horizontal",
  className,
}: VideoPlayerProps) {
  const [playing, setPlaying] = useState(false);

  if (playing && embedUrl) {
    return (
      <div
        className={cn(
          "overflow-hidden bg-black",
          orientation === "vertical" ? "aspect-[9/16]" : "aspect-video",
          className
        )}
      >
        <iframe
          src={embedUrl}
          title={posterLabel}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
    );
  }

  if (playing && src) {
    return (
      <video
        controls
        autoPlay
        playsInline
        className={cn(
          "bg-black object-cover",
          orientation === "vertical" ? "aspect-[9/16]" : "aspect-video",
          className
        )}
      >
        <source src={src} />
      </video>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Reproducir: ${posterLabel}`}
      className={cn("group relative block w-full text-left", className)}
    >
      <PlaceholderMedia
        label={posterLabel}
        ratio={orientation === "vertical" ? "portrait" : "video"}
        dark
      />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 transition-transform duration-300 group-hover:scale-110">
          <svg width="18" height="20" viewBox="0 0 18 20" fill="none" aria-hidden>
            <path d="M17 9.13L1.5 19V0L17 9.13Z" fill="black" />
          </svg>
        </span>
      </span>
    </button>
  );
}
