import Image from "next/image";

const list = [
  {
    title: "品牌規劃",
    desc: "Branding Strategy",
    image: "bg-[#a23e00]", // 注意：颜色值格式统一（如#a23e00无需加[]）
    className: "[clip-path:polygon(0_0,100%_0,calc(100%_-_18px)_100%,0_100%)]",
  },
  {
    title: "網站設計",
    desc: "Website Design",
    image: "bg-[#FF6699]",
    className:
      "[clip-path:polygon(18px_0,100%_0,calc(100%_-_18px)_100%,0_100%)]",
  },
  {
    title: "社群行銷",
    desc: "Social Media Marketing",
    image: "bg-[#FF6700]",
    className:
      "[clip-path:polygon(18px_0,100%_0,calc(100%_-_18px)_100%,0_100%)]",
  },
  {
    title: "口碑行銷",
    desc: "WOM Marketing",
    image: "bg-[#aF6600]",
    className:
      "[clip-path:polygon(18px_0,100%_0,calc(100%_-_18px)_100%,0_100%)]",
  },
  {
    title: "廣告投放",
    desc: "Digital Advertising",
    image: "bg-[#Fa6600]",
    className:
      "[clip-path:polygon(18px_0,100%_0,calc(100%_-_18px)_100%,0_100%)]",
  },
  {
    title: "各類印刷",
    desc: "Print Production",
    image: "bg-[#F16610]",
    className:
      "[clip-path:polygon(18px_0,100%_0,calc(100%_-_18px)_100%,0_100%)]",
  },
];

export default function Example() {
  return (
    <div className="flex-1 min-h-screen bg-black py-[44px] px-[64px] flex flex-col">
      {/* 顶部图片 */}
      <div className="flex items-center justify-between">
        <Image
          src="/home-2/company.png"
          alt="company"
          width={320}
          height={32}
        />
        <Image src="/home-2/logo.png" alt="logo" width={264} height={48} />
      </div>

      {/* 核心内容区：竖排文字列表 */}
      <div className="flex justify-between items-stretch mt-[64px] flex-1">
        {list.map((v) => (
          <div
            key={v.title}
            // 修复1：使用v.image作为背景色，同时设置flex布局让内容垂直居中
            className={`${v.image} flex items-end justify-center flex-1 pb-[40px] overflow-hidden ${v.className}  -ml-[18px]`}
          >
            {/* 修复2：竖排容器添加高度，确保文字垂直排列空间 */}
            <div className="flex gap-[8px] items-center min-h-[132px]">
              {/* 中文竖排 */}
              <div className="[writing-mode:vertical-rl] [text-orientation:mixed] text-white text-[24px] tracking-wider self-start">
                {v.title}
              </div>
              {/* 英文竖排（翻转后正向显示） */}
              <div className="[writing-mode:vertical-rl] [text-orientation:mixed] text-white text-[14px] self-end">
                {v.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
