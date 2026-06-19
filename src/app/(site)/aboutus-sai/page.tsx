"use client";
/**
 * src/app/(site)/aboutus-sai/page.tsx
 *
 * About Us – Explicit Structural Rearrangement with Compact Premium Profiles
 * ──────────────────────────────────────────────────────────
 * 1. Our Vision Section
 * 2. Our Mission Section
 * 3. Board of Directors Overview
 * 4. Itemized Director Profiles (Compact, Modern Card Aesthetics)
 */

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import PageHero from "@/app/components/shared/PageHero";

// ─────────────────────────────────────────────────────────────────────────────
// 1 · Data Type Contract
// ─────────────────────────────────────────────────────────────────────────────

interface DirectorProfile {
  id: string;
  name: string;
  designation: string;
  experienceBadge: string;
  highlightKicker: string;
  avatarInitials: string;
  gradientFrom: string;
  gradientTo: string;
  biographyParagraphs: string[];
  bulletHeading: string;
  projectBullets: string[];
}

// ─────────────────────────────────────────────────────────────────────────────
// 2 · Production Reference Data (Literal Corporate Copy)
// ─────────────────────────────────────────────────────────────────────────────

const boardOfDirectors: DirectorProfile[] = [
  {
    id: "prof-dr-devadas-manoharan",
    name: "Professor Dr. Devadas Manoharan. M",
    designation: "Director & Eminent Structural Authority",
    experienceBadge: "37+ Years Academic & Administrator Service",
    highlightKicker: "Former Vice Chancellor of Anna University of Technology, Tiruchirappalli",
    avatarInitials: "DM",
    gradientFrom: "from-blue-900",
    gradientTo: "to-[#001C68]",
    biographyParagraphs: [
      "His academic career spans over 37 years & was an eminent Academician and administrator. He has successfully guided 12 PhDs, 91 ME thesis & 3 MS research projects. He has served as Vice Chancellor of Anna University of Technology, Tiruchirappalli. He has held various positions as head of the Department of Civil Engineering, professor & estate officer, Professor & head Structural Engineering Division, and director Building Technology Centre, at Anna University. He has also served as a Syndicate member at Anna University, Chennai.",
      "He has undertaken various consultancy work on Structural design, vetting, and condition assessment of residential, Commercial, Industrial & Sewage treatment plants from the beginning of his career as a lecturer. He has designed & vetted more than 10 Sewage treatment plants of capacity varying from 8.5 to 120 MLD."
    ],
    bulletHeading: "Consultancy Undertaken in Government & Public Sector Undertakings:",
    projectBullets: [
      "North Madras Thermal Power plant- Concrete mix design & non-destructive testing of Concrete elements.",
      "Air Port Authority of India – Design of Pavement with quality control concrete for runways.",
      "Tamil Nadu Slum Clearance Board- Design of Tenements for Tsunami-affected people & design of other tenements.",
      "Bharat Petroleum Corporation Ltd-Design of pipeline & risk analysis.",
      "Integral Coach Factory- Design of residential quarters."
    ]
  },
  {
    id: "col-dr-nallathambi",
    name: "Col.Dr. Nallathambi. P",
    designation: "Director & Military Engineering Veteran",
    experienceBadge: "30+ Years Professional & Academic Exposure",
    highlightKicker: "Former Army Officer in the Military Engineering Service (MES) for Two Decades",
    avatarInitials: "PN",
    gradientFrom: "from-slate-900",
    gradientTo: "to-slate-800",
    biographyParagraphs: [
      "Former Army officer in the Military Engineering Service for two decades and am now a structural consultant with more than ten years of professional and academic exposure in the field of Civil and structural Engineering.",
      "He has extensive expertise in designing any kind of structure with Creative and complex Architectural Plans, Earthquake Resistant Design, PEB Steel Structures, and Pre-cast and Pre-prestressed Concrete design and has undertaken more than 500 different design jobs with Government Departments, agencies, corporations, and Prominent Citizens."
    ],
    bulletHeading: "Projects Handled in Government & Government Undertaking Organizations:",
    projectBullets: [
      "Five storied army school buildings at Shillong under Military Engineering Service, Shillong Zone.",
      "Vidya mandir School building complex at Aranthangi comprising 1,25,000sft.",
      "Madras Diabetes Research Center -Food processing unit of 25,000 sqft.",
      "Marg Ltd- 12-storied residential building at Thirupathi.",
      "RCC bridge at Wellington, Ooty under Chief Engineer, MES, Chennai Zone.",
      "Airport Authority of India- 15 lakh liters Underground sump at Chennai Perumbakkam.",
      "MES- Tambaram Air Force station- Design of 1500KLD capacity Sewage Treatment Plant.",
      "MES- Port Blair -Accommodation for infantry battalion at Port Blair."
    ]
  },
  {
    id: "er-kalaimony",
    name: "Er. Kalaimony. R",
    designation: "Technical Director & Infrastructure Quality Advisor",
    experienceBadge: "38+ Years Construction Industry Track Record",
    highlightKicker: "Senior Consultant for CUBE (Centre for Urbanization, Buildings & Environment), IIT Madras",
    avatarInitials: "RK",
    gradientFrom: "from-neutral-900",
    gradientTo: "to-neutral-800",
    biographyParagraphs: [
      "A former officer in TANGEDCO with twenty-three years of professional service in handling different types of Hydro, Thermal Power, and power evacuation Projects. He is a self-motivated entrepreneur and was in the construction industry for 15 years and completed more than 40 housing projects in and around Chennai.",
      "He is Proficient in handling the services of Quality Assurance and quality third-party quality Monitoring works related to Infrastructure and housing projects for government, Public sector, and government undertakings. He is a Senior Consultant for CUBE (Centre for Urbanization, Buildings & Environment) an outfit of IIT Madras, handling third-party Quality Assessment/Quality Control, Quality Audit, and quality monitoring services for State Government and public sector undertaking projects for buildings & infrastructure works. He is also proficient in handling condition assessment of old & new concrete structural elements of residential, commercial, and industrial buildings & provides end solutions for restoration & rehabilitation."
    ],
    bulletHeading: "Services Handled for QA/QC, Quality Audit, TPQM & Condition Assessments:",
    projectBullets: [
      "Andhra Pradesh Capital Region Development Authority at Vijayawada- Third-party Quality Assurance & Quality control for the new capital city developmental works at Amaravati comprising High Cort building, residential housing units of about 4000 numbers for MLA, Secretaries, officers, NGO of secretariat staff and Integrated Secretariat complex with 3 blocks of 45 storied composite structure. Assessments are made on a bi-weekly basis with a team of in-house quality Engineers& instant reporting to the authorities for compliance.",
      "Tamil Nadu Housing Board- Third-party Quality monitoring of major Housing projects at different construction stages in and around Chennai.",
      "Tamil Nadu Urban Habitat Development Board- Quality auditing of completed & ongoing residential projects at Chennai. Quality monitoring of 969 housing units in 13 blocks & 900 units in 19 blocks at different construction stages under the PMAY scheme at Vallam Thanjavore and Kalanivazal, Karaikudi, Tamil Nadu funded by Asian Development Bank.",
      "Kendra Vidyalaya school projects – Quality assurance & quality control of total school projects developed by NPCCL at Konni Kerala & Kadrimidri Karnataka&Multai, Madhya Pradesh. Quality monitoring is made at four different stages till the handing over of the project& submission of the assessment report at every stage of inspection.",
      "Tamil Nadu Housing Board- Condition assessment of Stilt plus nine floors at Korattur, Chennai, and submission of comprehensive assessment report."
    ]
  }
];

