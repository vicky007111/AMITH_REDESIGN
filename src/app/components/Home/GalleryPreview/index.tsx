"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import Reveal from "@/app/components/shared/Reveal";
import SectionHeader from "@/app/components/shared/SectionHeader";
import Button from "@/app/components/shared/Button";
import { staggeredFadeUp, VIEWPORT_EARLY } from "@/app/components/shared/anim";

// Curated sample spanning the gallery's categories — links through to the
// full filterable gallery on click.
const GALLERY_PREVIEW = [
  {
    src: "/gallery/lab-equipment/compression-testing-machine-concrete-cubes.jpg",
    alt: "Concrete cube compression testing",
  },
  {
    src: "/gallery/core-drilling/core-drilling-concrete-column-amenity-building.jpg",
    alt: "Core drilling on a concrete column",
  },
  {
    src: "/gallery/structural-repair/carbon-fibre-wrap-repair-cracked-column.jpg",
    alt: "Carbon fibre wrap repair on a cracked column",
  },
  {
    src: "/gallery/structural-testing/half-cell-potential-testing-structure.jpg",
    alt: "Half-cell potential testing on a structure",
  },
  {
    src: "/gallery/structural-repair/frp-strengthening-structural-member.jpg",
    alt: "FRP structural strengthening",
  },
  {
    src: "/gallery/structural-testing/upv-test-beam.jpg",
    alt: "UPV testing on a beam",
  },
  {
    src: "/gallery/lab-equipment/concrete-cube-preparation-testing-lab.jpg",
    alt: "Concrete cube preparation in the testing lab",
  },
  {
    src: "/gallery/core-drilling/core-drilling-closeup-column.jpg",
    alt: "Close-up of core drilling on a column",
  },
] as const;

const tileVariants = staggeredFadeUp(0.05);

export default function GalleryPreview() {
  return (
    <section
      id="gallery-preview"
      className="bg-white transition-colors duration-300 section-py"
    >
      <div className="section-container">
        {/* Header row: left-aligned heading with the gallery CTA on the right */}
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8 sm:mb-10">
          <SectionHeader
            kicker="Portfolio"
            title="Our Gallery Images"
            align="left"
            className="mb-0 lg:mb-0"
          />
          <Reveal className="pb-1">
            <Button href="/gallery" variant="ghost" icon="lucide:arrow-right">
              View Full Gallery
            </Button>
          </Reveal>
        </div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_EARLY}
        >
          {GALLERY_PREVIEW.map((img, i) => (
            <motion.div key={img.src} variants={tileVariants} custom={i}>
              <Link
                href="/gallery"
                className="group relative block aspect-square w-full overflow-hidden rounded-card bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
