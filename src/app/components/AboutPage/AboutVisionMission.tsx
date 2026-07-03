"use client";
import Image from "next/image";
import { Icon } from "@iconify/react";
import AnimateOnScroll from "@/app/components/shared/AnimateOnScroll";

export default function AboutVisionMission() {
  const missions = [
    {
      id: "01",
      text: "Integrate innovative concrete technologies to supply affordable engineering solutions for stakeholders across the construction sector."
    },
    {
      id: "02",
      text: "Provide forensic structural auditing of buildings, bridges, and RCC works to extend service life using targeted retrofitting."
    },
    {
      id: "03",
      text: "Equip the construction industry with appropriate, durable, and sustainable concrete methodologies for new construction works."
    },
    {
      id: "04",
      text: "Conduct technical workshops, quality auditing certifications, and specialized seminars to disseminate advanced repair skills."
    }
  ];

  return (
    <section className="bg-white dark:bg-darkmode py-12 sm:py-16 lg:py-20 transition-colors duration-300">
      <div className="container mx-auto max-w-7xl 2xl:max-w-[1400px] 3xl:max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <AnimateOnScroll>
            <span className="text-primary font-extrabold text-[11px] uppercase tracking-widest bg-primary/10 border border-primary/20 px-4.5 py-1.5 rounded-full inline-block">
              Our Foundation
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-5 tracking-tight leading-tight">
              Guided by Integrity, Engineered for Safety
            </h2>
            <p className="text-slate-500 dark:text-slate-400 font-medium text-sm sm:text-base mt-3.5 leading-relaxed">
              Our corporate philosophy centers on structural longevity, technical precision, and academic authority. We hold ourselves to the highest standards of diagnostic accuracy.
            </p>
          </AnimateOnScroll>
        </div>

        <div className="grid grid-cols-12 gap-6 lg:gap-12 items-stretch">
          
          {/* Vision Card - Left Column */}
          <AnimateOnScroll className="col-span-12 lg:col-span-5 flex">
            <div className="w-full bg-slate-50 dark:bg-darklight border border-slate-200 dark:border-darkborder rounded-3xl p-8 sm:p-10 lg:p-12 flex flex-col justify-between items-start relative overflow-hidden group hover:shadow-card-shadow hover:-translate-y-1 transition-all duration-300">
              
              {/* Header (Top) */}
              <div className="flex flex-col items-start text-left gap-4 relative z-10 w-full">
                <span className="text-primary font-extrabold text-[11px] uppercase tracking-widest bg-primary/10 border border-primary/20 px-4.5 py-1.5 rounded-full w-fit self-center">
                  Corporate Vision
                </span>
                
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white leading-snug max-w-xl w-full">
                  Advising the Future of Civil Engineering &amp; Structural Diagnostics
                </h3>
              </div>

              {/* Vision Plaque Card (Middle) */}
              <div className="w-full bg-white dark:bg-darkmode border border-slate-100 dark:border-darkborder rounded-2xl p-6 sm:p-8 my-6 shadow-sm hover:shadow-card-shadow hover:-translate-y-1 transition-all duration-300 relative z-10">
                <p className="text-left text-sm sm:text-base text-slate-700 dark:text-slate-200 font-semibold leading-relaxed">
                  To provide need-based technology, Engineering &amp; consultancy services for the construction industry with durable solutions for new construction &amp; one-time solutions for repair &amp; rehabilitation/retrofitting the concrete elements of existing buildings &amp; infrastructure.
                </p>
              </div>

              {/* Footer Note (Bottom) */}
              <div className="flex items-center justify-center gap-3 relative z-10 w-full">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xs shrink-0 shadow-md shadow-primary/20">
                  ✓
                </div>
                <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Committed to Structural Longevity &amp; Public Safety
                </span>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Mission Card - Right Column */}
          <AnimateOnScroll delay={0.15} className="col-span-12 lg:col-span-7 flex">
            <div className="w-full bg-slate-50 dark:bg-darklight border border-slate-200 dark:border-darkborder rounded-3xl p-8 sm:p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden group hover:shadow-card-shadow hover:-translate-y-1 transition-all duration-300">
              
              <div className="flex flex-col gap-6 relative z-10 w-full">
                <div className="flex flex-col items-start text-left gap-4 sm:gap-6 relative z-10 w-full">
                  <span className="text-primary font-extrabold text-[11px] uppercase tracking-widest bg-primary/10 border border-primary/20 px-4.5 py-1.5 rounded-full w-fit self-center">
                    Corporate Mission
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white leading-tight">
                    Four Pillars of Technical Integrity
                  </h3>
                </div>

                {/* Timeline Styled Pillars */}
                <div className="flex flex-col gap-5 mt-2">
                  {missions.map((mission) => (
                    <div 
                      key={mission.id} 
                      className="group/item flex gap-4 items-start bg-white dark:bg-darkmode p-5 rounded-2xl border border-slate-100 dark:border-darkborder shadow-sm hover:shadow-card-shadow hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary/10 to-primary/5 border border-primary/10 text-primary font-bold text-sm flex items-center justify-center shrink-0 transition-all duration-300 group-hover/item:scale-105">
                        {mission.id}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed pt-0.5 group-hover/item:text-slate-800 dark:group-hover/item:text-white transition-colors duration-200">
                        {mission.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimateOnScroll>

        </div>
      </div>
    </section>
  );
}
