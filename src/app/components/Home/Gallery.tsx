"use client";

import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/app/components/shared/AnimateOnScroll";

interface GalleryItem {
  id: number;
  title: string;
  category: "Structural Audits" | "QA/QC & TPQM" | "Restoration & Rehabilitation";
  imageUrl: string;
  location: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Ultrasonic Pulse Velocity Testing",
    category: "Structural Audits",
    imageUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=600&q=80",
    location: "MES Port Blair"
  },
  {
    id: 2,
    title: "Concrete Core Compressive Analysis",
    category: "Structural Audits",
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80",
    location: "Velachery Apartment Complex"
  },
  {
    id: 3,
    title: "Bridge Deck Stability Auditing",
    category: "Structural Audits",
    imageUrl: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=600&q=80",
    location: "Wellington RCC Bridge, Ooty"
  },
  {
    id: 4,
    title: "Foundation Reinforcement Audit",
    category: "QA/QC & TPQM",
    imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
    location: "TNHB 9-Storey Towers, Korattur"
  },
  {
    id: 5,
    title: "Casting & Pouring Inspection",
    category: "QA/QC & TPQM",
    imageUrl: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80",
    location: "APCRDA Amaravati Secretariat"
  },
  {
    id: 6,
    title: "Material Compliance Verifications",
    category: "QA/QC & TPQM",
    imageUrl: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80",
    location: "Kendriya Vidyalaya Projects"
  },
  {
    id: 7,
    title: "Micro-Concrete Structural Jacketing",
    category: "Restoration & Rehabilitation",
    imageUrl: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=600&q=80",
    location: "North Madras Power Plant Blocks"
  },
  {
    id: 8,
    title: "Carbon Wrap Column Retrofitting",
    category: "Restoration & Rehabilitation",
    imageUrl: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=600&q=80",
    location: "Sai Krupa Apartment Columns"
  },
  {
    id: 9,
    title: "Epoxy Grouting Core Repair",
    category: "Restoration & Rehabilitation",
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80",
    location: "Chennai Metro Rail Sump Work"
  }
];

export default function Gallery() {
  // Select 3 featured items representing each category to preview
  const featuredItems = [
    galleryItems.find(item => item.id === 1),
    galleryItems.find(item => item.id === 4),
    galleryItems.find(item => item.id === 7),
  ].filter((item): item is GalleryItem => !!item);

  return (
    <section
      id="gallery"
      className="bg-slate-50 dark:bg-darklight py-12 sm:py-16 transition-colors duration-300"
    >
      <div className="container mx-auto max-w-7xl 2xl:max-w-[1400px] 3xl:max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12">
        <AnimateOnScroll className="text-center mb-8 sm:mb-10 lg:mb-12">
          <p className="text-primary font-bold text-sm uppercase tracking-wider mb-3">
            On-Site Evidence
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
            Engineering Gallery
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
        </AnimateOnScroll>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
          {featuredItems.map((item, index) => (
            <AnimateOnScroll
              key={item.id}
              delay={index * 0.1}
              className="col-span-12 md:col-span-6 lg:col-span-4 flex flex-col"
            >
              <div className="bg-white dark:bg-darkmode rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 dark:border-darkborder shadow-sm hover:shadow-card-shadow hover:-translate-y-1 transition-all duration-300 flex flex-col flex-grow group">
                {/* Image Frame */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-darklight">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 sm:top-4 sm:left-4 px-2.5 py-1 rounded bg-primary text-[10px] font-bold text-white uppercase tracking-wider">
                    {item.category === "Restoration & Rehabilitation" ? "Restoration" : item.category === "QA/QC & TPQM" ? "QA/QC" : "Audit"}
                  </span>
                </div>

                {/* Text Area */}
                <div className="p-4 sm:p-6 flex flex-col gap-1.5 sm:gap-2 flex-grow">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
                    Location: {item.location}
                  </span>
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors duration-200">
                    {item.title}
                  </h3>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Explore Gallery Button */}
        <AnimateOnScroll delay={0.3} className="flex justify-center mt-8 sm:mt-10 lg:mt-12">
          <Link
            href="/gallery"
            className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl text-sm sm:text-base font-bold bg-white dark:bg-darkmode border border-slate-300 dark:border-darkborder text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-white hover:border-primary dark:hover:border-white transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
          >
            Explore Gallery
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
