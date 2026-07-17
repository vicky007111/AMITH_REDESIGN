"use client";

import Link from "next/link";
import { motion } from "motion/react";
import Image from "next/image";
import { Icon } from "@iconify/react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface PageHeroProps {
  /** Short uppercase label above the heading (e.g. "About Us") — omit to hide the kicker badge */
  label?: string;
  /** Large primary heading */
  title: string;
  /** Optional subtitle / description paragraph */
  subtitle?: string;
  /** Breadcrumb trail — last item is the current page (no href) */
  breadcrumb: BreadcrumbItem[];
  /** Optional split-layout image path */
  image?: string;
}

/**
 * PageHero — Reusable interior-page hero banner.
 *
 * Renders a deep navy gradient hero with an animated entrance,
 * a labelled kicker, a large heading, optional subtitle, and
 * a breadcrumb trail. Used on About, Services, Gallery, and Contact pages.
 */
export default function PageHero({
  label,
  title,
  subtitle,
  breadcrumb,
  image,
}: PageHeroProps) {
  return (
    <section
      id="page-hero"
      className="relative overflow-hidden pt-28 md:pt-32 lg:pt-36 pb-16 sm:pb-20 bg-brand-gradient transition-colors duration-300"
      aria-label={label ? `${label} page header` : "Page header"}
    >
      {/* Decorative geometric shapes */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
      >
        {/* Top-right glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        {/* Bottom-left glow */}
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        {/* Grid dots overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="section-container relative z-10">
        <div className={image ? "grid grid-cols-12 gap-8 items-center" : ""}>
          {/* Content side */}
          <div className={image ? "col-span-12 lg:col-span-7" : ""}>
            {/* Breadcrumb */}
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-6 flex-wrap"
            >
              {breadcrumb.map((crumb, index) => (
                <span key={index} className="flex items-center gap-2">
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="hover:text-white transition-colors duration-200 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-slate-200" aria-current="page">
                      {crumb.label}
                    </span>
                  )}
                  {index < breadcrumb.length - 1 && (
                    <Icon
                      icon="lucide:chevron-right"
                      width={12}
                      height={12}
                      className="text-slate-500 shrink-0"
                      aria-hidden="true"
                    />
                  )}
                </span>
              ))}
            </motion.nav>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4 max-w-3xl"
            >
              {title}
            </motion.h1>

            {/* Optional subtitle */}
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed max-w-2xl"
              >
                {subtitle}
              </motion.p>
            )}
          </div>

          {/* Image side */}
          {image && (
            <div className="col-span-12 lg:col-span-5 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative w-full max-w-md aspect-[4/3] rounded-media overflow-hidden border border-white/10 shadow-e3"
              >
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover hover:scale-[1.02] duration-500 transition-transform"
                  priority
                />
              </motion.div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom wave divider */}
      <div
        className="absolute bottom-0 left-0 right-0"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 block fill-white"
          preserveAspectRatio="none"
        >
          <path d="M0 48L1440 48L1440 0C1200 38 960 48 720 38C480 28 240 0 0 0L0 48Z" />
        </svg>
      </div>
    </section>
  );
}
