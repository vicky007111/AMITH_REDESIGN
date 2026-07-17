"use client";

import { Icon } from "@iconify/react";
import { motion } from "motion/react";
import SectionHeader from "@/app/components/shared/SectionHeader";
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
        {/* Asymmetric split: heading rail on the left, checklist on the right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <SectionHeader
            kicker="Why Amith?"
            title="Why Choose Amith?"
            align="left"
            className="lg:col-span-4 lg:sticky lg:top-28 mb-2 lg:mb-0"
          />

          {/* 2-col checklist grid — one reveal parent drives the stagger */}
          <motion.div
            className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_EARLY}
          >
            {WHY_ITEMS.map((item, i) => (
              <motion.div
                key={i}
                variants={rowVariants}
                custom={i}
                className="flex items-start gap-3 py-3.5 px-4 rounded-card bg-surface-soft border border-line hover:border-primary/20 hover:shadow-e1 transition-[border-color,box-shadow] duration-200"
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
      </div>
    </section>
  );
}
