export type ServiceLink = {
  title: string;
  desc: string;
  image: string;
  bgImage: string;
  className: string;
  href: string;
};

export const serviceLinks: ServiceLink[] = [
  {
    title: "品牌規劃",
    desc: "Branding Strategy",
    image: "bg-[#a23e00]",
    bgImage: "/ps/branding-strategy.png",
    className:
      "md:[clip-path:polygon(0_0,100%_0,calc(100%_-_18px)_100%,0_100%)]",
    href: "/service/branding-strategy",
  },
  {
    title: "網站設計",
    desc: "Website Design",
    image: "bg-[#FF6699]",
    bgImage: "/ps/web-design.png",
    className:
      "md:[clip-path:polygon(18px_0,100%_0,calc(100%_-_18px)_100%,0_100%)]",
    href: "/service/web-design",
  },
  {
    title: "社群行銷",
    desc: "Social Media Marketing",
    image: "bg-[#FF6700]",
    bgImage: "/ps/social-media-marketing.png",
    className:
      "md:[clip-path:polygon(18px_0,100%_0,calc(100%_-_18px)_100%,0_100%)]",
    href: "/service/social-media-marketing",
  },
  {
    title: "口碑行銷",
    desc: "WOM Marketing",
    image: "bg-[#aF6600]",
    bgImage: "/ps/wom-marketing.png",
    className:
      "md:[clip-path:polygon(18px_0,100%_0,calc(100%_-_18px)_100%,0_100%)]",
    href: "/service/wom-marketing",
  },
  {
    title: "廣告投放",
    desc: "Digital Advertising",
    image: "bg-[#Fa6600]",
    bgImage: "/ps/digital-advertising.png",
    className:
      "md:[clip-path:polygon(18px_0,100%_0,calc(100%_-_18px)_100%,0_100%)]",
    href: "/service/digital-advertising",
  },
  {
    title: "各類印刷",
    desc: "Print Production",
    image: "bg-[#F16610]",
    bgImage: "/ps/print-production.png",
    className:
      "md:[clip-path:polygon(18px_0,100%_0,calc(100%_-_18px)_100%,0_100%)]",
    href: "/service/print-production",
  },
];

