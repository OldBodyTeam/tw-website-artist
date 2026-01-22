import { ReactNode } from "react";

export interface ServiceImage {
  fileName?: string;
  format?: string;
  path?: string;
}

export interface ServiceCapabilityItem {
  type: string;
  detail: string;
}

export interface ServiceContentItem {
  id: string;
  name: string;
  detail: string;
}

export interface ServiceContentGroup {
  groupName: string;
  content?: string;
  items?: ServiceContentItem[];
}

export interface ServiceWhatWeDoItem {
  type: string;
  detail: string;
}

export interface Service {
  slug: string;
  serviceType: string;
  title: string;
  description: ReactNode;
  ourApproach: {
    title: string;
    subtitle: string;
    content: ReactNode;
  };
  ourCapabilities: {
    title: string;
    subtitle: string;
    content?: string;
    capabilityList?: ServiceCapabilityItem[];
  };
  whatWeDo: {
    title: string;
    contentList?: string[] | ServiceWhatWeDoItem[];
    contentGroups?: ServiceContentGroup[];
  };
  images: ServiceImage[];
}

export const services: Service[] = [
  {
    slug: "print-production",
    serviceType: "各类印刷（Print Production）",
    title: "Precision in print, perfection in brand.",
    description:
      "拥有20余年印刷经验，提供完整印刷解决方案，从设计、印前完稿确认、细部校对，到纸材选择与加工建议（如烫金、打凸、局部上光），每环节提供专业建议，确保作品完美呈现品牌形象。支持1只起印，无论少量或大量印刷，均可提供最适化方案满足品牌需求。",
    ourApproach: {
      title: "Our Approach",
      subtitle: "From design to flawless execution.",
      content: (
        <>
          依靠自有的 Kodak Trendsetter 800 CPT
          製版機與海德堡六色印刷機等專業印刷設備，我們高效完成各類紙品印刷，包括名片、貼紙、吊卡、禮盒、宣傳海報、布條、手冊等。
          <div className="mt-[16px]">
            從設計、校稿到印刷與後加工，每一步我們以細膩工藝與嚴格品管確保成品精準呈現，讓品牌形象更具專業與吸引力。
          </div>
        </>
      ),
    },
    ourCapabilities: {
      title: "Our Capabilities",
      subtitle: "Comprehensive print solutions.",
      content:
        "提供从设计、印前校稿、纸材与加工建议、版面安排的全流程服务，通过专业印刷设备掌控每环节。可满足各类纸品及专案客制化需求，协助品牌精准呈现作品价值与质感。",
    },
    whatWeDo: {
      title: "What We Do",
      contentList: [
        "名片、贴纸、吊卡、礼盒、海报、布条、手册等各类纸品印刷",
        "设计与印前完稿确认、细部校对",
        "纸材选择与加工建议",
        "专案客制化印刷方案",
      ],
    },
    images: [
      {
        fileName: "出版.jpg",
        format: "jpg",
        path: "home-ex/出版.jpg",
      },
      {
        fileName: "印刷.jpg",
        format: "jpg",
        path: "home-ex/印刷.jpg",
      },
    ],
  },
  {
    slug: "digital-advertising",
    serviceType: "廣告投放（Digital Advertising）",
    title: "Turning exposure into action.",
    description:
      "廣告已不僅是單純的曝光，而是影響消費者決策、驅動營收的重要推手。我們根據品牌需求，在 Facebook、Instagram、TikTok、Google、YouTube、LINE 等平台進行精準操盤，讓品牌能在對的時間遇見對的人。",
    ourApproach: {
      title: "Our Approach",
      subtitle: "From strategy to conversion.",
      content: (
        <>
          每一分行行銷投入都發揮最大效益。
          <div className="mt-[16px]"></div>
          從策略規劃、受眾分析到素材製作與投放。優化、調整廣告方向，找出最能引發顧客共鳴的議題，提高廣告轉換率，最終幫助品牌達成營收目標。
        </>
      ),
    },
    ourCapabilities: {
      title: "Our Capabilities",
      subtitle: "Maximizing reach, optimizing impact.",
      content:
        "Meta、Google、TikTok、LINE 平台的廣告投放，到廣告策略規劃、目標受眾與競品市場分析，我們掌握每個環節。文案、圖面與影音素材製作均由我們負責，並持續追蹤數據、分析成效、優化，確保每一分預算都發揮最大效益。",
    },
    whatWeDo: {
      title: "What We Do",
      contentGroups: [
        {
          groupName: "",
          items: [
            {
              id: "01",
              name: "廣告與策略",
              detail: ``,
            },
            {
              id: "02",
              name: "受眾分析與競品研究",
              detail: ``,
            },
            {
              id: "03",
              name: "素材製作（圖文、影音）",
              detail: ``,
            },
            {
              id: "04",
              name: "成效追蹤與優化調整",
              detail: ``,
            },
          ],
        },
      ],
    },
    images: [],
  },
  {
    slug: "wom-marketing",
    serviceType: "口碑营销（WOM Marketing）",
    title: "Trust speaks louder than ads.",
    description:
      "消费者购买前常先「爬文做功课」，除品牌自我塑造外，第三方真实推荐更能建立信任、影响消费决策。口碑营销的力量不在于声量堆叠，而在于真实体验能否引发共鸣，进而转化为消费者实际行动。",
    ourApproach: {
      title: "Our Approach",
      subtitle: "From authenticity to influence.",
      content:
        "注重「真实」与「共鸣」，协助品牌精准挑选调性契合的部落客、KOL与KOC，让其通过自身经验与风格分享内容。合作中从需求确认、关键词规划到文章审核，确保内容兼具真实性与效益，为品牌创造长期稳定曝光；通过真实推荐与多元合作，让品牌不仅被看见，更能被信任，在消费者心中建立影响力。",
    },
    ourCapabilities: {
      title: "Our Capabilities",
      subtitle: "Shaping trust, amplifying influence.",
      content:
        "从合作规划到内容执行，协助品牌在多元管道建立真实可信的口碑影响力。不仅协助媒合合适KOL、KOC与部落客，还提供内容指引、话题营造与社群扩散，确保每一分投入带来实际影响。",
    },
    whatWeDo: {
      title: "What We Do",
      contentList: [
        "KOL / KOC 合作规划",
        "部落客合作规划",
        "品牌需求与内容指引",
        "社群平台口碑扩散",
        "网络平面新闻采购",
      ],
    },
    images: [],
  },
  {
    slug: "branding-strategy",
    serviceType: "品牌規劃（Branding Strategy）",
    title: "Not just a logo, but a living brand.",
    description: (
      <>
        Logo並不是品牌的全部。真正能讓品牌烙印在消費者心裡的，是一套完整的系統：從定位、語言到視覺的一致性。
        <div className="my-[8px]"></div>
        當品牌能清楚地表達自己、與消費者產生共鳴，就能被理解、被記住，並在競爭激烈的市場中建立獨特地位。
        <div className="my-[8px]"></div>
        我們相信，品牌的核心不在於視覺的裝飾，而在於如何讓消費者在每一次接觸時，都能感受到相同的價值與態度。
      </>
    ),
    ourApproach: {
      title: "Our Approach",
      subtitle: "From insight to identity.",
      content: (
        <>
          在設計開始之前，我們不會急於畫出第一條線，而是透過深度訪談、產業研究與策略分析，去挖掘品牌最獨特的優勢與個性。
          <div className="my-[8px]"></div>
          我們會協助釐清產品與服務的定位，並找出優於同業的市場區隔。這些結果將轉化為品牌語言與視覺邏輯，貫穿所有的對外接觸點，從名片、印刷物、網站到社群與廣告，確保品牌呈現出一致而專業的形象。
          <div className="my-[8px]"></div>
          在這個過程中，每一份設計都不只是單純的美化，而是能帶來實際效益的資產，讓品牌在消費者心中逐漸累積信任與影響力。
        </>
      ),
    },
    ourCapabilities: {
      title: "Our Capabilities",
      subtitle: "Shaping image, executing with precision.",
      content:
        "我們的服務不僅止於設計 Logo，而是提供一整套從策略到執行的完整解決方案：",
      capabilityList: [
        {
          type: "Identity Building",
          detail:
            "從企業診斷出發，深入理解品牌現況與挑戰，進而規劃完整的品牌形象策略。透過 CIS或 VI，建立品牌的核心視覺語言，並設計出能長期發揮作用的 Logo 與識別系統，讓品牌擁有清晰、一致且具延展性的基礎。",
        },
        {
          type: "Design Execution",
          detail:
            "在建立清晰的品牌形象後，我們將其轉化為具體的設計應用，涵蓋識別系統應用、產品與包裝設計、印刷品製作。這些設計不只是視覺上的呈現，更是能夠協助品牌在市場中被辨識、被信任的具體工具。",
        },
      ],
    },
    whatWeDo: {
      title: "What We Do",
      contentGroups: [
        {
          groupName: "形象塑造",
          items: [
            {
              id: "01",
              name: "企業診斷",
              detail: `從現況與市場切入找出問題核心，釐清發展方向。\n
協助企業掌握優勢與機會，建立明確成長策略。`,
            },
            {
              id: "02",
              name: "品牌形象規劃",
              detail: `以理念與定位塑造品牌個性，打造獨特識別感。\n
讓品牌在市場中更易被理解、記住並建立信任。`,
            },
            {
              id: "03",
              name: "CIS 企業識別設計",
              detail: `整合理念、視覺與行為規範，打造完整識別架構。\n
協助企業建立一致形象，提升內外溝通效率。`,
            },
            {
              id: "04",
              name: "VI 視覺識別規劃",
              detail: `以色彩、字體與版式建立品牌視覺規則。\n
確保所有呈現一致、美觀，強化辨識度。`,
            },
            {
              id: "05",
              name: "Logo 設計",
              detail: `以圖形語言呈現品牌精神與定位。\n
打造簡潔有力的視覺核心，留下深刻印象。`,
            },
          ],
        },
        {
          groupName: "設計執行",
          items: [
            {
              id: "01",
              name: "識別應用設計",
              detail: `將品牌視覺延伸至線下實際接觸點。\n
讓整體形象更完整統一，提升品牌專業感。`,
            },
            {
              id: "02",
              name: "包裝設計",
              detail: `以美感與功能兼具的設計展現產品特色。\n
強化品牌質感，使商品在陳列中更吸睛。`,
            },
            {
              id: "03",
              name: "印刷品設計",
              detail: `排版與設計呈現品牌延伸。\n
打造兼具質感與實用性的印刷品。`,
            },
          ],
        },
      ],
    },
    images: [],
  },
  {
    slug: "social-media-marketing",
    serviceType: "社群营销（Social Media Marketing）",
    title: "Social isn’t posting, it’s conversing.",
    description:
      "社群平台不仅是信息传递管道，更是与受众互动、培养忠诚度的重要场域。通过策略与创意，让品牌在社群中不仅被看见，更能被记住与持续关注。",
    ourApproach: {
      title: "Our Approach",
      subtitle: "From content to community.",
      content:
        "提供从内容规划、文案撰写、图面设计到影音制作的一站式服务，根据Facebook、Instagram、Threads、TikTok、LINE官方帐号等不同平台特性，为品牌量身打造专属风格。不仅制作内容，更制定策略：从贴文主题设计、时事议题操作到活动策划，逐步建立品牌与粉丝的沟通管道；通过持续互动与讨论热点创造，让粉丝成为品牌最佳代言人，将社群经营转化为品牌资产，扩大影响力并累积与受众的长期关系。",
    },
    ourCapabilities: {
      title: "Our Capabilities",
      subtitle: "让品牌在社群中不只被看见，更能被记住。",
      capabilityList: [
        {
          type: "吸引注意力",
          detail:
            "以创意议题与独特风格吸引受众，让贴文不仅是信息，更是能引发讨论与分享的话题。",
        },
        {
          type: "创造互动",
          detail:
            "通过贴文设计、影音内容与活动策划，建立双向沟通，让粉丝主动参与、产生情感连结。",
        },
        {
          type: "驱动成效",
          detail:
            "结合社群广告投放与数据分析，持续优化策略，并以每季回报方式将成果与数据转化为具体方向，让社群影响力真正带动品牌成长。",
        },
      ],
    },
    whatWeDo: {
      title: "What We Do",
      contentGroups: [
        {
          groupName: "经营平台",
          content: "Facebook、Instagram、Threads、TikTok、LINE 官方帐号",
        },
        {
          groupName: "执行内容",
          content:
            "品牌风格定位、受众分析、内容规划、实体活动规划、文案撰写、图面设计、影音制作",
        },
        {
          groupName: "互动经营",
          content: "粉丝互动、线上活动规划、话题引导、社群参与度提升",
        },
        {
          groupName: "营销优化",
          content: "广告投放、数据追踪、成效分析、策略调整",
        },
      ],
    },
    images: [],
  },
  {
    slug: "web-design",
    serviceType: "网站设计（Web Design）",
    title: "Turning websites into 24/7 brand ambassadors.",
    description:
      "在多元化消费型态中，网站不再只是展示产品的工具，而是品牌与消费者的第一个接触点，也是彰显品牌魅力的重要舞台。一个优质网站能吸引用户停下脚步、感受品牌价值，并促进实际商机。",
    ourApproach: {
      title: "Our Approach",
      subtitle: "Not just a website, but a brand experience.",
      content:
        "从深入理解企业定位与目标受众开始，量身规划网站架构与内容策略；每个网站均依品牌个性与市场竞争力设计，结合营销策略与技术优化，确保网站不仅美观，更能带来实际业务效益。通过RWD技术让网站在各种装置下顺畅呈现，简单易操作的后台管理则让企业轻松掌握内容更新，确保每一个网站都是品牌价值的最佳展现。",
    },
    ourCapabilities: {
      title: "Our Capabilities",
      subtitle: "Focusing on how your website engages users.",
      capabilityList: [
        {
          type: "抓住目光",
          detail:
            "让想法以简洁、视觉化的方式表达，瞬间抓住访客目光，让访客第一时间感受到品牌特色。",
        },
        {
          type: "激发共鸣",
          detail: "让使用者在有趣但简单的体验中保持专注。",
        },
        {
          type: "直达目标",
          detail:
            "设计清晰流畅的操作流程，帮助使用者快速理解网站内容并完成所需操作，提升品牌实际转化效果。",
        },
      ],
    },
    whatWeDo: {
      title: "What We Do",
      contentList: [
        {
          type: "形象网站",
          detail:
            "以清晰视觉与专业架构呈现品牌价值与特色；打造能代表企业形象的官方入口，提高信任度。",
        },
        {
          type: "一頁式网站",
          detail:
            "用流畅布局浓缩产品重点，快速传达核心讯息；适合活动导流、产品曝光，提升转换效率。",
        },
        {
          type: "电子商务网站",
          detail:
            "整合商品展示、金流与会员系统，打造顺畅购物体验；提升品牌销售能力，协助建立完整线上通路。",
        },
        {
          type: "基础 SEO 优化",
          detail:
            "优化网站基础SEO配置，提升搜索引擎可见度，助力品牌获取更多自然流量。",
        },
      ],
    },
    images: [],
  },
];
