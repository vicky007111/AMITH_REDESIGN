"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Forces the window to the top on every route change. Without this, the
 * browser's scroll-restoration can land a new page mid-scroll, so
 * whileInView reveal animations that are already in the viewport fire
 * instantly instead of playing as the user scrolls down.
 */
export default function ScrollToTopOnNavigate() {
  const pathname = usePathname();

  useEffect(() => {
    // Skip when the URL carries a hash (e.g. /about#leadership) — that's an
    // intentional deep link to a section/modal, not a fresh page load, and
    // forcing scroll to 0 would fight the browser's anchor scroll.
    if (window.location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return null;
}
