"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { motion } from "motion/react";
import { staggeredFadeUp, VIEWPORT_EARLY } from "@/app/components/shared/anim";
import { servicesData } from "@/data/services";

const cardVariants = staggeredFadeUp(0.08);

/**
 * ServicesFullGrid — Renders all services from the shared services data source.
 *
 * Each service is shown as an expanded card with:
 * - Icon + title + description
 * - Expandable detail panel with feature bullets
 * - Link to the individual service page
 */
export default function ServicesFullGrid() {
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);
  const services = servicesData;

  return (
    <div className="grid grid-cols-12 gap-8">
      {services.map((service, index) => {
        const isExpanded = expandedSlug === service.slug;
        return (
          <motion.div
            key={service.slug}
            variants={cardVariants}
            custom={index}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_EARLY}
            className="col-span-12 md:col-span-6"
          >
            <article className="h-full bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-card-shadow hover:-translate-y-1.5 hover:border-primary/20 transition-all duration-300 flex flex-col group">
              {/* Card header */}
              <div className="p-8 flex flex-col gap-5 flex-1">
                <div className="flex items-start gap-5">
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-2xl bg-cream flex items-center justify-center text-primary shrink-0 relative overflow-hidden"
                    aria-hidden="true"
                  >
                    <div className="absolute inset-0 bg-darkcream rounded-2xl top-4 -left-4" />
                    <span className="relative z-10">
                      <Icon icon={service.icon} width="28" height="28" className="text-primary transition-transform duration-300 group-hover:scale-110" />
                    </span>
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed">
                  {service.description}
                </p>

                {service.slug === "ndt-diagnostics" && (
                  <div className="mt-1">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById("ndt-methods")?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="inline-flex items-center gap-1 text-xs font-bold text-blue hover:text-primary transition-colors cursor-pointer"
                    >
                      <Icon icon="solar:round-alt-arrow-down-linear" width="16" height="16" />
                      Try Interactive NDT Explorer
                    </button>
                  </div>
                )}

                {/* Expandable detail panel */}
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35 }}
                    className="mt-2"
                  >
                    <p className="text-sm text-slate-600 font-medium leading-relaxed mb-5 border-t border-slate-100 pt-4">
                      {service.detail}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <li
                          key={feature.title}
                          className="flex gap-3 items-start bg-slate-50 rounded-xl p-3"
                        >
                          <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary block" aria-hidden="true" />
                          </span>
                          <div>
                            <p className="text-xs font-bold text-slate-800">
                              {feature.title}
                            </p>
                            <p className="text-xs text-slate-500 font-medium leading-relaxed mt-0.5">
                              {feature.description}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>

              {/* Card footer */}
              <div className="px-8 pb-8 pt-2 flex items-center gap-4 border-t border-slate-100 mt-auto">
                <button
                  onClick={() =>
                    setExpandedSlug(isExpanded ? null : service.slug)
                  }
                  aria-expanded={isExpanded}
                  aria-controls={`service-detail-${service.slug}`}
                  className="flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-primary transition-colors duration-200 cursor-pointer"
                >
                  {isExpanded ? "Hide Details" : "View Details"}
                  <Icon
                    icon={
                      isExpanded
                        ? "solar:alt-arrow-up-linear"
                        : "solar:alt-arrow-down-linear"
                    }
                    width="16"
                    height="16"
                  />
                </button>

                <Link
                  href={`/services/${service.slug}`}
                  className="group/cta ml-auto inline-flex items-center gap-1.5 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white px-4 py-2 text-xs font-bold transition-colors duration-200"
                  aria-label={`Read more about ${service.title}`}
                >
                  Read More
                  <Icon
                    icon="solar:alt-arrow-right-linear"
                    width="16"
                    height="16"
                    className="transition-transform duration-200 group-hover/cta:translate-x-0.5"
                  />
                </Link>
              </div>
            </article>
          </motion.div>
        );
      })}
    </div>
  );
}
