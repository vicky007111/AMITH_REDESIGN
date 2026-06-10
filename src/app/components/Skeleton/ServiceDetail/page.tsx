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
                label="Our Services"
                title=""
                breadcrumb={skeletonBreadcrumb}
            />
            <section className="dark:bg-darkmode animate-pulse">
                <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
                    <div className="grid lg:grid-cols-2 items-center gap-8 lg:gap-12">
                        <div className="w-full">
                            <div className="relative w-full aspect-[4/3] max-w-xl mx-auto bg-gray-300 dark:bg-gray-700 rounded-3xl"></div>
                        </div>
                        <div className="w-full">
                            <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                            <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
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
                        <li className="my-3" >
                            <div className="flex flex-col items-start sm:gap-5 gap-3">
                                <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                                <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                                <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                                <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                                <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <UsedTech />
        </>
    )
}

export default ServiceDetailSkeleton