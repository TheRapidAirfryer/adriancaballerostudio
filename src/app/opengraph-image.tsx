import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0a",
          color: "#ffffff",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 4, opacity: 0.7 }}>
          ADRIAN CABALLERO STUDIO
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ display: "flex", fontSize: 56, fontWeight: 600, letterSpacing: -2, maxWidth: 900 }}>
            {siteConfig.tagline}
          </div>
          <div style={{ display: "flex", fontSize: 26, opacity: 0.6 }}>
            Contenido, diseño y tecnología.
          </div>
        </div>
      </div>
    ),
    size
  );
}
