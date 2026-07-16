import UsedTech from "../../Services/Technologies"
import PageHero, { BreadcrumbItem } from "@/app/components/shared/PageHero"

const skeletonBreadcrumb: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Loading..." },
];

const ServiceDetailSkeleton = () => {
    return (
        <>
            <PageHero
                title=""
                breadcrumb={skeletonBreadcrumb}
            />

            {/* Section A — Service Overview skeleton */}
            <section className="bg-white section-py animate-pulse">
                <div className="section-container">
                    <div className="grid lg:grid-cols-2 items-start gap-10 lg:gap-16">
                        {/* Image placeholder */}
                        <div className="w-full">
                            <div className="relative w-full aspect-[4/3] max-w-xl mx-auto bg-gray-200 rounded-3xl"></div>
                        </div>
                        {/* Text placeholder */}
                        <div className="w-full">
                            <div className="h-3 bg-gray-200 rounded-full w-32 mb-4"></div>
                            <div className="h-8 bg-gray-200 rounded-full w-48 mb-4"></div>
                            <div className="w-12 h-1 bg-gray-200 rounded-full mb-6"></div>
                            <div className="h-4 bg-gray-200 rounded-full max-w-[480px] mb-2.5"></div>
                            <div className="h-4 bg-gray-200 rounded-full mb-2.5"></div>
                            <div className="h-4 bg-gray-200 rounded-full max-w-[440px] mb-2.5"></div>
                            <div className="h-4 bg-gray-200 rounded-full max-w-[360px]"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section B — Capabilities skeleton */}
            <section className="bg-slate-50 section-py border-y border-slate-100 animate-pulse">
                <div className="section-container">
                    <div className="h-3 bg-gray-200 rounded-full w-28 mb-3"></div>
                    <div className="h-8 bg-gray-200 rounded-full w-72 mb-4"></div>
                    <div className="w-12 h-1 bg-gray-200 rounded-full mb-10"></div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[...Array(6)].map((_, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-xl p-5 flex gap-4 items-start border border-slate-100"
                            >
                                <div className="w-6 h-6 rounded-full bg-gray-200 shrink-0"></div>
                                <div className="flex-1">
                                    <div className="h-3 bg-gray-200 rounded-full w-32 mb-2"></div>
                                    <div className="h-2.5 bg-gray-200 rounded-full w-full"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <UsedTech />
        </>
    )
}

export default ServiceDetailSkeleton