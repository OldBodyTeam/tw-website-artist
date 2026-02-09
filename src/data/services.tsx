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
    serviceType: "各類印刷（Print Production）",
    title: "Precision in print, perfection in brand.",
    description:
      "擁有 20 餘年印刷經驗，我們提供完整的印刷解決方案，從設計、印前完稿確認、細部校對，到紙材選擇與加工建議（如燙金、打凸、局部上光），每一個環節都能提供最專業建議，確保每件作品完美呈現品牌形象。1只就能印。無論少量或大量印刷，我們都能提供最適化方案，滿足各種品牌需求。",
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
        "我們提供從設計、印前校稿、紙材與加工建議、版面安排，專業印刷設備掌握每個環節。各類紙品及專案客製化需求，我們都能協助品牌精準呈現每一件作品的價值與質感。",
    },
    whatWeDo: {
      title: "What We Do",
      contentGroups: [
        {
          groupName: "",
          items: [
            {
              id: "01",
              name: "名片、貼紙、吊卡、禮盒、海報、布條、手冊等各類紙品印刷",
              detail: ``,
            },
            {
              id: "02",
              name: "設計與印前完稿確認、細部校對",
              detail: ``,
            },
            {
              id: "03",
              name: "紙材選擇與加工建議",
              detail: ``,
            },
            {
              id: "04",
              name: "專案客製化印刷方案",
              detail: ``,
            },
          ],
        },
      ],
    },
    images: [
      {
        fileName: "print-production-1.jpg",
        format: "jpg",
        path: "service-page/print-production-1.jpg",
      },
      {
        fileName: "print-production-2.png",
        format: "png",
        path: "service-page/print-production-2.png",
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
    images: [
      {
        fileName: "digital-advertising-1.avif",
        format: "avif",
        path: "service-page/digital-advertising-1.avif",
      },
      {
        fileName: "digital-advertising-2.avif",
        format: "avif",
        path: "service-page/digital-advertising-2.avif",
      },
    ],
  },
  {
    slug: "wom-marketing",
    serviceType: "口碑行銷（WOM Marketing）",
    title: "Trust speaks louder than ads.",
    description:
      "消費者在購買前的第一步往往是「爬文做功課」。除了品牌自我塑造之外，第三方的真實推薦更能建立信任，並有效影響消費決策。口碑行銷的力量，不在於聲量的堆疊，而在於真實體驗能否引起共鳴，進而轉化為消費者的實際行動。",
    ourApproach: {
      title: "Our Approach",
      subtitle: "From authenticity to influence.",
      content: (
        <>
          我們重於「真實」與「共鳴」。協助品牌精準挑選調性契合的部落客、 KOL
          與KOC，讓他們透過自身經驗與風格分享內容。
          <div className="mt-[16px]"></div>
          在合作上，我們從需求確認、關鍵字規劃到文章審核，確保內容兼具真實性與效益，為品牌創造長期而穩定的曝光。
          <div className="mt-[16px]"></div>
          透過真實推薦與多元合作，讓品牌不只是被看見，更能被信任，並在消費者心中建立影響力。
        </>
      ),
    },
    ourCapabilities: {
      title: "Our Capabilities",
      subtitle: "Shaping trust, amplifying influence.",
      content:
        "從合作規劃到內容執行，協助品牌在多元管道中建立真實可信的口碑影響力。我們不僅協助媒合合適 KOL、KOC 與部落客，也提供內容指引、話題營造與社群擴散，確保每一分投入都能帶來實際影響。",
    },
    whatWeDo: {
      title: "What We Do",
      contentGroups: [
        {
          groupName: "",
          items: [
            {
              id: "01",
              name: "KOL / KOC 合作規劃",
              detail: ``,
            },
            {
              id: "02",
              name: "部落客 合作規劃",
              detail: ``,
            },
            {
              id: "03",
              name: "品牌需求與內容指引",
              detail: ``,
            },
            {
              id: "04",
              name: "社群平台口碑擴散",
              detail: ``,
            },
            {
              id: "05",
              name: "網路平面新聞採購",
              detail: ``,
            },
          ],
        },
      ],
    },
    images: [
      {
        fileName: "branding-strategy-1.avif",
        format: "avif",
        path: "service-page/branding-strategy-1.avif",
      },
      {
        fileName: "branding-strategy-2.avif",
        format: "avif",
        path: "service-page/branding-strategy-2.avif",
      },
    ],
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
    images: [
      {
        fileName: "social-media-marketing-1.avif",
        format: "avif",
        path: "service-page/social-media-marketing-1.avif",
      },
      {
        fileName: "social-media-marketing-2.avif",
        format: "avif",
        path: "service-page/social-media-marketing-2.avif",
      },
    ],
  },
  {
    slug: "social-media-marketing",
    serviceType: "社群行銷（Social Media Marketing）",
    title: "Social isn’t posting, it’s conversing.",
    description:
      "社群平台不只是資訊傳遞的管道，更是與受眾互動、培養忠誠度的重要場域。我們透過策略與創意，讓品牌在社群中不僅被看見，更能被記住與持續關注。",
    ourApproach: {
      title: "Our Approach",
      subtitle: "From content to community.",
      content: (
        <>
          我們提供從內容規劃、文案撰寫、圖面設計到影音製作的一站式服務，根據不同平台特性Facebook、Instagram、Threads、TikTok、LINE
          官方帳號，為品牌量身打造專屬風格。
          <div className="mt-[16px]"></div>
          我們不僅製作內容，更制定策略。從貼文主題設計、時事議題操作到活動策劃，逐步建立品牌與粉絲之間的溝通管道。透過持續互動與討論熱點的創造，讓粉絲成為品牌的最佳代言人。
          將社群經營轉化為品牌資產，擴大品牌影響力，並累積與受眾的長期關係。
        </>
      ),
    },
    ourCapabilities: {
      title: "Our Capabilities",
      subtitle: "讓品牌在社群中不只被看見，更能被記住。",
      capabilityList: [
        {
          type: "吸引注意力",
          detail:
            "以創意議題與獨特風格吸引受眾，讓貼文不只是資訊，而是能引發討論與分享的話題。",
        },
        {
          type: "創造互動",
          detail:
            "透過貼文設計、影音內容與活動策劃，建立雙向溝通，讓粉絲主動參與、產生情感連結。",
        },
        {
          type: "驅動成效",
          detail:
            "結合社群廣告投放與數據分析，我們不僅持續優化策略，更以每季回報的方式，將成果與數據轉化為具體方向，讓社群影響力真正帶動品牌成長。",
        },
      ],
    },
    whatWeDo: {
      title: "What We Do",
      contentGroups: [
        {
          groupName: "經營平台",
          content: "Facebook、Instagram、Threads、TikTok、LINE 官方帳號",
        },
        {
          groupName: "執行內容",
          content:
            "品牌風格定位、受眾分析、內容規劃、實體活動規劃、文案撰寫、圖面設計、影音製作",
        },
        {
          groupName: "互動經營",
          content: "粉絲互動、線上活動規劃、話題引導、社群參與度提升",
        },
        {
          groupName: "行銷優化",
          content: "廣告投放、數據追蹤、成效分析、策略調整",
        },
      ],
    },
    images: [
      {
        fileName: "web-design-1.avif",
        format: "avif",
        path: "service-page/web-design-1.avif",
      },
      {
        fileName: "web-design-2.avif",
        format: "avif",
        path: "service-page/web-design-2.avif",
      },
    ],
  },
  {
    slug: "web-design",
    serviceType: "網站設計（Web Design）",
    title: "Turning websites into 24/7 brand ambassadors.",
    description: (
      <>
        在多元化的消費型態中，網站不再只是展示產品的工具，而是品牌與消費者之間的第一個接觸點，也是彰顯品牌魅力的重要舞台。
        <div className="my-[8px]"></div>
        一個優質的網站能夠吸引用戶停下腳步、感受品牌價值，並促進實際商機。
      </>
    ),
    ourApproach: {
      title: "Our Approach",
      subtitle: "Not just a website, but a brand experience.",
      content: (
        <>
          從深入理解企業定位與目標受眾開始，量身規劃網站架構與內容策略。每個網站皆依品牌個性與市場競爭力設計，結合行銷策略與技術優化，確保網站不僅美觀，更能帶來實際業務效益。
          <div className="my-[8px]"></div>
          RWD讓網站在各種裝置下順暢呈現，而簡單易操作的後台管理則讓企業輕鬆掌握內容更新。確保每一個網站都是品牌價值的最佳展現。
        </>
      ),
    },
    ourCapabilities: {
      title: "Our Capabilities",
      subtitle: "Focusing on how your website engages users.",
      capabilityList: [
        {
          type: "抓住目光",
          detail:
            "讓想法以簡潔、視覺化的方式表達，瞬間抓住訪客目光，讓訪客第一時間就感受到品牌特色。",
        },
        {
          type: "激發共鳴",
          detail: "讓使用者在有趣但簡單的體驗中保持專注。",
        },
        {
          type: "直達目標",
          detail:
            "設計清晰流暢的操作流程，幫助使用者快速理解網站內容並完成所需操作，提升品牌實際轉化效果。",
        },
      ],
    },
    whatWeDo: {
      title: "What We Do",
      contentList: [
        {
          type: "形象網站",
          detail: `以清晰視覺與專業架構呈現品牌價值與特色。
打造能代表企業形象的官方入口，提高信任度。`,
        },
        {
          type: "一頁式网站",
          detail:
            "用流畅布局浓缩产品重点，快速传达核心讯息；适合活动导流、产品曝光，提升转换效率。",
        },
        {
          type: "一頁式網站",
          detail: `用流暢布局濃縮產品重點，快速傳達核心訊息。
適合活動導流、產品曝光，提升轉換效率。`,
        },
        {
          type: "電子商務網站",
          detail: `整合商品展示、金流與會員系統，打造順暢購物體驗。
提升品牌銷售能力，協助建立完整線上通路。`,
        },
        {
          type: "基礎 SEO 優化",
          detail: "",
        },
      ],
    },
    images: [
      {
        fileName: "web-design-1.avif",
        format: "avif",
        path: "service-page/web-design-1.avif",
      },
      {
        fileName: "web-design-2.avif",
        format: "avif",
        path: "service-page/web-design-2.avif",
      },
    ],
  },
];
