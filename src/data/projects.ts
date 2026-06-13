import { ReactNode } from "react";

export interface Project {
  client: string;
  scope: string;
  description: string;
  tag: string;
  icon: ReactNode;
}

export const projects: Project[] = [
  {
    client: "Airport Authority of India",
    scope: "Runway Engineering & Deep Sump Design",
    description:
      "Vetted and supervised critical airfield runway designs and calculated structural parameters for a 1.5 Million Liter Capacity industrial water sump.",
    tag: "Design Vetting",
    icon: null, // Icons are JSX — kept in component for SSR safety
  },
  {
    client: "Tamil Nadu Housing Board (TNHB)",
    scope: "TPQM & Condition Assessment",
    description:
      "Conducted Third-Party Quality Monitoring (TPQM) and detailed structural soundness assessment for the 9-storey residential towers at Korattur.",
    tag: "Quality Audit",
    icon: null,
  },
  {
    client: "APCRDA Amaravati",
    scope: "Secretariat & Government Housing",
    description:
      "Delivered engineering design peer-reviews and site quality monitoring reports for the massive State Secretariat and high-rise government staff quarters.",
    tag: "Oversight",
    icon: null,
  },
  {
    client: "North Madras Thermal Power Plant",
    scope: "Heavy Industrial Concrete Vetting",
    description:
      "Formulated structural calculations and vetted safety margins for high-temperature and high-load civil components of the power block.",
    tag: "Industrial Vetting",
    icon: null,
  },
  {
    client: "Kendriya Vidyalaya School Projects",
    scope: "Multi-State Institutional Supervision",
    description:
      "Managed structural safety and quality verification campaigns for school building assets across Kerala, Karnataka, and Madhya Pradesh.",
    tag: "Supervision",
    icon: null,
  },
  {
    client: "Military Engineering Services (MES)",
    scope: "Defense Installations Soundness Audits",
    description:
      "Evaluated structural distress and certified structural safety for key airbase and port storage assets in Tambaram and Port Blair.",
    tag: "Stability Audit",
    icon: null,
  },
];
