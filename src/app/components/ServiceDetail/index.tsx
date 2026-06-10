"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Icon } from "@iconify/react";
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
                label="Our Services"
                title={item.title}
                subtitle={item.description}
                breadcrumb={breadcrumb}
            />
            <section className="dark:bg-darkmode">
                <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
                    <div className="grid lg:grid-cols-2 items-center gap-8 lg:gap-12">
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
                        <div>
                            <h2 className="font-semibold md:text-5xl text-32 text-black dark:text-white lg:text-start text-center mb-4">
                                What It <span className="text-primary">Does</span>
                            </h2>
                            <p className="text-xl text-black/50 dark:text-white/50">
                                {item.detail}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-grey dark:bg-darklight">
                <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
                    <h2 className="font-semibold md:text-40 text-32 text-black dark:text-white lg:text-start text-center">
                        Features
                    </h2>
                    <ul className="mt-4 text-xl">
                        {item.features.map((feature: any, index: any) => (
                            <li
                                key={index}
                                className="my-3"
                            >
                                <div className="flex items-start sm:gap-5 gap-3">
                                    <div>
                                        <Icon
                                            icon="solar:check-circle-linear"
                                            width="18"
                                            height="18"
                                            className="font-semibold text-primary mt-2 w-4 h-4"
                                        />
                                    </div>
                                    <p className="text-xl text-black/50 dark:text-white/50">
                                        <span className="font-medium text-black dark:text-white">
                                            {feature.title}:
                                        </span>{" "}
                                        {feature.description}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            <UsedTech />
        </>
    );
};

export default ServiceDetail;