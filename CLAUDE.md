# AMITH Civil & Allied Engineering Services — Site

Marketing site for AMITH Civil & Allied Engineering Services Pvt Ltd, a Chennai-based
structural audit, TPQM, NDT testing, and restoration consultancy.

## Stack

- **Next.js 16** (App Router, Turbopack), **React 19**, **TypeScript** (`strict: true`)
- **Tailwind CSS v4** — configured inline in `src/app/globals.css` via `@theme` (no
  `tailwind.config.*` file). Custom breakpoints override Tailwind's defaults:
  `sm:576px md:768px lg:992px xl:1200px 2xl:1400px 3xl:1920px`.
- **motion** (`motion/react`, the framer-motion successor package) for all animation —
  do not add `framer-motion` back, it was removed as a duplicate.
- **@iconify/react** for icons, **react-slick**/**slick-carousel** for the technologies
  carousel (`Services/Technologies`) only.
- Light mode only — there is no dark mode / theme toggle. Don't add `dark:` classes.

## Commands

- `npm run dev` — dev server
- `npm run build` — production build (also type-checks)
- `npm run typecheck` — `tsc --noEmit` standalone
- `npm run lint` — ESLint

## Routes

`/`, `/about`, `/services`, `/services/[slug]` (dynamic, from `src/data/services.ts`),
`/gallery`, `/contact`. That's the entire site — there is no `/blogs` or `/portfolio`
(both were removed as unfinished/placeholder routes). Don't reintroduce a component file
named `page.tsx` anywhere under `src/app/components/` — the App Router treats *any*
`page.tsx` under `src/app` as a public route, which previously leaked an internal
loading-skeleton component as a real URL.

## Data sources

Static content lives in `src/data/`:
- `services.ts` — the 6 services (used by the services grid, service detail pages, and
  the footer's service links). This is the single source of truth; there is no API
  route for it — don't reintroduce a `/api/service` fetch, just import `servicesData`.
- `gallery.ts` — gallery grid items.
- `ndt.ts` — NDT diagnostic methods panel data.

## Animation system

One shared system, in `src/app/components/shared/`:
- `anim.ts` — tokens: `EASE`/`EASE_SNAPPY`, `VIEWPORT`/`VIEWPORT_EARLY`, and variants
  (`fadeUp`, `fadeScale`, `staggeredFadeUp`, `staggeredFromLeft`, `staggeredPop`,
  `staggeredTag`).
- `Reveal.tsx` — single-element scroll-reveal wrapper (`whileInView`, fires once).
  Props: `variants` (defaults to `fadeUp`), `amount`, `custom` (forward to a
  `staggered*` variant's index for per-item stagger — see any section for the pattern).

Every section on the site uses `Reveal` + these tokens for entrance animation — do not
introduce a new animation helper or a raw `motion.div` with hand-rolled
duration/easing. For staggered groups (cards, grids), the pattern is: a parent
`motion.div` with `initial="hidden" whileInView="show" viewport={VIEWPORT_EARLY}`, each
child gets `variants={staggeredFadeUp(step)}` + `custom={index}`.

## Spacing system

Canonical utility classes, defined in `globals.css` `@layer components`:
- `.section-py` — standard vertical rhythm for every top-level `<section>`
  (`py-14 sm:py-16 lg:py-20 2xl:py-24`).
- `.section-container` — standard content wrapper
  (`container mx-auto max-w-7xl 2xl:max-w-[1400px] 3xl:max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12`).
- `.kicker-text` — the small uppercase eyebrow label above section headings.

Use these instead of hand-rolling `py-*`/`container max-w-*` on new sections. Known,
deliberate exceptions that should NOT be forced onto `.section-container`: `Header` and
`ClosingCTA` use `max-w-6xl` (intentionally narrower than body content); `Footer` uses
its own `py-17 pb-6` vertical rhythm; `PageHero` has its own asymmetric top padding to
clear the fixed header.

Heading scale: section `h2`s use `text-2xl sm:text-3xl md:text-4xl font-extrabold`
site-wide. The homepage hero (`HeroBanner`) and interior-page hero (`PageHero`) each
have their own larger, distinct hero-title treatment — that's intentional, don't try to
unify those with the section-heading scale.

## Contact

The live contact experience is `Home/Contact.tsx` (rendered on `/contact` and embedded
elsewhere) — a WhatsApp-first form (`wa.me` deep link) with quick links for WhatsApp,
phone, and email. There is no server-side form submission / third-party form endpoint
in this codebase.

## Known gaps (flagged, not fixed — need a business decision, not an engineering one)

- `public/images/banner-candidates/` has several unused draft images
  (`image1.jpg`…`image7.jpeg` minus the two actually used by `HeroBanner`) that were
  intentionally left in place rather than deleted — safe to remove once someone
  confirms they're not needed.
- No automated test suite exists.
