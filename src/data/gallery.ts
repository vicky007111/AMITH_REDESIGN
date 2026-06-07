export interface GalleryItem {
  id: number;
  title: string;
  category: "Structural Audits" | "QA/QC & TPQM" | "Restoration & Rehabilitation";
  imageUrl: string;
  location: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Ultrasonic Pulse Velocity Testing",
    category: "Structural Audits",
    imageUrl:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=600&q=80",
    location: "MES Port Blair",
  },
  {
    id: 2,
    title: "Concrete Core Compressive Analysis",
    category: "Structural Audits",
    imageUrl:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80",
    location: "Velachery Apartment Complex",
  },
  {
    id: 3,
    title: "Bridge Deck Stability Auditing",
    category: "Structural Audits",
    imageUrl:
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=600&q=80",
    location: "Wellington RCC Bridge, Ooty",
  },
  {
    id: 4,
    title: "Foundation Reinforcement Audit",
    category: "QA/QC & TPQM",
    imageUrl:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
    location: "TNHB 9-Storey Towers, Korattur",
  },
  {
    id: 5,
    title: "Casting & Pouring Inspection",
    category: "QA/QC & TPQM",
    imageUrl:
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80",
    location: "APCRDA Amaravati Secretariat",
  },
  {
    id: 6,
    title: "Material Compliance Verifications",
    category: "QA/QC & TPQM",
    imageUrl:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80",
    location: "Kendriya Vidyalaya Projects",
  },
  {
    id: 7,
    title: "Micro-Concrete Structural Jacketing",
    category: "Restoration & Rehabilitation",
    imageUrl:
      "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=600&q=80",
    location: "North Madras Power Plant Blocks",
  },
  {
    id: 8,
    title: "Carbon Wrap Column Retrofitting",
    category: "Restoration & Rehabilitation",
    imageUrl:
      "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=600&q=80",
    location: "Sai Krupa Apartment Columns",
  },
  {
    id: 9,
    title: "Epoxy Grouting Core Repair",
    category: "Restoration & Rehabilitation",
    imageUrl:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80",
    location: "Chennai Metro Rail Sump Work",
  },
];

export const galleryFilters = [
  "All",
  "Structural Audits",
  "QA/QC & TPQM",
  "Restoration & Rehabilitation",
] as const;

export type GalleryFilter = (typeof galleryFilters)[number];
