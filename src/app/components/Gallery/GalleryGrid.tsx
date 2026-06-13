"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryItems, galleryFilters, GalleryFilter } from "@/data/gallery";

/**
 * GalleryGrid — filterable masonry-style grid of project site photographs.
 *
 * Imports typed data from /src/data/gallery.ts.
 * Supports "All" + 3 category filters.
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
      className="bg-white dark:bg-darkmode py-20 transition-colors duration-300"
      aria-label="Project gallery"
    >
      <div className="container mx-auto max-w-7xl 2xl:max-w-[1400px] 3xl:max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Filter tabs */}
        <div
          className="flex flex-wrap justify-center gap-2 mb-12"
          role="group"
          aria-label="Filter gallery by category"
        >
          {galleryFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              aria-pressed={selectedFilter === filter}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                selectedFilter === filter
                  ? "bg-primary text-white shadow-lg shadow-primary/20"
                  : "bg-slate-50 dark:bg-darklight border border-slate-200 dark:border-darkborder text-slate-600 dark:text-slate-400 hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary"
              }`}
            >
              {filter === "Restoration & Rehabilitation"
                ? "Restoration & Rehab"
                : filter}
            </button>
          ))}
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="col-span-12 md:col-span-6 lg:col-span-4 group flex flex-col bg-white dark:bg-darkmode rounded-3xl overflow-hidden border border-slate-200 dark:border-darkborder shadow-sm hover:shadow-card-shadow transition-all duration-300 animate-fadeIn"
            >
              {/* Image */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-darklight">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Category badge */}
                <span className="absolute top-4 left-4 px-2.5 py-1 rounded bg-primary text-[10px] font-bold text-white uppercase tracking-wider">
                  {item.category === "Restoration & Rehabilitation"
                    ? "Restoration"
                    : item.category === "QA/QC & TPQM"
                    ? "QA/QC"
                    : "Audit"}
                </span>
              </div>

              {/* Card text */}
              <div className="p-6 flex flex-col gap-2 flex-grow">
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
                  Location: {item.location}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors duration-200">
                  {item.title}
                </h3>
              </div>
            </article>
          ))}
        </div>

        {/* Empty state */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-slate-400 dark:text-slate-600">
            <p className="text-base font-medium">
              No items found for this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
