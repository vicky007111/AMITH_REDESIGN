export interface ServiceFeature {
  title: string;
  description: string;
}

export interface Service {
  icon: string;
  title: string;
  slug: string;
  image: string;
  description: string;
  detail: string;
  features: ServiceFeature[];
}

export const servicesData: Service[] = [
  {
    icon: "solar:checklist-linear",
    title: "Quality Audit & TPQM",
    slug: "quality-audit-tpqm",
    image: "/images/services/whatsapp-quality-audit.jpg",
    description:
      "Third-Party Quality Monitoring and independent construction phase inspections to prevent structural flaws from day one.",
    detail:
      "Independent quality auditing and third-party monitoring that runs alongside the project from initial planning to final handover. We verify material compliance, reinforcement layout details, shuttering parameters, concrete pouring practices, curing durations, and finishing standards at every stage — ensuring civil engineering works match approved blueprints, public regulatory norms, and international safety codes, and helping clients catch costly structural flaws before they become embedded in the structure.",
    features: [
      {
        title: "Pre-Construction Planning Review",
        description: "Design drawings, material specifications, and quality control plans reviewed before work begins on site.",
      },
      {
        title: "Independent Stage Sign-Offs",
        description: "Verifications of formwork stability, reinforcement placements, cover space, and embedments before concrete pours.",
      },
      {
        title: "Process Compliance Audits",
        description: "Monitoring batching, concrete mixing ratios, water-cement ratios, workability, and placement practices on site.",
      },
      {
        title: "Laboratory MoU Support",
        description: "Immediate concrete cube curing and laboratory compressions in associated NABL-accredited labs.",
      },
      {
        title: "Defect Mitigation & Reporting",
        description: "Real-time reports and technical checklists issued to construction site teams to correct execution errors early.",
      },
      {
        title: "Final Handover Quality Sign-Off",
        description: "Consolidated audit trail and compliance certification delivered at project completion.",
      },
    ],
  },
  {
    icon: "solar:buildings-linear",
    title: "Structural Auditing & Stability",
    slug: "structural-auditing-stability",
    image: "/images/services/whatsapp-structural-audit.jpeg",
    description:
      "A staged structural evaluation process — from visual inspection to code-based analysis — certifying the safety of existing buildings and infrastructure.",
    detail:
      "A structured, multi-stage evaluation of existing structures, from visual inspection and non-destructive diagnostics through to detailed investigation and analytical verification. We combine field data, laboratory testing, and sound engineering judgement to certify structural soundness, map deterioration, and, where required, verify load-carrying capacity through code-based structural analysis.",
    features: [
      {
        title: "Visual Inspection",
        description: "On-site visual survey to identify surface distress, deflection, and early warning signs of structural degradation.",
      },
      {
        title: "Structural Diagnostics (NDT)",
        description: "Non-Destructive Testing methods applied to assess internal structural condition without damaging the element.",
      },
      {
        title: "Engineering Judgement & Scientific Assessment",
        description: "NDT findings are analyzed and interpreted through sound engineering judgement to form a scientific structural opinion.",
      },
      {
        title: "Evaluation of In-Situ Concrete Quality",
        description: "Concrete quality and strength assessed in-situ using UPV and rebound hammer — explore the methods below.",
      },
      {
        title: "Detailed Structural Investigation",
        description: "Verification through core sampling, laboratory testing, carbonation depth, chloride analysis, and petrographic analysis wherever required.",
      },
      {
        title: "Structural Analysis (if required)",
        description: "Analytical verification of load-carrying capacity, serviceability, and structural safety using engineering software and code-based assessment.",
      },
    ],
  },
  {
    icon: "solar:magnifer-linear",
    title: "Condition Assessment",
    slug: "condition-assessment",
    image: "/images/services/scaffolding_inspection.png",
    description:
      "Comprehensive condition surveys of existing structures using visual inspection and advanced diagnostics to detect deterioration before it compromises safety.",
    detail:
      "Assess the physical and functional condition of existing buildings and infrastructure through systematic visual surveys, non-destructive testing, and advanced diagnostic techniques. We investigate distress patterns and deterioration mechanisms, and uncover hidden defects, to help clients plan timely repairs, prioritize maintenance, and safeguard structural longevity.",
    features: [
      {
        title: "Condition Assessment Survey",
        description: "Systematic evaluation of cracks, spalling, corrosion, dampness, leakages, deflection, settlement, and other visible signs of deterioration.",
      },
      {
        title: "Non-Destructive Testing (NDT)",
        description: "In-situ evaluation using UPV, rebound hammer, half-cell potential, cover meter, and other NDT methods.",
      },
      {
        title: "Investigation of Deterioration",
        description: "Identification of corrosion, carbonation, chloride ingress, sulphate attack, water leakage, and concrete distress mechanisms.",
      },
      {
        title: "Advanced Diagnostics",
        description: "Evaluation using thermal imaging, drone surveys, moisture detection, and digital documentation to identify hidden defects.",
      },
    ],
  },
  {
    icon: "solar:shield-linear",
    title: "Restoration & Rehabilitation",
    slug: "restoration-rehabilitation",
    image: "/images/services/cfrp-rehabilitation.jpg",
    description:
      "Retrofitting specifications including carbon fiber wrapping, micro-concrete jacketing, and pressure epoxy grouting.",
    detail:
      "A need-based repair process that moves from root-cause diagnosis to scheme design and hands-on execution. We specify solutions like micro-concrete column jacketing, carbon fiber reinforced polymer (CFRP) structural wraps, section enlargement, and chemical concrete injections to restore compromised structural safety factors and extend service life.",
    features: [
      {
        title: "Damage Diagnosis & Root-Cause Analysis",
        description: "Identifying the deterioration mechanism — corrosion, cracking, or spalling — before selecting a repair strategy.",
      },
      {
        title: "Repair Scheme Design",
        description: "Selecting the most suitable technique based on load conditions, exposure, and extent of damage.",
      },
      {
        title: "CFRP Column & Beam Wrapping",
        description: "Applying high-strength carbon wraps to columns/beams to boost shear and flexural capacities.",
      },
      {
        title: "Micro-Concrete Jacketing",
        description: "Applying specialized non-shrink micro-concrete layers to reinforce cracked nodes.",
      },
      {
        title: "Pressure Epoxy Grouting",
        description: "Injecting low-viscosity resins into cracks to seal concrete and restore load paths.",
      },
      {
        title: "Corrosion Protection & Verification",
        description: "Electrochemical rust inhibitor coatings applied and repairs verified before handover.",
      },
    ],
  },
  {
    icon: "solar:health-linear",
    title: "NDT Diagnostics",
    slug: "ndt-diagnostics",
    image: "/images/services/upv-testing.jpg",
    description:
      "Advanced non-destructive concrete tests including UPV, rebound hammer, carbonation depth, and core compressions.",
    detail:
      "A layered diagnostic sequence that verifies concrete homogeneity, strength, and corrosion risks without damage. In association with Civilone Research Center Pvt Ltd (NABL Accredited), we move from broad ultrasonic screening through surface hardness readings, chemical profiling, and targeted core extraction to a single consolidated report.",
    features: [
      {
        title: "Preliminary Screening (UPV)",
        description: "Ultrasonic Pulse Velocity scanning sends ultrasound signals through elements to trace internal voids, honeycombing, and deep cracks.",
      },
      {
        title: "Surface Hardness Testing",
        description: "Rebound hammer readings taken across the element grid to estimate initial concrete compressive strength.",
      },
      {
        title: "Carbonation & Acid Profiling",
        description: "Measures alkaline loss depth in structural elements to detect rebar corrosion vulnerabilities.",
      },
      {
        title: "Targeted Core Extraction",
        description: "Extracting concrete cylinder cores from critical zones to execute direct laboratory compression crush checks.",
      },
      {
        title: "Data Correlation & Reporting",
        description: "Results from all methods cross-verified and consolidated into a single diagnostic report.",
      },
    ],
  },
  {
    icon: "solar:case-linear",
    title: "Testing of Building Materials",
    slug: "testing-building-materials",
    image: "/images/services/concrete-ctm-testing.jpg",
    description:
      "Certified material diagnostics covering rebar tensile bounds, concrete cubes, soil pH levels, and water purity.",
    detail:
      "A structured laboratory workflow that verifies material strength against target structural design tolerances. From site sample collection through to certified reporting, our testing capabilities cover concrete crushing analysis, tensile load testing for structural steel rebars, aggregate sizing compliance, and chemical analysis of site mixing water or soil backfills to identify corrosion threats.",
    features: [
      {
        title: "Sample Collection & Identification",
        description: "Representative rebar, concrete, soil, and water samples collected from site as per code requirements.",
      },
      {
        title: "Steel Rebar Tensile Tests",
        description: "Yield strength, ultimate elongation, bend, and rebend validations of structural steel rods.",
      },
      {
        title: "Concrete Compressional Tests",
        description: "Direct mechanical load crushing of standard concrete cubes to evaluate compressive grades.",
      },
      {
        title: "Soil & Water Chemistry Assessments",
        description: "Testing pH, sulfate contents, and chloride levels in foundation soils and site water to flag chemical attack risks.",
      },
      {
        title: "Aggregate Size Verifications",
        description: "Sieve mapping of coarse/fine aggregate materials to verify concrete mix design compliance.",
      },
      {
        title: "Certified Test Report Issuance",
        description: "Consolidated laboratory report issued with pass/fail grading against IS code tolerances.",
      },
    ],
  },
];
