"use client";
import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import PageHero, { BreadcrumbItem } from "@/app/components/shared/PageHero";
import UsedTech from "@/app/components/Services/Technologies";
import NdtPanel from "@/app/components/Services/NdtPanel";
import Reveal from "@/app/components/shared/Reveal";
import { staggeredFadeUp } from "@/app/components/shared/anim";
import ServiceDetailSkeleton from "../Skeleton/ServiceDetail";
import { servicesData } from "@/data/services";

const overviewVariants = staggeredFadeUp(0.1);
const stepVariants = staggeredFadeUp(0.08);

const ServiceDetail = () => {
    const { slug } = useParams();
    const item = servicesData.find((item) => item.slug === slug);

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
            <section className="bg-white section-py transition-colors duration-300">
                <div className="section-container">
                    <div className="grid lg:grid-cols-2 items-stretch gap-10 lg:gap-16">
                        {/* Image — stretches to match the height of the text column so
                            short paragraphs don't leave empty space beside a tall photo */}
                        <Reveal variants={overviewVariants} custom={0} className="w-full">
                            <div className="relative w-full min-h-[280px] sm:min-h-[340px] lg:h-full rounded-3xl overflow-hidden shadow-xl border border-slate-100">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </Reveal>

                        {/* Text Content */}
                        <Reveal variants={overviewVariants} custom={1} className="flex flex-col justify-center">
                            <p className="kicker-text">
                                Service Overview
                            </p>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-4">
                                What It <span className="text-primary">Does</span>
                            </h2>
                            <div className="w-12 h-1 bg-primary rounded-full mb-6" aria-hidden="true" />
                            <p className="text-base text-slate-500 font-medium leading-relaxed">
                                {item.detail}
                            </p>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Section B — Process */}
            <section className="bg-slate-50 section-py border-y border-slate-100 transition-colors duration-300">
                <div className="section-container">
                    <Reveal>
                        <p className="kicker-text">
                            Our Process
                        </p>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                            Step-by-Step Methodology
                        </h2>
                        <div className="w-12 h-1 bg-primary rounded-full mt-4 mb-12" aria-hidden="true" />
                    </Reveal>

                    <div className="relative max-w-3xl">
                        {/* Connecting timeline rail */}
                        <div
                            className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent"
                            aria-hidden="true"
                        />

                        <div className="flex flex-col gap-8">
                            {item.features.map((feature: any, index: number) => (
                                <Reveal
                                    key={index}
                                    variants={stepVariants}
                                    custom={Math.min(index, 3)}
                                    amount={0.3}
                                    className="relative flex gap-6 items-start"
                                >
                                    {/* Step number badge */}
                                    <div className="relative z-10 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shrink-0 font-bold text-sm shadow-lg shadow-primary/30">
                                        {String(index + 1).padStart(2, "0")}
                                    </div>

                                    {/* Content */}
                                    <div className="bg-white rounded-2xl p-6 flex-1 border border-slate-100 shadow-sm hover:shadow-[0_16px_32px_rgba(0,28,104,0.10)] hover:-translate-y-1 transition-all duration-300">
                                        <h3 className="text-base font-bold text-slate-800 leading-snug">
                                            {feature.title}
                                        </h3>
                                        <p className="text-sm text-slate-500 font-medium leading-relaxed mt-1.5">
                                            {feature.description}
                                        </p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Structural Auditing & Stability also gets the full interactive
                NDT Diagnostic Methods explorer, since in-situ concrete quality
                evaluation (UPV / rebound hammer) is part of its process. */}
            {item.slug === "structural-auditing-stability" && <NdtPanel />}

            {/* Technologies carousel */}
            <UsedTech />
        </>
    );
};

export default ServiceDetail;