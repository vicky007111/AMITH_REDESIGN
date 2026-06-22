"use client";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

interface Director {
  name: string;
  role: string;
  experience: string;
  highlight: string;
  avatarInitials: string;
  credentials: string[];
  keyProjects: string[];
  bio: string;
}

const directors: Director[] = [
  {
    name: "Professor Dr. Devadas Manoharan M",
    role: "Director & Principal Structural Advisor",
    experience: "37+ Years of Academic & Industry Leadership",
    highlight: "Former Vice Chancellor, Anna University of Technology",
    avatarInitials: "DM",
    bio: "An eminent academician, researcher, and structural engineering consultant with close to four decades of service in academic, design, and construction industries. He has successfully guided 12 PhDs, 91 ME theses, and 3 MS research projects, and served as a Syndicate Member of Anna University, Chennai.",
    credentials: [
      "Former Vice Chancellor of Anna University of Technology, Tiruchirappalli",
      "Former Syndicate Member, Anna University, Chennai",
      "Held key positions at Anna University: Head of the Department of Civil Engineering, Professor & Estate Officer, Professor & Head of the Structural Engineering Division, and Director of the Building Technology Centre",
      "Guided 12 Ph.D. scholars, 91 M.E. theses, and 3 M.S. research projects",
      "Specialist in structural design, structural dynamics, concrete diagnostics, vetting, and condition assessment of residential, commercial, and industrial facilities"
    ],
    keyProjects: [
      "Designed and vetted structural systems for over 10 Sewage Treatment Plants (STPs) ranging from 8.5 MLD to 120 MLD capacities",
      "Vetted structural pavement design, thickness calculations, and concrete mix designs of runways for the Airport Authority of India",
      "Vetted structural designs of equipment foundations, pipelines, and steel structures for Bharat Petroleum Corporation Limited (BPCL)",
      "Conducted NDT tests, condition assessment, and structural vetting for the Integral Coach Factory (ICF) industrial structures",
      "Conducted structural investigations of tsunami-affected tenements for the Tamil Nadu Slum Clearance Board (TNSCB)",
      "Vetted structural designs of thermal power block elements for the North Madras Thermal Power Plant"
    ]
  },
  {
    name: "Col. Dr. Nallathambi P",
    role: "Director & Military/Commercial Structural Expert",
    experience: "30+ Years of Defense & Corporate Design Vetting",
    highlight: "Retired Army Officer, Military Engineering Services (MES)",
    avatarInitials: "PN",
    bio: "A retired Army Officer with over 20 years of active service in the Military Engineering Services (MES) and 10+ years of active commercial structural practice. He has vetted and approved more than 500 complex structural designs, specializing in Pre-Engineered Buildings (PEB) steel structures, Pre-cast Concrete, and Pre-stressed Concrete designs.",
    credentials: [
      "Retired Army Officer from Military Engineering Services (MES) with 20 years of military service",
      "Completed 10+ years of active commercial structural design practice",
      "Vetted and approved more than 500 complex structural designs",
      "Expert in Pre-Engineered Buildings (PEB) steel structures, Pre-cast Concrete, and Pre-prestressed Concrete designs",
      "Experienced structural auditor of military, defense, and high-security installations"
    ],
    keyProjects: [
      "Vetted Marg Ltd 12-storied residential complex at Tirupati",
      "Vetted structural design for the MES Tambaram 1500 KLD Sewage Treatment Plant",
      "Designed and vetted the Vidya Mandir School building complex at Aranthangi (1,25,000 sq.ft.)",
      "Designed structural layouts for the Madras Diabetes Research Center (MDRC) food processing unit (25,000 sq.ft.)",
      "Vetted the Wellington RCC Bridge at Ooty",
      "Designed the 1.5 Million Liter Capacity water sump for the Airport Authority of India",
      "Led structural vetting of the Army School Shillong building complex",
      "Conducted structural safety audits at MES Tambaram and MES Port Blair installations"
    ]
  },
  {
    name: "Er. Kalaimony R",
    role: "Director & Senior Quality Monitor",
    experience: "38+ Years of Public Works & Developer Oversight",
    highlight: "Senior Consultant, CUBE - IIT Madras",
    avatarInitials: "RK",
    bio: "A senior civil engineer with 23 years of public service in TANGEDCO and 15 years as a residential developer (completed 40+ housing projects). Currently serves as a Senior Consultant for the Centre for Urbanization, Buildings & Environment (CUBE) - IIT Madras.",
    credentials: [
      "Senior Consultant for CUBE - IIT Madras (Centre for Urbanization, Buildings & Environment)",
      "Retired Senior Engineer from TANGEDCO (23 years of public service)",
      "Completed 40+ housing projects as a developer (15 years of commercial construction experience)",
      "Specialist in Third-Party Quality Monitoring (TPQM) and massive condition assessment campaigns"
    ],
    keyProjects: [
      "Oversaw construction, quality monitoring, and bi-weekly audits for the APCRDA Amaravati Secretariats, including the High Court, MLA housing (4,000 units), and the Integrated Secretariat complex (three 45-storied composite structure blocks)",
      "Conducted TPQM and comprehensive condition assessment of 9-storey residential towers at Korattur for the Tamil Nadu Housing Board (TNHB)",
      "Third-Party Quality Monitoring of residential blocks at Vallam, Thanjavur (969 housing units in 13 blocks) and Karaikudi (900 units in 19 blocks) for the Tamil Nadu Urban Habitat Development Board (funded by the Asian Development Bank)",
      "Supervised Kendriya Vidyalaya school building constructions across Kerala, Karnataka, and Madhya Pradesh"
    ]
  }
];

