import type { Metadata } from "next";
import PageHero from "@/app/components/shared/PageHero";
import ServicesFullGrid from "@/app/components/Services/ServicesFullGrid";
import NdtPanel from "@/app/components/Services/NdtPanel";
import CredibilitySection from "@/app/components/Services/CredibilitySection";
import ServicesCta from "@/app/components/Services/ServicesCta";

export const metadata: Metadata = {
  title: "Engineering Services | AMITH Civil & Allied Engineering Services",
  description:
    "Explore AMITH's full range of civil engineering services: Quality Audit & TPQM, Structural Auditing & Stability, Condition Assessment, Restoration & Rehabilitation, NDT Diagnostics, and Material Testing. Serving Chennai and across India.",
  keywords: [
    "Structural Audit Services Chennai",
    "TPQM Third Party Quality Monitoring",
    "NDT Concrete Testing India",
    "Building Restoration Rehabilitation",
    "Condition Assessment Survey",
    "Civil Engineering Consultancy Services",
  ],
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        title="Comprehensive Engineering & Advisory Services"
        subtitle="From NDT diagnostics and structural certifications to condition assessments and restoration — the full spectrum of civil engineering consultancy, under one roof."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />

      {/* All 6 services from API — expandable cards */}
      <section
        id="services-grid"
        className="bg-white section-py transition-colors duration-300"
      >
        <div className="section-container">
          <div className="text-center mb-14">
            <p className="kicker-text">
              What We Do
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900">
              Engineering &amp; Advisory Services
            </h2>
            <p className="text-base text-slate-500 font-medium max-w-2xl mx-auto mt-3">
              Each service listed below can be expanded to reveal full scope,
              methodology, and key deliverables. Click a service card to learn
              more.
            </p>
            <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full" aria-hidden="true" />
          </div>

          <ServicesFullGrid />
        </div>
      </section>

      {/* Technical Authority & Credibility Section */}
      <CredibilitySection />

      {/* NDT Methods interactive explorer */}
      <NdtPanel />

      {/* Closing Call-to-Action conversion banner */}
      <ServicesCta />
    </main>
  );
}
