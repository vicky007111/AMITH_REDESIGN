"use client";

import { MotionConfig } from "motion/react";
import "./icons";

/**
 * Site-wide motion configuration. `reducedMotion="user"` disables transform
 * animations for users with an OS-level reduced-motion preference — every
 * motion component on the site inherits this.
 */
export default function MotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
