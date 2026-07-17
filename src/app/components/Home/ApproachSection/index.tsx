"use client";

import { motion } from "motion/react";
import type { Variants } from "motion/react";
import SectionHeader from "@/app/components/shared/SectionHeader";
import { EASE } from "@/app/components/shared/anim";

const STEPS = [
  {
    step: "01",
    label: "Inspect",
    description: "Field reconnaissance, visual survey and targeted sampling",
  },
  {
    step: "02",
    label: "Assess",
    description: "NDT testing, material analysis and defect characterisation",
  },
  {
    step: "03",
    label: "Analyze",
    description: "Structural calculations, load modelling and performance review",
  },
  {
    step: "04",
    label: "Recommend",
    description: "Evidence-based engineering report with actionable strategies",
  },
  {
    step: "05",
    label: "Restore",
    description: "Supervised rehabilitation, repair and quality documentation",
  },
] as const;

// Total time the connecting line takes to draw across all steps.
const LINE_DURATION = 1.4;

// Horizontal line draws left→right; vertical line (mobile) draws top→bottom.
const lineDrawX: Variants = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: LINE_DURATION, ease: EASE } },
};
const lineDrawY: Variants = {
  hidden: { scaleY: 0 },
  show: { scaleY: 1, transition: { duration: LINE_DURATION, ease: EASE } },
};

// Each step fades/rises in timed so it "lights up" as the line reaches it.
const stepVariant: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: EASE,
      delay: 0.12 + (i * LINE_DURATION) / STEPS.length,
    },
  }),
};

export default function ApproachSection() {
  return (
    <section
      id="approach"
      className="bg-slate-50 transition-colors duration-300 overflow-hidden section-py"
    >
      <div className="section-container">
        {/* Heading */}
        <SectionHeader
          kicker="Our Methodology"
          title="Our Approach"
          lead="A systematic engineering methodology that transforms field
            observations into practical, reliable and sustainable engineering
            solutions."
        />

        {/* One reveal parent so the line draw and step reveals stay in sync */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}>
          {/* Desktop (lg+): horizontal stepper with a drawing connector line */}
          <div className="hidden lg:block relative">
            {/* Connector line spans the circle centres (10% → 90% of the row) */}
            <div className="absolute top-6 left-[10%] right-[10%] h-0.5 -translate-y-1/2 z-0">
              <div className="absolute inset-0 rounded-full bg-line" />
              <motion.div
                variants={lineDrawX}
                className="absolute inset-0 rounded-full bg-primary origin-left"
                aria-hidden="true"
              />
            </div>

            <div className="flex items-start relative z-10">
              {STEPS.map((step, i) => (
                <motion.div
                  key={step.step}
                  variants={stepVariant}
                  custom={i}
                  className="flex-1 flex flex-col items-center text-center px-3"
                >
                  {/* Circle */}
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-display font-bold text-sm mb-3 shadow-e2 shrink-0">
                    {step.step}
                  </div>
                  <h3 className="text-lg mb-1 leading-tight">
                    {step.label}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted font-medium leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile (< lg): vertical timeline with a drawing connector line */}
          <div className="lg:hidden relative">
            {/* Vertical connector: static track + drawing progress line */}
            <div className="absolute left-5 top-5 bottom-5 w-0.5 z-0">
              <div className="absolute inset-0 rounded-full bg-line" />
              <motion.div
                variants={lineDrawY}
                className="absolute inset-0 rounded-full bg-primary origin-top"
                aria-hidden="true"
              />
            </div>
            <div className="space-y-6">
              {STEPS.map((step, i) => (
                <motion.div
                  key={step.step}
                  variants={stepVariant}
                  custom={i}
                  className="flex gap-4 items-start relative z-10"
                >
                  {/* Circle */}
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-display font-bold text-xs shrink-0 shadow-e2">
                    {step.step}
                  </div>
                  <div className="flex-1 pb-2">
                    <h3 className="text-base mb-1 leading-tight">
                      {step.label}
                    </h3>
                    <p className="text-sm text-muted font-medium leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
