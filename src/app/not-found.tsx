import NotFound from "@/app/components/NotFound";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | AMITH Civil & Allied Engineering Services",
};

export default function ErrorPage() {
  return <NotFound />;
}
