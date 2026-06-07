"use client";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import SingleService from "./SingleService";

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

  const ref = useRef(null);
  const inView = useInView(ref);

  const TopAnimation = {
    animate: inView ? { y: 0, opacity: 1 } : { y: "-100%", opacity: 0 },
    transition: { duration: 1, delay: 0.4 },
  };

  const displayedServices =
    limit !== undefined ? services.slice(0, limit) : services;

  return (
    <section
      id="services"
      className="dark:bg-darkmode bg-[url('/images/plan/price-plan-background-icons.svg')] bg-cover bg-center bg-no-repeat overflow-hidden"
    >
      <div
        ref={ref}
        className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-12"
      >
        <motion.div {...TopAnimation} className="mb-17">
          <p className="text-black/50 dark:text-white/50 text-lg lg:text-start text-center">
            Services We Provide
          </p>
          <div className="flex lg:flex-row flex-col lg:gap-0 gap-10 justify-between items-center mt-5">
            <h2 className="font-semibold md:text-6xl sm:text-40 text-3xl text-black dark:text-white lg:text-start text-center">
              Advanced Civil &amp; <br /> Structural Services
            </h2>
            {preview && (
              <Link
                href="/services"
                className="py-1.125 px-2.188 bg-primary rounded-lg hover:opacity-90 duration-300 text-white font-semibold"
              >
                All Services
              </Link>
            )}
          </div>
        </motion.div>
        <div className="grid grid-cols-12 gap-6">
          {displayedServices.map((item, index) => (
            <SingleService key={index} service={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
