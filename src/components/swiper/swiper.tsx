"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { VideoPlayer } from "../video/player";
import { SwiperPagination } from "./swiper-pagination";
import { useState } from "react";
import { Mousewheel } from "swiper/modules";
const HomeSwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <Swiper
      className="w-full h-full relative"
      onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      modules={[Mousewheel]} // ✅ 启用模块
      mousewheel={true} // ✅ 开启鼠标滚轮
      slidesPerView={1}
      spaceBetween={30}
    >
      <SwiperPagination activeIndex={activeIndex} />
      <SwiperSlide>
        <VideoPlayer />
        <div className="w-full h-full absolute left-0 top-0 flex justify-between pt-[128px] pb-[44px] px-[64px] flex-col">
          <div className="flex items-center justify-end">
            <Image src="/home-1/story.png" alt="1" width={528} height={68} />
          </div>
          <div className="flex items-end justify-between">
            <Image src="/home-1/company.png" alt="2" width={422} height={240} />
            <Image src="/home-1/logo.png" alt="3" width={264} height={48} />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-full bg-black flex flex-col  pt-[96px] pb-[44px] px-[64px]">
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
            <div className="flex items-center justify-end mt-[22px]">
              <Image src="/home-2/dd.png" alt="2" width={256} height={18} />
            </div>
          </div>
          <div className="flex-1 grid grid-cols-4 gap-[16px] overflow-x-hidden overflow-y-auto">
            {Array.from({ length: 40 }).map((_, index) => (
              <div key={index} className="bg-[#222222] w-full h-[304px]">
                1
              </div>
            ))}
          </div>

          <div className="flex items-end justify-between">
            <Image src="/home-2/company.png" alt="2" width={320} height={32} />
            <Image src="/home-2/logo.png" alt="2" width={264} height={48} />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-full bg-black flex flex-col  pt-[96px] pb-[44px] px-[64px]">
          <div className="mb-[16px] flex flex-col">
            <div className="w-[528px] self-end">
              <div className="text-[20px] font-regular text-white mb-[8px]">
                Amplify Your Brand Value
              </div>
              <div className="text-[48px] leading-[68px] font-regular text-white mb-[16px]">
                精準｜放大價值
              </div>
              <div className="text-[16px] font-regular text-white">
                每一個品牌都值得被看見。我們以整合行銷的專業，針對品牌現況與目標，打造專屬策略，讓您的投入不只是成本，而是能轉化為實際效益的投資。除了行銷策略與數位推廣，我們同時擁有印刷專業與自有設備，能把關從線上到線下的每一個環節，確保品牌不僅在網路上被看見，更能透過精緻實體輸出延伸價值。透過無縫整合，讓您的品牌形象更完整、更具說服力。
              </div>
            </div>
            <div className="flex items-center justify-end mt-[22px] self-start">
              <Image src="/home-2/dd.png" alt="2" width={256} height={18} />
            </div>
          </div>
          <div className="flex-1 grid grid-cols-3 gap-[20px] overflow-x-hidden overflow-y-auto">
            <div className="overflow-hidden relative">
              <div className="relative h-[258px]">
                <Image
                  src="/home-3/1.png"
                  alt="2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-[16px] font-regular text-white mt-[16px]">
                透過顧問式諮詢，深入剖析當前挑戰，並結合實務經驗與您共同研討最佳解決方案。
              </div>
            </div>
            <div className="overflow-hidden ">
              <div className="relative h-[258px]">
                <Image
                  src="/home-3/2.png"
                  alt="2"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="text-[16px] font-regular text-white mt-[16px]">
                提供成效檢視，確保穩健前行在正確的道路上。
              </div>
            </div>
            <div className="overflow-hidden relative">
              <div className="relative h-[258px]">
                <Image
                  src="/home-3/3.png"
                  alt="2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-[16px] font-regular text-white mt-[16px]">
                透過顧問式諮詢，深入剖析當前挑戰，並結合實務經驗與您共同研討最佳解決方案。
              </div>
            </div>
          </div>

          <div className="flex items-end justify-between">
            <Image src="/home-2/company.png" alt="2" width={320} height={32} />
            <Image src="/home-2/logo.png" alt="2" width={264} height={48} />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-full bg-black flex flex-col  pt-[96px] pb-[44px] px-[64px]">
          <div className="mb-[16px]">
            <div className="max-w-[528px]">
              <div className="text-[20px] font-regular text-white mb-[8px]">
                Partner
              </div>
              <div className="text-[48px] leading-[68px] font-regular text-white mb-[16px]">
                合作夥伴
              </div>
              <div className="text-[16px] font-regular text-white">
                在快速變革的商業生態中，我們始終相信：真正的合作夥伴關係是雙向賦能，更是彼此成長的見證。
                我們珍視每一次與志同道合者的相遇——無論是技術創新的突破、市場邊界的拓展，還是服務體系的陞級，都因您的專業與信任而更具可能性。
              </div>
            </div>
            <div className="flex items-center justify-end mt-[22px]">
              <Image src="/home-2/dd.png" alt="2" width={256} height={18} />
            </div>
          </div>
          <div className="flex-1 grid grid-cols-4 overflow-x-hidden overflow-y-auto gap-px bg-[rgba(255,255,255,0.2)]">
            <div className="flex items-center justify-center bg-black">
              <Image src="/home-4/1.png" alt="2" width={190} height={92} />
            </div>
            <div className="flex items-center justify-center bg-black">
              <Image src="/home-4/2.png" alt="2" width={235} height={114} />
            </div>
            <div className="flex items-center justify-center bg-black">
              <Image src="/home-4/3.png" alt="2" width={96} height={96} />
            </div>
            <div className="flex items-center justify-center bg-black">
              <Image src="/home-4/4.png" alt="2" width={198} height={96} />
            </div>
            <div className="flex items-center justify-center bg-black">
              <Image src="/home-4/5.png" alt="2" width={50} height={100} />
            </div>
            <div className="flex items-center justify-center bg-black">
              <Image src="/home-4/6.png" alt="2" width={252} height={122} />
            </div>
            <div className="flex items-center justify-center bg-black">
              <Image src="/home-4/7.png" alt="2" width={100} height={100} />
            </div>
            <div className="flex items-center justify-center bg-black">
              <Image src="/home-4/8.png" alt="2" width={182} height={88} />
            </div>
          </div>

          <div className="flex items-end justify-between">
            <Image src="/home-2/company.png" alt="2" width={320} height={32} />
            <Image src="/home-2/logo.png" alt="2" width={264} height={48} />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
export { HomeSwiper };
