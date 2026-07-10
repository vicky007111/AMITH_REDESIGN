"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { EASE } from "@/app/components/Home/anim";

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
      className="relative w-full overflow-hidden flex flex-col justify-center pt-24 sm:pt-28 pb-10 sm:pb-12"
      style={{ height: "70vh", minHeight: "440px", maxHeight: "680px" }}
      aria-label="Hero banner"
    >
      {/* ── Slideshow background images ── */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={current}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: EASE }}
        >
          <Image
            src={HERO_SLIDES[current].src}
            alt={HERO_SLIDES[current].alt}
            fill
            priority={current === 0}
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: HERO_SLIDES[current].position }}
          />
        </motion.div>
      </AnimatePresence>

      {/* ── Scrim: bottom-heavy gradient for text legibility ── */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(0, 15, 48, 0.92) 0%, rgba(0, 15, 48, 0.75) 25%, rgba(0, 15, 48, 0.3) 50%, transparent 70%)",
        }}
      />

      {/* ── Content container (stays static during slideshow) ── */}
      <div className="relative z-20 container mx-auto max-w-7xl px-6 md:px-12">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          className="text-white font-extrabold tracking-tight mb-4 sm:mb-5 max-w-3xl"
          style={{
            fontSize: "clamp(2rem, 5.5vw, 4rem)",
            lineHeight: 1.08,
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
          className="text-white/90 font-medium leading-relaxed max-w-xl mb-8 sm:mb-10"
          style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.15rem)" }}
        >
          Amith is an Independent Engineering Consultancy firm for Quality,
          Stability &amp; Asset Performance.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: EASE }}
          className="flex flex-wrap gap-3 sm:gap-4 items-center"
        >
          {/* Explore Our Services */}
          <Link
            href="/services"
            className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-xs sm:text-sm overflow-hidden transition-all duration-300 cursor-pointer"
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
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-xs sm:text-sm border-2 border-white/40 text-white backdrop-blur-sm hover:bg-white hover:text-primary hover:border-white transition-all duration-300 cursor-pointer"
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
    </section>
  );
}
