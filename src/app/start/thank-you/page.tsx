import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Thank You | Adrian Caballero Studio",
  description: "Your payment was received. We'll reach out shortly to schedule your call.",
  robots: { index: false, follow: false },
};

export default function StartThankYouPage() {
  return (
    <div className="mx-auto flex min-h-screen max-w-[600px] flex-col items-center justify-center gap-8 px-6 py-16 text-center">
      <Link href="/" className="flex items-center" aria-label="Adrian Caballero Studio — home">
        <Image src="/logo.svg" alt="Adrian Caballero Studio" width={277} height={62} priority className="h-7 w-auto" />
      </Link>

      <div className="flex flex-col gap-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-neutral-500">Payment received</p>
        <h1 className="text-balance text-3xl font-medium leading-[1.1] tracking-tight md:text-5xl">
          Thanks — you&apos;re booked.
        </h1>
        <p className="max-w-md text-balance text-base leading-relaxed text-neutral-600 md:text-lg">
          We&apos;ll reach out to you at {siteConfig.contact.email} shortly to schedule your 30-minute
          discovery call. If you&apos;d like to get in touch sooner, feel free to email us directly.
        </p>
      </div>

      <a
        href={`mailto:${siteConfig.contact.email}`}
        className="inline-flex items-center justify-center rounded-full bg-black px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
      >
        Email us
      </a>

      <Link href="/" className="hover-underline text-sm text-neutral-500">
        adriancaballero.studio
      </Link>
    </div>
  );
}
