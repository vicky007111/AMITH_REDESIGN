"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { fadeUp, VIEWPORT } from "./anim";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Which variant set to reveal with. Defaults to fade + slide up. */
  variants?: Variants;
  /** Fraction of the element that must be visible to trigger (0–1). */
  amount?: number;
  /** Forwarded to the variant's `show` function — use with `staggered*` variants for per-item delay. */
  custom?: number;
};

/**
 * Reveal — single-element scroll reveal. Triggers once, honours reduced motion
 * via the page-level MotionConfig. For staggered groups, drive children with
 * the `staggered*` variants + `custom={index}` instead.
 */
export default function Reveal({
  children,
  className,
  variants = fadeUp,
  amount,
  custom,
}: RevealProps) {
  const viewport = amount != null ? { once: true, amount } : VIEWPORT;

  return (
    <motion.div
      className={className}
      custom={custom}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
    >
      {children}
    </motion.div>
  );
}
