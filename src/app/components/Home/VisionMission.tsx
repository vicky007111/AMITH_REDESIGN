"use client";

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
    <section className="bg-white dark:bg-darkmode py-20 transition-colors duration-300">
      <div className="container mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-12 gap-12 items-stretch">
          {/* Vision Card - Left Column */}
          <div className="col-span-12 lg:col-span-6 flex">
            <div className="w-full bg-primary/5 dark:bg-primary/10 border border-primary/10 rounded-3xl p-8 lg:p-12 flex flex-col justify-between relative overflow-hidden group">
              {/* Decorative faint background element */}
              <div className="absolute -bottom-10 -right-10 text-[180px] font-black text-primary/5 select-none leading-none pointer-events-none group-hover:scale-105 transition-transform duration-500">
                VISION
              </div>

              <div className="flex flex-col gap-6 relative z-10">
                <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full w-fit">
                  Corporate Vision
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                  Advising the Future of Civil Engineering & Structural Diagnostics
                </h3>
                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium leading-relaxed mt-2 italic">
                  &ldquo;To provide need-based technology, Engineering & consultancy services for the construction industry with durable solutions for new construction & one-time solutions for repair & rehabilitation/retrofitting the concrete elements of existing buildings & infrastructure.&rdquo;
                </p>
              </div>

              <div className="mt-8 flex items-center gap-3 relative z-10">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xs shrink-0">
                  ✓
                </div>
                <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                  Committed to Structural Longevity & Public Safety
                </span>
              </div>
            </div>
          </div>

          {/* Mission Card - Right Column */}
          <div className="col-span-12 lg:col-span-6 flex">
            <div className="w-full bg-slate-50 dark:bg-darklight border border-slate-200 dark:border-darkborder rounded-3xl p-8 lg:p-12 flex flex-col justify-between">
              <div className="flex flex-col gap-6">
                <span className="text-primary font-bold text-xs uppercase tracking-widest bg-slate-200 dark:bg-darkmode px-3 py-1.5 rounded-full w-fit">
                  Corporate Mission
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
                  Four Pillars of Technical Integrity
                </h3>

                {/* Timeline style list */}
                <div className="flex flex-col gap-5 mt-4">
                  {missions.map((mission) => (
                    <div key={mission.id} className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white dark:bg-darkmode border border-slate-200 dark:border-darkborder text-primary font-bold text-sm flex items-center justify-center shrink-0 shadow-sm shadow-slate-100 dark:shadow-none">
                        {mission.id}
                      </div>
                      <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                        {mission.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
