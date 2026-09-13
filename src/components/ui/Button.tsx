import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 py-3 text-sm font-medium tracking-tight transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:opacity-40 disabled:pointer-events-none";

const variants = {
  primary: "bg-black text-white hover:bg-neutral-800",
  secondary: "border border-black/80 text-black hover:bg-black hover:text-white",
  ghost: "text-black hover:text-neutral-500 px-0 py-0",
  // Para usar sobre fondos oscuros (ej. secciones CTA en negro): en vez de
  // sobreescribir clases de "primary"/"secondary" con className (lo cual
  // puede dejar clases contradictorias como bg-black y bg-white a la vez,
  // con un ganador impredecible), estas variantes ya vienen correctas.
  inverted: "bg-white text-black hover:bg-neutral-200",
  "secondary-inverted": "border border-white/40 text-white hover:bg-white hover:text-black",
};

type Variant = keyof typeof variants;

interface CommonProps {
  variant?: Variant;
  className?: string;
}

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", className, ...rest } = props;
  const classes = cn(base, variants[variant], className);

  if ("href" in rest && typeof rest.href === "string") {
    const { href, ...anchorProps } = rest as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...anchorProps}>
        {props.children}
      </Link>
    );
  }

  const buttonProps = rest as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {props.children}
    </button>
  );
}
