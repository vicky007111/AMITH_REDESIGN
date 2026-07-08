"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { EASE } from "@/app/components/Home/anim";

// ---------------------------------------------------------------------------
// SWAPPABLE CONSTANT — replace this single path when the client sends the
// dedicated wide-format hero photo. The rest of the component requires no edits.
// ---------------------------------------------------------------------------
const HERO_IMAGE_PATH = "/images/banner-candidates/hero-wide.jpg";

// Per-image object-position to make the crop look intentional.
const HERO_IMAGE_POSITION = "right center";

export default function HeroBanner() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden flex flex-col justify-end"
      style={{ minHeight: "calc(100vh - 72px)" }}
      aria-label="Hero banner"
    >
      {/* ── Background image ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_IMAGE_PATH}
          alt="AMITH engineer conducting a concrete core drilling inspection on a structural column"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: HERO_IMAGE_POSITION }}
        />
      </div>

      {/* ── Gradient overlay: dark on left for text readability, transparent on right ── */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(8, 23, 56, 0.85) 0%, rgba(8, 23, 56, 0.7) 40%, rgba(8, 23, 56, 0.3) 70%, transparent 100%)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-20 w-full">
        <div className="container mx-auto max-w-7xl px-6 md:px-12 pb-10 sm:pb-12 lg:pb-14 pt-20 sm:pt-24 lg:pt-28">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider mb-5 sm:mb-6 w-fit select-none"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-warning animate-pulse" />
            Independent Engineering Consultancy
          </motion.div>

          {/* Headline — leads the load sequence */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="text-white font-extrabold leading-tight tracking-tight mb-4 sm:mb-5 max-w-4xl"
            style={{ fontSize: "clamp(1.75rem, 5vw, 3.75rem)", lineHeight: 1.1 }}
          >
            Engineering Assurance for{" "}
            <span className="text-warning">Safer Infrastructure</span>
          </motion.h1>

          {/* Subheadline — follows the headline ~150ms later */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: EASE }}
            className="text-white/85 font-medium leading-relaxed max-w-2xl mb-8 sm:mb-10"
            style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)" }}
          >
            Amith is an Independent Engineering Consultancy firm for Quality,
            Stability &amp; Asset Performance.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: EASE }}
            className="flex flex-wrap gap-4 items-center"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base bg-primary text-white hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-primary/30 cursor-pointer"
            >
              Explore Our Services
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base bg-white/15 backdrop-blur-sm border border-white/30 text-white hover:bg-white/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
