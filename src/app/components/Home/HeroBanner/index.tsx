"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { EASE } from "@/app/components/shared/anim";

// ---------------------------------------------------------------------------
// HERO SLIDESHOW IMAGES
// Add or remove images here. The slideshow auto-cycles through them.
// ---------------------------------------------------------------------------
const HERO_SLIDES = [
  {
    src: "/images/banner-candidates/hero-wide.jpg",
    alt: "AMITH engineer conducting a concrete core drilling inspection on a structural column",
    position: "center 25%",
  },
  {
    src: "/gallery/structural-testing/corrosion-mapping-industrial-structure.jpg",
    alt: "AMITH engineers performing corrosion mapping on an industrial structure",
    position: "center 25%",
  },
  {
    src: "/gallery/structural-repair/structural-strengthening-site.jpg",
    alt: "Engineers inspecting structural strengthening at an industrial facility",
    position: "center 15%",
  },
  {
    src: "/images/banner-candidates/image6.jpeg",
    alt: "Quality audit engineer with clipboard on construction site",
    position: "center 10%",
  },
] as const;

const SLIDE_DURATION = 5000; // ms per slide

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  // Auto-advance timer
  useEffect(() => {
    const timer = setInterval(next, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden flex flex-col justify-end pb-16 sm:pb-20"
      style={{ height: "100svh", minHeight: "600px" }}
      aria-label="Hero banner"
    >
      {/* ── Slideshow background images ── */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={current}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: EASE }}
        >
          <Image
            src={HERO_SLIDES[current].src}
            alt={HERO_SLIDES[current].alt}
            fill
            priority={current === 0}
            quality={90}
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: HERO_SLIDES[current].position }}
          />
          {/* Slow continuous Ken Burns drift while the slide is showing */}
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1 }}
            animate={{ scale: 1.06 }}
            transition={{ duration: SLIDE_DURATION / 1000 + 1.4, ease: "linear" }}
          />
        </motion.div>
      </AnimatePresence>

      {/* ── Scrim: bottom-heavy gradient for text legibility, plus subtle top/side vignette for a cinematic, professional finish ── */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(0, 10, 35, 0.95) 0%, rgba(0, 12, 40, 0.82) 20%, rgba(0, 15, 48, 0.4) 45%, rgba(0, 15, 48, 0.18) 65%, rgba(0, 8, 30, 0.35) 100%)",
        }}
      />
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 55%, rgba(0, 8, 28, 0.35) 100%)",
        }}
      />

      {/* ── Content container (stays static during slideshow) ── */}
      <div className="relative z-20 container mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          className="text-white font-extrabold tracking-tight mb-4 sm:mb-5 max-w-3xl"
          style={{
            fontSize: "clamp(1.75rem, 5.5vw, 4.5rem)",
            lineHeight: 1.1,
            textShadow: "0 2px 24px rgba(0, 8, 28, 0.35)",
          }}
        >
          Engineering Assurance
          <br />
          for <span className="text-warning">Safer Infrastructure</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
          className="text-white/90 font-medium leading-relaxed max-w-xl mb-6 sm:mb-10"
          style={{ fontSize: "clamp(0.875rem, 1.8vw, 1.15rem)" }}
        >
          Amith is an Independent Engineering Consultancy firm for Quality,
          Stability &amp; Asset Performance.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: EASE }}
          className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 items-stretch xs:items-center"
        >
          {/* Explore Our Services */}
          <Link
            href="/services"
            className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold text-xs sm:text-sm overflow-hidden transition-all duration-300 cursor-pointer"
            style={{
              background: "linear-gradient(135deg, #001c68 0%, #0033a0 100%)",
              color: "#fff",
              boxShadow: "0 4px 20px rgba(0, 28, 104, 0.35)",
            }}
          >
            <span className="relative z-10">Explore Our Services</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
            {/* Hover glow layer */}
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: "linear-gradient(135deg, #0033a0 0%, #0050d0 100%)",
              }}
            />
          </Link>

          {/* Contact Us */}
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold text-xs sm:text-sm border-2 border-white/40 text-white backdrop-blur-sm hover:bg-white hover:text-primary hover:border-white transition-all duration-300 cursor-pointer"
          >
            Contact Us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Link>
        </motion.div>

        {/* ── Slide indicators ── */}
        <div className="flex gap-2 mt-6" aria-label="Slideshow progress">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="relative h-1 rounded-full overflow-hidden bg-white/20 transition-all duration-300 cursor-pointer"
              style={{ width: i === current ? "2.5rem" : "1rem" }}
            >
              {i === current && (
                <motion.span
                  className="absolute inset-y-0 left-0 bg-warning rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
                  key={`progress-${current}`}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ── Scroll cue ── */}
      <motion.div
        className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-2 text-white/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{
          opacity: { duration: 0.6, delay: 0.9 },
          y: { duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
        }}
        aria-hidden="true"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Scroll</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14" />
          <path d="m19 12-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
