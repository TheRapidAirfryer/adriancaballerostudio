import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Book a Discovery Call | Adrian Caballero Studio",
  description:
    "Book a free 30-minute discovery call to discuss your website, app, business system, or video project with Adrian Caballero Studio.",
};

const SERVICES = [
  {
    name: "Websites",
    summary: "Fast, well-structured, SEO-optimized sites, designed to measure instead of built on a template.",
  },
  {
    name: "Apps",
    summary: "From idea to functional product, with product design and development on the same team.",
  },
  {
    name: "Business Systems",
    summary: "Custom software that organizes internal processes that today depend on spreadsheets and loose messages.",
  },
  {
    name: "Video",
    summary: "Video with script, pacing and art direction, built for the algorithm and for the brand.",
  },
];

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

const STEPS = [
  {
    number: "01",
    title: "Book your call",
    description: "Schedule a free 30-minute discovery call directly on our calendar.",
  },
  {
    number: "02",
    title: "We talk through your project",
    description: "We go over what you need, the scope, and how many hours it will take.",
  },
  {
    number: "03",
    title: "You pay upfront, we get to work",
    description: "Once the hours are agreed and paid at $25/hr, work starts right away.",
  },
];

export default function StartPage() {
  return (
    <div className="mx-auto flex max-w-[760px] flex-col gap-20 px-6 py-16 md:py-24">
      <header className="flex items-center">
        <Link href="/" className="flex items-center" aria-label="Adrian Caballero Studio — home">
          <Image src="/logo.svg" alt="Adrian Caballero Studio" width={277} height={62} priority className="h-7 w-auto" />
        </Link>
      </header>

      <section className="flex flex-col gap-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-neutral-500">Start here</p>
        <h1 className="max-w-xl text-balance text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl">
          Let&apos;s talk about your project.
        </h1>
        <p className="max-w-lg text-balance text-base leading-relaxed text-neutral-600 md:text-lg">
          Adrian Caballero Studio builds websites, apps, business systems, and video content.
          Every project starts with a short, free call so we both know, before anything else
          happens, that this is worth both of our time.
        </p>
        <div className="mt-2">
          <a
            href="#book"
            className="inline-flex items-center justify-center rounded-full bg-black px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
          >
            Book the call
          </a>
        </div>
      </section>

      <section className="flex flex-col gap-10">
        <h2 className="text-2xl font-medium tracking-tight md:text-3xl">How it works.</h2>
        <ol className="grid gap-8 md:grid-cols-3">
          {STEPS.map((step) => (
            <li key={step.number} className="border-t border-black/10 pt-5">
              <span className="font-mono text-xs text-neutral-500">{step.number}</span>
              <h3 className="mt-3 text-base font-medium tracking-tight">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">{step.description}</p>
            </li>
          ))}
        </ol>
        <p className="text-sm leading-relaxed text-neutral-500">
          The discovery call is free. Once we agree on scope and hours, payment is required
          upfront for every block of work — no exceptions. It keeps things simple and fair on
          both sides.
        </p>
      </section>

      <section className="flex flex-col gap-10">
        <h2 className="text-2xl font-medium tracking-tight md:text-3xl">What we work on.</h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {SERVICES.map((service) => (
            <div key={service.name} className="border-t border-black/10 pt-5">
              <h3 className="text-lg font-medium tracking-tight">{service.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">{service.summary}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-10">
        <h2 className="text-2xl font-medium tracking-tight md:text-3xl">What clients say.</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {REVIEWS.map((review) => (
            <figure key={review.name} className="flex flex-col gap-4 border-t border-black/10 pt-5">
              <blockquote className="text-sm leading-relaxed text-neutral-600">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <figcaption className="text-sm">
                <span className="block font-medium tracking-tight text-black">{review.name}</span>
                <span className="font-mono text-[11px] uppercase tracking-wide text-neutral-500">
                  {review.service}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="book" className="scroll-mt-10 border-t border-black/10 pt-12">
        <h2 className="text-2xl font-medium tracking-tight md:text-3xl">Book your call.</h2>
        <div className="mt-6 flex items-baseline gap-3">
          <span className="text-4xl font-medium tracking-tight">Free</span>
          <span className="font-mono text-xs uppercase tracking-wide text-neutral-500">30 minutes</span>
        </div>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-500">
          Pick a time that works for you on our calendar, or email us directly at{" "}
          {siteConfig.contact.email}.
        </p>
        <div className="mt-8">
          <a
            href={siteConfig.contact.calendlyLink}
            className="inline-flex items-center justify-center rounded-full bg-black px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
          >
            Book the meeting
          </a>
        </div>
      </section>

      <footer className="flex flex-col gap-2 border-t border-black/10 pt-8 text-sm text-neutral-500">
        <p>
          Questions before booking? Email{" "}
          <a href={`mailto:${siteConfig.contact.email}`} className="hover-underline text-black">
            {siteConfig.contact.email}
          </a>
          .
        </p>
        <p>
          <Link href="/" className="hover-underline">
            adriancaballero.studio
          </Link>
        </p>
      </footer>
    </div>
  );
}
