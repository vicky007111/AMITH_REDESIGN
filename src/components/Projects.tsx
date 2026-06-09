"use client";

const projects = [
  {
    client: "Airport Authority of India",
    scope: "Runway Engineering & Deep Sump Design",
    description: "Vetted and supervised critical airfield runway designs and calculated structural parameters for a 1.5 Million Liter Capacity industrial water sump.",
    tag: "Design Vetting",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
      </svg>
    )
  },
  {
    client: "Tamil Nadu Housing Board (TNHB)",
    scope: "TPQM & Condition Assessment",
    description: "Conducted Third-Party Quality Monitoring (TPQM) and detailed structural soundness assessment for the 9-storey residential towers at Korattur.",
    tag: "Quality Audit",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12" />
      </svg>
    )
  },
  {
    client: "APCRDA Amaravati",
    scope: "Secretariat & Government Housing",
    description: "Delivered engineering design peer-reviews and site quality monitoring reports for the massive State Secretariat and high-rise government staff quarters.",
    tag: "Oversight",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
      </svg>
    )
  },
  {
    client: "North Madras Thermal Power Plant",
    scope: "Heavy Industrial Concrete Vetting",
    description: "Formulated structural calculations and vetted safety margins for high-temperature and high-load civil components of the power block.",
    tag: "Industrial Vetting",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    )
  },
  {
    client: "Kendriya Vidyalaya School Projects",
    scope: "Multi-State Institutional Supervision",
    description: "Managed structural safety and quality verification campaigns for school building assets across Kerala, Karnataka, and Madhya Pradesh.",
    tag: "Supervision",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A5.905 5.905 0 0 1 8 3.074m12.56 7.073a50.57 50.57 0 0 1 2.658-.813A5.905 5.905 0 0 0 16 3.074M8.03 3.074a50.58 50.58 0 0 1 7.94 0M8.03 3.074a1.875 1.875 0 0 0-1.875 1.875v5.186m9.75-7.061A1.875 1.875 0 0 1 17.75 4.95v5.186m-11.594-5.186a50.58 50.58 0 0 0 11.594 0" />
      </svg>
    )
  },
  {
    client: "Military Engineering Services (MES)",
    scope: "Defense Installations Soundness Audits",
    description: "Evaluated structural distress and certified structural safety for key airbase and port storage assets in Tambaram and Port Blair.",
    tag: "Stability Audit",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
      </svg>
    )
  }
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-white dark:bg-darkmode py-20 transition-colors duration-300"
    >
      <div className="container mx-auto max-w-7xl px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="text-primary font-bold text-sm uppercase tracking-wider mb-3">
            Landmark Work
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
            Enterprise Project Showcase
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto mt-3">
            AMITH directors have validated and monitored major infrastructure projects across military, public, and heavy industrial sectors.
          </p>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-12 gap-8">
          {projects.map((project) => (
            <div
              key={project.client}
              className="col-span-12 md:col-span-6 lg:col-span-4 flex"
            >
              <div className="w-full bg-slate-50 dark:bg-darklight border border-slate-100 dark:border-darkborder rounded-3xl p-8 hover:shadow-card-shadow transition-all duration-300 flex flex-col justify-between group">
                <div className="flex flex-col gap-6">
                  {/* Scope header with label and icon */}
                  <div className="flex justify-between items-start">
                    <span className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-white dark:bg-darkmode text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-darkborder uppercase tracking-wide">
                      {project.tag}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      {project.icon}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">
                      {project.client}
                    </h3>
                    <span className="text-sm font-semibold text-primary">
                      {project.scope}
                    </span>
                    <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-medium leading-relaxed mt-2">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
