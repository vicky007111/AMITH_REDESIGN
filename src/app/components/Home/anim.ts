import type { Variants } from "motion/react";

// ---------------------------------------------------------------------------
// Homepage-only animation tokens.
//
// These live under Home/ (not shared/) on purpose: the homepage owns its
// animation language and nothing here should leak into other routes. The
// shared AnimateOnScroll component is used by the About page and must stay
// untouched.
//
// Easing is a controlled ease-out (no overshoot / bounce) — precise and
// professional, appropriate for an engineering consultancy.
// ---------------------------------------------------------------------------

/** Primary ease-out — smooth, decelerating, no overshoot. */
export const EASE = [0.22, 1, 0.36, 1] as const;

/** Snappier ease-out for dense/quick reveals (tags, chips). */
export const EASE_SNAPPY = [0.16, 1, 0.3, 1] as const;

/** Shared viewport config — trigger once, ~25% of the element visible. */
export const VIEWPORT = { once: true, amount: 0.25 } as const;

/** Earlier trigger for tall blocks / grids. */
export const VIEWPORT_EARLY = { once: true, amount: 0.15 } as const;

// ── Single-element reveals ────────────────────────────────────────────────

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

/** More pronounced entrance for pull-quotes / focal elements. */
export const fadeScale: Variants = {
  hidden: { opacity: 0, scale: 0.94, y: 12 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

// ── Staggered group reveals (parent drives label, child reads `custom={i}`) ─
//
// Pattern: a parent motion element sets `initial="hidden" whileInView="show"`;
// each child sets `variants={…}` + `custom={index}` and NO own initial/animate,
// so it inherits the parent's label. The `custom` index bakes the per-item
// delay directly into the variant, which keeps the stagger continuous even
// across multiple sibling grids.

/** Fade + upward slide, staggered by index. */
export const staggeredFadeUp = (step = 0.08, y = 24, duration = 0.6): Variants => ({
  hidden: { opacity: 0, y },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration, ease: EASE, delay: i * step },
  }),
});

/** Slide in from the left, staggered by index. */
export const staggeredFromLeft = (step = 0.09): Variants => ({
  hidden: { opacity: 0, x: -24 },
  show: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: EASE, delay: i * step },
  }),
});

/** Scale-pop, staggered by index and offset slightly after its row item. */
export const staggeredPop = (step = 0.09, offset = 0.14): Variants => ({
  hidden: { opacity: 0, scale: 0.2 },
  show: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: EASE, delay: i * step + offset },
  }),
});

/** Quick fade + scale-in for dense tag/chip lists. */
export const staggeredTag = (step = 0.04): Variants => ({
  hidden: { opacity: 0, scale: 0.9 },
  show: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.32, ease: EASE_SNAPPY, delay: i * step },
  }),
});
