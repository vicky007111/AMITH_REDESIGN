"use client";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import AnimateOnScroll from "@/app/components/shared/AnimateOnScroll";

const FEATURES = [
  {
    title: "NABL Laboratory Association",
    text: "Formal MoU with Tech-Civil Material Testing Lab for certified NDT and concrete validations.",
  },
  {
    title: "Distinguished Board & Credentials",
    text: "Directed by a former Vice Chancellor, retired military officers, and senior public works consultants.",
  },
  {
    title: "Heavy Infrastructure Footprint",
    text: "Vetted over 500+ design specifications and supervised runways, sumps, and multi-storey townships.",
  },
];

interface FeaturesProps {
  showAboutButton?: boolean;
}

const Features = ({ showAboutButton = false }: FeaturesProps) => {
  return (
    <section id="about" className="bg-grey dark:bg-darklight overflow-x-hidden py-12 sm:py-16 lg:py-20 transition-colors duration-300">
      <div className="container mx-auto max-w-7xl 2xl:max-w-[1400px] 3xl:max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-12 gap-6 lg:gap-12 xl:gap-24 items-center">
          {/* Image column */}
          <div className="lg:col-span-6 col-span-12">
            <AnimateOnScroll>
              <div className="relative w-full aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 dark:border-darkborder shadow-2xl bg-slate-100">
                <Image
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80&fm=webp"
                  alt="AMITH Laboratory Testing and Quality Inspections"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </AnimateOnScroll>
          </div>

          {/* Text column */}
          <div className="lg:col-span-6 col-span-12">
            <AnimateOnScroll delay={0.15}>
              <p className="text-primary font-bold text-sm uppercase tracking-wider mb-3">
                Why Choose Us
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white pb-4 sm:pb-6 leading-tight">
                Engineering Integrity Backed by Academic &amp; Public Trust
              </h2>
              <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-6">
                AMITH Civil &amp; Allied Engineering Services Pvt Ltd is not a construction contractor. We are an elite engineering advisory team, delivering advanced structural auditing, TPQM, and forensic diagnostics.
              </p>
            </AnimateOnScroll>

            <ul className="space-y-4">
              {FEATURES.map((feature, i) => (
                <AnimateOnScroll key={i} delay={0.2 + i * 0.1}>
                  <li className="flex gap-3 items-start">
                    <span className="mt-1 shrink-0">
                      <Icon
                        icon="tabler:circle-check"
                        width="24"
                        height="24"
                        className="font-bold text-success"
                      />
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 dark:text-white">{feature.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                        {feature.text}
                      </p>
                    </div>
                  </li>
                </AnimateOnScroll>
              ))}
            </ul>

            {showAboutButton && (
              <AnimateOnScroll delay={0.5} className="mt-8">
                <Link
                  href="/about"
                  className="px-6 py-3 rounded-xl text-sm sm:text-base font-bold bg-primary text-white hover:bg-primary/95 hover:scale-[1.02] active:scale-[0.98] duration-200 shadow-lg shadow-primary/20 transition-all text-center inline-block cursor-pointer"
                >
                  More About Us
                </Link>
              </AnimateOnScroll>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
