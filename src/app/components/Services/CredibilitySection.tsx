"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import Reveal from "@/app/components/shared/Reveal";
import { staggeredFadeUp } from "@/app/components/shared/anim";

const columnVariants = staggeredFadeUp(0.15);

export default function CredibilitySection() {
  const credibilityPoints = [
    {
      title: "NABL-Associated Material Testing",
      desc: "Certified material verification covering concrete cube crushing, steel tensile bonds, and chemical profiling in associated NABL-accredited labs.",
      icon: "solar:shield-check-linear",
    },
    {
      title: "BIS Code & Standards Compliance",
      desc: "Engineering audits and mix designs calibrated strictly to Bureau of Indian Standards guidelines, including IS 456 & IS 10262.",
      icon: "solar:document-text-linear",
    },
    {
      title: "Corporate & Government Vetted",
      desc: "Approved structural stability reports and visual damage mapping executed for military (MES), municipal, and industrial frameworks.",
      icon: "solar:verified-check-linear",
    },
  ];

  return (
    <section className="bg-surface-soft section-py border-y border-slate-100 transition-colors duration-300">
      <div className="section-container">
        <div className="grid grid-cols-12 gap-8 xl:gap-16 items-center">
          {/* Left Column: Text Content */}
          <Reveal variants={columnVariants} custom={0} className="col-span-12 lg:col-span-6 flex flex-col gap-6">
            <div>
              <p className="kicker-text">
                Technical Authority
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                Rigorous Auditing, Certified Compliance
              </h2>
              <div className="w-12 h-1 bg-primary mt-4 rounded-full" aria-hidden="true" />
            </div>

            <p className="text-base text-slate-500 font-medium leading-relaxed">
              AMITH operates as an independent engineering advisory. We bridge the gap between design engineering and on-site reality, verifying structural safety and material performance through NABL laboratory testing networks.
            </p>

            <ul className="flex flex-col gap-4">
              {credibilityPoints.map((point) => (
                <li key={point.title} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1" aria-hidden="true">
                    <Icon icon={point.icon} width="20" height="20" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">
                      {point.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500 mt-0.5 leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Right Column: Core Drilling Image */}
          <Reveal variants={columnVariants} custom={1} className="col-span-12 lg:col-span-6">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-slate-200 shadow-2xl">
              <Image
                src="/images/services/concrete_core_drilling.png"
                alt="AMITH Structural Engineering Concrete Core Drilling Testing"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover hover:scale-[1.02] duration-500 transition-transform"
                priority
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
