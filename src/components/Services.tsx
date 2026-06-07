"use client";

import { useState } from "react";

const ndtTests = [
  {
    name: "Rebound Hammer",
    mechanism: "Verifies the surface hardness of concrete elements using elastic rebound principles to estimate immediate compressive strength.",
    anomalies: "Detects low surface hardness, uniformity issues, and potential weak skin concrete zones."
  },
  {
    name: "Ultrasonic Pulse Velocity (UPV)",
    mechanism: "Sends electro-acoustic transducers pulses through concrete blocks to calculate sound speed and trace concrete density.",
    anomalies: "Locates internal air voids, structural honeycombing, internal cracks, and structural discontinuity."
  },
  {
    name: "Carbonation & Chloride Tests",
    mechanism: "Applies chemical indicators (phenolphthalein) to broken cores to examine chemical depth penetration and concrete pH levels.",
    anomalies: "Identifies loss of steel rebar alkaline protection, indicating high risks of premature internal rust."
  },
  {
    name: "Concrete Core Drilling",
    mechanism: "Drills out physical cylindrical cores from concrete elements to perform laboratory crushing strength tests.",
    anomalies: "Verifies exact in-situ compressive strength, concrete consolidation, and aggregates layout."
  },
  {
    name: "Half-Cell Potential",
    mechanism: "Measures electrical potential gradients across concrete reinforcements using reference electrodes to map electrical currents.",
    anomalies: "Determines the active corrosion probability of embedded steel bars before visual cracking occurs."
  },
  {
    name: "Chemical Analysis",
    mechanism: "Performs qualitative chemical extractions on mortar/concrete dust to evaluate sulfate and chloride levels.",
    anomalies: "Detects internal chemical attack hazards, aggregate reactivity issues, and soil/water salt poisoning."
  }
];

