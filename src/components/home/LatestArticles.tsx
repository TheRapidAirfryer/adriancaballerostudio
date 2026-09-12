import Link from "next/link";
import { posts } from "@/lib/data/posts";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function LatestArticles() {
  const latest = posts.slice(0, 3);

  return (
    <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
      <RevealOnScroll>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Blog" title="Ideas sobre contenido, tecnología y marca." />
          <Link href="/blog" className="hover-underline hidden shrink-0 items-center gap-2 text-sm font-medium md:inline-flex">
            Ver todos los artículos
            <span aria-hidden>→</span>
          </Link>
        </div>
      </RevealOnScroll>

      <div className="mt-12 grid gap-10 sm:grid-cols-2 md:mt-16 md:grid-cols-3">
        {latest.map((post) => (
          <RevealOnScroll key={post.slug}>
            <ArticleCard post={post} />
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
