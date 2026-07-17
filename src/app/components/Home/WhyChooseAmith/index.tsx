"use client";

import { Icon } from "@iconify/react";
import { motion } from "motion/react";
import Reveal from "@/app/components/shared/Reveal";
import {
  staggeredFromLeft,
  staggeredPop,
  VIEWPORT_EARLY,
} from "@/app/components/shared/anim";

const WHY_ITEMS = [
  "Independent Engineering Consultancy",
  "Experienced Civil & Structural Engineers",
  "Scientific Investigation & NDT-Based Assessment",
  "Code-Compliant Engineering Solutions",
  "Practical & Cost-Effective Recommendations",
  "Commitment to Safety, Quality & Sustainability",
] as const;

// Each row slides in from the left; its checkmark pops in slightly after.
const rowVariants = staggeredFromLeft(0.09);
const checkVariants = staggeredPop(0.09, 0.14);

export default function WhyChooseAmith() {
  return (
    <section
      id="why-choose-amith"
      className="bg-white transition-colors duration-300 section-py"
    >
      <div className="section-container">
        {/* Heading */}
        <Reveal className="text-center mb-8 sm:mb-10">
          <p className="kicker-text">
            Why Amith?
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
            Why Choose Amith?
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </Reveal>

        {/* 2-col checklist grid — one reveal parent drives the stagger */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-3xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_EARLY}
        >
          {WHY_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              variants={rowVariants}
              custom={i}
              className="flex items-start gap-3 py-3.5 px-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/40 hover:shadow-sm transition-colors duration-200"
            >
              <motion.span
                className="shrink-0 mt-0.5"
                variants={checkVariants}
                custom={i}
              >
                <Icon
                  icon="lucide:circle-check"
                  width={22}
                  height={22}
                  className="text-accent"
                />
              </motion.span>
              <span className="text-sm sm:text-base font-semibold text-slate-800 leading-snug">
                {item}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
