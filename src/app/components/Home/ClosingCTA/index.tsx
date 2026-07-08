"use client";

import Link from "next/link";
import { motion } from "motion/react";
import Reveal from "@/app/components/Home/Reveal";
import { fadeScale, EASE } from "@/app/components/Home/anim";

export default function ClosingCTA() {
  return (
    <section
      id="closing-cta"
      className="bg-white dark:bg-darkmode transition-colors duration-300 relative overflow-hidden py-10 sm:py-12 lg:py-14"
    >
      {/* Soft decorative blobs */}
      <div
        className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,28,104,0.06) 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,28,104,0.06) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="container mx-auto max-w-5xl px-6 md:px-12 text-center relative z-10">
        {/* Whole block fades + scales in as one focal unit */}
        <Reveal variants={fadeScale} amount={0.3}>
          {/* Overline */}
          <p className="text-primary font-bold text-sm uppercase tracking-wider mb-2">
            Engineering Excellence
          </p>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 leading-tight">
            Building Confidence Through Engineering Excellence
          </h2>

          {/* Body paragraph */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed max-w-3xl mx-auto mb-6">
            Every structure tells a story. Our responsibility is to understand its
            condition, evaluate its performance and provide technically sound
            recommendations that ensure safety, reliability and extend the
            serviceability for long-term &amp; its value.
          </p>

          {/* CTA banner */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-primary rounded-2xl px-6 py-5 shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-shadow duration-300">
            <p className="text-white font-bold text-base sm:text-lg leading-snug text-center sm:text-left">
              Let&apos;s Build Safer and More Resilient Infrastructure Together.
            </p>
            {/* Button: scale-up + deeper shadow on hover, controlled easing */}
            <motion.div
              className="shrink-0"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2, ease: EASE }}
            >
              <Link
                href="/contact"
                className="inline-block px-6 py-3 rounded-xl bg-white text-primary font-extrabold text-sm shadow-md hover:shadow-xl transition-shadow duration-200 cursor-pointer whitespace-nowrap"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
