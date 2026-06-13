"use client";

import { useState } from "react";
import { ndtTests } from "@/data/ndt";
import Image from "next/image";

/**
 * NdtPanel — Interactive NDT diagnostic method explorer.
 *
 * Displays clickable test tabs on the left and the selected
 * method's mechanism + detection detail on the right.
 * Used on the Services page to give depth to the NDT offering.
 */
export default function NdtPanel() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section
      id="ndt-methods"
      className="bg-slate-50 dark:bg-darklight py-20 transition-colors duration-300"
      aria-label="NDT Diagnostic Methods"
    >
      <div className="container mx-auto max-w-7xl px-6 md:px-12">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-primary font-bold text-sm uppercase tracking-wider mb-3">
            Non-Destructive Testing
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
            NDT Diagnostic Methods
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto mt-3">
            Select any test below to explore how each diagnostic method works
            and what structural anomalies it identifies.
          </p>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full" aria-hidden="true" />
        </div>

        <div className="grid grid-cols-12 gap-8 items-start">
          {/* Left: Test selector tabs */}
          <div className="col-span-12 md:col-span-5 flex flex-col gap-3">
            {ndtTests.map((test, index) => (
              <button
                key={test.name}
                onClick={() => setSelectedIndex(index)}
                aria-pressed={selectedIndex === index}
                className={`w-full text-left px-5 py-4 rounded-2xl border transition-all duration-200 cursor-pointer font-semibold text-sm leading-snug ${
                  selectedIndex === index
                    ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                    : "bg-white dark:bg-darkmode border-slate-200 dark:border-darkborder text-slate-600 dark:text-slate-400 hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span
                    className={`w-2 h-2 rounded-full shrink-0 transition-colors ${
                      selectedIndex === index ? "bg-white" : "bg-primary/40"
                    }`}
                    aria-hidden="true"
                  />
                  {test.name}
                </span>
              </button>
            ))}
          </div>

          {/* Right: Detail panel */}
          <div className="col-span-12 md:col-span-7">
            <div
              key={selectedIndex}
              className="bg-white dark:bg-darkmode border border-slate-200 dark:border-darkborder rounded-3xl p-8 lg:p-10 shadow-sm h-full"
              id={`ndt-detail-${selectedIndex}`}
            >
              <div className="grid grid-cols-12 gap-8 items-center h-full">
                {/* Details Text Content */}
                <div className="col-span-12 lg:col-span-7 flex flex-col justify-between h-full">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-primary block mb-3">
                      NDT Diagnostic Method
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                      {ndtTests[selectedIndex].name}
                    </h3>

                    <div className="flex flex-col gap-6">
                      {/* Mechanism */}
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <div
                            className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"
                            aria-hidden="true"
                          >
                            <svg
                              className="w-3.5 h-3.5 text-primary"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9.75 3.104v13.011c0 .852-.153 1.638-.445 2.391a9.041 9.041 0 0 1-2.085 3.002L3.13 17.417a8.977 8.977 0 0 0 1.37-2.617c.23-.62.348-1.247.348-1.859V3.104L9.75 3.104Z"
                              />
                            </svg>
                          </div>
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                            How It Works
                          </span>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed pl-8">
                          {ndtTests[selectedIndex].mechanism}
                        </p>
                      </div>

                      {/* Divider */}
                      <div className="border-t border-slate-100 dark:border-darkborder" aria-hidden="true" />

                      {/* Anomalies */}
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <div
                            className="w-6 h-6 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0"
                            aria-hidden="true"
                          >
                            <svg
                              className="w-3.5 h-3.5 text-emerald-600"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                              />
                            </svg>
                          </div>
                          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                            What It Detects
                          </span>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed pl-8">
                          {ndtTests[selectedIndex].anomalies}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Secondary Support Image Column */}
                <div className="col-span-12 lg:col-span-5 h-full flex items-center justify-center">
                  <div className="relative w-full aspect-square sm:aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden border border-slate-200 dark:border-darkborder shadow-md">
                    <Image
                      src={ndtTests[selectedIndex].image || "/images/services/ndt_concrete_testing.png"}
                      alt={`AMITH NDT Testing visual for ${ndtTests[selectedIndex].name}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Navigation dots */}
              <div className="flex items-center gap-2 mt-8 pt-6 border-t border-slate-100 dark:border-darkborder" aria-label="Test navigation">
                {ndtTests.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedIndex(i)}
                    aria-label={`View ${ndtTests[i].name}`}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      i === selectedIndex
                        ? "bg-primary w-6"
                        : "bg-slate-200 dark:bg-darkborder w-1.5 hover:bg-primary/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
