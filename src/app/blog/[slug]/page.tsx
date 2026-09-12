import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getRelatedPosts, posts } from "@/lib/data/posts";
import { getServiceBySlug } from "@/lib/data/services";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PlaceholderMedia } from "@/components/ui/PlaceholderMedia";
import { ContentRenderer } from "@/components/blog/ContentRenderer";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { CTA } from "@/components/ui/CTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";
import { formatDate, readingTime } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return buildMetadata({
    title: post.seoTitle,
    description: post.seoDescription,
    path: `/blog/${post.slug}`,
    type: "article",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = getRelatedPosts(post);
  const relatedServices = post.relatedServiceSlugs
    .map((s) => getServiceBySlug(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const fullText = post.content
    .map((block) => ("text" in block ? block.text : "items" in block ? block.items.join(" ") : ""))
    .join(" ");

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.seoDescription,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@type": "Organization", name: siteConfig.name },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />

      <div className="mx-auto max-w-3xl px-6 pt-10 md:px-10">
        <Breadcrumbs
          items={[
            { label: "Blog", href: "/blog" },
            { label: post.title, href: `/blog/${post.slug}` },
          ]}
        />
        <p className="font-mono text-[11px] uppercase tracking-wide text-neutral-500">
          {post.category}
        </p>
        <h1 className="mt-4 text-balance text-3xl font-medium leading-[1.1] tracking-tight md:text-5xl">
          {post.title}
        </h1>
        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-neutral-500">
          <span>{post.author}</span>
          <span aria-hidden>·</span>
          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          <span aria-hidden>·</span>
          <span>{readingTime(fullText)}</span>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 pt-10 md:px-10">
        <PlaceholderMedia label={`Imagen de portada — ${post.title}`} ratio="wide" />
      </div>

      <div className="mx-auto grid max-w-5xl gap-12 px-6 py-16 md:grid-cols-[1fr_240px] md:px-10 md:py-24">
        <article className="max-w-3xl">
          <ContentRenderer blocks={post.content} />

          {relatedServices.length > 0 ? (
            <div className="mt-10 border-t border-black/10 pt-6">
              <p className="text-sm text-neutral-500">
                ¿Te interesa este tema?{" "}
                {relatedServices.map((service, index) => (
                  <span key={service.slug}>
                    <Link href={`/servicios/${service.slug}`} className="hover-underline font-medium text-black">
                      {service.navTitle}
                    </Link>
                    {index < relatedServices.length - 1 ? " · " : ""}
                  </span>
                ))}
              </p>
            </div>
          ) : null}
        </article>

        <aside className="hidden md:block">
          <div className="sticky top-28">
            <TableOfContents blocks={post.content} />
          </div>
        </aside>
      </div>

      {relatedPosts.length > 0 ? (
        <section className="border-t border-black/10 bg-neutral-50 py-16 md:py-24">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <p className="mb-8 font-mono text-[11px] uppercase tracking-wide text-neutral-500 md:mb-10">
              Artículos relacionados
            </p>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              {relatedPosts.map((related) => (
                <ArticleCard key={related.slug} post={related} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CTA
        heading="¿Listo para poner esto en práctica en tu marca?"
        description="Cuéntanos tu proyecto y lo revisamos juntos."
      />
    </>
  );
}
