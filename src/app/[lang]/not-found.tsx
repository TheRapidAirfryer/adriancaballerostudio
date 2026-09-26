import Link from "next/link";
import { lang } from "next/root-params";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { defaultLocale, isLocale, withLocale } from "@/lib/i18n/config";

export default async function NotFound() {
  const rawLang = await lang();
  const locale = rawLang && isLocale(rawLang) ? rawLang : defaultLocale;
  const dict = getDictionary(locale);

  return (
    <div className="mx-auto flex max-w-[1400px] flex-col items-start px-6 py-32 md:px-10 md:py-40">
      <p className="font-mono text-sm text-neutral-500">{dict.notFound.code}</p>
      <h1 className="mt-4 text-balance text-3xl font-medium tracking-tight md:text-5xl">
        {dict.notFound.title}
      </h1>
      <p className="mt-4 max-w-md text-base text-neutral-500">{dict.notFound.description}</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href={withLocale(locale, "/")}
          className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
        >
          {dict.notFound.home}
        </Link>
        <Link
          href={withLocale(locale, "/contacto")}
          className="inline-flex items-center justify-center rounded-full border border-black/80 px-6 py-3.5 text-sm font-medium transition-colors hover:bg-black hover:text-white"
        >
          {dict.notFound.contact}
        </Link>
      </div>
    </div>
  );
}
