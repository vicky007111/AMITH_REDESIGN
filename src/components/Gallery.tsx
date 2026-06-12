"use client";

import { useState } from "react";
import Image from "next/image";

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
    title: "Core Drilling - Amenity Building",
    category: "Structural Audits",
    imageUrl: "/gallery/core-drilling/core-drilling-concrete-column-amenity-building.jpg",
    location: "Project Site",
  },
  {
    id: 2,
    title: "Core Drilling - Residential Column",
    category: "Structural Audits",
    imageUrl: "/gallery/core-drilling/core-drilling-residential-column-exterior.jpg",
    location: "Project Site",
  },
  {
    id: 3,
    title: "Core Drilling Close-up",
    category: "Structural Audits",
    imageUrl: "/gallery/core-drilling/core-drilling-closeup-column.jpg",
    location: "Project Site",
  },
  {
    id: 4,
    title: "Core Drilling - Interior Office Wall",
    category: "Structural Audits",
    imageUrl: "/gallery/core-drilling/core-drilling-interior-office-wall.jpg",
    location: "Project Site",
  },
  {
    id: 5,
    title: "Core Drilling Operation in Progress",
    category: "Structural Audits",
    imageUrl: "/gallery/core-drilling/core-drilling-operation-in-progress.jpg",
    location: "Project Site",
  },
  {
    id: 6,
    title: "Concrete Cube Compression Testing",
    category: "QA/QC & TPQM",
    imageUrl: "/gallery/lab-equipment/compression-testing-machine-concrete-cubes.jpg",
    location: "Testing Laboratory",
  },
  {
    id: 7,
    title: "Concrete Cube Preparation",
    category: "QA/QC & TPQM",
    imageUrl: "/gallery/lab-equipment/concrete-cube-preparation-testing-lab.jpg",
    location: "Testing Laboratory",
  },
  {
    id: 8,
    title: "Carbon Fibre Wrap Repair",
    category: "Restoration & Rehabilitation",
    imageUrl: "/gallery/structural-repair/carbon-fibre-wrap-repair-cracked-column.jpg",
    location: "Repair Site",
  },
  {
    id: 9,
    title: "FRP Structural Strengthening",
    category: "Restoration & Rehabilitation",
    imageUrl: "/gallery/structural-repair/frp-strengthening-structural-member.jpg",
    location: "Repair Site",
  },
  {
  id: 10,
  title: "Column Carbon Fibre Reinforcement",
  category: "Restoration & Rehabilitation",
  imageUrl: "/gallery/structural-repair/column-repair-carbon-fibre-reinforcement.jpg",
  location: "Repair Site",
},
{
  id: 11,
  title: "Core Drilling Commercial Office Building",
  category: "Restoration & Rehabilitation",
  imageUrl: "/gallery/structural-repair/core-drilling-commercial-office-building.jpg",
  location: "Repair Site",
},
{
  id: 12,
  title: "Structural Repair Work Facility",
  category: "Restoration & Rehabilitation",
  imageUrl: "/gallery/structural-repair/structural-repair-work-facility.jpg",
  location: "Repair Site",
},
{
  id: 13,
  title: "Site Repair Strengthening Work",
  category: "Restoration & Rehabilitation",
  imageUrl: "/gallery/structural-repair/site-repair-strengthening-work.jpg",
  location: "Repair Site",
},
{
  id: 14,
  title: "Remediation Work Commercial Premises",
  category: "Restoration & Rehabilitation",
  imageUrl: "/gallery/structural-repair/remediation-work-commercial-premises.jpg",
  location: "Repair Site",
},
{
  id: 15,
  title: "Field Repair Building Site",
  category: "Restoration & Rehabilitation",
  imageUrl: "/gallery/structural-repair/field-repair-building-site.jpg",
  location: "Repair Site",
},
{
  id: 16,
  title: "Structural Strengthening Site",
  category: "Restoration & Rehabilitation",
  imageUrl: "/gallery/structural-repair/structural-strengthening-site.jpg",
  location: "Repair Site",
},
{
  id: 17,
  title: "UPV Testing Interior Column",
  category: "Structural Audits",
  imageUrl: "/gallery/structural-testing/upv-testing-interior-column.jpg",
  location: "Testing Site",
},
{
  id: 18,
  title: "CP Voltmeter Rebar Corrosion Assessment",
  category: "Structural Audits",
  imageUrl: "/gallery/structural-testing/cp-voltmeter-rebar-corrosion-assessment.jpg",
  location: "Testing Site",
},
{
  id: 19,
  title: "Half Cell Potential Testing Structure",
  category: "Structural Audits",
  imageUrl: "/gallery/structural-testing/half-cell-potential-testing-structure.jpg",
  location: "Testing Site",
},
{
  id: 20,
  title: "Structural Testing With Instruments",
  category: "Structural Audits",
  imageUrl: "/gallery/structural-testing/structural-testing-with-instruments.jpg",
  location: "Testing Site",
},
{
  id: 21,
  title: "Rooftop Half Cell Potential Test",
  category: "Structural Audits",
  imageUrl: "/gallery/structural-testing/rooftop-half-cell-potential-test-a5-column.jpg",
  location: "Testing Site",
},
{
  id: 22,
  title: "Industrial Structure Rebar Corrosion Test",
  category: "Structural Audits",
  imageUrl: "/gallery/structural-testing/industrial-structure-rebar-corrosion-test.jpg",
  location: "Industrial Site",
},
{
  id: 23,
  title: "CP Test Industrial Tank Wall",
  category: "Structural Audits",
  imageUrl: "/gallery/structural-testing/cp-test-industrial-tank-wall.jpg",
  location: "Industrial Site",
},
{
  id: 24,
  title: "Half Cell Testing Exposed Structure",
  category: "Structural Audits",
  imageUrl: "/gallery/structural-testing/half-cell-testing-exposed-structure.jpg",
  location: "Testing Site",
},
{
  id: 25,
  title: "Structural Assessment Deteriorated Wall",
  category: "Structural Audits",
  imageUrl: "/gallery/structural-testing/structural-assessment-deteriorated-wall.jpg",
  location: "Testing Site",
},
{
  id: 26,
  title: "Corrosion Mapping Industrial Structure",
  category: "Structural Audits",
  imageUrl: "/gallery/structural-testing/corrosion-mapping-industrial-structure.jpg",
  location: "Industrial Site",
},
{
  id: 27,
  title: "UPV Test Beam",
  category: "Structural Audits",
  imageUrl: "/gallery/structural-testing/upv-test-beam.jpg",
  location: "Testing Site",
},
{
  id: 28,
  title: "Overhead Structural Testing Ceiling Slab",
  category: "Structural Audits",
  imageUrl: "/gallery/structural-testing/overhead-structural-testing-ceiling-slab.jpeg",
  location: "Testing Site",
},
{
  id: 29,
  title: "Structural Test Industrial Ceiling",
  category: "Structural Audits",
  imageUrl: "/gallery/structural-testing/structural-test-industrial-ceiling.jpeg",
  location: "Industrial Site",
},
{
  id: 30,
  title: "Concrete Slab Testing From Below",
  category: "Structural Audits",
  imageUrl: "/gallery/structural-testing/concrete-slab-testing-from-below.jpeg",
  location: "Testing Site",
},
{
  id: 31,
  title: "Vertical Structural Inspection",
  category: "Structural Audits",
  imageUrl: "/gallery/structural-testing/vertical-structural-inspection.jpeg",
  location: "Testing Site",
},
{
  id: 32,
  title: "Rebar Assessment Structural Wall",
  category: "Structural Audits",
  imageUrl: "/gallery/structural-testing/rebar-assessment-structural-wall.jpg",
  location: "Testing Site",
},
];

