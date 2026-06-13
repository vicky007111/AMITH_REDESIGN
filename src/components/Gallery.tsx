"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryItems, GalleryItem } from "../data/gallery";

export default function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const filters = [
    "All",
    "Structural Audits",
    "QA/QC & TPQM",
    "Restoration & Rehabilitation",
  ];

  const filteredItems =
    selectedFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedFilter);

  return (
    <section
      id="gallery"
      className="bg-slate-50 dark:bg-darklight py-20 transition-colors duration-300"
    >
      <div className="container mx-auto max-w-7xl px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="text-primary font-bold text-sm uppercase tracking-wider mb-3">
            On-Site Evidence
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
            Engineering Gallery
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                selectedFilter === filter
                  ? "bg-primary text-white shadow-lg shadow-primary/20"
                  : "bg-white dark:bg-darkmode border border-slate-200 dark:border-darkborder text-slate-600 dark:text-slate-400 hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary"
              }`}
            >
              {filter === "Restoration & Rehabilitation"
                ? "Restoration & Rehab"
                : filter}
            </button>
          ))}
        </div>

        {/* Filterable Grid */}
        <div className="grid grid-cols-12 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="col-span-12 md:col-span-6 lg:col-span-4 group flex flex-col bg-white dark:bg-darkmode rounded-3xl overflow-hidden border-2 border-transparent shadow-sm hover:shadow-xl hover:border-blue-500 transition-all duration-300 animate-fadeIn"
            >
              {/* Image Frame */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-darklight">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 px-2.5 py-1 rounded bg-primary text-[10px] font-bold text-white uppercase tracking-wider">
                  {item.category === "Restoration & Rehabilitation"
                    ? "Restoration"
                    : item.category === "QA/QC & TPQM"
                    ? "QA/QC"
                    : "Audit"}
                </span>
              </div>

              {/* Text Area */}
              <div className="p-6 flex flex-col gap-2 flex-grow">
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
                  Location: {item.location}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors duration-200">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
