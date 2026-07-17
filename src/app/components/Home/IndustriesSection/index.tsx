"use client";

import { motion } from "motion/react";
import Reveal from "@/app/components/shared/Reveal";
import { staggeredTag, VIEWPORT_EARLY } from "@/app/components/shared/anim";

const INDUSTRIES = [
  "Commercial Buildings",
  "Residential Communities",
  "Industrial Facilities",
  "Educational Institutions",
  "Healthcare Infrastructure",
  "Heritage Structures",
  "Government & Public Infrastructure Utilities",
  "Manufacturing Plants",
  "Water & Utility Infrastructure",
] as const;

// Quick, snappy fade + scale — subtle for this dense list.
const tagVariants = staggeredTag(0.04);

export default function IndustriesSection() {
  return (
    <section
      id="industries"
      className="bg-primary transition-colors duration-300 section-py"
    >
      <div className="section-container">
        {/* Heading */}
        <Reveal className="text-center mb-8 sm:mb-10">
          <p className="text-white/60 font-bold text-sm uppercase tracking-wider mb-3">
            Sectors We Support
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Industries We Serve
          </h2>
          <div className="w-12 h-1 bg-white/30 mx-auto mt-4 rounded-full" />
        </Reveal>

        {/* Tag / chip grid — 3 cols desktop, 2 cols tablet, 1 col mobile */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3"
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_EARLY}
        >
          {INDUSTRIES.map((industry, i) => (
            <motion.div
              key={i}
              variants={tagVariants}
              custom={i}
              className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/10 border border-white/15 hover:bg-white/20 hover:border-white/30 transition-colors duration-200 group"
            >
              {/* Decorative dot */}
              <span className="w-2 h-2 rounded-full bg-accent shrink-0 group-hover:scale-125 transition-transform duration-200" />
              <span className="text-sm sm:text-base font-semibold text-white leading-snug">
                {industry}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
