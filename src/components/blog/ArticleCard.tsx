import Link from "next/link";
import { PlaceholderMedia } from "@/components/ui/PlaceholderMedia";
import type { BlogPost } from "@/lib/data/posts";
import { formatDate } from "@/lib/utils";

export function ArticleCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <PlaceholderMedia label={`Imagen de portada — ${post.title}`} ratio="wide" />
      <div className="mt-4">
        <p className="font-mono text-[11px] uppercase tracking-wide text-neutral-500">
          {post.category} · {formatDate(post.publishedAt)}
        </p>
        <h3 className="mt-2 text-lg font-medium tracking-tight group-hover:text-neutral-600 md:text-xl">
          {post.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-neutral-500">{post.excerpt}</p>
      </div>
    </Link>
  );
}
