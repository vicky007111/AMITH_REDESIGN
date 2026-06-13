"use client";

import AnimateOnScroll from "@/app/components/shared/AnimateOnScroll";

export default function VisionMission() {
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
      <div className="container mx-auto max-w-7xl 2xl:max-w-[1400px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-12 gap-5 sm:gap-6 lg:gap-12 items-stretch">
          {/* Vision Card - Left Column */}
          <AnimateOnScroll className="col-span-12 lg:col-span-6 flex">
            <div className="w-full bg-primary/5 dark:bg-primary/10 border border-primary/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 flex flex-col justify-between relative overflow-hidden group">
              {/* Decorative faint background — smaller on mobile to prevent overflow */}
              <div className="absolute -bottom-6 -right-6 sm:-bottom-10 sm:-right-10 text-[80px] sm:text-[120px] lg:text-[180px] font-black text-primary/5 select-none leading-none pointer-events-none group-hover:scale-105 transition-transform duration-500">
                VISION
              </div>

              <div className="flex flex-col gap-4 sm:gap-6 relative z-10">
                <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full w-fit">
                  Corporate Vision
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                  Advising the Future of Civil Engineering &amp; Structural Diagnostics
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed mt-1 sm:mt-2 italic">
                  &ldquo;To provide need-based technology, Engineering &amp; consultancy services for the construction industry with durable solutions for new construction &amp; one-time solutions for repair &amp; rehabilitation/retrofitting the concrete elements of existing buildings &amp; infrastructure.&rdquo;
                </p>
              </div>

              <div className="mt-6 sm:mt-8 flex items-center gap-3 relative z-10">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xs shrink-0">
                  ✓
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                  Committed to Structural Longevity &amp; Public Safety
                </span>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Mission Card - Right Column */}
          <AnimateOnScroll delay={0.15} className="col-span-12 lg:col-span-6 flex">
            <div className="w-full bg-slate-50 dark:bg-darklight border border-slate-200 dark:border-darkborder rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 flex flex-col justify-between">
              <div className="flex flex-col gap-4 sm:gap-6">
                <span className="text-primary font-bold text-xs uppercase tracking-widest bg-slate-200 dark:bg-darkmode px-3 py-1.5 rounded-full w-fit">
                  Corporate Mission
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                  Four Pillars of Technical Integrity
                </h3>

                {/* Timeline style list */}
                <div className="flex flex-col gap-4 sm:gap-5 mt-2 sm:mt-4">
                  {missions.map((mission) => (
                    <div key={mission.id} className="flex gap-3 sm:gap-4">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white dark:bg-darkmode border border-slate-200 dark:border-darkborder text-primary font-bold text-xs sm:text-sm flex items-center justify-center shrink-0 shadow-sm shadow-slate-100 dark:shadow-none">
                        {mission.id}
                      </div>
                      <p className="text-xs sm:text-sm lg:text-base text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
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
