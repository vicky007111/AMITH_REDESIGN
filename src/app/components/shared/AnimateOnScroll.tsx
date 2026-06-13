"use client";

import React from "react";
import { motion, useInView } from "motion/react";
import type { UseInViewOptions } from "motion/react";
import { useRef } from "react";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  /** Animation delay in seconds */
  delay?: number;
  /** Slide-up distance in px (0 = fade only) */
  y?: number;
  /** Custom className applied to the wrapper div */
  className?: string;
  /** IntersectionObserver rootMargin — negative = triggers earlier */
  margin?: UseInViewOptions["margin"];
}

/**
 * AnimateOnScroll — Reusable scroll-reveal wrapper.
 *
 * Fades + slides children upward when they enter the viewport.
 * Fires once (does not replay when scrolling back up).
 */
export default function AnimateOnScroll({
  children,
  delay = 0,
  y = 30,
  className = "",
  margin = "-80px",
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{
        duration: 0.5,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
