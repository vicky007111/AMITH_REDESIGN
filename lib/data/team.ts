export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  highlights: string[];
  imageSrc?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 'devadas-manoharan',
    name: 'Prof. Dr. Devadas Manoharan M',
    title: 'Director & Chief Technical Advisor',
    bio: 'Prof. Dr. Devadas Manoharan M brings 37 years of distinguished academic and research experience to AMITH. A former Vice-Chancellor of Anna University Tiruchirappalli, he has been instrumental in shaping civil engineering education and research in India. His extensive expertise in structural engineering, combined with his academic leadership, provides invaluable guidance to our technical operations and quality standards.',
    highlights: [
      '37 years academic career in civil engineering',
      'Former Vice-Chancellor, Anna University Tiruchirappalli',
      'Guided 12 PhD scholars to completion',
      'Supervised 91 Master of Engineering theses',
      'Specialized in structural engineering and concrete technology',
      'Published numerous research papers in international journals',
    ],
  },
  {
    id: 'nallathambi-p',
    name: 'Col. Dr. Nallathambi P',
    title: 'Director & Structural Consultant',
    bio: 'Col. Dr. Nallathambi P is a retired Army officer from the Military Engineering Service with over 10 years of dedicated experience in structural consultancy. His unique combination of military discipline, engineering rigor, and practical field experience makes him an invaluable asset to our structural auditing and design services. He has successfully completed over 500 structural design assignments across diverse project types.',
    highlights: [
      'Former Army officer, Military Engineering Service',
      '10+ years in structural consultancy',
      'Completed 500+ structural design projects',
      'Expertise in structural auditing and NDT/PDT',
      'Specialized in retrofit design and structural assessment',
      'Strong background in construction project management',
    ],
  },
  {
    id: 'kalaimony-r',
    name: 'Er. Kalaimony R',
    title: 'Director & Senior Construction Consultant',
    bio: 'Er. Kalaimony R brings a wealth of practical construction experience spanning 38 years across multiple domains. With 23 years at TANGEDCO (Tamil Nadu Generation and Distribution Corporation) and 15 years in private construction, he has successfully delivered over 40 housing projects in Chennai. As a Senior Consultant at IIT Madras CUBE (Centre for Urbanization, Buildings & Environment), he bridges academic research with practical implementation.',
    highlights: [
      '23 years with TANGEDCO in power infrastructure',
      '15 years in construction management',
      'Delivered 40+ housing projects in Chennai',
      'Senior Consultant at IIT Madras CUBE',
      'Expertise in project planning and execution',
      'Specialized in quality assurance and TPQM',
    ],
  },
];
