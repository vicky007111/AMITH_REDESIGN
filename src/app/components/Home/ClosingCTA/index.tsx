"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import Reveal from "@/app/components/shared/Reveal";
import { fadeScale, EASE } from "@/app/components/shared/anim";

const PILLARS = [
  {
    text: "Independent Engineering Consultancy",
    icon: "solar:shield-check-bold-duotone",
  },
  {
    text: "Experienced Civil & Structural Engineers",
    icon: "solar:users-group-rounded-bold-duotone",
  },
  {
    text: "Scientific Investigation & NDT-Based Assessment",
    icon: "solar:atom-bold-duotone",
  },
  {
    text: "Code-Compliant Engineering Solutions",
    icon: "solar:document-text-bold-duotone",
  },
  {
    text: "Practical & Cost-Effective Recommendations",
    icon: "solar:wallet-money-bold-duotone",
  },
  {
    text: "Commitment to Safety, Quality & Sustainability",
    icon: "solar:leaf-bold-duotone",
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
            <span className="text-primary font-bold text-xs sm:text-sm uppercase tracking-widest mb-3 bg-primary/10 px-3 py-1 rounded-full">
              Engineering Excellence
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Building Confidence Through Engineering Excellence
            </h2>
            <p className="text-base text-slate-600 font-medium leading-relaxed mb-0">
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
                  whileHover={{ y: -3, scale: 1.01 }}
                  className="flex items-center gap-3.5 bg-white border border-slate-100 p-4 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                    <Icon
                      icon={pillar.icon}
                      className="text-primary"
                      width="24"
                      height="24"
                    />
                  </div>
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
          <div className="relative overflow-hidden rounded-3xl bg-brand-gradient p-8 md:p-10 shadow-e3 border border-white/10">
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

              {/* Custom Styled Button in Golden Yellow */}
              <motion.div
                whileHover={{ scale: 1.025 }}
                whileTap={{ scale: 0.975 }}
                transition={{ duration: 0.2, ease: EASE }}
                className="shrink-0"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white hover:bg-surface-tint text-primary font-bold text-sm sm:text-base shadow-e2 transition-all duration-200 cursor-pointer whitespace-nowrap"
                >
                  Get in Touch
                  <Icon icon="solar:arrow-right-bold" width="18" height="18" />
                </Link>
              </motion.div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
