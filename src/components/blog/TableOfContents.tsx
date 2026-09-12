import type { ContentBlock } from "@/lib/data/posts";

export function TableOfContents({ blocks }: { blocks: ContentBlock[] }) {
  const headings = blocks.filter(
    (block): block is Extract<ContentBlock, { type: "heading" }> => block.type === "heading" && block.level === 2
  );

  if (headings.length === 0) return null;

  return (
    <nav aria-label="Tabla de contenido" className="border-t border-black/10 pt-5">
      <p className="font-mono text-[11px] uppercase tracking-wide text-neutral-500">En este artículo</p>
      <ul className="mt-4 flex flex-col gap-3">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a href={`#${heading.id}`} className="hover-underline text-sm text-neutral-600">
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
