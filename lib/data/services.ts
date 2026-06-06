export interface Service {
  id: string;
  title: string;
  shortDescription: string; // ≤ 120 chars for card
  fullDescription: string;
  icon: string; // Lucide icon name
  anchorId: string;
  features?: string[];
}

export const services: Service[] = [
  {
    id: 'quality-audit',
    title: 'Quality Audit / Assessment & TPQM',
    shortDescription: 'Proactive quality assurance, monitoring & audit of completed works via NDT/PDT testing methodologies.',
    fullDescription:
      'Our comprehensive quality audit services provide proactive quality assurance for construction projects. We conduct thorough quality monitoring and auditing of completed works using advanced Non-Destructive Testing (NDT) and Partial Destructive Testing (PDT) methodologies. This ensures that all construction work meets specified standards and compliance requirements.',
    icon: 'ClipboardCheck',
    anchorId: 'quality-audit',
    features: [
      'Third-party quality monitoring',
      'NDT/PDT-based assessment',
      'Compliance verification',
      'Quality documentation',
    ],
  },
  {
    id: 'structural-auditing',
    title: 'Structural Auditing',
    shortDescription: 'Visual inspection combined with NDT/PDT of beams, slabs, columns; end-to-end retrofitting solutions.',
    fullDescription:
      'We provide comprehensive structural auditing services that combine detailed visual inspections with advanced NDT and PDT techniques. Our team evaluates beams, slabs, columns, and other structural elements to assess their integrity and safety. We deliver end-to-end retrofitting solutions when structural deficiencies are identified.',
    icon: 'Building2',
    anchorId: 'structural-auditing',
    features: [
      'Visual and NDT/PDT inspection',
      'Structural integrity assessment',
      'Load-bearing capacity evaluation',
      'Retrofitting recommendations',
    ],
  },
  {
    id: 'ndt-pdt-testing',
    title: 'NDT & Partial Destructive Testing',
    shortDescription: 'Rebound hammer, UPV, carbonation, chloride, core test, half-cell potential, chemical analysis services.',
    fullDescription:
      'Our laboratory offers a full suite of Non-Destructive and Partial Destructive Testing services including rebound hammer tests, Ultrasonic Pulse Velocity (UPV), carbonation depth analysis, chloride content testing, core extraction and testing, half-cell potential measurement, and comprehensive chemical analysis of construction materials.',
    icon: 'Microscope',
    anchorId: 'ndt-pdt-testing',
    features: [
      'Rebound hammer testing',
      'Ultrasonic Pulse Velocity (UPV)',
      'Carbonation & chloride analysis',
      'Core testing & half-cell potential',
    ],
  },
  {
    id: 'building-materials-testing',
    title: 'Testing of Building Materials',
    shortDescription: 'IS-code compliant tests on bricks, blocks, concrete, steel, prestressing strands via NABL partner lab.',
    fullDescription:
      'Through our partnership with NABL-accredited Tech Civil Material Testing Laboratory Pvt Ltd, we provide comprehensive testing services for all building materials. Our tests are conducted in strict accordance with IS codes and cover bricks, blocks, concrete, steel reinforcement, prestressing strands, and other construction materials to ensure quality and compliance.',
    icon: 'TestTube',
    anchorId: 'building-materials-testing',
    features: [
      'IS-code compliant testing',
      'NABL-accredited lab partner',
      'Concrete, steel & masonry tests',
      'Prestressing strand evaluation',
    ],
  },
  {
    id: 'restoration-rehabilitation',
    title: 'Restoration & Rehabilitation of Structures',
    shortDescription: 'Structural integrity improvement and retrofitting solutions following NDT/PDT evaluation.',
    fullDescription:
      'We specialize in restoring and rehabilitating deteriorated structures. Following comprehensive NDT/PDT evaluations, we design and implement tailored retrofitting solutions to improve structural integrity, extend service life, and ensure compliance with current building codes. Our approach ensures cost-effective restoration that addresses root causes.',
    icon: 'Wrench',
    anchorId: 'restoration-rehabilitation',
    features: [
      'Condition assessment',
      'Retrofit design & engineering',
      'Repair material selection',
      'Post-repair monitoring',
    ],
  },
  {
    id: 'concrete-mix-design',
    title: 'Concrete Mix Design',
    shortDescription: 'Mix designs for all concrete grades using normal and accelerated testing methods.',
    fullDescription:
      'Our experienced team provides concrete mix design services for all grades of concrete. We employ both normal and accelerated testing methods to develop optimal mix proportions that meet project-specific requirements for strength, durability, workability, and economy. All designs comply with relevant IS codes.',
    icon: 'Beaker',
    anchorId: 'concrete-mix-design',
    features: [
      'All grades of concrete',
      'Normal & accelerated methods',
      'IS code compliance',
      'Performance optimization',
    ],
  },
  {
    id: 'consultancy-advisory',
    title: 'Consultancy & Advisory Services',
    shortDescription: 'Need-based technical guidance from our expert team of civil engineering professionals.',
    fullDescription:
      'Our consultancy services provide clients with access to decades of combined experience in structural engineering, construction management, and quality assurance. We offer need-based technical guidance on structural design, construction methodology, material selection, quality planning, and project management to ensure successful project outcomes.',
    icon: 'Users',
    anchorId: 'consultancy-advisory',
    features: [
      'Structural engineering consultation',
      'Construction methodology advice',
      'Material selection guidance',
      'Project management support',
    ],
  },
  {
    id: 'technical-knowledge',
    title: 'Dissemination of Technical Knowledge',
    shortDescription: 'Training on process control, quality monitoring, method statements, and QA planning.',
    fullDescription:
      'We are committed to knowledge sharing in the construction industry. Our training programs cover process control, quality monitoring systems, development of method statements, quality assurance planning, and best practices in construction technology. These programs empower construction professionals with the knowledge needed for successful project delivery.',
    icon: 'GraduationCap',
    anchorId: 'technical-knowledge',
    features: [
      'Process control training',
      'Quality monitoring systems',
      'Method statement development',
      'QA planning workshops',
    ],
  },
  {
    id: 'qaqc-tpqm',
    title: 'QA/QC & TPQM of Civil Projects',
    shortDescription: 'Third-party quality monitoring for infrastructure and building projects ensuring compliance.',
    fullDescription:
      'We provide independent third-party quality monitoring (TPQM) services for civil infrastructure and building projects. Our comprehensive QA/QC services ensure that construction activities conform to approved drawings, specifications, and quality standards. We deliver detailed monitoring reports and corrective action recommendations to project stakeholders.',
    icon: 'Shield',
    anchorId: 'qaqc-tpqm',
    features: [
      'Independent third-party monitoring',
      'Compliance verification',
      'Detailed quality reports',
      'Corrective action recommendations',
    ],
  },
];
