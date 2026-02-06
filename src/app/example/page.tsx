"use client";
import Image from "next/image";
import { useMemo, useState } from "react";
import { a, type ExampleItem } from "./a";
import { LayoutGrid } from "@/components/swiper/layout";

const tags = [
  {
    en: "Branding Strategy",
    zh: "品牌規劃",
    key: "c",
  },
  {
    en: "Web Design",
    zh: "網站設計",
    key: "e",
  },
  {
    en: "Social Marketing",
    zh: "社群行銷",
    key: "d",
  },
  {
    en: "WOM Marketing",
    zh: "口碑行銷",
    key: "b",
  },
  {
    en: "Digital Advertising",
    zh: "廣告投放",
    key: "f",
  },
  {
    en: "Print Production",
    zh: "各類印刷",
    key: "a",
  },
] as const;

type TagKey = (typeof tags)[number]["key"];

const PortfolioCard = ({ item }: { item: ExampleItem }) => {
  const imageSrc = `/${item.path}`;
  const imageAlt = item.description || item.first || item.second || "portfolio";

  return (
    <div className="bg-graphite w-full aspect-[1/1] flex items-center justify-center overflow-hidden relative">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        sizes="(min-width: 768px) 25vw, 50vw"
        className="object-cover"
      />
      <div className="flex flex-col absolute bottom-0 left-0 bg-black/50 w-full p-[12px] text-white text-[12px] justify-between h-full hover:bg-transparent">
        <div className="text-[12px] text-white">{item.second}</div>
        <div className="text-[12px] text-white">{item.first}</div>
      </div>
    </div>
  );
};

export default function Service() {
  const [activeKey, setActiveKey] = useState<TagKey>(tags[0].key);
  const selectedItems = useMemo(() => a[activeKey] ?? [], [activeKey]);

  return (
    <div className="flex-1 bg-ink min-h-screen">
      {/* Mobile */}
      <div className="md:hidden h-screen px-[16px] py-[28px] overflow-auto">
        <div className="mt-[56px]">
          <div className="text-[11px] font-medium text-white mb-[4px] opacity-80 leading-[12px]">
            Driven by Detail, Defined by Quality
          </div>
          <div className="text-[20px] leading-[28px] font-semibold text-white mb-[12px]">
            專注成功每個細節
          </div>
          <div className="text-[11px] leading-[16px] font-light text-white opacity-60 mb-[34px]">
            行銷的價值不只是曝光，而是為企業帶來真正的效益。我們不提供制式化的行銷包套，而是根據品牌現況，結合短期推廣與長期策略，為每個品牌量身規劃最適合的行銷方案。確保每一分投入都能發揮最大價值，幫助品牌被看見，也被選擇。
          </div>
        </div>
        <LayoutGrid
          num={3}
          list={tags}
          renderItem={(item) => {
            const isActive = activeKey === item.key;

            return (
              <button
                type="button"
                className="p-[16px] space-y-2 flex-1 flex items-center justify-center flex-col"
                onClick={() => setActiveKey(item.key)}
              >
                <div
                  className={`text-gray-500 text-[11px] leading-[12px] mb-[16px] ${
                    isActive ? "opacity-100" : "opacity-65"
                  }`}
                >
                  {item.en}
                </div>
                <div
                  className={`text-white text-[14px] leading-[20px] ${
                    isActive ? "opacity-100" : "opacity-65"
                  }`}
                >
                  {item.zh}
                </div>
              </button>
            );
          }}
        />
        <div className="flex items-center justify-start my-[12px]">
          <Image src="/home-2/dd.png" alt="divider" width={256} height={18} />
        </div>
        <div className="grid grid-cols-2 gap-[8px] [content-visibility:auto] [contain-intrinsic-size:1px_800px]">
          {selectedItems.map((item) => (
            <PortfolioCard key={item.path} item={item} />
          ))}
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex flex-1 h-screen overflow-auto relative bg-ink p-[44px] flex-col">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 w-full">
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
        <div className="mt-[32px] h-px bg-white/10" />

        <div className="flex-1 flex flex-col ">
          <div className="mb-[16px]">
            <div className="max-w-[850px]">
              <div className="text-[20px] font-regular text-white mb-[8px]">
                Driven by Detail, Defined by Quality
              </div>
              <div className="text-[48px] leading-[68px] font-regular text-white mb-[16px]">
                專注成功每個細節
              </div>
              <div className="text-[16px] font-regular text-white">
                行銷的價值不只是曝光，而是為企業帶來真正的效益。我們不提供制式化的行銷包套，而是根據品牌現況，結合短期推廣與長期策略，為每個品牌量身規劃最適合的行銷方案。確保每一分投入都能發揮最大價值，幫助品牌被看見，也被選擇。
              </div>
            </div>
            <div className="flex items-center justify-end my-[22px]">
              <Image src="/home-2/dd.png" alt="divider" width={256} height={18} />
            </div>
            <div className="grid grid-cols-6 gap-[16px]">
              {tags.map((item) => {
                const isActive = activeKey === item.key;

                return (
                  <button
                    key={item.en}
                    type="button"
                    className="py-[26px] border-y border-white/10 cursor-pointer"
                    onClick={() => setActiveKey(item.key)}
                  >
                    <div
                      className={`text-[12px] font-[300] leading-[18px] text-white mb-[12px] ${
                        isActive ? "opacity-100" : "opacity-65"
                      }`}
                    >
                      {item.en}
                    </div>
                    <div
                      className={`text-[16px] font-regular text-white leading-[14px] ${
                        isActive ? "opacity-100" : "opacity-65"
                      }`}
                    >
                      {item.zh}
                    </div>
                  </button>
                );
              })}
            </div>
            <div className="flex items-center justify-start mt-[22px]">
              <Image src="/home-2/dd.png" alt="divider" width={256} height={18} />
            </div>
          </div>
          <div className="flex-1 overflow-x-hidden relative">
            <div className="overflow-x-hidden ">
              <div className="grid grid-cols-4 gap-[16px] overflow-x-hidden [content-visibility:auto] [contain-intrinsic-size:1px_1200px]">
                {selectedItems.map((item) => (
                  <PortfolioCard key={item.path} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
