import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  // Calendarios de publicaciones para clientes: cada mes es un HTML estático en
  // public/calendarios/<cliente>/<mes>/index.html, servido en /calendarios/<cliente>/<mes>.
  async rewrites() {
    return [
      {
        source: "/calendarios/:cliente/:mes",
        destination: "/calendarios/:cliente/:mes/index.html",
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
