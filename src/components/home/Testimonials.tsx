import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";

const REVIEWS = [
  {
    name: "Sara Henley",
    service: "Website Development",
    quote:
      "Adrian did an amazing job building my website! He was professional, responsive, and brought my vision to life. Highly recommend!",
  },
  {
    name: "JoAnn Donahue",
    service: "Website Modifications",
    quote:
      "Great experience working with Adrian! He made all the changes I needed to my website quickly and efficiently. Excellent service!",
  },
  {
    name: "Theresa de la Rosa",
    service: "Website Modifications",
    quote:
      "Adrian was very helpful and easy to work with. He updated my website exactly how I wanted. I'm very happy with the results!",
  },
];

export function Testimonials({ lang }: { lang: Locale }) {
  const dict = getDictionary(lang);

  return (
    <section className="border-t border-black/10 py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <RevealOnScroll>
          <SectionHeading
            eyebrow={dict.home.testimonials.eyebrow}
            title={dict.home.testimonials.title}
          />
        </RevealOnScroll>

        <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-3">
          {REVIEWS.map((review) => (
            <RevealOnScroll key={review.name}>
              <figure className="flex flex-col gap-4 border-t border-black/10 pt-5">
                <blockquote className="text-sm leading-relaxed text-neutral-600 md:text-base">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <figcaption className="text-sm">
                  <span className="block font-medium tracking-tight text-black">{review.name}</span>
                  <span className="font-mono text-[11px] uppercase tracking-wide text-neutral-500">
                    {review.service}
                  </span>
                </figcaption>
              </figure>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
