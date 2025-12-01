"use client";
import { Divider } from "antd";
import Image from "next/image";
import { configResponsive, useResponsive } from "ahooks";

configResponsive({
  middle: 768,
});
export default function Service() {
  const responsive = useResponsive();
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
        <div className="flex items-center justify-start mb-[12px]">
          <Image src="/home-2/dd.png" alt="2" width={256} height={18} />
        </div>
        <div className="grid grid-cols-2 gap-[8px]">
          {Array.from({ length: 24 }).map((_, index) => (
            <div
              className="rounded-[8px] bg-[rgba(255,255,255,0.1)] h-[168px]"
              key={index}
            ></div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="flex-1 h-screen relative bg-[#0A090F] p-[44px] flex flex-col">
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

      <div className="flex-1 flex flex-col overflow-hidden">
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
        </div>
        <div className="flex-1 overflow-x-hidden overflow-y-hidden swiper-no-mousewheel relative">
          <div className="overflow-x-hidden overflow-y-auto h-full">
            <div className="grid grid-cols-4 gap-[16px] overflow-x-hidden overflow-y-auto swiper-no-mousewheel">
              {Array.from({ length: 40 }).map((_, index) => (
                <div key={index} className="bg-[#222222] w-full h-[304px]">
                  1
                </div>
              ))}
            </div>
          </div>

          <div
            className="h-[124px] w-full absolute bottom-0 left-0 z-[9999]"
            style={{
              background:
                "linear-gradient(180deg, rgba(10, 9, 15, 0) 0%, rgba(10, 9, 15, 1) 100%)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
