import { NextResponse } from 'next/server'

const ServicesData = [
    {
        icon: "solar:checklist-linear",
        title: "Quality Audit & TPQM",
        slug: "quality-audit-tpqm",
        image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80",
        description:
            "Third-Party Quality Monitoring and independent construction phase inspections to prevent structural flaws from day one.",
        detail:
            "Provide independent quality auditing and third-party monitoring of concrete constructions. We verify material compliance, reinforcement layout details, shuttering parameters, concrete pouring practices, curing durations, and finishing standards. This ensures civil engineering works match approved blueprints, public regulatory norms, and international safety codes, helping clients prevent costly structural failures before they become embedded in the structure.",
        features: [
            {
                title: "Independent Stage Sign-Offs",
                description: "Verifications of formwork stability, reinforcement placements, cover space, and embedments before concrete pours.",
            },
            {
                title: "Process Compliance Audits",
                description: "Monitoring batching, concrete mixing ratios, water-cement ratios, workability, and placement practices.",
            },
            {
                title: "Laboratory MoU Support",
                description: "Immediate concrete cube curing and laboratory compressions in associated NABL-accredited labs.",
            },
            {
                title: "Defect Mitigation Protocols",
                description: "Generating real-time reports and technical checklists for construction site teams to avoid execution errors.",
            }
        ],
    },
    {
        icon: "solar:buildings-linear",
        title: "Structural Auditing & Stability",
        slug: "structural-auditing-stability",
        image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80",
        description:
            "Analytical condition assessment and load certifications of existing buildings, bridges, and distressed concrete infrastructure.",
        detail:
            "Comprehensive visual, physical, and engineering analysis of distressed RCC nodes. We examine structures subject to environmental aging, design changes, load additions, or seismic exposure. Our reports certify structural soundness, map crack propagation routes, and draft specifications for building retrofitting designs.",
        features: [
            {
                title: "Visual Distress Mapping",
                description: "Recording concrete spalling, carbonation progress, rust stains, deflection anomalies, and crack scales.",
            },
            {
                title: "Stability Certifications",
                description: "Issuing formal structural stability certificates conforming to local corporation bylaws.",
            },
            {
                title: "Analytical Safety Checks",
                description: "Re-evaluating columns, beams, and foundation nodes under increased live/dead structural loads.",
            },
            {
                title: "Seismic Retrofitting Layouts",
                description: "Formulating physical specs for shear walls, carbon jacketing, and framing enhancements."
            }
        ],
    },
    {
        icon: "solar:health-linear",
        title: "NDT Diagnostics",
        slug: "ndt-diagnostics",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
        description:
            "Advanced non-destructive concrete tests including UPV, rebound hammer, carbonation depth, and core compressions.",
        detail:
            "Verify concrete homogeneity, strength, and corrosion risks without damage. In association with Tech-Civil testing lab (NABL Accredited), we carry out advanced structural diagnostics using specialized sensors, ultrasound velocity checks, carbonation measurements, half-cell potential mapping, and target core extractions.",
        features: [
            {
                title: "Ultrasonic Pulse Velocity (UPV)",
                description: "Sends ultrasound signals through elements to trace internal voids, honeycombing, and deep cracks.",
            },
            {
                title: "Rebound Hammer Hardness",
                description: "Calculates superficial surface hardness indicators to estimate initial concrete compressive strengths.",
            },
            {
                title: "Carbonation & Acid Profiling",
                description: "Measures alkaline loss depth in structural elements to detect rebar corrosion vulnerabilities.",
            },
            {
                title: "In-situ Concrete Core Drills",
                description: "Extracting concrete cylinder cores to execute direct laboratory compression crush checks."
            }
        ],
    },
    {
        icon: "solar:case-linear",
        title: "Testing of Building Materials",
        slug: "testing-building-materials",
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
        description:
            "Certified material diagnostics covering rebar tensile bounds, concrete cubes, soil pH levels, and water purity.",
        detail:
            "Verify material strength against target structural design tolerances. Our testing capabilities include concrete crushing analysis, tensile load testing for structural steel rebars, aggregate sizing compliance, and chemical analysis of site mixing water or soil backfills to identify corrosion threats.",
        features: [
            {
                title: "Steel Rebar Tensile Tests",
                description: "Yield strength, ultimate elongation, bend, and rebend validations of structural steel rods.",
            },
            {
                title: "Soil Chemistry Assessments",
                description: "Testing pH, sulfate contents, and chloride levels in foundation soils to prevent chemical attacks.",
            },
            {
                title: "Concrete Compressional Tests",
                description: "Direct mechanical load crushing of standard concrete cubes to evaluate compressive grades.",
            },
            {
                title: "Aggregate Size Verifications",
                description: "Sieve mapping of course/fine aggregate materials to verify concrete mix design compliance."
            }
        ],
    },
    {
        icon: "solar:shield-linear",
        title: "Restoration & Rehabilitation",
        slug: "restoration-rehabilitation",
        image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80",
        description:
            "Retrofitting specifications including carbon fiber wrapping, micro-concrete jacketing, and pressure epoxy grouting.",
        detail:
            "Formulate detailed architectural repairs to restore compromised structural safety factors. We specify need-based solutions like micro-concrete columns jacketing, carbon fiber reinforced polymer (CFRP) structural wraps, section enlargement, and chemical concrete injections to restore decayed components.",
        features: [
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
                title: "Rebar Rust Inhibitors",
                description: "Applying electrochemical coating schemes to stop steel decay in marine exposure zones."
            }
        ],
    },
    {
        icon: "solar:chart-square-linear",
        title: "Concrete Mix Design (IS 10262)",
        slug: "concrete-mix-design",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
        description:
            "Scientific proportioning of concrete ingredients matching BIS standards for normal and accelerated cures.",
        detail:
            "Produce optimized, durable mix proportions conforming to Bureau of Indian Standards (IS 10262 and IS 456). We analyze local aggregate parameters, density grades, and target cement hydration speeds to formulate highly efficient concrete mixes for high-strength or specialized applications.",
        features: [
            {
                title: "Aggregate Characteristics Mapping",
                description: "Determining specific gravity, absorption metrics, and particle moisture states of concrete ingredients.",
            },
            {
                title: "Accelerated Curing Methods",
                description: "Predicting concrete compressions early using warm-water chemical cure procedures.",
            },
            {
                title: "Optimal Admixture Profiling",
                description: "Assessing superplasticizer ratios to maintain structural workability without reducing strength.",
            },
            {
                title: "High-Strength Mix Designs",
                description: "Designing concrete mixes up to M60+ grades using micro-silica and local cement ratios."
            }
        ],
    }
];

export const GET = () => {
    return NextResponse.json({
        ServicesData,
    })
}