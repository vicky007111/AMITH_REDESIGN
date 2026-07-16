"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { galleryItems, galleryFilters, GalleryFilter } from "@/data/gallery";
import Reveal from "@/app/components/shared/Reveal";
import { staggeredFadeUp, VIEWPORT_EARLY } from "@/app/components/shared/anim";

const tileVariants = staggeredFadeUp(0.04);

const CATEGORY_LABEL: Record<GalleryFilter, string> = {
  All: "All",
  "Structural Audits": "Audit",
  "Condition Assessment": "Condition",
  "QA/QC & TPQM": "QA/QC",
  "Restoration & Rehabilitation": "Restoration",
};

/**
 * GalleryGrid — filterable grid of project site photographs.
 *
 * Imports typed data from /src/data/gallery.ts.
 * Supports "All" + 4 category filters. Tiles are plain images with just a
 * category label in the top-left corner — no title/location card chrome.
 */
export default function GalleryGrid() {
  const [selectedFilter, setSelectedFilter] =
    useState<GalleryFilter>("All");

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
          <div role="group" aria-label="Filter gallery by category" className="contents">
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
                {filter === "Restoration & Rehabilitation"
                  ? "Restoration & Rehab"
                  : filter}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Image grid — plain tiles, category label only */}
        <motion.div
          key={selectedFilter}
          className="grid grid-cols-12 gap-6 md:gap-8"
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_EARLY}
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={tileVariants}
              custom={index}
              className="col-span-12 md:col-span-6 lg:col-span-4 group relative aspect-video w-full overflow-hidden rounded-2xl bg-slate-100"
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Category label */}
              <span className="absolute top-4 left-4 px-2.5 py-1 rounded bg-primary text-[10px] font-bold text-white uppercase tracking-wider">
                {CATEGORY_LABEL[item.category]}
              </span>
            </motion.div>
          ))}
        </motion.div>

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
