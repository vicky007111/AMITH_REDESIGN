import ServicesCard from "@/app/components/Services/ServiceCard";
import HeroSub from "@/app/components/SharedComponent/HeroSub";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Services | AMITH Civil & Allied Engineering Services",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services", text: "Services" },
  ];
  return (
    <>
      <HeroSub
        title="Our Services"
        description="Discover our comprehensive suite of engineering advisory, structural auditing, non-destructive testing (NDT), and rehabilitation services."
        breadcrumbLinks={breadcrumbLinks}
      />
      <ServicesCard />
    </>
  );
};

export default page;
