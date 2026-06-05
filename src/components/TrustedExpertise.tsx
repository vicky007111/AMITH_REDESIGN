"use client";

const expertiseAreas = [
  {
    title: "Structural Audits",
    description: "Visual and analytical testing of structures (columns, beams, slabs) to certify loading stability and identify structural distress.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12"
        />
      </svg>
    ),
  },
  {
    title: "NDT Testing",
    description: "Advanced non-destructive diagnostics (Rebound Hammer, UPV, Core Compression) to measure concrete integrity without structural damage.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
        />
      </svg>
    ),
  },
  {
    title: "TPQM Monitoring",
    description: "Third-Party Quality Monitoring and independent inspections of building stages, reinforcement placing, and concrete pouring.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    ),
  },
  {
    title: "Material Testing",
    description: "NABL-associated testing of building materials, including rebar tension, concrete cubes, chemical analysis of soil, and water purity.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 3.104v13.011c0 .852-.153 1.638-.445 2.391a9.041 9.041 0 0 1-2.085 3.002L3.13 17.417a8.977 8.977 0 0 0 1.37-2.617c.23-.62.348-1.247.348-1.859V3.104L9.75 3.104ZM14.25 3.104v13.011c0 .852.153 1.638.445 2.391a9.041 9.041 0 0 0 2.085 3.002l4.09-4.09a8.977 8.977 0 0 1-1.37-2.617 9.066 9.066 0 0 1-.348-1.859V3.104L14.25 3.104Z"
        />
      </svg>
    ),
  },
  {
    title: "Restoration & Rehabilitation",
    description: "Engineering tailored repair specifications, carbon wrapping, epoxy grouting, and micro-concrete jacketing schemes for distressed elements.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l-2 2a4 4 0 0 1-5.657 0l-1.121-1.121a1.5 1.5 0 0 1 0-2.122l8.778-8.778a3 3 0 1 1 4.242 4.242l-2 2a4 4 0 0 1 0 5.656Z"
        />
      </svg>
    ),
  },
];

export default function TrustedExpertise() {
  return (
    <section className="bg-white dark:bg-darkmode py-20 transition-colors duration-300">
      <div className="container mx-auto max-w-7xl px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="text-primary font-bold text-sm uppercase tracking-wider mb-3">
            Trusted Engineering Capabilities
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
            Core Fields of Expertise
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Dynamic Card Grid (5 columns for desktop support or 3/2 wrap) */}
        <div className="grid grid-cols-12 gap-8 justify-center">
          {expertiseAreas.map((area, index) => {
            // Layout customization: first 3 span 4 columns, next 2 span 6 columns on large screens
            const colSpanClass =
              index < 3
                ? "col-span-12 md:col-span-6 lg:col-span-4"
                : "col-span-12 md:col-span-6 lg:col-span-6";

            return (
              <div
                key={area.title}
                className={`${colSpanClass} flex`}
              >
                <div className="w-full bg-slate-50 dark:bg-darklight border border-slate-100 dark:border-darkborder rounded-3xl p-8 hover:shadow-card-shadow hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                  <div className="flex flex-col gap-6">
                    {/* SaaSCandy Icon Circle Shield */}
                    <div className="w-16 h-16 rounded-2xl bg-cream dark:bg-primary/10 flex justify-center items-center relative overflow-hidden shrink-0 transition-colors duration-300">
                      <div className="absolute inset-0 bg-darkcream dark:bg-primary/20 rounded-2xl top-4 -left-4 transition-transform group-hover:scale-110 duration-300"></div>
                      <span className="relative z-10 text-primary">
                        {area.icon}
                      </span>
                    </div>

                    <div className="flex flex-col gap-3">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors duration-200">
                        {area.title}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                        {area.description}
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
