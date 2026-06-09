import type { Metadata } from "next";
import PageHero from "@/app/components/shared/PageHero";
import ServicesFullGrid from "@/app/components/Services/ServicesFullGrid";
import NdtPanel from "@/app/components/Services/NdtPanel";

export const metadata: Metadata = {
  title: "Engineering Services | AMITH Civil & Allied Engineering Services",
  description:
    "Explore AMITH's full range of civil engineering services: Quality Audit & TPQM, Structural Auditing, NDT Diagnostics, Material Testing, Restoration & Rehabilitation, and Concrete Mix Design. Serving Chennai and across India.",
  keywords: [
    "Structural Audit Services Chennai",
    "TPQM Third Party Quality Monitoring",
    "NDT Concrete Testing India",
    "Building Restoration Rehabilitation",
    "Concrete Mix Design IS 10262",
    "Civil Engineering Consultancy Services",
  ],
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        label="Our Services"
        title="Comprehensive Engineering & Advisory Services"
        subtitle="From forensic NDT diagnostics and structural stability certifications to concrete mix design and restoration schemes — AMITH delivers the full spectrum of civil engineering consultancy."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />

      {/* All 6 services from API — expandable cards */}
      <section
        id="services-grid"
        className="bg-white dark:bg-darkmode py-20 transition-colors duration-300"
      >
        <div className="container mx-auto max-w-7xl px-6 md:px-12">
          <div className="text-center mb-14">
            <p className="text-primary font-bold text-sm uppercase tracking-wider mb-3">
              What We Do
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
              Engineering &amp; Advisory Services
            </h2>
            <p className="text-base text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto mt-3">
              Each service listed below can be expanded to reveal full scope,
              methodology, and key deliverables. Click a service card to learn
              more.
            </p>
            <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full" aria-hidden="true" />
          </div>

          <ServicesFullGrid />
        </div>
      </section>

      {/* NDT Methods interactive explorer */}
      <NdtPanel />
    </main>
  );
}
