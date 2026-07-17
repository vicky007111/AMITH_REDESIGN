"use client";
import { Icon } from "@iconify/react";
import Reveal from "@/app/components/shared/Reveal";
import SectionHeader from "@/app/components/shared/SectionHeader";
import { staggeredFadeUp } from "@/app/components/shared/anim";

const cardVariants = staggeredFadeUp(0.15);

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
    <section className="bg-white section-py transition-colors duration-300">
      <div className="section-container">
        
        {/* Section Header */}
        <SectionHeader
          kicker="Our Foundation"
          title="Guided by Integrity, Engineered for Safety"
          lead="Our corporate philosophy centers on structural longevity, technical precision, and academic authority. We hold ourselves to the highest standards of diagnostic accuracy."
          className="mb-12 sm:mb-16"
        />

        <div className="grid grid-cols-12 gap-6 lg:gap-12 items-stretch">
          
          {/* Vision Card - Left Column */}
          <Reveal variants={cardVariants} custom={0} className="col-span-12 lg:col-span-5 flex">
            <div className="w-full bg-surface-soft border border-line rounded-media p-8 sm:p-10 lg:p-12 flex flex-col justify-between items-start relative overflow-hidden group hover:shadow-e2 hover:-translate-y-1 transition-[transform,box-shadow] duration-300">

              {/* Header (Top) */}
              <div className="flex flex-col items-start text-left gap-4 relative z-10 w-full">
                <span className="kicker-text mb-0">
                  Corporate Vision
                </span>

                <h3 className="text-xl sm:text-2xl leading-snug max-w-xl w-full">
                  Advising the Future of Civil Engineering &amp; Structural Diagnostics
                </h3>
              </div>

              {/* Vision Plaque Card (Middle) */}
              <div className="w-full card p-6 sm:p-8 my-6 relative z-10">
                <p className="text-left text-sm sm:text-base text-slate-700 font-semibold leading-relaxed">
                  To provide need-based technology, Engineering &amp; consultancy services for the construction industry with durable solutions for new construction &amp; one-time solutions for repair &amp; rehabilitation/retrofitting the concrete elements of existing buildings &amp; infrastructure.
                </p>
              </div>

              {/* Footer Note (Bottom) */}
              <div className="flex items-center justify-center gap-3 relative z-10 w-full">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white shrink-0 shadow-e1">
                  <Icon icon="lucide:check" width={14} height={14} aria-hidden="true" />
                </div>
                <span className="text-xs font-bold text-slate-700">
                  Committed to Structural Longevity &amp; Public Safety
                </span>
              </div>
            </div>
          </Reveal>

          {/* Mission Card - Right Column */}
          <Reveal variants={cardVariants} custom={1} className="col-span-12 lg:col-span-7 flex">
            <div className="w-full bg-surface-soft border border-line rounded-media p-8 sm:p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden group hover:shadow-e2 hover:-translate-y-1 transition-[transform,box-shadow] duration-300">

              <div className="flex flex-col gap-6 relative z-10 w-full">
                <div className="flex flex-col items-start text-left gap-4 sm:gap-6 relative z-10 w-full">
                  <span className="kicker-text mb-0">
                    Corporate Mission
                  </span>
                  <h3 className="text-xl sm:text-2xl leading-tight">
                    Four Pillars of Technical Integrity
                  </h3>
                </div>

                {/* Timeline Styled Pillars */}
                <div className="flex flex-col gap-5 mt-2">
                  {missions.map((mission) => (
                    <div
                      key={mission.id}
                      className="group/item flex gap-4 items-start card card-hover p-5"
                    >
                      <div className="w-10 h-10 rounded-btn bg-primary/5 border border-primary/10 text-primary font-display font-bold text-sm flex items-center justify-center shrink-0 transition-transform duration-300 group-hover/item:scale-105">
                        {mission.id}
                      </div>
                      <p className="text-xs sm:text-sm text-body font-medium leading-relaxed pt-0.5 group-hover/item:text-slate-800 transition-colors duration-200">
                        {mission.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
