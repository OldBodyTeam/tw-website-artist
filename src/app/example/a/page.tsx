import Image from "next/image";

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

export default function ServiceDetail() {
   return (
      <div className="h-screen bg-[#0a090f] text-white overflow-x-hidden overflow-y-auto">
         {/* Hero Section */}
         <section className="px-4 md:px-[112px] py-8 md:py-[88px] border-b border-white/10">
            <div className="max-w-[1264px] mx-auto">
               <h1 className="text-3xl md:text-[48px] font-bold mb-4 md:mb-6">
                  亞堤思新創整合行銷
               </h1>
               <p className="text-lg md:text-[24px] mb-6 md:mb-8 leading-snug">
                  Not just a logo<br />
                  but a living brand.
               </p>
               <p className="text-sm md:text-[16px] leading-relaxed text-white/80 mb-6 md:mb-8">
                  Logo 不只是兩條線的排列組合，更不只是黑色與白色的單純，每個細節都攜帶著品牌的個性與價值觀。我們在品牌識別設計上，不會將重新整理客戶的需求或套用單一風格模板，而是從市場定位、消費者洞察與品牌核心出發，建立一套專屬於品牌的識別系統。這個系統除了包含 Logo 本身，還涵蓋字體、色彩、圖形語言、應用延伸等每一處與消費者接觸的視覺元素。我們相信，一個成功的品牌識別不應該只是好看，更要能被理解、被記住，並在競爭激烈的市場中建立獨特地位。我們相信，品牌的核心不在於視覺的裝飾，而在於如何讓消費者在每一次接觸時，都能感受到相同的價值與態度。
               </p>
            </div>
         </section>

         {/* Our Approach Section */}
         <section className="px-4 md:px-[112px] py-8 md:py-[88px]">
            <div className="max-w-[1264px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[88px]">
               <div className="order-2 md:order-1">
                  <Image
                     src="/assets/example-a/service-image.png"
                     alt="Our Approach"
                     width={752}
                     height={460}
                     className="w-full h-auto rounded-lg"
                  />
               </div>
               <div className="order-1 md:order-2">
                  <h2 className="text-2xl md:text-[36px] font-bold mb-3 md:mb-4">Our Approach</h2>
                  <p className="text-base md:text-[18px] mb-4 md:mb-6 text-white/80">
                     From insight to identity.
                  </p>
                  <p className="text-sm md:text-[16px] leading-relaxed text-white/80">
                     在設計開始之前，我們不會急於畫出第一條線，而是透過深度訪談、產業研究與策略分析，去挖掘品牌最獨特的優勢與個性。我們會協助釐清產品與服務的定位，定義最能代表品牌的語調與風格，並找出優於同業的市場區隔。這些研究結果將轉化為品牌語言與視覺邏輯，貫穿所有的對外接觸點，從名片、印刷物、網站到社群與廣告，確保品牌呈現出一致而專業的形象。在這個過程中，每一份設計都不只是單純的美化，而是能帶來實際效益的資產，讓品牌在消費者心中逐漸累積信任與影響力。
                  </p>
               </div>
            </div>
         </section>

         {/* Our Capabilities Section */}
         <section className="px-4 md:px-[112px] py-8 md:py-[88px] bg-[#68686d] relative">
            <div className="max-w-[1264px] mx-auto">
               <div className="mb-8 md:mb-12">
                  <h2 className="text-2xl md:text-[36px] font-bold mb-3 md:mb-4">Our Capabilities</h2>
                  <p className="text-base md:text-[18px] text-white/80">
                     Shaping image, executing with precision.
                  </p>
               </div>

               <p className="text-sm md:text-[16px] leading-relaxed text-white mb-8 md:mb-12">
                  我們的服務不僅止於設計 Logo，而是提供一整套從策略到執行的完整解決方案：
               </p>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {/* Identity Building Card */}
                  <div className="bg-[#141318] p-5 md:p-6 rounded-lg">
                     <h3 className="text-base md:text-[18px] font-bold mb-3 md:mb-4">Identity Building</h3>
                     <p className="text-xs md:text-[14px] leading-relaxed text-white/80">
                        從企業診斷出發，深入理解品牌現況與挑戰，進而規劃完整的品牌形象策略。透過 CIS與 VI，建立品牌的核心視覺語言，並設計出能長期發揮作用的 Logo 與識別系統，讓品牌擁有清晰、一致且具延展性的基礎。
                     </p>
                  </div>

                  {/* Design Execution Card */}
                  <div className="bg-[#141318] p-5 md:p-6 rounded-lg">
                     <h3 className="text-base md:text-[18px] font-bold mb-3 md:mb-4">Design Execution</h3>
                     <p className="text-xs md:text-[14px] leading-relaxed text-white/80">
                        在建立清晰的品牌形象後，我們將其轉化為具體的設計應用，涵蓋識別系統應用、產品與包裝設計、印刷品與商業物料製作。這些設計不只是視覺上的呈現，更是能夠協助品牌在市場中被辨識、被信任的具體工具。
                     </p>
                  </div>
               </div>
            </div>
         </section>

         {/* What We Do Section */}
         <section className="px-4 md:px-[112px] py-8 md:py-[88px]">
            <div className="max-w-[1264px] mx-auto">
               <h2 className="text-2xl md:text-[36px] font-bold mb-8 md:mb-12 text-center">What We Do</h2>

               {/* Image Building Services */}
               <div className="mb-8 md:mb-12">
                  <h3 className="text-sm md:text-[16px] font-bold mb-4 md:mb-6">形象塑造</h3>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
                     {servicesImageBuilding.map((service, index) => (
                        <div key={index} className="flex flex-col">
                           <div className="text-[10px] md:text-[12px] text-white/60 mb-1 md:mb-2">{service.step}</div>
                           <div className="text-sm md:text-[16px] font-bold mb-1 md:mb-2">{service.title}</div>
                           <div className="text-[10px] md:text-[12px] text-white/70 leading-relaxed">
                              {service.desc}
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Design Execution Services */}
               <div>
                  <h3 className="text-sm md:text-[16px] font-bold mb-4 md:mb-6">設計執行</h3>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
                     {servicesDesignExecution.map((service, index) => (
                        <div key={index} className="flex flex-col">
                           <div className="text-[10px] md:text-[12px] text-white/60 mb-1 md:mb-2">{service.step}</div>
                           <div className="text-sm md:text-[16px] font-bold mb-1 md:mb-2">{service.title}</div>
                           <div className="text-[10px] md:text-[12px] text-white/70 leading-relaxed">
                              {service.desc}
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
}