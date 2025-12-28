"use client";
import { Divider } from "antd";
import Image from "next/image";
import { configResponsive, useResponsive } from "ahooks";
import { useState } from "react";
import { get } from "lodash";
import { a } from "./a";
import { LayoutGrid } from "@/components/swiper/layout";

configResponsive({
  middle: 768,
});
const tag = [
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
  },
  {
    en: "Print Production",
    zh: "各類印刷",
    key: "a",
  },
];
export default function Service() {
  const responsive = useResponsive();
  const [keys, setKeys] = useState("c");
  if (!responsive?.middle) {
    return (
      <div className="flex-1 bg-[#0A090F] h-screen px-[16px] py-[28px] overflow-auto">
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
          list={tag}
          renderItem={(item) => (
            <div
              className="p-[16px] space-y-2 flex-1 flex items-center justify-center flex-col"
              onClick={() => setKeys(item.key)}
            >
              <div
                className="text-gray-500 text-[11px] leading-[12px] mb-[16px]"
                style={{
                  opacity: keys !== item.key ? "0.65" : "1",
                }}
              >
                {item.en}
              </div>
              <div
                className="text-white text-[14px] leading-[20px]"
                style={{
                  opacity: keys !== item.key ? "0.65" : "1",
                }}
              >
                {item.zh}
              </div>
            </div>
          )}
        />
        <div className="flex items-center justify-start my-[12px]">
          <Image src="/home-2/dd.png" alt="2" width={256} height={18} />
        </div>
        <div className="grid grid-cols-2 gap-[8px]">
          {get(a, `${keys}`, [] as any[]).map((item) => {
            console.log(item.second);
            console.log(item.first);
            return (
              <div
                key={item.path}
                className="bg-[#222222] w-full aspect-[1/1] flex items-center justify-center overflow-hidden relative"
              >
                {/* <img
                  src={item.path}
                  alt={item.description}
                  className="aspect-[1/1]"
                /> */}
                <div className="flex flex-col absolute bottom-0 left-0 bg-[rgba(0,0,0,0.5)] w-full p-[12px] text-white text-[12px] justify-between h-full hover:bg-transparent">
                  <div className="text-[12px] text-white">{item.second}</div>
                  <div className="text-[12px] text-white">{item.first}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  return (
    <div className="flex-1 h-screen overflow-auto relative bg-[#0A090F] p-[44px] flex flex-col">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 w-full">
        {/* Mobile Title */}

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
            <Image src="/home-2/dd.png" alt="2" width={256} height={18} />
          </div>
          <div className="grid grid-cols-6 gap-[16px]">
            {tag.map((item) => {
              return (
                <div
                  key={item.en}
                  className="py-[26px] border-y border-[rgba(255,255,255,0.1)] cursor-pointer"
                  onClick={() => setKeys(item.key || "")}
                >
                  <div
                    className="text-[12px] font-[300] leading-[18px] text-white mb-[12px]"
                    style={{
                      opacity: keys !== item.key ? "0.65" : "1",
                    }}
                  >
                    {item.en}
                  </div>
                  <div
                    className="text-[16px] font-regular text-white leading-[14px]"
                    style={{
                      opacity: keys !== item.key ? "0.65" : "1",
                    }}
                  >
                    {item.zh}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-start mt-[22px]">
            <Image src="/home-2/dd.png" alt="2" width={256} height={18} />
          </div>
        </div>
        <div className="flex-1 overflow-x-hidden relative">
          <div className="overflow-x-hidden ">
            <div className="grid grid-cols-4 gap-[16px] overflow-x-hidden ">
              {get(a, `${keys}`, [] as any[]).map((item, index) => (
                <div
                  key={index}
                  className="bg-[#222222] w-full aspect-[1/1] flex items-center justify-center overflow-hidden relative cursor-pointer"
                >
                  <img
                    src={item.path}
                    alt={item.description}
                    className="aspect-[1/1]"
                  />
                  <div className="flex flex-col absolute bottom-0 left-0 bg-[rgba(0,0,0,0.5)] w-full p-[12px] text-white text-[12px] justify-between h-full hover:bg-transparent">
                    <div className="text-[12px] text-white">{item.company}</div>
                    <div className="text-[12px] text-white">
                      {item.explanation}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* <div
            className="h-[124px] w-full absolute bottom-0 left-0 z-[0]"
            style={{
              background:
                "linear-gradient(180deg, rgba(10, 9, 15, 0) 0%, rgba(10, 9, 15, 1) 100%)",
            }}
          ></div> */}
        </div>
      </div>
    </div>
  );
}
