"use client";
import { Divider } from "antd";
import Image from "next/image";
import { configResponsive, useResponsive } from "ahooks";
import { LeftNav } from "@/components/left-nav/left-nav";
import { Section } from "./Section";
import { ProcessGrid } from "./ProcessGrid";

configResponsive({
  middle: 768,
});
const servicesImageBuilding = [
  {
    step: "Step丨01",
    title: "企業診斷",
    desc: "這裡需要填充個副文案介紹，最好兩行文字。這裡需要填充個副文。",
  },
  {
    step: "Step丨02",
    title: "品牌形象規劃",
    desc: "這裡需要填充個副文案介紹，最好兩行文字。這裡需要填充個副文。",
  },
  {
    step: "Step丨03",
    title: "CIS 企業識別設計",
    desc: "這裡需要填充個副文案介紹，最好兩行文字。這裡需要填充個副文。",
  },
  {
    step: "Step丨04",
    title: "VI 視覺識別規劃",
    desc: "這裡需要填充個副文案介紹，最好兩行文字。這裡需要填充個副文。",
  },
  {
    step: "Step丨04",
    title: "Logo 設計",
    desc: "這裡需要填充個副文案介紹，最好兩行文字。這裡需要填充個副文。",
  },
];

const servicesDesignExecution = [
  {
    step: "Step丨01",
    title: "識別應用設計",
    desc: "這裡需要填充個副文案介紹，最好兩行文字。這裡需要填充個副文。",
  },
  {
    step: "Step丨02",
    title: "包裝設計",
    desc: "這裡需要填充個副文案介紹，最好兩行文字。這裡需要填充個副文。",
  },
  {
    step: "Step丨03",
    title: "印刷品設計",
    desc: "這裡需要填充個副文案介紹，最好兩行文字。這裡需要填充個副文。",
  },
];
const capabilities: any[] = [
  {
    title: "Identity Building",
    description:
      "從企業戰略出發，深入理解品牌現況與挑戰，進而規劃完整的品牌形象策略。透過 CIS 與 VI，建立品牌的核心視覺語言，並設計出能長期發揮作用的 Logo 與識別系統，讓品牌擁有清晰、一致且具延展性的基礎。",
  },
  {
    title: "Design Execution",
    description:
      "在建立清晰的品牌形象後，我們將其轉化為具體的設計應用，涵蓋識別系統應用、產品包裝設計、印刷品與商業物料製作。這些設計不只是視覺上的呈現，更是能夠協助品牌在市場中被辨識、被信任的具體工具。",
  },
];
const brandingSteps: any[] = [
  {
    id: "1",
    number: "01",
    title: "企業診斷",
    description:
      "這裡需要填充相關文案介紹，最好兩行文字。這裡需要填充相關文案。",
  },
  {
    id: "2",
    number: "02",
    title: "品牌形象規劃",
    description:
      "這裡需要填充相關文案介紹，最好兩行文字。這裡需要填充相關文案。",
  },
  {
    id: "3",
    number: "03",
    title: "CIS 企業識別設計",
    description:
      "這裡需要填充相關文案介紹，最好兩行文字。這裡需要填充相關文案。",
  },
  {
    id: "4",
    number: "04",
    title: "VI 視覺識別規劃",
    description:
      "這裡需要填充相關文案介紹，最好兩行文字。這裡需要填充相關文案。",
  },
  {
    id: "5",
    number: "05",
    title: "Logo 設計",
    description:
      "這裡需要填充相關文案介紹，最好兩行文字。這裡需要填充相關文案。",
  },
];
const designSteps: any[] = [
  {
    id: "6",
    number: "01",
    title: "識別應用設計",
    description:
      "這裡需要填充相關文案介紹，最好兩行文字。這裡需要填充相關文案。",
  },
  {
    id: "7",
    number: "02",
    title: "包裝設計",
    description:
      "這裡需要填充相關文案介紹，最好兩行文字。這裡需要填充相關文案。",
  },
  {
    id: "8",
    number: "03",
    title: "印刷品設計",
    description:
      "這裡需要填充相關文案介紹，最好兩行文字。這裡需要填充相關文案。",
  },
];
export default function ServiceDetail() {
  const responsive = useResponsive();
  if (!responsive.middle) {
    return (
      <div className="h-screen overflow-auto">
        <div className="flex-1 bg-[#0A090F]">
          <LeftNav />
          <div className="h-[54px]"></div>

          {/* Hero Section */}
          <div className="mb-[24px] px-[16px] py-[20px]">
            <img
              src="/example/1.png"
              alt="Business Professional"
              className="w-full h-full object-cover"
            />

            <h2 className="text-[20px] text-white mb-[14px] leading-[24px] mt-[18px]">
              Not just a logo but a living brand.
            </h2>

            <p className="text-[11px] leading-[16px] font-light text-white opacity-[0.65]">
              Logo
              並不是品牌的全部。真正能讓品牌烙印在消費者心中的，是一套完整的系統：從定位、識別到視覺的統一性。當品牌能清楚表達自己，與消費者產生共鳴，就能被理解、被記住，並在競爭激烈的市場中建立獨特地位。我們相信，品牌的核心不在於視覺的裝飾，而在於如何跟消費者去做一次深層解答，用最精準的語言傳遞價值。
            </p>
          </div>

          {/* Approach Section */}
          <div className="px-[16px] py-[20px]">
            <img
              src="/example/1.png"
              alt="Business Professional"
              className="w-full h-full object-cover"
            />

            <h2 className="text-[20px] text-white mb-[14px] leading-[24px] mt-[18px] mb-[6px]">
              Our Approach
            </h2>
            <p className="text-[11px] leading-[16px] font-light text-white opacity-[0.65]">
              From insight to identity.
            </p>

            <p className="text-[11px] leading-[16px] font-light text-white opacity-[0.65]">
              在設計開始之前，我們不會急於畫出一條線，而是透過深度訪談、產業研究與策略分析，去挖掘品牌最獨特的優勢與個性。我們會協助釐清產品與服務的定位，定義最能代表品牌的關鍵詞與風格，並找出最適切的市場區隔。這些研究結果將轉化為品牌的核心視覺策略，貫穿所有的對外接觸點，從名片、印刷物、網站到社群媒體廣告，確保品牌呈現出一致且專業的形象。在這個過程中，每一份設計都不只是單純的美化，而是為需求實質效益的資產，讓品牌在消費者心中逐漸累積信任與影響力。
            </p>
          </div>

          {/* Capabilities Section */}
          <div className="px-[16px] py-[24px] bg-[rgba(104,104,109,0.1)]">
            <h2 className="text-[20px] text-white mb-[14px] leading-[24px] mt-[6px]">
              Our Capabilities
            </h2>
            <p className="text-[11px] leading-[16px] font-light mb-[14px] text-white opacity-[0.65]">
              Shaping image, executing with precision
            </p>

            <p className="text-[11px] leading-[16px] font-light text-white opacity-[0.65]">
              我們的服務不僅止於設計
              Logo，而是提供一整套從策略到執行的完整解決方案：
            </p>

            <div className="space-y-[10px] flex flex-col gap-[10px] mt-[12px]">
              {capabilities.map((cap, index) => (
                <div key={index} className="border border-border p-[12px] ">
                  <h3 className="text-[16px] leading-[18px] text-white mb-[8px]">
                    {cap.title}
                  </h3>
                  <p className="text-[11px] leading-[16px] font-light text-white opacity-[0.65]">
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Process/Steps Section */}
          <div className="px-[16px] py-[24px]">
            <div className="text-[20px] text-white leading-[24px] mb-[16px]">
              What We Do
            </div>

            <ProcessGrid title="形象塑造" steps={brandingSteps} />
            <ProcessGrid title="形象建造" steps={designSteps} />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex-1 h-screen bg-[#0A090F] py-[20px] px-[16px] md:py-[44px] md:px-[64px] flex flex-col md:h-auto h-0 md:min-h-screen overflow-auto md:h-screen">
      {/* 顶部标题 */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 w-full">
        {/* Mobile Title */}
        <Image
          src="/home-2/mobile-title.png"
          alt="Artist.com"
          width={152}
          height={45}
          className="md:hidden"
        />

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

      {/* 内容区域 */}
      <div className="flex flex-col mb-[88px]">
        <div className="">
          <div className="flex flex-col gap-[4px] mb-[48px]">
            <div className="text-white text-[36px] leading-[42px] font-semibold">
              Not just a logo
            </div>
            <div className="text-white text-[36px] leading-[42px] font-semibold">
              but a living brand.
            </div>
          </div>
          <div className="flex gap-[32px]">
            <div className="text-white text-[16px] leading-[24px] opacity-[65] font-extralight">
              Logo
              並不是品牌的全部。真正能讓品牌烙印在消費者心裡的，是一套完整的系統：從定位、語言到視覺的一致性。當品牌能清楚地表達自己、與消費者產生共鳴，就能被理解、被記住，並在競爭激烈的市場中建立獨特地位。我們相信，品牌的核心不在於視覺的裝飾，而在於如何讓消費者在每一次接觸時，都能感受到相同的價值與態度。
            </div>
            <div className="min-w-[752px] min-h-[460px]">
              <Image
                src="/example/1.png"
                alt="branding"
                width={752}
                height={460}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex gap-[32px]">
          <div className="min-w-[752px]" />

          <div className="flex flex-col gap-[4px] mb-[48px]">
            <div className="text-white text-[36px] leading-[42px] font-semibold mb-[16px]">
              Our Approach
            </div>
            <div className="text-white text-[18px] leading-[42px] !font-normal opacity-[65]">
              From insight to identity.
            </div>
          </div>
        </div>
        <div className="flex gap-[32px] flex-row-reverse">
          <div className="text-white text-[16px] leading-[24px] opacity-[65] font-extralight">
            在設計開始之前，我們不會急於畫出第一條線，而是透過深度訪談、產業研究與策略分析，去挖掘品牌最獨特的優勢與個性。我們會協助釐清產品與服務的定位，定義最能代表品牌的語調與風格，並找出優於同業的市場區隔。這些研究結果將轉化為品牌語言與視覺邏輯，貫穿所有的對外接觸點，從名片、印刷物、網站到社群與廣告，確保品牌呈現出一致而專業的形象。在這個過程中，每一份設計都不只是單純的美化，而是能帶來實際效益的資產，讓品牌在消費者心中逐漸累積信任與影響力。
          </div>
          <div className="min-w-[752px] min-h-[460px]">
            <Image
              src="/example/1.png"
              alt="branding"
              width={752}
              height={460}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col p-[64px] bg-[rgba(104,104,109,0.1)] mt-[88px] -mx-[64px]">
        <div className="flex flex-col">
          <div className="text-white text-[36px] leading-[42px] font-semibold">
            Our Capabilities
          </div>
          <div className="text-white text-[16px] leading-[24px] mb-[32px] !font-normal opacity-[65]">
            Shaping image, executing with precision.
          </div>
          <div className="flex gap-[88px]">
            <div className="text-white text-[16px] leading-[24px]">
              我們的服務不僅止於設計
              Logo，而是提供一整套從策略到執行的完整解決方案：
            </div>
            <div className="flex gap-[16px]">
              <div className="p-[24px] border-[1px] border-[rgba(255,255,255,0.1)] bg-[rgba(20,19,24,1)]">
                <div className="text-white text-[18px] leading-[21px] font-normal mb-[16px]">
                  Identity Building
                </div>
                <div className="text-white text-[14px] leading-[20px] font-light opacity-[65]">
                  從企業診斷出發，深入理解品牌現況與挑戰，進而規劃完整的品牌形象策略。透過
                  CIS與 VI，建立品牌的核心視覺語言，並設計出能長期發揮作用的
                  Logo 與識別系統，讓品牌擁有清晰、一致且具延展性的基礎。
                </div>
              </div>
              <div className="p-[24px] border-[1px] border-[rgba(255,255,255,0.1)] bg-[rgba(20,19,24,1)]">
                <div className="text-white text-[18px] leading-[21px] font-normal mb-[16px]">
                  Design Execution
                </div>
                <div className="text-white text-[14px] leading-[20px] font-light opacity-[65]">
                  在建立清晰的品牌形象後，我們將其轉化為具體的設計應用，涵蓋識別系統應用、產品與包裝設計、印刷品與商業物料製作。這些設計不只是視覺上的呈現，更是能夠協助品牌在市場中被辨識、被信任的具體工具。
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[88px] mb-[40px]">
        <div className="text-white text-[36px] leading-[42px] font-semibold flex justify-center items-center ">
          What We Do
        </div>
        <div className="">
          <div className="text-white text-[16px] leading-[24px] font-normal mb-[32px] mt-[40px]">
            形象塑造
          </div>
          <div className="grid grid-cols-5 gap-[16px]">
            {servicesImageBuilding.map((v) => {
              return (
                <div
                  key={v.title}
                  className="border-y-[1px] border-[rgba(255,255,255,0.1)] py-[24px]"
                >
                  <div className="text-white text-[12px] leading-[18px] font-light mb-[12px]">
                    {v.step}
                  </div>
                  <div className="text-white text-[16px] leading-[24px] font-normal mb-[24px]">
                    {v.title}
                  </div>
                  <div className="text-white text-[12px] leading-[18px] font-light">
                    {v.desc}
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <div className="text-white text-[16px] leading-[24px] font-normal mb-[32px] mt-[40px]">
              設計執行
            </div>
            <div className="grid grid-cols-5 gap-[16px]">
              {servicesDesignExecution.map((v) => {
                return (
                  <div
                    key={v.title}
                    className="border-y-[1px] border-[rgba(255,255,255,0.1)] py-[24px]"
                  >
                    <div className="text-white text-[12px] leading-[18px] font-light mb-[12px]">
                      {v.step}
                    </div>
                    <div className="text-white text-[16px] leading-[24px] font-normal mb-[24px]">
                      {v.title}
                    </div>
                    <div className="text-white text-[12px] leading-[18px] font-light">
                      {v.desc}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
