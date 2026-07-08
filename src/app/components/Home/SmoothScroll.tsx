"use client";

import type { ReactNode } from "react";
import { ReactLenis } from "lenis/react";
import { MotionConfig, useReducedMotion } from "motion/react";
import "lenis/dist/lenis.css";

/**
 * SmoothScroll — homepage-only wrapper.
 *
 * - Enables Lenis smooth scrolling for the whole page (`root`), but ONLY here.
 *   Mounted from the homepage; when the user navigates to another route this
 *   component unmounts and Lenis is torn down, restoring native scroll. Other
 *   routes are never wrapped.
 * - `MotionConfig reducedMotion="user"` makes every Framer Motion animation on
 *   the homepage respect `prefers-reduced-motion`: transform/scale animations
 *   are dropped (elements snap to their final position) while opacity fades are
 *   preserved, so content still appears — just without movement.
 * - When reduced motion is requested we also skip Lenis entirely and fall back
 *   to the browser's native scrolling.
 */
export default function SmoothScroll({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion();

  return (
    <MotionConfig reducedMotion="user">
      {reduceMotion ? (
        children
      ) : (
        <ReactLenis
          root
          options={{
            duration: 1.1,
            // Precise, controlled deceleration — matches the animation easing.
            easing: (t: number) => 1 - Math.pow(1 - t, 3),
            smoothWheel: true,
          }}
        >
          {children}
        </ReactLenis>
      )}
    </MotionConfig>
  );
}