export default function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const filters = ["All", "Structural Audits", "QA/QC & TPQM", "Restoration & Rehabilitation"];

  const filteredItems = selectedFilter === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedFilter);

  return (
    <section
      id="gallery"
      className="bg-slate-50 dark:bg-darklight py-20 transition-colors duration-300"
    >
      <div className="container mx-auto max-w-7xl px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="text-primary font-bold text-sm uppercase tracking-wider mb-3">
            On-Site Evidence
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
            Engineering Gallery
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                selectedFilter === filter
                  ? "bg-primary text-white shadow-lg shadow-primary/20"
                  : "bg-white dark:bg-darkmode border border-slate-200 dark:border-darkborder text-slate-600 dark:text-slate-400 hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary"
              }`}
            >
              {filter === "Restoration & Rehabilitation" ? "Restoration & Rehab" : filter}
            </button>
          ))}
        </div>

        {/* Filterable Grid */}
        <div className="grid grid-cols-12 gap-8">
          {filteredItems.map((item) => (
           <div
            key={item.id}
            className="col-span-12 md:col-span-6 lg:col-span-4 group flex flex-col bg-white dark:bg-darkmode rounded-3xl overflow-hidden border-2 border-transparent shadow-sm hover:shadow-xl hover:border-blue-500 transition-all duration-300 animate-fadeIn"
           >
              {/* Image Frame */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-darklight">
              <Image
  src={item.imageUrl}
  alt={item.title}
  fill
  className="object-cover transition-transform duration-500 group-hover:scale-105"
/>

<span className="absolute top-4 left-4 px-2.5 py-1 rounded bg-primary text-[10px] font-bold text-white uppercase tracking-wider">
  {item.category === "Restoration & Rehabilitation"
    ? "Restoration"
    : item.category === "QA/QC & TPQM"
    ? "QA/QC"
    : "Audit"}
</span>
              </div>

              {/* Text Area */}
              <div className="p-6 flex flex-col gap-2 flex-grow">
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
                  Location: {item.location}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors duration-200">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
