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
    bio: "An eminent academician, researcher, and structural engineering consultant with close to four decades of experience. Formerly held senior positions including Head of the Department of Civil Engineering at Anna University, Chennai.",
    credentials: [
      "Former Vice Chancellor of Anna University of Technology, Tiruchirappalli",
      "Former Head of the Department of Civil Engineering, Anna University, Chennai",
      "Guided 12 Ph.D. scholars, 91 M.E. theses, and 3 M.S. research projects",
      "Specialist in structural dynamics, concrete diagnostics, and high-volume sewage treatment facility designs"
    ],
    keyProjects: [
      "Designed and vetted over 10 Sewage Treatment Plants (STPs) ranging from 8.5 MLD to 120 MLD capacities",
      "Supervised and vetted major runway infrastructure for the Airport Authority of India",
      "Led structural investigations of Tsunami-affected tenements for the Tamil Nadu Slum Clearance Board",
      "Vetted industrial structural installations for Bharat Petroleum Corporation Limited (BPCL) and the Integral Coach Factory (ICF)",
      "Consulted on major thermal power block elements for the North Madras Thermal Power Plant"
    ]
  },
  {
    name: "Col. Dr. Nallathambi P",
    role: "Director & Military/Commercial Structural Expert",
    experience: "30+ Years of Defense & Corporate Design Vetting",
    highlight: "Retired Army Officer, Military Engineering Services (MES)",
    avatarInitials: "PN",
    bio: "A retired Army Officer with over 20 years of active service in the Military Engineering Services (MES) and 10+ years of active commercial structural practice. Specializes in heavy steel PEB designs and advanced concrete bridge systems.",
    credentials: [
      "Retired Army Officer from Military Engineering Services (MES)",
      "Vetted and approved over 500 complex structural designs",
      "Specialist in Pre-Engineered Buildings (PEB) steel structures, Pre-cast Concrete, and Pre-stressed Concrete designs",
      "Structural auditor of military and defense assets"
    ],
    keyProjects: [
      "Led structural vetting of the Army School Shillong building complex",
      "Designed and vetted the Vidya Mandir School building complex (Aranthangi)",
      "Structural designs for the Madras Diabetes Research Center",
      "Vetted the Wellington RCC Bridge at Ooty",
      "Designed the 1.5 Million Liter Capacity Sump for the Airport Authority of India",
      "Conducted structural safety audits at MES Tambaram and MES Port Blair installations"
    ]
  },
  {
    name: "Er. Kalaimony R",
    role: "Director & Senior Quality Monitor",
    experience: "38+ Years of Public Works & Developer Oversight",
    highlight: "Senior Consultant, CUBE - IIT Madras",
    avatarInitials: "RK",
    bio: "A senior civil engineer with 23 years of public service in TANGEDCO and 15 years as a residential developer (completed 40+ housing projects). Actively serves as a Senior Consultant for the Centre for Urbanization, Buildings & Environment (CUBE) - IIT Madras.",
    credentials: [
      "Senior Consultant for CUBE - IIT Madras (Centre for Urbanization, Buildings & Environment)",
      "Retired Senior Engineer from TANGEDCO (23 years of public service)",
      "Completed 40+ housing projects as a developer (15 years)",
      "Specialist in Third-Party Quality Monitoring (TPQM) and massive condition assessment campaigns"
    ],
    keyProjects: [
      "Oversaw the Amaravati Secretariat and Government Housing project for the Andhra Pradesh Capital Region Development Authority (APCRDA)",
      "Conducted TPQM and comprehensive condition assessment of 9-storey residential towers at Korattur for the Tamil Nadu Housing Board (TNHB)",
      "Third-Party Quality Monitoring of residential blocks at Vallam, Thanjavur for the Tamil Nadu Urban Habitat Development Board",
      "Supervised Kendriya Vidyalaya school building constructions across Kerala, Karnataka, and Madhya Pradesh"
    ]
  }
];

