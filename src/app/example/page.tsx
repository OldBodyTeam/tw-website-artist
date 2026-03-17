import type { Metadata } from "next";
import ExamplePageClient from "./ExamplePageClient";
import { createPageMetadata, pageSeo } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(pageSeo.example, "/example");

export default function ExamplePage() {
  return <ExamplePageClient />;
}
