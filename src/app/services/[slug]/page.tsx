import type { Metadata } from "next";
import ServiceDetail from "@/app/components/ServiceDetail";
import { servicesData } from "@/data/services";

const SITE_URL = "https://amith.in.net";

export function generateStaticParams() {
  return servicesData.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((item) => item.slug === slug);

  if (!service) {
    return { title: "Service Not Found | AMITH Civil & Allied Engineering Services" };
  }

  const title = `${service.title} | AMITH Civil & Allied Engineering Services`;

  return {
    title,
    description: service.description,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title,
      description: service.description,
      url: `${SITE_URL}/services/${service.slug}`,
      images: [{ url: service.image, alt: service.title }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: service.description,
      images: [service.image],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData.find((item) => item.slug === slug);

  const jsonLd = service
    ? {
        "@context": "https://schema.org",
        "@type": "Service",
        name: service.title,
        description: service.detail,
        image: `${SITE_URL}${service.image}`,
        url: `${SITE_URL}/services/${service.slug}`,
        provider: {
          "@type": "LocalBusiness",
          name: "AMITH Civil & Allied Engineering Services Pvt Ltd",
          url: SITE_URL,
        },
        areaServed: {
          "@type": "City",
          name: "Chennai",
        },
        serviceType: service.title,
      }
    : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <ServiceDetail />
    </>
  );
}
