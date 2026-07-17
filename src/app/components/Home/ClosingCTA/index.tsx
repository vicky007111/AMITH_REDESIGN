"use client";

import { motion } from "motion/react";
import Reveal from "@/app/components/shared/Reveal";
import Button from "@/app/components/shared/Button";
import IconTile from "@/app/components/shared/IconTile";
import { fadeScale, EASE, HOVER_LIFT } from "@/app/components/shared/anim";

const PILLARS = [
  {
    text: "Independent Engineering Consultancy",
    icon: "lucide:shield-check",
  },
  {
    text: "Experienced Civil & Structural Engineers",
    icon: "lucide:users",
  },
  {
    text: "Scientific Investigation & NDT-Based Assessment",
    icon: "lucide:atom",
  },
  {
    text: "Code-Compliant Engineering Solutions",
    icon: "lucide:file-text",
  },
  {
    text: "Practical & Cost-Effective Recommendations",
    icon: "lucide:wallet",
  },
  {
    text: "Commitment to Safety, Quality & Sustainability",
    icon: "lucide:leaf",
  },
] as const;

export default function ClosingCTA() {
  return (
    <section
      id="closing-cta"
      className="bg-slate-50 transition-colors duration-300 relative overflow-hidden section-py"
    >
      {/* Decorative background glows */}
      <div
        className="absolute -top-10 -left-10 w-96 h-96 rounded-full pointer-events-none opacity-40"
        style={{
          background: "radial-gradient(circle, rgba(0,28,104,0.12) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-10 -right-10 w-96 h-96 rounded-full pointer-events-none opacity-40"
        style={{
          background: "radial-gradient(circle, rgba(0,28,104,0.12) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-12 lg:mb-16">
          {/* Left Column: Heading + Paragraph */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <span className="text-accent font-bold text-xs sm:text-sm uppercase tracking-[0.15em] mb-3 bg-surface-tint px-3 py-1 rounded-full">
              Engineering Excellence
            </span>
            <h2 className="mb-6 leading-tight">
              Building Confidence Through Engineering Excellence
            </h2>
            <p className="text-base text-body font-medium leading-relaxed mb-0">
              Every structure tells a story. Our responsibility is to understand its
              condition, evaluate its performance and provide technically sound
              recommendations that ensure safety, reliability and extend the
              serviceability for long-term &amp; its value.
            </p>
          </div>

          {/* Right Column: Dynamic structured grid of pillars */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PILLARS.map((pillar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.05, ease: EASE }}
                  whileHover={HOVER_LIFT}
                  className="flex items-center gap-3.5 card p-4 hover:shadow-e2 transition-shadow duration-300"
                >
                  <IconTile icon={pillar.icon} size="sm" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-700 leading-snug">
                    {pillar.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Custom Premium CTA Banner */}
        <Reveal variants={fadeScale} amount={0.25}>
          <div className="relative overflow-hidden rounded-media bg-brand-gradient p-8 md:p-10 shadow-e3 border border-white/10">
            {/* Glowing inner accent */}
            <div
              className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full pointer-events-none opacity-20"
              style={{
                background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
              }}
              aria-hidden="true"
            />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
              <div className="max-w-2xl">
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight mb-2">
                  Let&apos;s Build Safer and More Resilient Infrastructure Together.
                </h3>
                <p className="text-xs sm:text-sm text-white/70 font-medium">
                  Partner with Chennai&apos;s trusted civil engineering audit &amp; stability consultants.
                </p>
              </div>

              <Button
                href="/contact"
                variant="inverse"
                size="lg"
                icon="lucide:arrow-right"
                className="shrink-0"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
