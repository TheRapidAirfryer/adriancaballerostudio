"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Dispara el evento ViewContent del píxel de Meta para un producto del
 * catálogo (usado en páginas de servicio que también existen como producto
 * en Meta Commerce Manager, para que el ID coincida con los anuncios).
 */
export function MetaViewContent({ contentId }: { contentId: string }) {
  useEffect(() => {
    if (typeof window.fbq === "function") {
      window.fbq("track", "ViewContent", {
        content_ids: [contentId],
        content_type: "product",
      });
    }
  }, [contentId]);

  return null;
}
