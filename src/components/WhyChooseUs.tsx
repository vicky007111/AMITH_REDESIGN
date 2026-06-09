"use client";

import Image from "next/image";

export default function WhyChooseUs() {
  const strengths = [
    {
      title: "NABL Laboratory tie-up",
      description:
        "Formal MoU with Tech-Civil Material Testing Laboratory Pvt Ltd ensuring certified NDT and material analysis.",
      icon: (
        <svg
          className="w-6 h-6 text-emerald-600 dark:text-emerald-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
          />
        </svg>
      ),
    },
    {
      title: "Distinguished Leadership",
      description:
        "Led by a former Vice Chancellor, a retired MES military colonel, and a senior consultant for IIT-M's CUBE.",
      icon: (
        <svg
          className="w-6 h-6 text-primary"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94-3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
          />
        </svg>
      ),
    },
    {
      title: "Major Infrastructure Portfolio",
      description:
        "Over 500+ design validations, runways, deep-capacity water sumps, and multi-storey township monitoring projects.",
      icon: (
        <svg
          className="w-6 h-6 text-primary"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-.778.099-1.533.284-2.253"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="about"
      className="bg-slate-50 dark:bg-darklight py-20 transition-colors duration-300"
    >
      <div className="container mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-12 gap-12 items-center">
          {/* Left Column: Descriptive Strengths */}
          <div className="col-span-12 lg:col-span-6">
            <p className="text-primary font-bold text-sm uppercase tracking-wider mb-3">
              Why Choose AMITH
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
              Engineering Excellence Rooted in Academic and Public Trust
            </h2>
            <p className="text-base text-slate-500 dark:text-slate-400 font-medium leading-relaxed mb-8">
              AMITH is not a general builder. We operate as an elite engineering
              think-tank, evaluating structural distress, specifying repair methods, and
              validating complex structural designs. Our calculations and assessments
              are trusted by government bodies, defense installations, and premium
              academic bodies like IIT-Madras.
            </p>

            {/* List of features */}
            <div className="flex flex-col gap-6">
              {strengths.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-darkmode border border-slate-200 dark:border-darkborder flex items-center justify-center shrink-0 shadow-sm shadow-slate-100 dark:shadow-none">
                    {item.icon}
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: High-fidelity image representation */}
          <div className="col-span-12 lg:col-span-6 relative flex justify-center">
            {/* Soft decorative background shape */}
            <div className="absolute inset-0 bg-gradient-to-bl from-primary/5 to-accent/10 rounded-3xl blur-2xl transform -rotate-3"></div>

            <div className="relative w-full max-w-lg aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden border border-slate-200 dark:border-darkborder shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80"
                alt="AMITH Laboratory Testing and Quality Inspections"
                fill
                className="object-cover hover:scale-105 duration-700 transition-transform"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
