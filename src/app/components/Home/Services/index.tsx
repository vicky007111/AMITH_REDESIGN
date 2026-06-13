"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import SingleService from "./SingleService";
import AnimateOnScroll from "@/app/components/shared/AnimateOnScroll";

interface ServiceItem {
  icon: string;
  title: string;
  slug: string;
  description: string;
}

interface ServicesProps {
  /** Maximum number of services to display. Omit or pass undefined to show all. */
  limit?: number;
  /** When true, shows the "All Services" link and heading layout used on the Home page */
  preview?: boolean;
}

const Services = ({ limit, preview = false }: ServicesProps) => {
  const [services, setServices] = useState<ServiceItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/service");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setServices(data.ServicesData || []);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchData();
  }, []);

  const displayedServices =
    limit !== undefined ? services.slice(0, limit) : services;

  return (
    <section
      id="services"
      className="dark:bg-darkmode bg-[url('/images/plan/price-plan-background-icons.svg')] bg-cover bg-center bg-no-repeat overflow-hidden"
    >
      <div className="container mx-auto max-w-7xl 2xl:max-w-[1400px] 3xl:max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Section heading — scroll-reveal */}
        <AnimateOnScroll className="mb-8 lg:mb-17">
          <p className="text-black/50 dark:text-white/50 text-base sm:text-lg lg:text-start text-center">
            Services We Provide
          </p>
          <div className="flex lg:flex-row flex-col lg:gap-0 gap-6 sm:gap-10 justify-between items-center mt-4 sm:mt-5">
            <h2 className="font-semibold text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-black dark:text-white lg:text-start text-center">
              Advanced Civil &amp; <br className="hidden sm:block" /> Structural Services
            </h2>
            {preview && (
              <Link
                href="/services"
                className="py-2 px-5 bg-primary rounded-lg hover:opacity-90 duration-300 text-white font-semibold text-sm sm:text-base shrink-0"
              >
                All Services
              </Link>
            )}
          </div>
        </AnimateOnScroll>

        {/* Service cards — staggered scroll-reveal */}
        <div className="grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6">
          {displayedServices.map((item, index) => (
            <AnimateOnScroll
              key={index}
              delay={index * 0.1}
              className="xl:col-span-4 md:col-span-6 col-span-12"
            >
              <SingleService service={item} />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
