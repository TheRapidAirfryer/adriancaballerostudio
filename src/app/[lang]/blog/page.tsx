import { notFound } from "next/navigation";

// Blog desactivado temporalmente — descomentar el bloque de abajo (y quitar
// este stub) junto con las entradas "/blog" en src/lib/site-config.ts y
// src/app/sitemap.ts, y el <LatestArticles /> en src/app/page.tsx, para
// reactivarlo.
export default function BlogPage() {
  notFound();
}

/*
import Link from "next/link";
import { posts, BLOG_CATEGORIES } from "@/lib/data/posts";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { cn } from "@/lib/utils";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Blog",
  description:
    "Ideas sobre producción audiovisual, fotografía, dron, desarrollo web, tecnología, redes sociales y publicidad.",
  path: "/blog",
});

interface Props {
  searchParams: Promise<{ categoria?: string }>;
}

export default async function BlogPage({ searchParams }: Props) {
  const { categoria } = await searchParams;
  const activeCategory = BLOG_CATEGORIES.find((c) => c === categoria);
  const filtered = activeCategory ? posts.filter((p) => p.category === activeCategory) : posts;

  return (
    <div className="mx-auto max-w-[1400px] px-6 py-10 md:px-10 md:py-16">
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} />
      <SectionHeading
        eyebrow="Blog"
        title="Ideas sobre contenido, tecnología y marca."
        description="Notas prácticas, sin relleno, sobre lo que aprendemos produciendo y desarrollando para marcas reales."
        className="max-w-2xl"
      />

      <div className="mt-10 flex flex-wrap gap-2">
        <Link
          href="/blog"
          className={cn(
            "rounded-full border px-4 py-2 text-sm transition-colors",
            !activeCategory ? "border-black bg-black text-white" : "border-black/20 hover:border-black"
          )}
        >
          Todas
        </Link>
        {BLOG_CATEGORIES.map((category) => (
          <Link
            key={category}
            href={`/blog?categoria=${encodeURIComponent(category)}`}
            className={cn(
              "rounded-full border px-4 py-2 text-sm transition-colors",
              activeCategory === category ? "border-black bg-black text-white" : "border-black/20 hover:border-black"
            )}
          >
            {category}
          </Link>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-12 grid gap-10 sm:grid-cols-2 md:mt-16 md:grid-cols-3">
          {filtered.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="mt-16 text-sm text-neutral-500">Todavía no hay artículos en esta categoría.</p>
      )}
    </div>
  );
}
*/
