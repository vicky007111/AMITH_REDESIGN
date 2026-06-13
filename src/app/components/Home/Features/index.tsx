"use client";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useRef } from "react";
import { motion, useInView } from "motion/react";

const Features = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const fadeIn = {
    initial: { opacity: 0, y: 15 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 },
    transition: { duration: 0.4 },
  };

  return (
    <section id="about" className="bg-grey dark:bg-darklight overflow-x-hidden py-20 transition-colors duration-300">
      <div
        ref={ref}
        className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-12"
      >
        <div className="grid grid-cols-12 xl:gap-24 gap-6 gap-y-11 items-center">
          <div className="lg:col-span-6 col-span-12 px-3">
            <motion.div {...fadeIn} className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-slate-200 dark:border-darkborder shadow-2xl bg-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80&fm=webp"
                alt="AMITH Laboratory Testing and Quality Inspections"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
          </div>
          <div className="lg:col-span-6 col-span-12 px-3">
            <motion.div {...fadeIn}>
              <p className="text-primary font-bold text-sm uppercase tracking-wider mb-3">
                Why Choose Us
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white pb-6 leading-tight">
                Engineering Integrity Backed by Academic & Public Trust
              </h2>
              <p className="text-base text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-6">
                AMITH Civil & Allied Engineering Services Pvt Ltd is not a construction contractor. We are an elite engineering advisory team, delivering advanced structural auditing, TPQM, and forensic diagnostics.
              </p>
              <ul className="space-y-4">
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
                    <h4 className="text-sm font-bold text-slate-800 dark:text-white">NABL Laboratory Association</h4>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                      Formal MoU with Tech-Civil Material Testing Lab for certified NDT and concrete validations.
                    </p>
                  </div>
                </li>
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
                    <h4 className="text-sm font-bold text-slate-800 dark:text-white">Distinguished Board & Credentials</h4>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                      Directed by a former Vice Chancellor, retired military officers, and senior public works consultants.
                    </p>
                  </div>
                </li>
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
                    <h4 className="text-sm font-bold text-slate-800 dark:text-white">Heavy Infrastructure Footprint</h4>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                      Vetted over 500+ design specifications and supervised runways, sumps, and multi-storey townships.
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
