import type { Metadata } from "next";
import PageHero from "@/app/components/shared/PageHero";
import AboutFeatures from "@/app/components/AboutPage/AboutFeatures";
import AboutLeadership from "@/app/components/AboutPage/AboutLeadership";
import AboutVisionMission from "@/app/components/AboutPage/AboutVisionMission";


export const metadata: Metadata = {
  title: "About Us | AMITH Civil & Allied Engineering Services",
  description:
    "Meet the distinguished leadership of AMITH Civil & Allied Engineering Services — a former Vice Chancellor, a retired MES Colonel, and a senior IIT-Madras consultant. Learn our vision, mission, and over 100 years of combined engineering expertise.",
  keywords: [
    "AMITH Engineering Leadership",
    "Structural Engineering Experts Chennai",
    "Civil Engineering Consultancy Board",
    "Prof Devadas Manoharan",
    "AMITH Directors",
  ],
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        label="About Us"
        title="A Team Built on Decades of Engineering Excellence"
        subtitle="AMITH Civil & Allied Engineering Services Pvt Ltd is directed by three of South India's most distinguished civil engineering professionals, combining over 100 years of academic, military, and public sector expertise."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
      />
      {/* Vision & Mission statement cards */}
      <AboutVisionMission />
      {/* Why Choose Us section */}
      <AboutFeatures />
      {/* Leadership — board of directors horizontal list with credentials modals */}
      <AboutLeadership />
    </main>
  );
}
