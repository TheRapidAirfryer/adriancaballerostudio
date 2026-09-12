# Adrian Caballero Studio

Sitio web del estudio creativo y tecnológico Adrian Caballero Studio.
Next.js (App Router) + TypeScript + Tailwind CSS v4.

## Requisitos

- Node.js 20+
- npm

## Instalación

```bash
npm install
cp .env.example .env.local
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # build de producción
npm run start   # servir el build
npm run lint    # ESLint
```

## Variables de entorno

Ver `.env.example`. Todas son opcionales excepto `NEXT_PUBLIC_SITE_URL` en
producción (se usa para canonical, sitemap y JSON-LD). La analítica (GA4,
GTM, Meta Pixel) solo se activa si su variable tiene un valor real: nada se
carga con IDs de ejemplo.

### Activar el envío real de correo del formulario de contacto

Por defecto el formulario valida y registra el lead, pero **no envía
ningún correo** hasta que configures esto:

1. Crea una cuenta gratis en [resend.com](https://resend.com).
2. Verifica el dominio `adriancaballero.studio` siguiendo las instrucciones
   de Resend (agregar unos registros DNS — TXT/CNAME — donde tengas
   contratado el dominio).
3. Genera un API key en Resend y ponlo en `.env.local` como `RESEND_API_KEY`.
4. Opcional: define `CONTACT_FROM_EMAIL` con una dirección de ese dominio
   (ej. `notificaciones@adriancaballero.studio`). Mientras el dominio no
   esté verificado, deja esta variable vacía: se usa la dirección de
   pruebas de Resend, que solo entrega al correo de tu propia cuenta.
5. Los leads llegan a `contacto@adriancaballero.studio` (definido en
   `src/lib/site-config.ts`) salvo que definas `CONTACT_TO_EMAIL` con otra
   dirección.

Sin `RESEND_API_KEY`, el formulario cae de vuelta a `CONTACT_WEBHOOK_URL`
si está definida, o si no, deja el lead en el log del servidor.

## Estructura

```
src/
  app/                    Rutas (App Router)
    servicios/[slug]/     Plantilla única para las 9 páginas de servicio
    proyectos/[slug]/     Plantilla de caso de portafolio
    blog/[slug]/          Plantilla de artículo
    contacto/actions.ts   Server Action del formulario de contacto
  components/
    layout/               Header, MobileMenu, Footer
    ui/                   Button, FAQ, Breadcrumbs, VideoPlayer, etc.
    home/, services/, portfolio/, blog/, contact/, seo/, analytics/
  lib/
    site-config.ts        Datos de marca y contacto (placeholders [EDITAR])
    data/                 Servicios, proyectos, artículos del blog
    metadata.ts           Helper para metadata + Open Graph por página
```

## Contenido pendiente de editar

Todo lo que necesita un dato real antes de publicar está marcado
explícitamente con `[EDITAR]` en el código o en el texto visible:

- `src/lib/site-config.ts`: correo, teléfono, WhatsApp, dirección, horario y
  redes sociales.
- `src/lib/data/projects.ts`: los proyectos de portafolio son casos de
  **ejemplo** (`isPlaceholder: true`). Sustitúyelos por proyectos reales;
  no se inventaron clientes, cifras ni resultados.
- `src/components/ui/ClientLogos.tsx`: logos de clientes (no se inventaron).
- `src/app/nosotros/page.tsx`: biografía del fundador y fotografía.
- Imágenes y videos: en todo el sitio se usan marcadores visuales
  (`PlaceholderMedia`, `VideoPlayer`) en lugar de fotografía de stock.
  Cada uno indica en su etiqueta qué contenido debe ir ahí.

## Contenido y CMS

El portafolio y el blog viven como datos tipados en `src/lib/data/`
(`projects.ts`, `posts.ts`), no acoplados a los componentes que los
renderizan. Migrarlos a un CMS headless (Sanity u otro) implica reemplazar
esas funciones de acceso a datos por llamadas a la API del CMS, sin tocar
las páginas ni los componentes visuales.