export default function AboutLeadership() {
  const [activeDirector, setActiveDirector] = useState<Director | null>(null);

  useEffect(() => {
    if (activeDirector) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeDirector]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDirector(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section
      id="leadership"
      className="bg-slate-50 dark:bg-darklight py-12 sm:py-16 lg:py-20 transition-colors duration-300"
    >
      <div className="container mx-auto max-w-7xl 2xl:max-w-[1400px] 3xl:max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary font-extrabold text-[11px] uppercase tracking-widest bg-primary/10 border border-primary/20 px-4.5 py-1.5 rounded-full inline-block">
            Elite Leadership Team
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-5 tracking-tight leading-tight">
            Meet Our Board of Directors
          </h2>
          <div className="max-w-3xl mx-auto mt-5 px-4">
            <p className="text-slate-600 dark:text-slate-300 font-semibold text-sm sm:text-base leading-relaxed">
              AMITH Civil &amp; Allied Engineering (ACAES) Pvt Ltd, is a start-up company established by a team of three dedicated Professionals with more than three decades of service in the field of Academic, Design, and construction Industries.
            </p>
            <p className="text-slate-400 dark:text-slate-500 font-medium text-xs sm:text-sm mt-2">
              Here are brief professional details about the directors of the company.
            </p>
          </div>
        </div>

        {/* Compact Listing Rows - Photo Left, Content Right */}
        <div className="flex flex-col gap-6 max-w-5xl mx-auto">
          {directors.map((director) => (
            <div
              key={director.name}
              className="w-full bg-white dark:bg-darkmode border border-slate-200 dark:border-darkborder rounded-3xl p-6 sm:p-8 hover:shadow-card-shadow hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start">
                {/* Left Column: Avatar (Photo) */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full bg-cream dark:bg-primary/10 flex items-center justify-center text-primary font-bold text-3xl lg:text-4xl border-2 border-primary/20 shrink-0 relative select-none shadow-sm">
                  {director.avatarInitials}
                  <div className="absolute bottom-1 right-1 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white border-2 border-white dark:border-darkmode shadow-md">
                    <Icon
                      icon="solar:verified-check-bold"
                      width="16"
                      height="16"
                    />
                  </div>
                </div>

                {/* Right Column: Profile Summary & Button */}
                <div className="flex-1 text-center md:text-left space-y-3 w-full">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 justify-center md:justify-start">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                      {director.name}
                    </h3>
                    <span className="inline-block self-center text-xs font-bold text-primary bg-primary/5 dark:bg-primary/10 border border-primary/10 px-3 py-1 rounded-full whitespace-nowrap">
                      {director.role}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1 text-xs font-semibold text-slate-400">
                    <span className="italic">{director.highlight}</span>
                    <span className="hidden md:inline text-slate-300 dark:text-darkborder">•</span>
                    <span className="uppercase tracking-wider">
                      Experience: <span className="text-slate-700 dark:text-slate-200 font-bold">{director.experience}</span>
                    </span>
                  </div>

                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                    {director.bio}
                  </p>

                  <div className="pt-2 flex justify-center md:justify-start">
                    <button
                      onClick={() => setActiveDirector(director)}
                      className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-primary/5 hover:bg-primary text-primary hover:text-white transition-all duration-300 border border-primary/10 hover:border-primary flex items-center gap-2 group cursor-pointer shadow-sm hover:shadow-md"
                    >
                      <span>View Full Profile &amp; Vetting History</span>
                      <Icon
                        icon="solar:arrow-right-linear"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                        width="16"
                        height="16"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Credentials & Projects Modal Popup Overlay */}
        {activeDirector && (
          <div 
            className="fixed inset-0 bg-slate-900/65 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setActiveDirector(null)}
          >
            <div 
              className="w-full max-w-4xl bg-white dark:bg-darkmode border border-slate-200 dark:border-darkborder rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl relative my-8 animate-fade-in max-h-[90vh] overflow-y-auto flex flex-col gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveDirector(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-xl bg-slate-100 dark:bg-darklight text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white flex items-center justify-center border border-slate-200/50 dark:border-darkborder/50 transition-colors duration-200 cursor-pointer"
                aria-label="Close Credentials Modal"
              >
                <Icon icon="solar:close-circle-bold" width="24" height="24" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
                {/* Modal Left Column: Photo/Avatar (33% width on Desktop) */}
                <div className="md:col-span-4 flex flex-col items-center text-center md:text-left gap-4 pb-6 md:pb-0 border-b md:border-b-0 md:border-r border-slate-100 dark:border-darkborder/50 md:pr-6 lg:pr-8 w-full shrink-0">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full bg-cream dark:bg-primary/10 flex items-center justify-center text-primary font-bold text-4xl border-2 border-primary/20 shrink-0 relative select-none shadow-sm">
                    {activeDirector.avatarInitials}
                    <div className="absolute bottom-1 right-1 w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white border-2 border-white dark:border-darkmode shadow-md">
                      <Icon
                        icon="solar:verified-check-bold"
                        width="18"
                        height="18"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 w-full">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                      {activeDirector.name}
                    </h3>
                    <span className="inline-block text-xs font-bold text-primary bg-primary/5 dark:bg-primary/10 border border-primary/10 px-3 py-1 rounded-full">
                      {activeDirector.role}
                    </span>
                    <p className="text-[11px] text-slate-400 font-semibold italic block">
                      {activeDirector.highlight}
                    </p>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider block pt-1">
                      Experience: <span className="text-slate-700 dark:text-slate-200 font-bold">{activeDirector.experience}</span>
                    </div>
                  </div>
                </div>

                {/* Modal Right Column: Full Details (67% width on Desktop) */}
                <div className="md:col-span-8 flex flex-col gap-6 w-full">
                  {/* Detailed Bio Section */}
                  <div>
                    <h4 className="text-xs font-extrabold uppercase text-slate-400 tracking-wider mb-2 flex items-center gap-2 pb-2 border-b border-slate-100 dark:border-darkborder/50">
                      <Icon icon="solar:user-bold" className="text-primary" width="16" height="16" />
                      Detailed Profile
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                      {activeDirector.bio}
                    </p>
                  </div>

                  {/* Credentials Section */}
                  <div className="bg-blue-50/10 dark:bg-blue-950/5 border border-blue-100/10 dark:border-blue-950/20 rounded-2xl p-5 sm:p-6 flex flex-col justify-start">
                    <h4 className="text-xs font-extrabold uppercase text-slate-400 tracking-wider mb-4 flex items-center gap-2 border-b border-blue-100/10 dark:border-blue-950/10 pb-2">
                      <Icon icon="solar:diploma-verified-bold" className="text-primary" width="16" height="16" />
                      Academic &amp; Operational Credentials
                    </h4>
                    <ul className="space-y-3">
                      {activeDirector.credentials.map((cred, i) => (
                        <li key={i} className="flex gap-2.5 items-start text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5"></span>
                          <span>{cred}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Vetted Projects Section */}
                  <div className="bg-emerald-50/10 dark:bg-emerald-950/5 border border-emerald-100/10 dark:border-emerald-950/20 rounded-2xl p-5 sm:p-6 flex flex-col justify-start">
                    <h4 className="text-xs font-extrabold uppercase text-slate-400 tracking-wider mb-4 flex items-center gap-2 border-b border-emerald-100/10 dark:border-emerald-950/10 pb-2">
                      <Icon icon="solar:structure-bold" className="text-emerald-500" width="16" height="16" />
                      Key Projects &amp; Audits Vetted
                    </h4>
                    <ul className="space-y-3">
                      {activeDirector.keyProjects.map((proj, i) => (
                        <li key={i} className="flex gap-2.5 items-start text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5"></span>
                          <span>{proj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
