import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AMITH Civil & Allied Engineering Services",
    short_name: "AMITH Civil",
    description:
      "Structural audit, TPQM, NDT testing, and restoration consultancy in Chennai.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#001c68",
    icons: [
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
