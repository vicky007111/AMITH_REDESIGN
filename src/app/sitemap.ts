import type { MetadataRoute } from "next";
import { servicesData } from "@/data/services";

const SITE_URL = "https://amith.in.net";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/services`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/gallery`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/contact`, changeFrequency: "yearly", priority: 0.6 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = servicesData.map((service) => ({
    url: `${SITE_URL}/services/${service.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
