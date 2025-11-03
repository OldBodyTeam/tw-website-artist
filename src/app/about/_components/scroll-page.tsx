"use client";
import React from "react";
import Image from "next/image";

// 提取常量
const BRAND_VALUES = [
  "從夥伴的角度出發，給予實在的建議與行動",
  "重視每個環節，因為細節決定成效",
  "隨市場快速變化，靈活調整方法，保持品牌競爭力。",
];

const CORE_VALUES = [
  {
    title: "INSIGHT",
    description:
      "以市場觀點和消費者體驗，挖掘品牌的獨特價值。我們相信，唯有真正看見品牌的本質，才能規劃出能創造影響力的行銷策略。",
  },
  {
    title: "DETAIL",
    description:
      "把關每一個設計、每一次執行。因為我們深知，專業是由無數細節累積而成，細節決定最終的成效。",
  },
  {
    title: "GROWTH",
    description:
      "將每個品牌視為自己的品牌。亞堤思不只是服務供應商，而是長期合作的夥伴，支持客戶在挑戰中突破，持續放大品牌價值。",
  },
];

// 子组件：圆点列表项
const BulletPoint = ({ text }: { text: string }) => (
  <div className="flex items-center gap-2">
    <div className="w-2 h-2 rounded-full bg-[#F8FF31] flex-shrink-0" />
    <div className="text-base">{text}</div>
  </div>
);

// 子组件：粘性卡片
interface StickyCardProps {
  number: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  topOffset: number;
  isLast?: boolean;
}

const StickyCard = ({
  number,
  title,
  subtitle,
  children,
  topOffset,
  isLast = false,
}: StickyCardProps) => (
  <div
    className={`w-full ${
      isLast ? "h-screen" : "min-h-screen"
    } sticky bg-black flex justify-between py-9`}
    style={{ top: `${topOffset}px` }}
  >
    <div className="flex gap-6">
      <div className="text-xl text-white mt-9">{number}</div>
      <div className="flex flex-col gap-0.5 w-[560px]">
        <div className="text-4xl text-white font-semibold">{title}</div>
        <div className="text-4xl text-white">{subtitle}</div>
        <div className="flex flex-col gap-6 text-white text-base mt-6">
          {children}
        </div>
      </div>
    </div>
    <div className="flex-shrink-0">
      <Image
        src="/contact/p.png"
        alt={title}
        width={450}
        height={700}
        className="object-cover"
      />
    </div>
  </div>
);

// 子组件：核心价值项
const CoreValueItem = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="space-y-2">
    <div className="font-semibold text-lg text-[#F8FF31]">{title}</div>
    <div className="text-gray-300">{description}</div>
  </div>
);

// 主组件
const ScrollPage = () => {
  return (
    <div className="overflow-x-visible overflow-y-auto w-full h-full">
      {/* 第一部分：品牌介绍 */}
      <div className="w-full h-full relative flex items-center">
        <div className="text-white w-full max-w-[680px]">
          <h1 className="text-4xl font-bold leading-tight">
            品牌的價值來自於不斷的積累與深耕
          </h1>

          <p className="mt-6 text-base leading-relaxed text-gray-300">
            我們秉持誠懇、細心與專業，陪伴企業走過每個成長階段。我們不只專注於單一行銷面向，而是將策略與執行緊密結合，真正為品牌創造影響力。為實現這一理念，我們聚焦三個方向：
          </p>

          <div className="mt-20 flex flex-col gap-5">
            {BRAND_VALUES.map((value, index) => (
              <BulletPoint key={index} text={value} />
            ))}
          </div>

          <div className="mt-12 text-base leading-relaxed text-gray-300 space-y-4">
            <p>
              行銷不是單一面的操作，而是需要結合不同的角度與工具，才能發揮最大效益。
            </p>
            <p>
              這正是我們標誌的設計理念，象徵亞堤思以多元整合的思維，串聯策略、設計、數位與實體，讓每一個面向彼此支撐，共同成就品牌的成長。
            </p>
          </div>

          <p className="mt-8 text-base text-gray-300">
            品牌的核心理念不只是理念本身，而是需要落實在實際策略與行動中。我們將這份理念明確地轉化為。
          </p>
        </div>

        <div className="absolute bottom-0 right-0">
          <Image
            src="/about/1.png"
            alt="品牌視覺"
            width={400}
            height={320}
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* 第二部分：Vision */}
      <StickyCard
        number="01"
        title="Vision"
        subtitle="成為最值得信賴的整合行銷夥伴"
        topOffset={0}
      >
        <p>
          我們相信，每一個品牌都有獨特的價值，需要被看見並被理解。亞堤思的願景是透過專業行銷策略與設計美學，串聯數位與實體的完整行銷方案，幫助企業在快速變動的市場中找到長遠的定位。
        </p>
        <p>
          我們不僅希望為品牌帶來短期效益，更致力於陪伴品牌跨越挑戰、創造長期成長，讓專業成為企業發展的堅實後盾。
        </p>
      </StickyCard>

      {/* 第三部分：Mission */}
      <StickyCard
        number="02"
        title="Mission"
        subtitle="讓行銷回歸本質：專業、透明、有效"
        topOffset={100}
      >
        <p>
          市面上的行銷服務常流於「方案式」與「短期效應」，導致許多企業無法真正受益。亞堤思的使命是傾聽品牌需求，量身打造策略，並且透過數據驗證、嚴謹執行與專業把關，確保每一分行銷投入都能發揮最大效益。
        </p>
        <p>
          我們同時具備自有印刷設備與設計團隊，讓品牌能夠在線上數位曝光與線下實體觸點中保持一致的形象，打造完整且可信任的品牌體驗。
        </p>
      </StickyCard>

      {/* 第四部分：Value */}
      <StickyCard
        number="03"
        title="Value"
        subtitle="專業為基礎，透明為原則，效益為核心"
        topOffset={200}
        isLast={true}
      >
        <div className="space-y-6">
          {CORE_VALUES.map((value, index) => (
            <CoreValueItem
              key={index}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </StickyCard>

      {/* 添加底部占位空间，确保最后一个section可以完整显示 */}
      <div className="h-screen bg-black" />
    </div>
  );
};

export { ScrollPage };
