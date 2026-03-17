import type { Metadata } from "next";
import { HomeSwiper } from "@/components/swiper/swiper";
import { createPageMetadata, pageSeo } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata(pageSeo.home, "/");

export default function Home() {
  return (
    <div className="flex-1 h-screen relative">
      <div className="absolute top-0 left-0 w-full h-full">
        <HomeSwiper />
      </div>
    </div>
  );
}
