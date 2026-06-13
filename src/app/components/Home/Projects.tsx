"use client";

import { Icon } from "@iconify/react";
import AnimateOnScroll from "@/app/components/shared/AnimateOnScroll";

const projects = [
  {
    client: "Airport Authority of India",
    scope: "Runway Engineering & Deep Sump Design",
    description: "Vetted and supervised critical airfield runway designs and calculated structural parameters for a 1.5 Million Liter Capacity industrial water sump.",
    tag: "Design Vetting",
    icon: "solar:plain-linear"
  },
  {
    client: "Tamil Nadu Housing Board (TNHB)",
    scope: "TPQM & Condition Assessment",
    description: "Conducted Third-Party Quality Monitoring (TPQM) and detailed structural soundness assessment for the 9-storey residential towers at Korattur.",
    tag: "Quality Audit",
    icon: "solar:buildings-linear"
  },
  {
    client: "APCRDA Amaravati",
    scope: "Secretariat & Government Housing",
    description: "Delivered engineering design peer-reviews and site quality monitoring reports for the massive State Secretariat and high-rise government staff quarters.",
    tag: "Oversight",
    icon: "solar:city-linear"
  },
  {
    client: "North Madras Thermal Power Plant",
    scope: "Heavy Industrial Concrete Vetting",
    description: "Formulated structural calculations and vetted safety margins for high-temperature and high-load civil components of the power block.",
    tag: "Industrial Vetting",
    icon: "solar:bolt-linear"
  },
  {
    client: "Kendriya Vidyalaya School Projects",
    scope: "Multi-State Institutional Supervision",
    description: "Managed structural safety and quality verification campaigns for school building assets across Kerala, Karnataka, and Madhya Pradesh.",
    tag: "Supervision",
    icon: "solar:backpack-linear"
  },
  {
    client: "Military Engineering Services (MES)",
    scope: "Defense Installations Soundness Audits",
    description: "Evaluated structural distress and certified structural safety for key airbase and port storage assets in Tambaram and Port Blair.",
    tag: "Stability Audit",
    icon: "solar:shield-linear"
  }
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-white dark:bg-darkmode py-12 sm:py-16 lg:py-20 transition-colors duration-300"
    >
      <div className="container mx-auto max-w-7xl 2xl:max-w-[1400px] 3xl:max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Section heading */}
        <AnimateOnScroll className="text-center mb-10 sm:mb-12 lg:mb-16">
          <p className="text-primary font-bold text-sm uppercase tracking-wider mb-3">
            Landmark Work
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
            Enterprise Project Showcase
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto mt-3">
            AMITH directors have validated and monitored major infrastructure projects across military, public, and heavy industrial sectors.
          </p>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
        </AnimateOnScroll>

        {/* Projects Grid */}
        <div className="grid grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <AnimateOnScroll
              key={project.client}
              delay={index * 0.08}
              className="col-span-12 md:col-span-6 lg:col-span-4 flex"
            >
              <div className="w-full bg-slate-50 dark:bg-darklight border border-slate-100 dark:border-darkborder rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 hover:border-primary dark:hover:border-primary hover:shadow-[0_15px_30px_rgba(0,28,104,0.12)] dark:hover:shadow-[0_15px_30px_rgba(0,28,104,0.25)] hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 ease-out flex flex-col justify-between group">
                <div className="flex flex-col gap-4 sm:gap-6">
                  {/* Scope header with label and icon */}
                  <div className="flex justify-between items-start">
                    <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-lg text-[10px] sm:text-xs font-bold bg-white dark:bg-darkmode text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-darkborder uppercase tracking-wide">
                      {project.tag}
                    </span>
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                      <Icon icon={project.icon} width="18" height="18" className="sm:w-5 sm:h-5" />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="flex flex-col gap-1.5 sm:gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-tight">
                      {project.client}
                    </h3>
                    <span className="text-xs sm:text-sm font-semibold text-primary">
                      {project.scope}
                    </span>
                    <p className="text-xs sm:text-sm lg:text-base text-slate-500 dark:text-slate-400 font-medium leading-relaxed mt-1 sm:mt-2">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
