const PROJECTS = [
  {
    id: "project-1",
    image: "/images/scaffolding-inspection.png",
    title: "Commercial Infrastructure Structural Audit",
    location: "Velachery, Chennai",
    description: "Slab deflection logging, reinforcement concrete mapping, and visual crack profiling of ceiling structures using secure scaffold setups.",
    tags: ["NDT Assessment", "IS 13935", "Slab Deflection"],
  },
  {
    id: "project-2",
    image: "/images/office-audit.png",
    title: "Corporate Office Quality & NDT Audit",
    location: "IT Corridor, Chennai",
    description: "In-situ quality checks, ultrasonic pulse velocity (UPV) scanning, and rebound hammer strength diagnostics in active office environments.",
    tags: ["UPV Scan", "Rebound Hammer", "Live Office Audit"],
  },
  {
    id: "project-3",
    image: "/images/core-drilling.png",
    title: "RCC Floor Core Extraction & Analysis",
    location: "Industrial Complex, Chennai",
    description: "On-site core extraction testing for laboratory compressive strength validation and depth of carbonation evaluation.",
    tags: ["Core Extraction", "IS 456", "Carbonation Depth"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-slate-50 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-18">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-blue-600 text-xs font-bold tracking-widest uppercase mb-5">
              <span className="w-8 h-px bg-blue-600 inline-block" />
              On-Site Portfolio
            </div>
            <h2 className="font-display font-bold text-slate-900 text-[clamp(1.8rem,3.5vw,2.75rem)] leading-tight">
              <span className="section-heading-accent">Featured Project</span>{" "}
              <span className="text-blue-600">Assessments</span>
            </h2>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed max-w-md lg:text-right">
            A preview of real-world structural inspections and diagnostic test runs conducted by our certified engineers in Chennai.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="card-lift group rounded-2xl bg-white overflow-hidden flex flex-col"
              style={{
                boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 8px 24px rgba(11,30,61,0.04)",
                border: "1px solid rgba(226,232,240,0.8)",
              }}
            >
              {/* Image panel */}
              <div className="relative h-[220px] w-full overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                />
                
                {/* Visual technical focus lines */}
                <div className="absolute inset-3 border border-white/10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-blue-400" />
                  <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-blue-400" />
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-blue-400" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-blue-400" />
                </div>

                {/* Location overlay badge */}
                <div className="absolute bottom-3 left-3 bg-slate-950/85 backdrop-blur-sm px-2.5 py-1 rounded text-[10px] font-mono font-semibold text-slate-300 border border-white/10 flex items-center gap-1.5">
                  <svg className="w-3 h-3 text-blue-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  </svg>
                  {project.location}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col gap-4 flex-1">
                <h3 className="font-display font-bold text-slate-900 text-[1.0625rem] leading-snug">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-sm leading-[1.6] flex-1">
                  {project.description}
                </p>
                
                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
