import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";
import { createPageMetadata, pageSeo } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(pageSeo.about, "/about");

export default function AboutPage() {
  return <AboutPageClient />;
}
