"use client";

import { motion } from "motion/react";
import { fadeUp, fadeScale, EASE } from "@/app/components/Home/anim";

// Parent drives the reveal; children inherit the "show" label and stagger in.
// `staggerChildren` sequences the paragraphs; the tagline (last child) gets a
// distinct, more pronounced scale+fade because it's the pull-quote.
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, ease: EASE } },
};

export default function IntroSection() {
  return (
    <section
      id="intro"
      className="bg-white dark:bg-darkmode transition-colors duration-300 py-10 sm:py-12 lg:py-14"
    >
      <div className="container mx-auto max-w-7xl px-6 md:px-12">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          // ~30% of the block visible before the paragraphs begin revealing.
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section label */}
          <motion.p
            variants={fadeUp}
            className="text-primary font-bold text-sm uppercase tracking-wider mb-2"
          >
            Who We Are
          </motion.p>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 leading-tight"
          >
            Trusted Engineering Partners for Infrastructure Owners
          </motion.h2>

          {/* Paragraph 1 */}
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed mb-4"
          >
            We help owners, developers, industries, institutions and public
            agencies maximize the safety, durability and performance of their
            infrastructure through scientific assessment, engineering expertise
            and practical solutions.
          </motion.p>

          {/* Paragraph 2 */}
          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed mb-6"
          >
            From quality audits during construction to structural stability
            evaluations &amp; condition assessment during the service period,
            rehabilitation strategies and technical advisory services, we
            deliver reliable engineering decisions backed by advanced
            inspection technologies and internationally accepted practices.
          </motion.p>

          {/* Pull-quote tagline ── pronounced scale + fade, arrives last */}
          <motion.blockquote
            variants={fadeScale}
            className="relative pl-6 border-l-4 border-primary"
            aria-label="Company tagline"
          >
            <p
              className="font-extrabold text-primary dark:text-blue leading-snug tracking-tight"
              style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)", lineHeight: 1.35 }}
            >
              Reliable Engineering. Trusted Decisions.{" "}
              <br className="hidden sm:block" />
              Sustainable Infrastructure.
            </p>
          </motion.blockquote>
        </motion.div>
      </div>
    </section>
  );
}
