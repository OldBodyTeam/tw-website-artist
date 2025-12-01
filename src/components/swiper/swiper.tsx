"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { VideoPlayer } from "../video/player";
import { SwiperPagination } from "./swiper-pagination";
import { useState } from "react";
import { Mousewheel } from "swiper/modules";
import { configResponsive, useResponsive } from "ahooks";
import { LayoutGrid } from "./layout";
import Link from "next/link";

configResponsive({
  middle: 768,
});
const tag = [
  {
    en: "Branding Strategy",
    zh: "品牌規劃",
  },
  {
    en: "Web Design",
    zh: "網站設計",
  },
  {
    en: "Social Marketing",
    zh: "社群行銷",
  },
  {
    en: "WOM Marketing",
    zh: "口碑行銷",
  },
  {
    en: "Digital Advertising",
    zh: "廣告投放",
  },
  {
    en: "Print Production",
    zh: "各類印刷",
  },
];
const features = [
  {
    title: "策略思維導向",
    desc: "我們不追求表面上的曝光，而是從品牌定位、受眾分析到行銷布局，為品牌找到明確方向與市場定位。",
  },
  {
    title: "跨領域整合",
    desc: "結合品牌企劃、數位行銷與印刷物製作，從線上到線下，為品牌打造一致且完整的溝通體驗。",
  },
  {
    title: "彈性與客製化",
    desc: "依照品牌現況與需求量身打造，讓預算與成效都能發揮最大效益。",
  },
  {
    title: "重視長期關係",
    desc: "我們不是一次性的外包，而是陪伴品牌成長的夥伴，與客戶建立持續信任與互相支持的關係。",
  },
  {
    title: "協力團隊整合",
    desc: "與多位專業攝影、影音、設計、活動合作夥伴緊密協作，為專案組成最強陣容，打造專屬解決方案。",
  },
];
const items = [
  {
    title: "策略思維導向",
    desc: "我們不追求表面上的曝光，而是從品牌定位、受眾分析到行銷布局，為品牌找到明確方向與市場定位。",
  },
  {
    title: "跨領域整合",
    desc: "結合品牌企劃、數位行銷與印刷物製作，從線上到線下，為品牌打造一致且完整的溝通體驗。",
  },
  {
    title: "彈性與客製化",
    desc: "依照品牌現況與需求量身打造，讓預算與成效都能發揮最大效益。",
  },
  {
    title: "重視長期關係",
    desc: "我們不是一次性的外包，而是陪伴品牌成長的夥伴，與客戶建立持續信任與互相支持的關係。",
  },
  {
    title: "協力團隊整合",
    desc: "與多位專業攝影、影音、設計、活動合作夥伴緊密協作，為專案組成最強陣容，打造專屬解決方案。",
  },
];
const HomeSwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const responsive = useResponsive();
  if (!responsive?.middle) {
    return (
      <div className="w-full h-full relative">
        <div className="w-full h-screen relative ">
          <VideoPlayer />
          <div className="w-full h-full absolute left-0 top-0 flex justify-between pt-[128px] pb-[44px] px-[20px] flex-col bg-[rgba(10,9,15,0.35)]">
            <div className="flex items-end flex-col justify-end text-[32px] font-semibold text-white leading-[60px]">
              <span>懂你的品牌</span>
              <span>說你的故事</span>
            </div>
            <div className="flex items-end justify-between">
              <Image
                src="/home-1/company.svg"
                alt="2"
                width={176}
                height={100}
              />
            </div>
          </div>
        </div>
        <div className="px-[20px] py-[64px] bg-black">
          <div className="text-[14px] font-regular text-white mb-[8px] opacity-80">
            Driven by Detail, Defined by Quality
          </div>
          <div className="text-[32px] leading-[1.2] font-semibold text-white mb-[24px]">
            專注成功每個細節
          </div>
          <div className="text-[14px] leading-[1.6] font-regular text-[#ccc] mb-[40px]">
            行銷的價值不只是曝光，而是為企業帶來真正的效益。我們不提供制式化的行銷包套，而是根據品牌現況，結合短期推廣與長期策略，為每個品牌量身規劃最適合的行銷方案。確保每一分投入都能發揮最大價值，幫助品牌被看見，也被選擇。
          </div>
          <LayoutGrid
            num={3}
            list={tag}
            renderItem={(item) => (
              <div className="p-[16px] space-y-2 flex-1 flex items-center justify-center flex-col">
                <div className="text-gray-500 text-[11px] leading-[12px] mb-[16px]">
                  {item.en}
                </div>
                <div className="text-white text-[14px] leading-[20px]">
                  {item.zh}
                </div>
              </div>
            )}
          />
          <div className="flex items-center justify-start my-[12px]">
            <Image src="/home-2/dd.png" alt="2" width={256} height={18} />
          </div>
          <div className="grid grid-cols-2 gap-[8px]">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="h-[168px] w-full ">
                {index}
              </div>
            ))}
          </div>
          <div className="text-[14px] font-regular text-white mb-[8px] opacity-80 mt-[44px]">
            Amplify Your Brand Value
          </div>
          <div className="text-[20px] leading-[28px] font-semibold text-white mb-[12px]">
            精準｜放大價值
          </div>
          <div className="text-[14px] font-regular text-white mb-[8px] opacity-80 mt-[44px]">
            每一個品牌都值得被看見。我們以整合行銷的專業，針對品牌現況與目標，打造專屬策略，讓您的投入不只是成本，而是能轉化為實際效益的投資。除了行銷策略與數位推廣，我們同時擁有印刷專業與自有設備，能把關從線上到線下的每一個環節，確保品牌不僅在網路上被看見，更能透過精緻實體輸出延伸價值。透過無縫整合，讓您的品牌形象更完整、更具說服力。
          </div>
          <div className="overflow-hidden relative">
            <div className="relative">
              <img
                src="/home-3/1.svg"
                alt="2"
                className="object-cover w-full"
              />
            </div>
            <div className="text-[11px] font-light leading-[16px] text-white my-[12px]">
              透過顧問式諮詢，深入剖析當前挑戰，並結合實務經驗與您共同研討最佳解決方案。
            </div>
          </div>
          <div className="overflow-hidden ">
            <div className="relative">
              <img
                src="/home-3/2.svg"
                alt="2"
                className="object-cover w-full"
              />
            </div>

            <div className="text-[11px] font-light leading-[16px] text-white my-[12px]">
              提供成效檢視，確保穩健前行在正確的道路上。
            </div>
          </div>
          <div className="overflow-hidden relative">
            <div className="relative">
              <img
                src="/home-3/3.svg"
                alt="2"
                className="object-cover w-full"
              />
            </div>
            <div className="text-[11px] font-light leading-[16px] text-white mt-[12px]">
              透過顧問式諮詢，深入剖析當前挑戰，並結合實務經驗與您共同研討最佳解決方案。
            </div>
          </div>
          <div className="text-[14px] font-regular text-white mb-[8px] opacity-80 mt-[44px]">
            Why choose us
          </div>
          <div className="text-[20px] leading-[28px] font-semibold text-white mb-[12px]">
            為什麼選擇我們
          </div>
          <LayoutGrid
            num={2}
            list={features}
            renderItem={(item) => (
              <div className="p-[10px] space-y-2 flex-1 flex items-center justify-center flex-col">
                <div className="text-gray-500 text-[14px] font-regular leading-[20px] mb-[24px] w-full text-left">
                  {item.title}
                </div>
                <div className="text-white text-[11px] font-regular leading-[18px] opacity-[65]">
                  {item.desc}
                </div>
              </div>
            )}
          />
          <div className="text-[14px] font-regular text-white mb-[8px] opacity-80 mt-[44px]">
            The results that can be brought by choosing
          </div>
          <div className="text-[20px] leading-[28px] font-semibold text-white mb-[24px]">
            選擇能帶來的成果
          </div>
          <LayoutGrid
            num={2}
            list={Array.from({ length: 8 })}
            renderItem={(item) => <div className="h-[140px]  w-full"></div>}
          />
          <div
            className="flex items-center justify-center flex-col w-full py-[60px] mt-[48px]"
            style={{
              backgroundImage: "url('/home-1/m.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="mb-[12px] text-[20px] leading-[28px] text-white">
              讓靈感萌芽 使成果綻放
            </div>
            <Link href="/contact">
              <div
                className="text-[11px] leading-[16px] font-medium text-black py-[8px] px-[24px]"
                style={{ backgroundColor: "rgba(248, 255, 49, 1)" }}
              >
                聯絡我們
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return (
    <Swiper
      className="w-full h-full relative"
      onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      modules={[Mousewheel]} // ✅ 启用模块
      mousewheel={responsive.middle} // ✅ 开启鼠标滚轮
      slidesPerView={1}
      spaceBetween={30}
      noSwiping={true}
      noSwipingClass="swiper-no-swiping"
    >
      <SwiperPagination activeIndex={activeIndex} />
      <SwiperSlide>
        {/* 背景色 换图片 */}
        <div className="w-full h-screen relative ">
          <VideoPlayer />
          <div className="w-full h-full absolute left-0 top-0 flex justify-between pt-[128px] pb-[44px] px-[64px] flex-col bg-[rgba(10,9,15,0.35)]">
            <div className="flex items-center justify-end text-[48px] font-semibold text-white leading-[60px]">
              懂你的品牌，說你的故事
            </div>
            <div className="flex items-end justify-between">
              <Image
                src="/home-1/company.svg"
                alt="2"
                width={422}
                height={240}
              />
              <Image src="/home-1/logo.svg" alt="3" width={264} height={48} />
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {/* 无法滚动 滚动隐藏 */}
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
            <div className="flex items-center justify-end my-[22px]">
              <Image src="/home-2/dd.png" alt="2" width={256} height={18} />
            </div>
            <div className="grid grid-cols-6 gap-[16px]">
              {tag.map((item) => {
                return (
                  <div
                    key={item.en}
                    className="py-[26px] border-y border-[rgba(255,255,255,0.1)]"
                  >
                    <div className="text-[12px] font-[300] leading-[18px] text-white mb-[12px]">
                      {item.en}
                    </div>
                    <div className="text-[16px] font-regular text-white leading-[14px]">
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
          <div className="flex items-end justify-between">
            <Image src="/home-2/company.png" alt="2" width={320} height={32} />
            <Image src="/home-1/logo.svg" alt="2" width={264} height={48} />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {/* 按比例图片 */}
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
              <div className="relative">
                <img
                  src="/home-3/1.svg"
                  alt="2"
                  className="object-cover w-full"
                />
              </div>
              <div className="text-[16px] font-regular text-white mt-[16px]">
                透過顧問式諮詢，深入剖析當前挑戰，並結合實務經驗與您共同研討最佳解決方案。
              </div>
            </div>
            <div className="overflow-hidden ">
              <div className="relative">
                <img
                  src="/home-3/2.svg"
                  alt="2"
                  className="object-cover w-full"
                />
              </div>

              <div className="text-[16px] font-regular text-white mt-[16px]">
                提供成效檢視，確保穩健前行在正確的道路上。
              </div>
            </div>
            <div className="overflow-hidden relative">
              <div className="relative">
                <img
                  src="/home-3/3.svg"
                  alt="2"
                  className="object-cover w-full"
                />
              </div>
              <div className="text-[16px] font-regular text-white mt-[16px]">
                透過顧問式諮詢，深入剖析當前挑戰，並結合實務經驗與您共同研討最佳解決方案。
              </div>
            </div>
          </div>

          <div className="flex items-end justify-between">
            <Image src="/home-2/company.png" alt="2" width={320} height={32} />
            <Image src="/home-1/logo.svg" alt="2" width={264} height={48} />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        {/* 加文字 */}
        <div className="w-full h-full bg-black flex flex-col  pt-[96px] pb-[44px] px-[64px] flex overflow-auto">
          <div className="flex  swiper-no-mousewheel flex-col">
            <div className="mb-[24px]">
              <div className="max-w-[528px]">
                <div className="text-[20px] font-regular text-white mb-[8px] opacity-[65]">
                  Why choose us
                </div>
                <div className="text-[48px] leading-[68px] font-regular text-white mb-[16px]">
                  為什麼選擇我們
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-[16px] mb-[32px]">
              {items.map((v) => {
                return (
                  <div
                    key={v.title}
                    className="border-y border-[rgba(255,255,255,0.2)] py-[24px]"
                  >
                    <div className="text-[16px] font-regular text-white mb-[8px] leading-[24px]">
                      {v.title}
                    </div>
                    <div className="text-[16px] font-light text-white opacity-[65] leading-[18px]">
                      {v.desc}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mb-[16px]">
              <div className="max-w-[528px]">
                <div className="text-[20px] font-regular text-white mb-[8px] opacity-[65]">
                  The results that can be brought by choosing
                </div>
                <div className="text-[48px] leading-[68px] font-regular text-white mb-[16px]">
                  選擇能帶來的成果
                </div>
              </div>
            </div>
            {/* <div className="flex items-center justify-end mt-[22px]">
            <Image src="/home-2/dd.png" alt="2" width={256} height={18} />
          </div> */}
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

            <div
              className="flex items-center justify-center flex-col w-full py-[60px] mt-[32px] mb-[48px]"
              style={{
                backgroundImage: "url('/home-1/PC.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="mb-[12px] text-[20px] leading-[28px] text-white">
                讓靈感萌芽 使成果綻放
              </div>
              <div
                className="text-[11px] leading-[16px] font-medium text-black py-[8px] px-[24px]"
                style={{ backgroundColor: "rgba(248, 255, 49, 1)" }}
              >
                聯絡我們
              </div>
            </div>

            <div className="flex items-end justify-between">
              <Image
                src="/home-2/company.png"
                alt="2"
                width={320}
                height={32}
              />
              <Image src="/home-1/logo.svg" alt="2" width={264} height={48} />
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
export { HomeSwiper };
