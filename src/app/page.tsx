import type { Metadata } from "next";
import React from "react";

// ── Homepage-specific sections (redesigned) ──────────────────────────────────
import HeroBanner from "@/app/components/Home/HeroBanner";
import IntroSection from "@/app/components/Home/IntroSection";
import ExpertiseSection from "@/app/components/Home/ExpertiseSection";
import WhyChooseAmith from "@/app/components/Home/WhyChooseAmith";
import IndustriesSection from "@/app/components/Home/IndustriesSection";
import ApproachSection from "@/app/components/Home/ApproachSection";
import ClosingCTA from "@/app/components/Home/ClosingCTA";
import PromotersSection from "@/app/components/Home/PromotersSection";

export const metadata: Metadata = {
  title:
    "AMITH Civil & Allied Engineering Services | Structural Audit & QA/QC Consultancy",
  description:
    "AMITH Civil & Allied Engineering Services Pvt Ltd — independent civil and structural engineering consultancy for quality assurance, structural stability auditing, condition assessment, NDT testing, restoration and rehabilitation in Chennai.",
};

export default function HomePage() {
  return (
    <main>
      {/* 1. Full-bleed hero with real site-inspection image */}
      <HeroBanner />

      {/* 2. Who we are + tagline pull-quote */}
      <IntroSection />

      {/* 3. Our Expertise — 5 service cards, 3-2 grid */}
      <ExpertiseSection />

      {/* 4. Why Choose Amith — 6-item checklist, 2-col desktop */}
      <WhyChooseAmith />

      {/* 5. Industries We Serve — chip/tag grid */}
      <IndustriesSection />

      {/* 6. Our Approach — horizontal process stepper */}
      <ApproachSection />

      {/* 7. Closing section + CTA banner */}
      <ClosingCTA />

      {/* 8. Meet Our Promoters — 3-col card layout */}
      <PromotersSection />
    </main>
  );
}
