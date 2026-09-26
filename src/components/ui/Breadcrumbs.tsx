import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { JsonLd } from "@/components/seo/JsonLd";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { withLocale, type Locale } from "@/lib/i18n/config";

export interface Crumb {
  label: string;
  href: string;
}

export function Breadcrumbs({ items, lang }: { items: Crumb[]; lang: Locale }) {
  const dict = getDictionary(lang);
  const withHome: Crumb[] = [{ label: dict.breadcrumbs.home, href: "/" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: withHome.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${siteConfig.url}${withLocale(lang, item.href)}`,
    })),
  };

  return (
    <nav aria-label={dict.breadcrumbs.ariaLabel} className="mb-8">
      <JsonLd data={jsonLd} />
      <ol className="flex flex-wrap items-center gap-2 text-xs text-neutral-500">
        {withHome.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            {index > 0 ? <span aria-hidden>/</span> : null}
            {index === withHome.length - 1 ? (
              <span aria-current="page" className="text-neutral-600">
                {item.label}
              </span>
            ) : (
              <Link href={withLocale(lang, item.href)} className="hover-underline">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
