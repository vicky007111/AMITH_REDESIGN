"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import PageHero, { BreadcrumbItem } from "@/app/components/shared/PageHero";
import UsedTech from "@/app/components/Services/Technologies";
import ServiceDetailSkeleton from "../Skeleton/ServiceDetail/page";

const ServiceDetail = () => {
    const [services, setServices] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/service');
                if (!res.ok) throw new Error('Failed to fetch');

                const data = await res.json();
                setServices(data.ServicesData || []);
            } catch (error) {
                console.error('Error fetching services:', error);
            }
        };

        fetchData();
    }, []);

    const { slug } = useParams();
    const item = services.find((item) => item.slug === slug);

    if (!item) {
        return (
            <ServiceDetailSkeleton />
        );
    }

    const breadcrumb: BreadcrumbItem[] = [
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: item.title },
    ];

    return (
        <>
            <PageHero
                title={item.title}
                subtitle={item.description}
                breadcrumb={breadcrumb}
            />

            {/* Section A — Service Overview */}
            <section className="bg-white dark:bg-darkmode py-20 transition-colors duration-300">
                <div className="container mx-auto max-w-7xl 2xl:max-w-[1400px] 3xl:max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12">
                    <div className="grid lg:grid-cols-2 items-start gap-10 lg:gap-16">
                        {/* Image */}
                        <div className="w-full">
                            <div className="relative w-full aspect-[4/3] max-w-xl mx-auto rounded-3xl overflow-hidden shadow-xl border border-slate-100 dark:border-white/5">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Text Content */}
                        <div>
                            <p className="text-primary font-bold text-sm uppercase tracking-wider mb-3">
                                Service Overview
                            </p>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight mb-4">
                                What It <span className="text-primary">Does</span>
                            </h2>
                            <div className="w-12 h-1 bg-primary rounded-full mb-6" aria-hidden="true" />
                            <p className="text-base text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                                {item.detail}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section B — Capabilities */}
            <section className="bg-slate-50 dark:bg-darklight py-20 border-y border-slate-100 dark:border-darkborder transition-colors duration-300">
                <div className="container mx-auto max-w-7xl 2xl:max-w-[1400px] 3xl:max-w-[1600px] px-4 sm:px-6 md:px-8 lg:px-12">
                    <p className="text-primary font-bold text-sm uppercase tracking-wider mb-3">
                        Capabilities
                    </p>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                        Key Features &amp; Methodology
                    </h2>
                    <div className="w-12 h-1 bg-primary rounded-full mt-4 mb-10" aria-hidden="true" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {item.features.map((feature: any, index: number) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-darkmode rounded-xl p-5 flex gap-4 items-start border border-slate-100 dark:border-darkborder shadow-sm"
                            >
                                {/* Bullet indicator */}
                                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                </div>

                                {/* Content */}
                                <div>
                                    <h3 className="text-sm font-bold text-slate-800 dark:text-white leading-snug">
                                        {feature.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed mt-1">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies carousel */}
            <UsedTech />
        </>
    );
};

export default ServiceDetail;