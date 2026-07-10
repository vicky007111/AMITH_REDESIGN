"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { EASE } from "@/app/components/Home/anim";

// ---------------------------------------------------------------------------
// TODO: swap for client-provided hero photo
// Replace this single path when the client sends their final wide-format
// hero image. The rest of the component requires no edits.
// ---------------------------------------------------------------------------
const HERO_IMAGE_PATH = "/images/banner-candidates/hero-wide.jpg";

// Per-image object-position — tweak if the replacement photo needs
// a different crop anchor.
const HERO_IMAGE_POSITION = "center 40%";

export default function HeroBanner() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden flex flex-col justify-end pt-28 pb-8 sm:pb-10 lg:pb-12"
      style={{ height: "80vh", minHeight: "560px", maxHeight: "750px" }}
      aria-label="Hero banner"
    >
      {/* ── Full-bleed background image ── */}
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

      {/* ── Scrim: bottom-heavy gradient for text legibility ──
           Desktop: transparent top → dark bottom-left.
           Mobile: stronger overall scrim so text stays readable on any crop. */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: [
            "linear-gradient(to top, rgba(0, 15, 48, 0.92) 0%, rgba(0, 15, 48, 0.75) 25%, rgba(0, 15, 48, 0.3) 50%, transparent 70%)",
          ].join(", "),
        }}
      />

      {/* ── Content container ── */}
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

          {/* CTA buttons — custom-styled, not generic components */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: EASE }}
            className="flex flex-wrap gap-4 items-center mb-6"
          >
            <Link
              href="/services"
              className="group relative inline-flex items-center gap-2.5 px-8 py-3.5 rounded-lg font-bold text-sm sm:text-base overflow-hidden transition-all duration-300 cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #001c68 0%, #0033a0 100%)",
                color: "#fff",
                boxShadow: "0 4px 20px rgba(0, 28, 104, 0.35)",
              }}
            >
              <span className="relative z-10">Explore Our Services</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
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

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-lg font-bold text-sm sm:text-base border-2 border-white/40 text-white backdrop-blur-sm hover:bg-white hover:text-primary hover:border-white transition-all duration-300 cursor-pointer"
            >
              Contact Us
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
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Link>
          </motion.div>

          {/* Secondary strap line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: EASE }}
          >
            <div className="flex items-center gap-3">
              <span className="hidden sm:block w-10 h-px bg-warning/70" />
              <p className="text-white/60 text-xs sm:text-sm font-medium tracking-wide uppercase">
                Reliable Engineering · Trusted Decisions · Sustainable
                Infrastructure
              </p>
            </div>
          </motion.div>
        </div>
    </section>
  );
}