const CASCADE_DELAY = 0.12;

// ─────────────────────────────────────────────────────────────────────────────
// 3 · Visual Rearranged Layout Subcomponents
// ─────────────────────────────────────────────────────────────────────────────

/** 1. OUR VISION SECTION */
function VisionSection() {
  return (
    <section id="vision" className="bg-white dark:bg-neutral-950 pt-16 pb-6 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative bg-slate-50 dark:bg-neutral-900/40 border border-slate-200 dark:border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-xs overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-[#001C68]/10 to-transparent rounded-bl-2xl pointer-events-none" />
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#001C68]/10 text-[#001C68] dark:bg-blue-950 dark:text-blue-400 text-[10px] font-black uppercase tracking-widest mb-3">
            1. Our Vision
          </span>
          <p className="text-slate-700 dark:text-neutral-300 text-sm sm:text-base leading-relaxed italic font-medium border-l-4 border-[#001C68] pl-4 py-0.5">
            &ldquo;To provide need-based technology, Engineering &amp; consultancy services for the construction industry with durable solutions for new construction &amp; one-time solutions for repair &amp; rehabilitation/retrofitting the concrete elements of existing buildings &amp; infrastructure.&rdquo;
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/** 2. OUR MISSION SECTION */
function MissionSection() {
  return (
    <section id="mission" className="bg-white dark:bg-neutral-950 py-4 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative bg-slate-50 dark:bg-neutral-900/40 border border-slate-200 dark:border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-xs overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-[#001C68]/10 to-transparent rounded-bl-2xl pointer-events-none" />
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#001C68]/10 text-[#001C68] dark:bg-blue-950 dark:text-blue-400 text-[10px] font-black uppercase tracking-widest mb-4">
            2. Our Mission
          </span>
          
          <div className="flex flex-col gap-4">
            {[
              "Provide affordable solutions to the needs of stakeholders in concrete technology by integrating of innovative technology for the construction industry.",
              "Structural auditing of existing buildings, bridges & other RCC infrastructure works & provide appropriate end solutions to enhance the functionality, durability & service life of the structure by appropriate retrofitting techniques.",
              "Provide the construction industry with appropriate & durable construction methodology for new construction.",
              "Dissemination of knowledge by conducting a training program for Quality auditing/assessment, execution of repair, rehabilitation & retrofitting of concrete structural elements using appropriate methodology."
            ].map((pillar, pIdx) => (
              <div key={pIdx} className="flex items-start gap-3">
                <div className="w-6 h-6 shrink-0 rounded-md border border-slate-200 bg-white dark:border-neutral-700 dark:bg-neutral-800 flex items-center justify-center font-mono text-[10px] font-black text-[#001C68] dark:text-blue-400 shadow-xs">
                  {pIdx + 1}
                </div>
                <p className="text-slate-600 dark:text-neutral-300 text-xs sm:text-sm font-medium leading-relaxed pt-0.5">
                  {pillar}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Global Summary & Lab Alliance Note */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 bg-slate-50 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 rounded-xl p-5 shadow-xs text-xs sm:text-sm text-slate-600 dark:text-neutral-300 font-medium leading-relaxed flex flex-col gap-3"
        >
          <p>
            The functional changes will impair the quality of structural components throughout its service life. By assessing the distress of the structure, we provide remedial solutions for repair &amp; rehabilitation to improve its durability &amp; upgrade to commensurate with the latest code provision. We at AMITH provide cost-effective end solutions in one platform for all construction needs.
          </p>
          <p className="border-t border-slate-200 dark:border-neutral-800 pt-3 text-xs text-slate-500 dark:text-slate-400">
            We have entered an MOU with <strong className="font-bold text-slate-700 dark:text-neutral-200">&ldquo;Tech Civil Material Testing Laboratory Pvt Ltd&rdquo;, Chennai</strong> to carry out necessary testing of building materials and partial destructive/non-destructive testing of structural concrete elements to assess the distress &amp; its grade/quality. Non-Destructive and Partial Destructive Test of Concrete Chennai Non-destructive tests measure the properties of concrete without causing any damage to the structure. Partial destruct tests involve the removal of a small section of the concrete to measure the properties. Both types of tests are essential for assessing the strength and performance of concrete.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/** 3. BOARD OF DIRECTORS OVERVIEW */
function BoardOverviewSection() {
  return (
    <section id="board-overview" className="bg-white dark:bg-neutral-950 py-4 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-50 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-xs relative overflow-hidden text-center md:text-left"
        >
          <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#001C68]/10 text-[#001C68] dark:bg-blue-950 dark:text-blue-400 text-[10px] font-black uppercase tracking-widest mb-3">
            3. Board of Directors
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight mb-2">
            Established Startup Infrastructure
          </h3>
          <p className="text-slate-600 dark:text-neutral-300 text-xs sm:text-sm font-medium leading-relaxed">
            AMITH Civil &amp; Allied Engineering (ACAES) Pvt Ltd, is a start-up company established by a team of three dedicated Professionals with more than three decades of service in the field of Academic, Design, and construction Industries. Brief professional details about the directors of the company are presented systematically down below.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/** 4. COMPACT & CUTE DIRECTOR PROFILE BLOCK */
function DirectorRowBlock({ member, index }: { member: DirectorProfile; index: number }) {
  return (
    <motion.article
      id={member.id}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * CASCADE_DELAY, duration: 0.55, ease: "easeOut" }}
      className="max-w-3xl mx-auto w-full px-4 sm:px-6 mb-6"
    >
      <div className="flex flex-col md:flex-row overflow-hidden rounded-2xl border border-slate-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-xs hover:shadow-sm transition-all duration-200">
        
        {/* Left Side: 1/4 Miniature/Cute Profile Column */}
        <div className="w-full md:w-1/4 shrink-0">
          <div className={`relative flex flex-col items-center justify-center h-full min-h-[180px] md:min-h-0 bg-gradient-to-br ${member.gradientFrom} ${member.gradientTo} overflow-hidden px-4 py-6 text-center`}>
            
            {/* Geometric layout dot layer */}
            <div 
              aria-hidden="true" 
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                backgroundSize: "16px 20px"
              }}
            />
            
            {/* Cute Rounded Avatar Ring */}
            <div className="w-14 h-14 rounded-full border-2 border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center shadow-md mb-3 ring-4 ring-white/5">
              <span className="text-xl font-black text-white tracking-tight leading-none">
                {member.avatarInitials}
              </span>
            </div>

            <div className="flex flex-col gap-0.5 max-w-[10rem]">
              <h4 className="text-white font-bold text-xs leading-tight">{member.name.replace("Professor ", "")}</h4>
              <p className="text-white/40 text-[8px] uppercase tracking-widest font-black mt-1">{member.avatarInitials === "DM" ? "37+ Years" : member.avatarInitials === "PN" ? "30+ Years" : "38+ Years"}</p>
            </div>
          </div>
        </div>

        {/* Right Side: 3/4 Clean Text Module */}
        <div className="w-full md:w-3/4 flex flex-col gap-0 divide-y divide-slate-100 dark:divide-neutral-800/60">
          
          {/* Header Data Badge */}
          <div className="p-5 sm:p-6 flex flex-col gap-1.5">
            <span className="text-[9px] font-black uppercase tracking-wider text-[#001C68] dark:text-blue-400">
              4.{index + 1} Profile Configuration
            </span>
            <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight">
              {member.name}
            </h3>
            <p className="text-xs font-semibold italic text-slate-400 dark:text-slate-500 leading-normal">
              {member.highlightKicker}
            </p>
          </div>

          {/* Narrative Paragraph */}
          <div className="p-5 sm:p-6 flex flex-col gap-3">
            {member.biographyParagraphs.map((paragraph, pIdx) => (
              <p key={pIdx} className="text-slate-600 dark:text-neutral-300 text-xs sm:text-sm font-medium leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Itemized Project Log */}
          <div className="p-5 sm:p-6 bg-slate-50/40 dark:bg-neutral-900/10">
            <h4 className="text-[9px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2.5">
              {member.bulletHeading}
            </h4>
            <ul className="grid grid-cols-1 gap-2">
              {member.projectBullets.map((bullet, bIdx) => (
                <li key={bIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-neutral-300 font-medium leading-relaxed">
                  <span aria-hidden="true" className="mt-1.5 w-1 h-1 rounded-full bg-[#001C68] dark:bg-blue-400 shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </motion.article>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 4 · Master Export Router
// ─────────────────────────────────────────────────────────────────────────────

export default function AboutUsSaiPage() {
  return (
    <main className="relative bg-white dark:bg-neutral-950 min-h-screen pb-16 transition-colors duration-300">
      
      {/* Decorative technical line mesh background */}
      <div 
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.008] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#001C68 1px, transparent 1px), linear-gradient(90deg, #001C68 1px, transparent 1px)`,
          backgroundSize: "100px 100px"
        }}
      />

      <PageHero
        label="AMITH Corporate Structure"
        title="About Us"
        subtitle="Review the explicit vision, mission arrays, corporate startups framework, and core background profiles of our company directors."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About Us" }
        ]}
      />

      {/* 1. OUR VISION SECTION */}
      <VisionSection />

      {/* 2. OUR MISSION SECTION */}
      <MissionSection />

      {/* 3. BOARD OF DIRECTORS OVERVIEW SECTION */}
      <BoardOverviewSection />

      {/* 4. ITEMIZED COMPACT DIRECTOR PROFILES */}
      <div className="w-full flex flex-col mt-2">
        {boardOfDirectors.map((director, index) => (
          <DirectorRowBlock key={director.id} member={director} index={index} />
        ))}
      </div>

    </main>
  );
}