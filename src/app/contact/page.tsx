import type { Metadata } from "next";
import PageHero from "@/app/components/shared/PageHero";
import Contact from "@/app/components/Home/Contact";

export const metadata: Metadata = {
  title: "Contact Us | AMITH Civil & Allied Engineering Services",
  description:
    "Reach out to AMITH Civil & Allied Engineering Services Pvt Ltd for structural audits, TPQM, NDT testing, or any civil engineering consultancy need. Based in Velachery, Chennai. Call +91 9940548833.",
  keywords: [
    "Contact AMITH Civil Engineering",
    "Structural Audit Consultation Chennai",
    "Civil Engineering Enquiry",
    "AMITH Velachery Chennai",
    "Engineering Consultancy Contact",
  ],
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        label="Contact Us"
        title="Let's Discuss Your Infrastructure Project"
        subtitle="Whether you need technical consultation or project support, our engineering team is ready to assist with your infrastructure needs."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Contact Us" },
        ]}
      />

      {/* Full contact form + office info */}
      <Contact />
    </main>
  );
}
