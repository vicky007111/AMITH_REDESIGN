"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { motion } from "motion/react";
import Reveal from "@/app/components/Home/Reveal";
import { staggeredFadeUp, EASE, VIEWPORT_EARLY } from "@/app/components/Home/anim";

const promoterCardVariants = staggeredFadeUp(0.1);

// ---------------------------------------------------------------------------
// SWAPPABLE PROMOTER IMAGE PATHS
// Replace each path when the client sends the promoter photos.
// ---------------------------------------------------------------------------
const PROMOTERS = [
  {
    id: 1,
    imagePath: "/images/Dr. Devadas Manoharan. M.jpeg",
    name: "Dr. Devadas Manoharan. M",
    tagline: "A Visionary in Civil Engineering & Infrastructure Management",
    avatarInitials: "DM",
    bio: "An eminent academician and structural engineering consultant with 37+ years of experience. Former Vice Chancellor of Anna University of Technology, Tiruchirappalli, and former Head of the Department of Civil Engineering at Anna University, Chennai. He has guided 12 Ph.D. scholars, 91 M.E. theses and 3 M.S. research projects, and has led structural and quality investigations for major public infrastructure including airports, industrial plants and government housing.",
    imageAlt: "Dr. Devadas Manoharan M — Director and Principal Structural Advisor",
  },
  {
    id: 2,
    imagePath: "/images/Er. Kalaimony R.jpeg",
    name: "Er. Kalaimony R",
    tagline: "Director – Structural Assessment, Quality Audit & Rehabilitation Engineering",
    avatarInitials: "RK",
    bio: "A practicing civil engineering consultant with deep expertise in quality auditing, structural stability assessments, Non-Destructive Testing (NDT), restoration, rehabilitation, and technical due diligence. Senior Consultant at CUBE – IIT Madras, with 38+ years spanning public works and developer oversight.",
    imageAlt: "Er. Kalaimony R — Director, Structural Assessment & Quality Audit",
  },
  {
    id: 3,
    imagePath: "/images/Nallathambi.png",
    name: "Dr. Col. Nallathambi",
    tagline: "Strategic Advisor – Leadership, Infrastructure & Project Excellence",
    avatarInitials: "PN",
    bio: "A retired Army Officer from the Military Engineering Services (MES) with 30+ years spanning defense installations and commercial structural practice. He brings exceptional leadership, discipline and project management capabilities as a Strategic Advisor, guiding Amith's institutional development, risk frameworks and quality governance.",
    imageAlt: "Dr. Col. Nallathambi — Strategic Advisor, Leadership & Infrastructure",
  },
] as const;

function PromoterCard({
  promoter,
  index,
}: {
  promoter: (typeof PROMOTERS)[number];
  index: number;
}) {
  return (
    <motion.div
      className="flex"
      variants={promoterCardVariants}
      custom={index}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2, ease: EASE }}
    >
      <div className="w-full bg-white dark:bg-darklight border border-slate-100 dark:border-darkborder hover:border-primary/30 rounded-3xl overflow-hidden shadow-[0_2px_10px_rgba(0,28,104,0.05)] hover:shadow-[0_18px_36px_rgba(0,28,104,0.16)] dark:hover:shadow-[0_18px_36px_rgba(0,28,104,0.30)] transition-[box-shadow,border-color] duration-300 flex flex-col group">
        {/* Photo area */}
        <div className="relative w-full aspect-[3/4] bg-cream dark:bg-primary/5 overflow-hidden">
          {/* Initials avatar — fallback shown behind the real photo */}
          <div
            className="absolute inset-0 flex items-center justify-center text-primary/30 font-black select-none"
            aria-hidden="true"
            style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)" }}
          >
            {promoter.avatarInitials}
          </div>
          {/* Real promoter photo */}
          <Image
            src={promoter.imagePath}
            alt={promoter.imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500 relative z-10"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
        </div>

        {/* Text body */}
        <div className="p-6 sm:p-8 flex flex-col gap-3 flex-1">
          {/* Verified badge + name */}
          <div className="flex items-start gap-2">
            <div className="flex flex-col gap-1 flex-1">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                {promoter.name}
              </h3>
              <span className="text-xs font-bold text-primary uppercase tracking-wide">
                {promoter.tagline}
              </span>
            </div>
            <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
              <Icon
                icon="solar:verified-check-bold"
                width={16}
                height={16}
                className="text-primary"
              />
            </div>
          </div>

          <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed flex-1">
            {promoter.bio}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function PromotersSection() {
  return (
    <section
      id="promoters"
      className="bg-slate-50 dark:bg-darklight transition-colors duration-300"
    >
      <div className="container mx-auto max-w-7xl px-6 md:px-12">
        {/* Section heading */}
        <Reveal className="text-center mb-10 sm:mb-14">
          <p className="text-primary font-bold text-sm uppercase tracking-wider mb-3">
            Our Promoters
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
            Meet Our Promoters
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </Reveal>

        {/* 3-column card grid — reveal parent drives the staggered fade-up */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 sm:mb-14"
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_EARLY}
        >
          {PROMOTERS.map((promoter, i) => (
            <PromoterCard key={promoter.id} promoter={promoter} index={i} />
          ))}
        </motion.div>

        {/* Closing statement */}
        <Reveal className="text-center max-w-3xl mx-auto">
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-medium leading-relaxed italic">
            <strong className="text-slate-800 dark:text-white not-italic">
              Engineering Leadership You Can Trust
            </strong>{" "}
            — Together, our promoters combine technical expertise, professional
            integrity, and a shared vision of delivering reliable, innovative, and
            sustainable engineering solutions.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