export default function Leadership() {
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveModalIndex(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (activeModalIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [activeModalIndex]);

  return (
    <section
      id="leadership"
      className="bg-slate-50 dark:bg-darklight transition-colors duration-300"
    >
      <div className="container mx-auto max-w-7xl 2xl:max-w-[1400px] 3xl:max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <p className="text-primary font-bold text-sm uppercase tracking-wider mb-3">
            Elite Leadership Team
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
            Meet Our Board of Directors
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto mt-3">
            The core strength of AMITH lies in the academic, operational, and administrative credentials of our highly qualified board.
          </p>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-12 gap-6 sm:gap-8">
          {directors.map((director, index) => (
            <div
              key={director.name}
              className="col-span-12 md:col-span-6 lg:col-span-4 flex"
            >
              <div className="w-full bg-white dark:bg-darkmode border border-slate-200 dark:border-darkborder rounded-3xl p-8 hover:shadow-card-shadow transition-all duration-300 flex flex-col justify-between group">
                <div className="flex flex-col gap-6">
                  {/* Avatar Circle */}
                  <div className="w-20 h-20 rounded-full bg-cream dark:bg-primary/10 flex items-center justify-center text-primary font-bold text-2xl relative border-2 border-primary/20 shrink-0">
                    {director.avatarInitials}
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white">
                      <Icon
                        icon="solar:verified-check-bold"
                        width="14"
                        height="14"
                        className="text-white"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">
                      {director.name}
                    </h3>
                    <span className="text-xs font-bold text-primary tracking-wide uppercase">
                      {director.role}
                    </span>
                    <span className="text-xs text-slate-400 font-semibold italic">
                      {director.highlight}
                    </span>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed mt-2 line-clamp-3">
                      {director.bio}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 dark:border-darkborder">
                  <button
                    onClick={() => setActiveModalIndex(index)}
                    className="w-full py-2.5 rounded-xl border border-slate-200 dark:border-darkborder text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-primary hover:text-white dark:hover:bg-primary hover:border-primary transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    View Full Credentials
                    <Icon
                      icon="solar:alt-arrow-right-linear"
                      width="16"
                      height="16"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Overlay */}
        {activeModalIndex !== null && (
          <div
            className="fixed inset-0 bg-slate-900/60 dark:bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setActiveModalIndex(null)}
          >
            <div
              className="bg-white dark:bg-darklight border border-slate-200 dark:border-darkborder rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl relative animate-scaleIn my-8 max-h-[85vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-6 md:p-8 border-b border-slate-100 dark:border-darkborder flex justify-between items-start sticky top-0 bg-white dark:bg-darklight z-10">
                <div className="flex flex-col gap-1 pr-6">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                    {directors[activeModalIndex].name}
                  </h3>
                  <span className="text-xs md:text-sm font-bold text-primary tracking-wide uppercase">
                    {directors[activeModalIndex].role}
                  </span>
                  <span className="text-xs text-slate-400 font-semibold italic">
                    {directors[activeModalIndex].highlight}
                  </span>
                </div>
                <button
                  onClick={() => setActiveModalIndex(null)}
                  className="p-1.5 rounded-lg border border-slate-200 dark:border-darkborder text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white cursor-pointer"
                  aria-label="Close credentials modal"
                >
                  <Icon
                    icon="solar:close-square-linear"
                    width="24"
                    height="24"
                  />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 md:p-8 overflow-y-auto space-y-6 flex-1">
                {/* Board Bio */}
                <div>
                  <h4 className="text-sm font-extrabold uppercase text-slate-400 tracking-wider mb-2">
                    Professional Summary
                  </h4>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                    {directors[activeModalIndex].bio}
                  </p>
                </div>

                {/* Credentials list */}
                <div>
                  <h4 className="text-sm font-extrabold uppercase text-slate-400 tracking-wider mb-3">
                    Academic & Operational Credentials
                  </h4>
                  <ul className="space-y-2">
                    {directors[activeModalIndex].credentials.map((cred, i) => (
                      <li key={i} className="flex gap-2 items-start text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2"></span>
                        {cred}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Industrial Projects list */}
                <div>
                  <h4 className="text-sm font-extrabold uppercase text-slate-400 tracking-wider mb-3">
                    Key Infrastructure Projects & Audits Vetted
                  </h4>
                  <ul className="space-y-2">
                    {directors[activeModalIndex].keyProjects.map((proj, i) => (
                      <li key={i} className="flex gap-2 items-start text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2"></span>
                        {proj}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
