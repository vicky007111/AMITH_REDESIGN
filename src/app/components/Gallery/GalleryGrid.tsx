"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
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

  const filteredItems =
    selectedFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedFilter);

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
                className="col-span-12 md:col-span-6 lg:col-span-4 group relative overflow-hidden rounded-2xl bg-slate-100"
                style={{ aspectRatio: "16/9" }}
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
    </section>
  );
}
