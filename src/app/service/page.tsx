import { Divider } from "antd";
import Image from "next/image";
import Link from "next/link";
const list = [
  {
    title: "品牌規劃",
    desc: "Branding Strategy",
    image: "bg-[#a23e00]", // 注意：颜色值格式统一（如#a23e00无需加[]）
    className:
      "md:[clip-path:polygon(0_0,100%_0,calc(100%_-_18px)_100%,0_100%)]",
    href: "/service/branding-strategy",
  },
  {
    title: "網站設計",
    desc: "Website Design",
    image: "bg-[#FF6699]",
    className:
      "md:[clip-path:polygon(18px_0,100%_0,calc(100%_-_18px)_100%,0_100%)]",
    href: "/service/web-design",
  },
  {
    title: "社群行銷",
    desc: "Social Media Marketing",
    image: "bg-[#FF6700]",
    className:
      "md:[clip-path:polygon(18px_0,100%_0,calc(100%_-_18px)_100%,0_100%)]",
    href: "/service/social-media-marketing",
  },
  {
    title: "口碑行銷",
    desc: "WOM Marketing",
    image: "bg-[#aF6600]",
    className:
      "md:[clip-path:polygon(18px_0,100%_0,calc(100%_-_18px)_100%,0_100%)]",
    href: "/service/wom-marketing",
  },
  {
    title: "廣告投放",
    desc: "Digital Advertising",
    image: "bg-[#Fa6600]",
    className:
      "md:[clip-path:polygon(18px_0,100%_0,calc(100%_-_18px)_100%,0_100%)]",
    href: "/service/digital-advertising",
  },
  {
    title: "各類印刷",
    desc: "Print Production",
    image: "bg-[#F16610]",
    className:
      "md:[clip-path:polygon(18px_0,100%_0,calc(100%_-_18px)_100%,0_100%)]",
    href: "/service/print-production",
  },
];

export default function Example() {
  return (
    <div className="flex-1 h-screen bg-black py-[20px] px-[16px] md:py-[44px] md:px-[64px] flex flex-col md:h-auto md:min-h-screen">
      {/* 顶部图片 */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 w-full">
        {/* Desktop Images */}
        <Image
          src="/home-2/company.png"
          alt="company"
          width={320}
          height={32}
          className="hidden md:block"
        />
        <Image
          src="/home-1/logo.svg"
          alt="logo"
          width={264}
          height={48}
          className="hidden md:block"
        />
      </div>
      <Divider className="!mt-[32px] !bg-[rgba(255,255,255,0.1)] !border-[rgba(255,255,255,0.1)]" />

      {/* 核心内容区：竖排文字列表 */}
      <div className="grid grid-cols-3 grid-rows-2 gap-y-[12px] md:flex md:flex-row justify-between items-stretch mt-[32px] md:mt-[64px] flex-1 md:gap-0">
        {list.map((v) => (
          <Link href={v.href} key={v.title} className="block flex-1 flex">
            <div
              // 修复1：使用v.image作为背景色，同时设置flex布局让内容垂直居中
              className={`${v.image} flex flex-col justify-end items-center md:flex-row md:items-end md:justify-center h-full md:h-auto pb-[16px] md:pb-[40px] overflow-hidden ${v.className} md:-ml-[18px] md:rounded-none flex-1 cursor-pointer`}
            >
              {/* 修复2：竖排容器添加高度，确保文字垂直排列空间 */}
              <div className="flex flex-col md:flex-row gap-[4px] md:gap-[8px] items-center justify-center md:min-h-[132px]">
                {/* 中文竖排 */}
                <div className="md:[writing-mode:vertical-rl] md:[text-orientation:mixed] text-white text-[12px] md:text-[24px] tracking-wider md:self-end font-bold">
                  {v.title}
                </div>
                {/* 英文竖排（翻转后正向显示） */}
                <div className="md:[writing-mode:vertical-rl] md:[text-orientation:mixed] text-white/65 md:text-white/80 text-[11px] md:text-[14px] md:self-end text-center leading-tight">
                  {v.desc}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
