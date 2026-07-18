"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { motion } from "motion/react";
import Reveal from "@/app/components/shared/Reveal";
import { staggeredFadeUp, EASE, VIEWPORT_EARLY } from "@/app/components/shared/anim";

const promoterCardVariants = staggeredFadeUp(0.1);

// ---------------------------------------------------------------------------
// SWAPPABLE PROMOTER IMAGE PATHS
// Replace each path when the client sends the promoter photos.
//
// `slug` must match the corresponding director's `slug` in
// AboutPage/AboutLeadership.tsx — it's used to deep-link into that person's
// full profile modal on the About page.
// ---------------------------------------------------------------------------
const PROMOTERS = [
  {
    id: 1,
    slug: "devadas-manoharan",
    imagePath: "/images/dr-devadas-manoharan-m.jpg",
    name: "Dr. Devadas Manoharan. M",
    tagline: "A Visionary in Civil Engineering & Infrastructure Management",
    avatarInitials: "DM",
    bio: "An eminent academician and structural engineering consultant with 37+ years of experience. Former Vice Chancellor of Anna University of Technology, Tiruchirappalli, and former Head of the Department of Civil Engineering at Anna University, Chennai. He has guided 12 Ph.D. scholars, 91 M.E. theses and 3 M.S. research projects, and has led structural and quality investigations for major public infrastructure including airports, industrial plants and government housing.",
    imageAlt: "Dr. Devadas Manoharan M — Director and Principal Structural Advisor",
  },
  {
    id: 2,
    slug: "kalaimony-r",
    imagePath: "/images/er-kalaimony-r.jpg",
    name: "Er. Kalaimony R",
    tagline: "Director – Structural Assessment, Quality Audit & Rehabilitation Engineering",
    avatarInitials: "RK",
    bio: "A practicing civil engineering consultant with deep expertise in quality auditing, structural stability assessments, Non-Destructive Testing (NDT), restoration, rehabilitation, and technical due diligence. Senior Consultant at CUBE – IIT Madras, with 38+ years spanning public works and developer oversight.",
    imageAlt: "Er. Kalaimony R — Director, Structural Assessment & Quality Audit",
  },
  {
    id: 3,
    slug: "nallathambi",
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
      <Link
        href={`/about?director=${promoter.slug}#leadership`}
        className="w-full bg-white border border-slate-100 hover:border-primary/30 rounded-3xl overflow-hidden shadow-[0_2px_10px_rgba(0,28,104,0.05)] hover:shadow-[0_18px_36px_rgba(0,28,104,0.16)] transition-[box-shadow,border-color] duration-300 flex flex-col group"
      >
        {/* Photo area — portrait container so full headshots are visible */}
        <div
          className="relative w-full overflow-hidden"
          style={{
            aspectRatio: "4/3",
            background: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)",
          }}
        >
          {/* Initials avatar — fallback shown behind the real photo */}
          <div
            className="absolute inset-0 flex items-center justify-center text-primary/30 font-black select-none"
            aria-hidden="true"
            style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)" }}
          >
            {promoter.avatarInitials}
          </div>
          {/* Real promoter photo — object-contain so the full face is always shown */}
          <Image
            src={promoter.imagePath}
            alt={promoter.imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain group-hover:scale-105 transition-transform duration-500 relative z-10"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
        </div>

        {/* Text body */}
        <div className="p-4 sm:p-6 md:p-8 flex flex-col gap-2 sm:gap-3 flex-1">
          {/* Verified badge + name */}
          <div className="flex items-start gap-2">
            <div className="flex flex-col gap-1 flex-1">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
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

          <p className="text-sm text-slate-500 font-medium leading-relaxed flex-1">
            {promoter.bio}
          </p>

          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary mt-1">
            View Full Profile
            <Icon
              icon="solar:arrow-right-linear"
              width={14}
              height={14}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export default function PromotersSection() {
  return (
    <section
      id="promoters"
      className="bg-slate-50 transition-colors duration-300 section-py"
    >
      <div className="section-container">
        {/* Section heading */}
        <Reveal className="text-center mb-10 sm:mb-14">
          <p className="kicker-text">
            Our Promoters
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900">
            Meet Our Promoters
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </Reveal>

        {/* 3-column card grid — reveal parent drives the staggered fade-up */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-10 sm:mb-14"
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
          <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed italic">
            <strong className="text-slate-800 not-italic">
              Engineering Leadership You Can Trust
            </strong>{" "}
            — Together, our promoters combine technical expertise, professional
            integrity, and a shared vision of delivering reliable, innovative, and
            sustainable engineering solutions.
          </p>

          <Link
            href="/about#leadership"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-xl bg-primary hover:bg-opacity-90 text-white font-bold text-sm sm:text-base shadow-lg shadow-primary/20 transition-all duration-200"
          >
            Meet Our Board of Directors
            <Icon icon="solar:arrow-right-bold" width={18} height={18} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
