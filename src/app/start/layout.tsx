import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Analytics, GtmNoScript, MetaPixelNoScript } from "@/components/analytics/Analytics";
import { siteConfig } from "@/lib/site-config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Book a Discovery Call | Adrian Caballero Studio",
  description:
    "Book a paid 30-minute discovery call to discuss your website, app, business system, or video project with Adrian Caballero Studio.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/start" },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function StartLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <Analytics />
      </head>
      <body className="min-h-full bg-white text-black">
        <GtmNoScript />
        <MetaPixelNoScript />
        {children}
      </body>
    </html>
  );
}
