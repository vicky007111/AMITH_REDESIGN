import type { Metadata } from "next";
import PageHero from "@/app/components/shared/PageHero";
import GalleryGrid from "@/app/components/Gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Project Gallery | AMITH Civil & Allied Engineering Services",
  description:
    "Browse AMITH's project gallery showcasing on-site evidence from structural audits, QA/QC & TPQM inspections, and restoration & rehabilitation works across India.",
  keywords: [
    "Structural Audit Photos India",
    "TPQM Site Inspection Gallery",
    "Concrete Restoration Photos",
    "NDT Testing Site Photos",
    "Civil Engineering Project Gallery",
  ],
};

export default function GalleryPage() {
  return (
    <main>
      <PageHero
        label="Project Gallery"
        title="On-Site Evidence from Landmark Engineering Works"
        subtitle="A visual record of our structural audits, QA/QC inspections, and rehabilitation work across military, government, and industrial infrastructure."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Gallery" },
        ]}
      />

      {/* Full filterable gallery grid */}
      <GalleryGrid />
    </main>
  );
}
