import type { ReactNode } from "react";

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
}

/**
 * Reveal-on-scroll sin JavaScript: la animación se controla con
 * `animation-timeline: view()` (ver globals.css). En navegadores sin
 * soporte, el contenido simplemente se muestra siempre visible: nunca
 * depende de un observer que pueda fallar o llegar tarde.
 */
export function RevealOnScroll({ children, className }: RevealOnScrollProps) {
  return (
    <div data-reveal className={className}>
      {children}
    </div>
  );
}
