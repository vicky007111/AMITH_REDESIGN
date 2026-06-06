export type ProjectCategory = 'structural-audit' | 'qaqc-tpqm' | 'restoration';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  imageSrc: string;
  imageAlt: string;
  description?: string;
  client?: string;
  year?: number;
}

export const projects: Project[] = [
  {
    id: 'structural-audit-01',
    title: 'Residential Complex Structural Assessment',
    category: 'structural-audit',
    imageSrc: '/images/projects/IMG-20250828-WA0033.jpg',
    imageAlt: 'Structural audit of residential complex showing NDT testing',
    description:
      'Comprehensive structural audit of a multi-story residential complex including NDT/PDT testing of all structural elements, load-bearing capacity assessment, and retrofitting recommendations.',
    year: 2025,
  },
  {
    id: 'structural-audit-02',
    title: 'Commercial Building Stability Audit',
    category: 'structural-audit',
    imageSrc: '/images/projects/IMG-20241118-WA0066.jpg',
    imageAlt: 'Commercial building structural inspection',
    description:
      'Detailed stability audit of a commercial building using rebound hammer, UPV testing, and visual inspection to assess structural integrity and safety compliance.',
    year: 2024,
  },
  {
    id: 'structural-audit-03',
    title: 'High-Rise Building Assessment',
    category: 'structural-audit',
    imageSrc: '/images/projects/IMG-20250828-WA0044.jpg',
    imageAlt: 'High-rise building structural audit',
    description:
      'Complete structural evaluation of a high-rise building including core testing, carbonation analysis, and chloride content assessment to determine structural health.',
    year: 2025,
  },
  {
    id: 'qaqc-tpqm-01',
    title: 'Infrastructure Project Quality Monitoring',
    category: 'qaqc-tpqm',
    imageSrc: '/images/projects/IMG-20250817-WA0070.jpg',
    imageAlt: 'Quality monitoring of infrastructure project',
    description:
      'Third-party quality monitoring for a major infrastructure project ensuring compliance with specifications, material testing, and process control verification.',
    client: 'Government Infrastructure Project',
    year: 2025,
  },
  {
    id: 'qaqc-tpqm-02',
    title: 'Residential Development TPQM',
    category: 'qaqc-tpqm',
    imageSrc: '/images/projects/IMG-20241118-WA0075.jpg',
    imageAlt: 'Third-party quality monitoring of residential development',
    description:
      'Comprehensive third-party quality monitoring for a large-scale residential development project covering all construction phases from foundation to finishing.',
    year: 2024,
  },
  {
    id: 'qaqc-tpqm-03',
    title: 'Commercial Complex QA/QC',
    category: 'qaqc-tpqm',
    imageSrc: '/images/projects/IMG-20250323-WA0127.jpg',
    imageAlt: 'Quality assurance for commercial complex',
    description:
      'Quality assurance and quality control services for a commercial complex construction ensuring adherence to approved drawings and specifications.',
    year: 2025,
  },
  {
    id: 'restoration-01',
    title: 'Heritage Building Restoration',
    category: 'restoration',
    imageSrc: '/images/projects/IMG-20250828-WA0046.jpg',
    imageAlt: 'Heritage building restoration work',
    description:
      'Restoration and rehabilitation of a heritage building using specialized techniques to preserve architectural features while improving structural integrity and safety.',
    year: 2025,
  },
  {
    id: 'restoration-02',
    title: 'Industrial Structure Rehabilitation',
    category: 'restoration',
    imageSrc: '/images/projects/IMG-20241118-WA0084.jpg',
    imageAlt: 'Industrial structure rehabilitation',
    description:
      'Rehabilitation of an industrial structure including concrete repair, corrosion protection, and structural strengthening using modern retrofitting techniques.',
    year: 2024,
  },
  {
    id: 'restoration-03',
    title: 'Bridge Restoration Project',
    category: 'restoration',
    imageSrc: '/images/projects/IMG-20250828-WA0060.jpg',
    imageAlt: 'Bridge restoration and strengthening',
    description:
      'Comprehensive restoration of a deteriorated bridge structure including deck repair, bearing replacement, and structural strengthening to extend service life.',
    year: 2025,
  },
  {
    id: 'structural-audit-04',
    title: 'Educational Institution Structural Audit',
    category: 'structural-audit',
    imageSrc: '/images/projects/IMG-20241118-WA0090.jpg',
    imageAlt: 'Structural audit of educational institution',
    description:
      'Safety assessment and structural audit of an educational institution campus including multiple buildings, ensuring student safety and compliance with building codes.',
    year: 2024,
  },
  {
    id: 'qaqc-tpqm-04',
    title: 'Apartment Complex Construction Monitoring',
    category: 'qaqc-tpqm',
    imageSrc: '/images/projects/IMG-20250828-WA0062.jpg',
    imageAlt: 'Quality monitoring of apartment construction',
    description:
      'Independent third-party quality monitoring for a multi-tower apartment complex ensuring quality compliance throughout the construction lifecycle.',
    year: 2025,
  },
  {
    id: 'restoration-04',
    title: 'Residential Building Retrofitting',
    category: 'restoration',
    imageSrc: '/images/projects/IMG-20250828-WA0069.jpg',
    imageAlt: 'Residential building retrofitting',
    description:
      'Retrofitting and strengthening of a residential building based on detailed NDT/PDT evaluation, including seismic upgrades and structural repairs.',
    year: 2025,
  },
];
