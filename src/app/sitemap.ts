import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/lib/data/services";
import { projects } from "@/lib/data/projects";
import { locales } from "@/lib/i18n/config";
// import { posts } from "@/lib/data/posts"; // Blog desactivado temporalmente

function localizedEntries(
  path: string,
  options: { changeFrequency: "monthly" | "yearly"; priority: number; lastModified?: Date }
): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    locales.map((locale) => [locale, `${siteConfig.url}/${locale}${path}`])
  );

  return locales.map((locale) => ({
    url: `${siteConfig.url}/${locale}${path}`,
    lastModified: options.lastModified ?? new Date(),
    changeFrequency: options.changeFrequency,
    priority: options.priority,
    alternates: { languages },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "", priority: 1 },
    { path: "/servicios", priority: 0.7 },
    { path: "/portafolio", priority: 0.7 },
    { path: "/nosotros", priority: 0.7 },
    // { path: "/blog", priority: 0.7 }, // Blog desactivado temporalmente — ver src/app/[lang]/blog/page.tsx
    { path: "/contacto", priority: 0.7 },
    { path: "/politica-de-privacidad", priority: 0.7 },
    { path: "/terminos", priority: 0.7 },
  ].flatMap(({ path, priority }) => localizedEntries(path, { changeFrequency: "monthly", priority }));

  const serviceRoutes = services.flatMap((service) =>
    localizedEntries(`/servicios/${service.slug}`, { changeFrequency: "monthly", priority: 0.8 })
  );

  const projectRoutes = projects.flatMap((project) =>
    localizedEntries(`/proyectos/${project.slug}`, { changeFrequency: "yearly", priority: 0.6 })
  );

  // Blog desactivado temporalmente — ver src/app/[lang]/blog/page.tsx
  // const postRoutes = posts.flatMap((post) =>
  //   localizedEntries(`/blog/${post.slug}`, {
  //     changeFrequency: "yearly",
  //     priority: 0.5,
  //     lastModified: new Date(post.updatedAt ?? post.publishedAt),
  //   })
  // );

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes];
}
