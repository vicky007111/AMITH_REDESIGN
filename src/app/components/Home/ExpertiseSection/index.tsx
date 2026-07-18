"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { motion } from "motion/react";
import Reveal from "@/app/components/shared/Reveal";
import { staggeredFadeUp, EASE, VIEWPORT_EARLY } from "@/app/components/shared/anim";

// Continuous 80ms stagger across both rows (indices 0–4), reduced-motion aware
// via the page-level MotionConfig.
const cardVariants = staggeredFadeUp(0.08);

// ---------------------------------------------------------------------------
// SWAPPABLE SERVICE IMAGE PATHS
// Replace each path once the client sends the service photos.
// ---------------------------------------------------------------------------
const SERVICES = [
  {
    id: 1,
    title: "Quality Audit & TPQM",
    description:
      "From initial planning to the end of the project, we ensure construction quality through systematic inspections, compliance verification, material evaluation and quality assurance practices.",
    imagePath: "/images/services/service-1.jpg",
    icon: "solar:clipboard-check-bold",
    imageAlt: "Quality audit and inspection process on construction site",
    href: "/services/quality-audit-tpqm",
  },
  {
    id: 2,
    title: "Structural Auditing & Stability",
    description:
      "Comprehensive structural health evaluation of buildings and infrastructure to assess safety, serviceability, residual life and compliance with applicable engineering standards.",
    imagePath: "/images/services/service-2.jpg",
    icon: "solar:buildings-3-bold",
    imageAlt: "Structural stability audit of an existing building",
    href: "/services/structural-auditing-stability",
  },
  {
    id: 3,
    title: "Condition Assessment",
    description:
      "Advanced condition assessment using visual inspection, Non-Destructive Testing (NDT), structural investigations and engineering diagnostics to identify deterioration, defects and performance issues.",
    imagePath: "/images/services/service-3.jpg",
    icon: "solar:magnifer-bold",
    imageAlt: "NDT-based condition assessment equipment in use",
    href: "/services/condition-assessment",
  },
  {
    id: 4,
    title: "Restoration & Rehabilitation",
    description:
      "Designing sustainable repair, strengthening and providing rehabilitation solutions that enhance structural integrity, extend service life and optimize lifecycle costs.",
    imagePath: "/images/services/service-4.jpg",
    icon: "solar:settings-bold",
    imageAlt: "Concrete restoration and structural rehabilitation work",
    href: "/services/restoration-rehabilitation",
  },
  {
    id: 5,
    title: "Consultancy & Advisory Services",
    description:
      "Providing independent technical advice, due diligence, forensic engineering, expert opinions, risk assessment and asset management solutions for infrastructure projects.",
    imagePath: "/images/services/scaffolding_inspection.png",
    icon: "solar:document-bold",
    imageAlt: "Engineering consultancy and technical advisory meeting",
    href: "/services",
  },
] as const;

function ServiceCard({
  service,
  index,
}: {
  service: (typeof SERVICES)[number];
  index: number;
}) {
  return (
    <motion.div
      className="flex"
      variants={cardVariants}
      custom={index}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: EASE }}
    >
      <Link
        href={service.href}
        className="w-full bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-[0_2px_8px_rgba(0,28,104,0.04)] hover:shadow-[0_16px_32px_rgba(0,28,104,0.14)] transition-shadow duration-200 ease-out group flex flex-col"
      >
        {/* Image or blueprint placeholder */}
        <div className="relative w-full overflow-hidden bg-cream" style={{ aspectRatio: "2.2/1" }}>
          {/* Attempt to load service image; fallback is the blueprint-style placeholder */}
          <ServiceImageWithFallback
            src={service.imagePath}
            alt={service.imageAlt}
            icon={service.icon}
          />
        </div>

        {/* Text body */}
        <div className="p-5 sm:p-6 flex flex-col gap-3 flex-1">
          {/* Icon + title row */}
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110">
              <Icon icon={service.icon} width={22} height={22} />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
              {service.title}
            </h3>
          </div>
          <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed">
            {service.description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

/** Tries to load the real service image; if not found, renders a blueprint-style icon placeholder */
function ServiceImageWithFallback({
  src,
  alt,
  icon,
}: {
  src: string;
  alt: string;
  icon: string;
}) {
  return (
    <>
      {/* Blueprint-style placeholder — always rendered behind the real image */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center gap-3"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)",
          backgroundImage:
            "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%), repeating-linear-gradient(0deg, transparent, transparent 29px, rgba(0,28,104,0.04) 29px, rgba(0,28,104,0.04) 30px), repeating-linear-gradient(90deg, transparent, transparent 29px, rgba(0,28,104,0.04) 29px, rgba(0,28,104,0.04) 30px)",
        }}
      >
        <Icon icon={icon} width={48} height={48} className="text-primary/30" />
        <span className="text-xs font-semibold text-primary/40 uppercase tracking-widest">
          Photo coming soon
        </span>
      </div>

      {/* Real image — rendered on top; hidden if it 404s via onError */}
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover group-hover:scale-105 transition-transform duration-500 relative z-10"
        onError={(e) => {
          // Hide the broken image so the placeholder shows through
          (e.currentTarget as HTMLImageElement).style.display = "none";
        }}
      />
    </>
  );
}

export default function ExpertiseSection() {
  return (
    <section
      id="expertise"
      className="bg-slate-50 transition-colors duration-300 section-py"
    >
      <div className="section-container">
        {/* Section heading */}
        <Reveal className="text-center mb-8 sm:mb-10">
          <p className="kicker-text">
            Our Expertise
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900">
            What We Do
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </Reveal>

        {/* Single reveal parent so the 80ms stagger stays continuous across
            both rows; each card reads its global index via `custom`. */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_EARLY}
        >
          {/* Row 1: 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-4">
            {SERVICES.slice(0, 3).map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>

          {/* Row 2: 2 cards, centered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:max-w-[calc(66.666%+1.5rem)] lg:mx-auto">
            {SERVICES.slice(3).map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i + 3} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
