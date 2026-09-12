"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { JsonLd } from "@/components/seo/JsonLd";

export interface FaqItem {
  question: string;
  answer: string;
}

export function FAQ({ items, withSchema = true }: { items: FaqItem[]; withSchema?: boolean }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div>
      {withSchema ? <JsonLd data={jsonLd} /> : null}
      <ul className="divide-y divide-black/10 border-y border-black/10">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <li key={item.question}>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="text-base font-medium tracking-tight md:text-lg">
                  {item.question}
                </span>
                <span
                  aria-hidden
                  className={cn(
                    "shrink-0 text-xl font-light transition-transform duration-300",
                    isOpen && "rotate-45"
                  )}
                >
                  +
                </span>
              </button>
              <div
                id={`faq-answer-${index}`}
                className={cn(
                  "grid overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
                  isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                )}
              >
                <p className="overflow-hidden text-sm leading-relaxed text-neutral-500 md:text-base">
                  {item.answer}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
