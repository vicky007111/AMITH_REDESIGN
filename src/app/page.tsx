import type { Metadata } from "next";
import React from "react";
import Hero from "@/app/components/Home/Hero";
import Services from "@/app/components/Home/Services";
import Features from "@/app/components/Home/Features";
import Projects from "@/app/components/Home/Projects";
import Gallery from "@/app/components/Home/Gallery";
import ContactCTA from "@/app/components/Home/ContactCTA";

export const metadata: Metadata = {
  title: "AMITH Civil & Allied Engineering Services | Structural Audit & QA/QC Consultancy",
  description:
    "AMITH Civil & Allied Engineering Services Pvt Ltd — expert structural audits, TPQM, NDT testing, material testing, and building rehabilitation in Chennai.",
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      {/* Preview: 3 services, with "All Services" link */}
      <Services limit={3} preview />
      {/* Features = WhyChooseUs component */}
      <Features showAboutButton />
      <Projects />
      <Gallery />
      <ContactCTA />
    </main>
  );
}
