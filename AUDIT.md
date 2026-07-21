# AMITH Site — Security & Performance Audit

**Date:** 2026-07-21
**Scope:** Full Next.js 16 App Router codebase at `c:\Amith` — `src/app`, `src/data`, `public/`, `Gallery images/`, `next.config.ts`, `package.json`. No backend/API routes, no auth, no database.
**Methodology:** Static analysis only (read-only). Reviewed `package.json`/`npm audit --json` for dependency vulnerabilities; `next.config.ts` for headers/image config; grepped the full `src/` tree for `dangerouslySetInnerHTML`, `eval`, `target="_blank"`, `process.env`/`NEXT_PUBLIC_`, and `: any` usage; manually read `Contact.tsx` (the only user-input surface on the site), `layout.tsx`, `sitemap.ts`, `robots.ts`; and measured file sizes across `public/` and `Gallery images/` with a shell walk. No code was modified.

---

## Security Findings

| Severity | Finding | Location | Risk | Recommendation |
|---|---|---|---|---|
| Info | Security headers already configured: `X-Content-Type-Options`, `X-Frame-Options: SAMEORIGIN`, `Referrer-Policy`, `Permissions-Policy` | `next.config.ts:16-26` | None — this is good practice already in place | Add `Content-Security-Policy` and `Strict-Transport-Security` (see Medium finding below) for full coverage |
| Medium | No `Content-Security-Policy` header | `next.config.ts` `headers()` block | No defense-in-depth against injected/third-party script execution if any future component introduces unsanitized HTML or a third-party script tag | Add a CSP header, e.g. `default-src 'self'; img-src 'self' data: https://images.unsplash.com; script-src 'self'; style-src 'self' 'unsafe-inline'` (Tailwind v4 + inline styles from `motion`/react-slick typically need `'unsafe-inline'` for style-src unless nonced) |
| Medium | No `Strict-Transport-Security` header | `next.config.ts` `headers()` block | If the site is ever served over HTTP even transiently (misconfigured redirect, dev/staging exposure), no HSTS forces HTTPS on repeat visits | Add `{ key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" }` (only once HTTPS is confirmed stable in production, since `preload` is hard to reverse) |
| Low | `remotePatterns` in `next.config.ts` allows `images.unsplash.com` over `https` with wildcard path `/**` | `next.config.ts:6-11` | Low risk since it's a fixed, trusted, well-known CDN host — not user-controlled, so no SSRF/open-proxy concern via `next/image` | No action needed; just confirm no other remote host is later added without review |
| Info | No `dangerouslySetInnerHTML`, no `eval(`, no client-side reflection of user input into raw HTML anywhere in `src/` | grep across `src/` | N/A | None — this eliminates the most common XSS vector for a static marketing site |
| Info | Only one `target="_blank"` link found; it correctly pairs `rel="noopener noreferrer"` | `src/app/components/Home/Contact.tsx:270-272` | None | None needed |
| Info | WhatsApp deep-link form correctly URI-encodes all user input before insertion into the `wa.me` URL | `src/app/components/Home/Contact.tsx:36-37` (`encodeURIComponent(whatsappText)`), and the resulting `window.open` call at line 39 uses `"noopener,noreferrer"` | None — no URL/header injection possible via the `text=` param | None needed |
| Info | No `.env` files present, `git ls-files` shows nothing matching `.env`, no `process.env`/`NEXT_PUBLIC_` reference anywhere in `src/` | repo root, full `src/` grep | N/A — no secret-exposure surface exists | None; if env vars are introduced later, remember anything prefixed `NEXT_PUBLIC_` is shipped to the client bundle |
| Info | `robots.ts` allows all crawling (`allow: "/"`) and correctly points to `/sitemap.xml`; `sitemap.ts` only lists public marketing routes plus `services/[slug]` from `servicesData` — no internal/admin routes leaked | `src/app/robots.ts`, `src/app/sitemap.ts` | None | None |
| High (dependency) | `npm audit` reports a **high**-severity transitive vuln in `brace-expansion` (ReDoS, GHSA-3jxr-9vmj-r5cp) via `node_modules/@typescript-eslint/typescript-estree` and top-level `node_modules/brace-expansion` | `npm audit --json` output | Dev-tooling only (ESLint/TS tooling), not shipped to production bundle or runtime — low real-world exploitability for this project, but still flagged as fixable | Run `npm audit fix` (no major version bump required per audit's `fixAvailable: true`) |
| High (dependency) | `npm audit` reports a **high**-severity `js-yaml` vuln (quadratic-CPU YAML merge-key parsing, GHSA-52cp-r559-cp3m), range `4.0.0 - 4.2.0` | `npm audit --json` output | Also a dev-dependency-chain issue (build tooling), not exercised at runtime by this app (no YAML parsing in app code) | Run `npm audit fix` |
| Moderate (dependency) | `next` itself flagged moderate via its `postcss` dependency | `npm audit --json` output, `node_modules/next` | Build-time only; not an app-code vulnerability | `fixAvailable` shows a major-version bump (`isSemVerMajor: true`) — do not blindly `npm audit fix --force` since Next 16→next-major could break the App Router setup; evaluate the specific CVE and Next's own patch releases before upgrading |

---

## Performance Findings

| Severity/Impact | Finding | Location | Recommendation |
|---|---|---|---|
| High | Multiple images well over the ~500KB threshold, some multi-megabyte, served both from `public/` (used at runtime) and duplicated again in `Gallery images/` (source folder, adds to repo/deploy size but not runtime unless also served) | `public/images/banner-candidates/2-banner.png` — **8.65 MB**; `public/gallery/structural-stability-condition/44_image57.jpeg` — **3.53 MB**; `public/images/banner-candidates/3-banner.jpg` — 2.65 MB; `public/images/banner-candidates/HeroWide-M.png` — 2.56 MB; `public/images/banner-candidates/5-banner.jpg` — 1.78 MB; `public/images/banner-candidates/4-banner.jpg` — 1.76 MB; `public/images/Chemical.png` — 2.2 MB; `public/images/Nallathambi.png` — 2.09 MB; plus ~15 more gallery JPEGs in the 350–575 KB range under `public/gallery/structural-stability-condition/` and `public/gallery/quality-audit-tpqm/` | Compress/convert to WebP/AVIF (via `next/image` or a one-time build step with `sharp`); the 8.65 MB PNG in particular should never ship as-is. `public/images/banner-candidates/` looks like a leftover comparison folder (`1-banner.jpg` through `HeroWide-M.png`) that duplicates content already chosen for the live hero — delete unused candidates from `public/` (keep them only in a non-served location) |
| High | Gallery images are rendered with raw `<img>` tags, deliberately bypassing `next/image` optimization | `src/app/components/Gallery/GalleryGrid.tsx:131-136` and `:224-229` (comment: *"Native img — avoids Next.js optimisation pipeline issues with local static images"*), `src/app/components/Home/GalleryPreview/index.tsx:75-79` | This is a deliberate tradeoff already documented in-code, but it means none of Next's automatic resize/format/lazy `srcset` generation applies to the largest image set on the site (200 files, 50 MB in `public/` total, 21 MB duplicated in `Gallery images/`). Given the file-size findings above, this is currently costing real page weight. If the "optimisation pipeline issues" were about local static images specifically, consider pre-optimizing the source files once (resize to actual display dimensions, WebP) rather than opting out of `next/image` entirely — `loading="lazy"` alone doesn't reduce transferred bytes per image |
| Medium | No explicit `width`/`height` (or CSS `aspect-ratio`) guaranteed on every gallery `<img>` — lightbox image at `GalleryGrid.tsx:225-229` has no `width`/`height` attributes and no `style` aspect-ratio wrapper visible in the excerpt (only `max-w-full max-h-full object-contain`) | `src/app/components/Gallery/GalleryGrid.tsx:224-229` | CLS risk when the lightbox image loads — reserve space via a fixed-aspect container or explicit dimensions from `gallery.ts` data if known |
| Low/Info | `loading="lazy"` is correctly applied on grid thumbnails (`GalleryGrid.tsx:136`, `GalleryPreview/index.tsx:79`) | as cited | Good — no change needed. Note the lightbox/full-size image (opened on click) doesn't need `lazy` since it's user-triggered, which is already implicit |
| Info | Font loading uses `next/font/google` (`Manrope`), which self-hosts and inlines `font-display` automatically — no external font request, no FOUT/CLS risk from font swapping | `src/app/layout.tsx:2,10,72` | None — this is the correct pattern already in use |
| Info | No third-party `<script>` tags found; only `nextjs-toploader` (a lightweight, self-bundled route-progress-bar library) is loaded globally | `src/app/layout.tsx:8,73` | None; keep an eye on it if a real analytics/tracking script is added later — that would warrant `next/script` with `strategy="afterInteractive"` or `"lazyOnload"` |
| Info | `@iconify/react` is used via the `<Icon icon="...">` runtime-fetch component (15 files import it) rather than static per-icon imports from icon-set packages | grep results across 15 files (e.g. `Contact.tsx`, `Footer/index.tsx`, `GalleryGrid.tsx`) | This is not a "barrel import of an entire icon set" (no bundle bloat from unused icons), but the default `@iconify/react` `Icon` component fetches icon data from Iconify's public API/CDN at runtime unless icons are bundled offline. Confirm this is acceptable (external network dependency for icon rendering, minor perf/availability risk) — if strict self-hosting is desired, switch to `@iconify/react`'s offline bundling (`addCollection`) for the specific icon sets used (`mdi`, `logos`, `solar`) |
| Info | `react-slick` is only imported in `src/app/components/Services/Technologies/index.tsx` (confirmed single usage site per `CLAUDE.md` and grep), so it's already scoped to one route/component rather than globally bundled | `src/app/components/Services/Technologies/index.tsx` | Consider dynamic `import()` with `ssr: false` for this component if `/services` initial-load JS is a concern, since carousels are typically below-the-fold |

---

## Dependency Audit

`npm audit --json` summary (run against current `package-lock.json`):

- **brace-expansion** — High (ReDoS) — dev-only transitive dep (via `@typescript-eslint/typescript-estree` and top-level). `fixAvailable: true`, no major bump needed.
- **js-yaml** — High (quadratic CPU on YAML merge keys) — dev-only transitive dep. `fixAvailable: true`, no major bump needed.
- **next** — Moderate — flagged via its `postcss` dependency. `fixAvailable` requires a **major** version change (`isSemVerMajor: true`) — do not auto-fix without testing.
- **postcss** — Moderate, related to the `next` finding above.

All flagged packages are build/dev-tooling dependencies (ESLint, TypeScript tooling, Next's internal PostCSS usage) — none are runtime dependencies exercised by end users of the deployed site, so there is no direct end-user exploit path today. Still worth clearing via `npm audit fix` for the two High findings, since that fix doesn't require a major bump.

**Versions in use:** `next@^16.2.7`, `react@19.2.4`, `react-dom@19.2.4`, `typescript@^5`, `@iconify/react@^6.0.2`, `motion@^12.40.0`, `react-slick@^0.31.0`. All are current-generation majors — no outdated-major risk found.

---

## Summary / Priority Action List

1. **Compress/replace the oversized images** — start with `public/images/banner-candidates/2-banner.png` (8.65 MB) and the other banner candidates (1.7–2.7 MB each); these are the single biggest performance win available and cost nothing functionally to fix.
2. **Delete unused banner-candidate images from `public/`** — `public/images/banner-candidates/` appears to hold comparison/rejected hero images (`1-banner.jpg` … `HeroWide-M.png`); only the ones actually referenced by `HeroBanner/index.tsx` need to ship in `public/`.
3. **Run `npm audit fix`** to clear the two High-severity dev-dependency vulnerabilities (`brace-expansion`, `js-yaml`) — no major version bump required.
4. **Add a `Content-Security-Policy` header** to `next.config.ts`'s existing `headers()` block — the site already has the other four security headers wired up, CSP is the notable gap.
5. **Add `Strict-Transport-Security`** to the same `headers()` block once HTTPS delivery is confirmed stable.
6. **Re-optimize the `public/gallery/*` JPEGs** (~15+ files in the 350–575 KB range) — either pre-process to WebP at actual display resolution, or reconsider the "avoid `next/image` for local images" decision noted in `GalleryGrid.tsx:132`.
7. **Add explicit dimensions/aspect-ratio to the gallery lightbox `<img>`** (`GalleryGrid.tsx:224-229`) to eliminate a CLS risk on click-to-expand.
8. Evaluate the `next`/`postcss` moderate advisory against currently released Next 16.x patch versions before considering any major-version jump — `fixAvailable` wants a semver-major change, which needs its own testing pass, not an automatic `npm audit fix --force`.
9. (Optional, lower priority) Consider offline-bundling the small set of Iconify icon collections actually used (`mdi`, `logos`, `solar`) instead of the runtime-fetch `Icon` component, to remove the external network dependency for icon rendering.
