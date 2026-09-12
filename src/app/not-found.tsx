import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-[1400px] flex-col items-start px-6 py-32 md:px-10 md:py-40">
      <p className="font-mono text-sm text-neutral-500">404</p>
      <h1 className="mt-4 text-balance text-3xl font-medium tracking-tight md:text-5xl">
        Esta página no existe, o todavía no la hemos construido.
      </h1>
      <p className="mt-4 max-w-md text-base text-neutral-500">
        Vuelve al inicio o revisa nuestro portafolio y servicios.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
        >
          Volver al inicio
        </Link>
        <Link
          href="/contacto"
          className="inline-flex items-center justify-center rounded-full border border-black/80 px-6 py-3.5 text-sm font-medium transition-colors hover:bg-black hover:text-white"
        >
          Contactar
        </Link>
      </div>
    </div>
  );
}
