import type { ContentBlock } from "@/lib/data/posts";

export function ContentRenderer({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="flex flex-col gap-6">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "heading": {
            const Tag = block.level === 2 ? "h2" : "h3";
            return (
              <Tag
                key={block.id}
                id={block.id}
                className={
                  block.level === 2
                    ? "mt-4 scroll-mt-28 text-2xl font-medium tracking-tight md:text-3xl"
                    : "mt-2 scroll-mt-28 text-xl font-medium tracking-tight"
                }
              >
                {block.text}
              </Tag>
            );
          }
          case "paragraph":
            return (
              <p key={index} className="text-base leading-relaxed text-neutral-600 md:text-lg">
                {block.text}
              </p>
            );
          case "list":
            return (
              <ul key={index} className="flex flex-col gap-3">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-3 text-base leading-relaxed text-neutral-600">
                    <span aria-hidden className="mt-1 text-neutral-500">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            );
          case "quote":
            return (
              <blockquote
                key={index}
                className="border-l-2 border-black pl-6 text-lg font-medium leading-relaxed tracking-tight text-black md:text-xl"
              >
                {block.text}
              </blockquote>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