export default function Services() {
  const [selectedNdtIndex, setSelectedNdtIndex] = useState(0);

  const services = [
    {
      title: "Quality Audit / Assessment & TPQM",
      description: "Preventing structural flaws from day one. Involves independent audits of material quality, reinforcement placement, concrete pouring, and finishing processes.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
        </svg>
      )
    },
    {
      title: "Structural Auditing & Integrity Analysis",
      description: "Comprehensive visual and physical inspections of structural nodes. We test beams, columns, and slabs for stability and formulate precise distress repair designs.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15" />
        </svg>
      )
    },
    {
      title: "NDT & Partial Destructive Testing",
      description: "Advanced diagnostic testing using rebound hammer, ultrasonic waves, chemical profiling, and core extraction. Custom interactive details available on the panel below.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v13.011c0 .852-.153 1.638-.445 2.391a9.041 9.041 0 0 1-2.085 3.002L3.13 17.417a8.977 8.977 0 0 0 1.37-2.617c.23-.62.348-1.247.348-1.859V3.104L9.75 3.104ZM14.25 3.104v13.011c0 .852.153 1.638.445 2.391a9.041 9.041 0 0 0 2.085 3.002l4.09-4.09a8.977 8.977 0 0 1-1.37-2.617 9.066 9.066 0 0 1-.348-1.859V3.104L14.25 3.104Z" />
        </svg>
      ),
      isNdtSelector: true
    },
    {
      title: "Testing of Construction Materials",
      description: "Laboratory evaluation of reinforcement steel (tensile, bend, rebend tests), concrete compression testing, and chemical soil/water tests in associated NABL labs.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18m-9-9 9 9-9 9-9-9 9-9Z" />
        </svg>
      )
    },
    {
      title: "Restoration & Rehabilitation Design",
      description: "Developing detailed repair schemes, specifying epoxy grouting, carbon fiber wrapping, micro-concrete jacketing, and reinforcement protection methods.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l-2 2a4 4 0 0 1-5.657 0l-1.121-1.121a1.5 1.5 0 0 1 0-2.122l8.778-8.778a3 3 0 1 1 4.242 4.242l-2 2a4 4 0 0 1 0 5.656Z" />
        </svg>
      )
    },
    {
      title: "Concrete Mix Design (IS 10262)",
      description: "Scientific calculation of concrete proportions to achieve target strength grades. Aligned with Bureau of Indian Standards (IS 10262 & IS 456) using curing parameters.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
        </svg>
      )
    },
    {
      title: "Consultancy & Peer Reviews",
      description: "Validating external structural drawings, producing structural feasibility reports, resolving construction disputes, and delivering academic design reviews.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-1.5 3h1.5m-7.5-6h7.5m-7.5 3h7.5m-7.5 3h7.5M3 5.25c0-.621.504-1.125 1.125-1.125h15.75c.621 0 1.125.504 1.125 1.125v13.5c0 .621-.504 1.125-1.125 1.125H4.125C3.5 19.875 3 19.37 3 18.75V5.25Z" />
        </svg>
      )
    },
    {
      title: "Dissemination of Technical Knowledge",
      description: "Targeted training seminars, site QA/QC workshops, and technical educational courses for builders, government engineering teams, and university graduates.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A5.905 5.905 0 0 1 8 3.074m12.56 7.073a50.57 50.57 0 0 1 2.658-.813A5.905 5.905 0 0 0 16 3.074M8.03 3.074a50.58 50.58 0 0 1 7.94 0M8.03 3.074a1.875 1.875 0 0 0-1.875 1.875v5.186m9.75-7.061A1.875 1.875 0 0 1 17.75 4.95v5.186m-11.594-5.186a50.58 50.58 0 0 0 11.594 0" />
        </svg>
      )
    }
  ];

  return (
    <section
      id="services"
      className="bg-white dark:bg-darkmode py-20 transition-colors duration-300"
    >
      <div className="container mx-auto max-w-7xl px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="text-primary font-bold text-sm uppercase tracking-wider mb-3">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
            Engineering & Advisory Services
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-12 gap-8">
          {services.map((service) => {
            if (service.isNdtSelector) {
              return (
                <div
                  key={service.title}
                  className="col-span-12 lg:col-span-8 bg-slate-50 dark:bg-darklight border border-slate-100 dark:border-darkborder rounded-3xl p-8 lg:p-10 shadow-sm flex flex-col justify-between"
                >
                  <div className="grid grid-cols-12 gap-6 h-full items-start">
                    {/* Left details inside the card */}
                    <div className="col-span-12 md:col-span-6 flex flex-col gap-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                          {service.icon}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                        {service.description}
                      </p>

                      {/* Horizontal list of NDT sub-services */}
                      <div className="flex flex-wrap gap-2">
                        {ndtTests.map((test, index) => (
                          <button
                            key={test.name}
                            onClick={() => setSelectedNdtIndex(index)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer ${
                              selectedNdtIndex === index
                                ? "bg-primary text-white shadow-md shadow-primary/15"
                                : "bg-white dark:bg-darkmode border border-slate-200 dark:border-darkborder text-slate-600 dark:text-slate-400 hover:border-primary dark:hover:border-primary"
                            }`}
                          >
                            {test.name}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Right interactive box showing information details */}
                    <div className="col-span-12 md:col-span-6 h-full flex flex-col justify-between bg-white dark:bg-darkmode border border-slate-200/60 dark:border-darkborder rounded-2xl p-6 shadow-sm">
                      <div className="flex flex-col gap-4">
                        <span className="text-[10px] uppercase font-bold tracking-widest text-primary">
                          NDT Diagnostic Method
                        </span>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                          {ndtTests[selectedNdtIndex].name}
                        </h4>
                        <div className="flex flex-col gap-3">
                          <div>
                            <span className="text-xs font-semibold uppercase text-slate-400">
                              How it works:
                            </span>
                            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed mt-1">
                              {ndtTests[selectedNdtIndex].mechanism}
                            </p>
                          </div>
                          <div>
                            <span className="text-xs font-semibold uppercase text-slate-400">
                              What it detects:
                            </span>
                            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed mt-1">
                              {ndtTests[selectedNdtIndex].anomalies}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={service.title}
                className="col-span-12 md:col-span-6 lg:col-span-4 flex"
              >
                <div className="w-full bg-slate-50 dark:bg-darklight border border-slate-100 dark:border-darkborder rounded-3xl p-8 hover:shadow-card-shadow hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                  <div className="flex flex-col gap-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 transition-transform group-hover:scale-105 duration-300">
                      {service.icon}
                    </div>
                    <div className="flex flex-col gap-3">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors duration-200">
                        {service.title}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
