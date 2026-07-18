"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { motion } from "motion/react";
import Reveal from "@/app/components/shared/Reveal";
import { staggeredFadeUp, VIEWPORT_EARLY } from "@/app/components/shared/anim";

// Updated to use new gallery image paths
const GALLERY_PREVIEW = [
  {
    src: "/gallery/quality-audit-tpqm/01_image1.jpeg",
    alt: "Quality audit site inspection",
  },
  {
    src: "/gallery/quality-audit-tpqm/04_image4.jpeg",
    alt: "Quality audit field work",
  },
  {
    src: "/gallery/structural-stability-condition/01_image14.jpeg",
    alt: "Structural stability audit",
  },
  {
    src: "/gallery/structural-stability-condition/08_image21.jpeg",
    alt: "Condition assessment on structure",
  },
  {
    src: "/gallery/structural-stability-condition/03_image16.jpeg",
    alt: "Structural stability field work",
  },
  {
    src: "/gallery/restoration-rehabilitation/02_image72.jpg",
    alt: "Restoration and rehabilitation work",
  },
  {
    src: "/gallery/restoration-rehabilitation/06_image76.jpeg",
    alt: "Structural rehabilitation on site",
  },
  {
    src: "/gallery/quality-audit-tpqm/06_image6.jpeg",
    alt: "TPQM quality monitoring",
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
          <p className="kicker-text">Portfolio</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900">
            Our Gallery Images
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </Reveal>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_EARLY}
        >
          {GALLERY_PREVIEW.map((img, i) => (
            <motion.div key={img.src} variants={tileVariants} custom={i}>
              <Link
                href="/gallery"
                className="group relative block w-full overflow-hidden rounded-xl sm:rounded-2xl bg-slate-100"
                style={{ aspectRatio: "1/1" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                  }}
                  className="group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <Reveal className="text-center mt-8 sm:mt-10">
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
