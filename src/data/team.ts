export interface Director {
  name: string;
  role: string;
  experience: string;
  highlight: string;
  avatarInitials: string;
  credentials: string[];
  keyProjects: string[];
  bio: string;
}

export const directors: Director[] = [
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
      "Specialist in structural dynamics, concrete diagnostics, and high-volume sewage treatment facility designs",
    ],
    keyProjects: [
      "Designed and vetted over 10 Sewage Treatment Plants (STPs) ranging from 8.5 MLD to 120 MLD capacities",
      "Supervised and vetted major runway infrastructure for the Airport Authority of India",
      "Led structural investigations of Tsunami-affected tenements for the Tamil Nadu Slum Clearance Board",
      "Vetted industrial structural installations for Bharat Petroleum Corporation Limited (BPCL) and the Integral Coach Factory (ICF)",
      "Consulted on major thermal power block elements for the North Madras Thermal Power Plant",
    ],
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
      "Structural auditor of military and defense assets",
    ],
    keyProjects: [
      "Led structural vetting of the Army School Shillong building complex",
      "Designed and vetted the Vidya Mandir School building complex (Aranthangi)",
      "Structural designs for the Madras Diabetes Research Center",
      "Vetted the Wellington RCC Bridge at Ooty",
      "Designed the 1.5 Million Liter Capacity Sump for the Airport Authority of India",
      "Conducted structural safety audits at MES Tambaram and MES Port Blair installations",
    ],
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
      "Specialist in Third-Party Quality Monitoring (TPQM) and massive condition assessment campaigns",
    ],
    keyProjects: [
      "Oversaw the Amaravati Secretariat and Government Housing project for the Andhra Pradesh Capital Region Development Authority (APCRDA)",
      "Conducted TPQM and comprehensive condition assessment of 9-storey residential towers at Korattur for the Tamil Nadu Housing Board (TNHB)",
      "Third-Party Quality Monitoring of residential blocks at Vallam, Thanjavur for the Tamil Nadu Urban Habitat Development Board",
      "Supervised Kendriya Vidyalaya school building constructions across Kerala, Karnataka, and Madhya Pradesh",
    ],
  },
];
