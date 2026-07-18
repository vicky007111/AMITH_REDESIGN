"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Icon } from "@iconify/react";
import { galleryItems, galleryFilters, GalleryFilter } from "@/data/gallery";
import Reveal from "@/app/components/shared/Reveal";
import { EASE } from "@/app/components/shared/anim";

/** Short badge labels shown in the top-left corner of each tile */
const CATEGORY_LABEL: Record<GalleryFilter, string> = {
  All: "All",
  "Quality Audit & TPQM": "QA & TPQM",
  "Structural Stability Auditing & Condition Assessment": "Structural",
  "Restoration & Rehabilitation": "Restoration",
};

/** Shortened button text for the filter strip */
const FILTER_LABEL: Record<GalleryFilter, string> = {
  All: "All",
  "Quality Audit & TPQM": "Quality Audit & TPQM",
  "Structural Stability Auditing & Condition Assessment":
    "Structural Stability & Condition",
  "Restoration & Rehabilitation": "Restoration & Rehab",
};

/**
 * GalleryGrid — filterable grid of project site photographs.
 *
 * Uses AnimatePresence + animate (not whileInView) so images always
 * appear immediately on mount / filter change, regardless of scroll position.
 */
export default function GalleryGrid() {
  const [selectedFilter, setSelectedFilter] = useState<GalleryFilter>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    selectedFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedFilter);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const showPrev = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : (i - 1 + filteredItems.length) % filteredItems.length
    );
  }, [filteredItems.length]);

  const showNext = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : (i + 1) % filteredItems.length
    );
  }, [filteredItems.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") showPrev();
      else if (e.key === "ArrowRight") showNext();
      else if (e.key === "Escape") closeLightbox();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, showPrev, showNext, closeLightbox]);

  return (
    <section
      id="gallery-grid"
      className="bg-white section-py transition-colors duration-300"
      aria-label="Project gallery"
    >
      <div className="section-container">
        {/* Filter tabs */}
        <Reveal
          className="flex flex-wrap justify-center gap-2 mb-12"
          amount={0.4}
        >
          <div
            role="group"
            aria-label="Filter gallery by category"
            className="contents"
          >
            {galleryFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                aria-pressed={selectedFilter === filter}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                  selectedFilter === filter
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "bg-slate-50 border border-slate-200 text-slate-600 hover:border-primary hover:text-primary"
                }`}
              >
                {FILTER_LABEL[filter]}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Image grid — AnimatePresence drives enter/exit, no whileInView */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="grid grid-cols-12 gap-6 md:gap-8"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  ease: EASE,
                  delay: Math.min(index * 0.04, 0.6), // cap delay at 0.6s so later items don't wait forever
                }}
                className="col-span-12 md:col-span-6 lg:col-span-4 group relative overflow-hidden rounded-2xl bg-slate-100 cursor-pointer"
                style={{ aspectRatio: "16/9" }}
                onClick={() => setLightboxIndex(index)}
              >
                {/* Native img — avoids Next.js optimisation pipeline issues with local static images */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
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
                {/* Category badge */}
                <span
                  className="absolute top-4 left-4 px-2.5 py-1 rounded bg-primary text-white uppercase tracking-wider"
                  style={{ fontSize: "10px", fontWeight: 700 }}
                >
                  {CATEGORY_LABEL[item.category]}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-slate-400">
            <p className="text-base font-medium">
              No items found for this category.
            </p>
          </div>
        )}
      </div>

      {/* Fullscreen lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && filteredItems[lightboxIndex] && (
          <motion.div
            key="lightbox"
            className="fixed inset-0 z-[999] bg-black/95 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE }}
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              aria-label="Close"
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
            >
              <Icon icon="mdi:close" width={24} height={24} />
            </button>

            {/* Prev button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              aria-label="Previous image"
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
            >
              <Icon icon="mdi:chevron-left" width={28} height={28} />
            </button>

            {/* Next button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              aria-label="Next image"
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
            >
              <Icon icon="mdi:chevron-right" width={28} height={28} />
            </button>

            {/* Image + caption */}
            <motion.div
              key={filteredItems[lightboxIndex].id}
              className="relative w-full h-full flex flex-col items-center justify-center px-4 sm:px-16 py-16"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: EASE }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={filteredItems[lightboxIndex].imageUrl}
                alt={filteredItems[lightboxIndex].title}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <p className="mt-4 text-white/80 text-sm sm:text-base text-center max-w-2xl">
                {filteredItems[lightboxIndex].title}
              </p>
              <p className="mt-1 text-white/40 text-xs">
                {lightboxIndex + 1} / {filteredItems.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
