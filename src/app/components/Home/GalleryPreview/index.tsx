"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { motion } from "motion/react";
import Reveal from "@/app/components/shared/Reveal";
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
        <Reveal className="text-center mb-8 sm:mb-10">
          <p className="kicker-text">
            Portfolio
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900">
            Our Gallery Images
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </Reveal>

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
                className="group relative block aspect-square w-full overflow-hidden rounded-2xl bg-slate-100"
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

        <Reveal className="text-center mt-10">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-opacity-90 text-white font-bold text-sm sm:text-base shadow-lg shadow-primary/20 transition-all duration-200"
          >
            View Full Gallery
            <Icon icon="solar:arrow-right-bold" width={18} height={18} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
