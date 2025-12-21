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
  description: string;
  ourApproach: {
    title: string;
    subtitle: string;
    content: string;
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
      content:
        "依靠自有Kodak Trendsetter 800 CPT制版机与海德堡六色印刷机等专业印刷设备，高效完成各类纸品印刷（含名片、贴纸、吊卡、礼盒、宣传海报、布条、手册等）。从设计、校稿到印刷与后加工，以细腻工艺与严格品管确保成品精准呈现，提升品牌专业度与吸引力。",
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
    serviceType: "广告投放（Digital Advertising）",
    title: "Turning exposure into action.",
    description:
      "广告已不仅是单纯曝光，更是影响消费者决策、驱动营收的重要推手。根据品牌需求，在Facebook、Instagram、TikTok、Google、YouTube、LINE等平台精准操盘，让品牌在对的时间遇见对的人。",
    ourApproach: {
      title: "Our Approach",
      subtitle: "From strategy to conversion.",
      content:
        "确保每一分营销投入发挥最大效益。从策略规划、受众分析到素材制作与投放，持续优化、调整广告方向，找出最能引发顾客共鸣的议题，提高广告转化率，最终帮助品牌达成营收目标。",
    },
    ourCapabilities: {
      title: "Our Capabilities",
      subtitle: "Maximizing reach, optimizing impact.",
      content:
        "覆盖Meta、Google、TikTok、LINE平台广告投放，含广告策略规划、目标受众与竞品市场分析，掌控全环节。文案、图面与影音素材制作均自主完成，同时持续追踪数据、分析成效、优化调整，确保每一分预算发挥最大效益。",
    },
    whatWeDo: {
      title: "What We Do",
      contentList: [
        "广告与策略",
        "受众分析与竞品研究",
        "素材制作（图文、影音）",
        "成效追踪与优化调整",
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
    serviceType: "品牌规划（Branding Strategy）",
    title: "Not just a logo, but a living brand.",
    description:
      "Logo并非品牌全部，真正能让品牌烙印在消费者心中的是完整系统：从定位、语言到视觉的一致性。当品牌能清晰表达自我、与消费者产生共鸣，就能被理解、被记住，并在竞争激烈市场中建立独特地位。我们相信，品牌核心不在视觉装饰，而在让消费者每一次接触时，都能感受到相同价值与态度。",
    ourApproach: {
      title: "Our Approach",
      subtitle: "From insight to identity.",
      content:
        "设计开始前，不急于绘制第一条线，而是通过深度访谈、产业研究与策略分析，挖掘品牌最独特优势与个性；协助厘清产品与服务定位，找出优于同业的市场区隔，将结果转化为品牌语言与视觉逻辑，贯穿所有对外接触点（名片、印刷物、网站、社群、广告），确保品牌呈现一致专业形象。过程中每一份设计不仅是美化，更是能带来实际效益的资产，让品牌在消费者心中逐步累积信任与影响力。",
    },
    ourCapabilities: {
      title: "Our Capabilities",
      subtitle: "Shaping image, executing with precision.",
      content: "服务不止于设计Logo，而是提供从策略到执行的完整解决方案：",
      capabilityList: [
        {
          type: "Identity Building",
          detail:
            "从企业诊断出发，深入理解品牌现状与挑战，规划完整品牌形象策略；通过CIS或VI建立品牌核心视觉语言，设计能长期发挥作用的Logo与识别系统，让品牌拥有清晰、一致且具延展性的基础。",
        },
        {
          type: "Design Execution",
          detail:
            "建立清晰品牌形象后，转化为具体设计应用，涵盖识别系统应用、产品与包装设计、印刷品制作；这些设计不仅是视觉呈现，更是协助品牌在市场中被辨识、被信任的具体工具。",
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
              name: "企业诊断",
              detail:
                "从现状与市场切入找出问题核心，厘清发展方向；协助企业掌握优势与机会，建立明确成长策略。",
            },
            {
              id: "02",
              name: "品牌形象规划",
              detail:
                "以理念与定位塑造品牌个性，打造独特识别感；让品牌在市场中更易被理解、记住并建立信任。",
            },
            {
              id: "03",
              name: "CIS 企业识别设计",
              detail:
                "整合理念、视觉与行为规范，打造完整识别架构；协助企业建立一致形象，提升内外沟通效率。",
            },
            {
              id: "04",
              name: "VI 视觉识别规划",
              detail:
                "以色彩、字体与版式建立品牌视觉规则；确保所有呈现一致、美观，强化辨识度。",
            },
            {
              id: "05",
              name: "Logo 设计",
              detail:
                "以图形语言呈现品牌精神与定位；打造简洁有力的视觉核心，留下深刻印象。",
            },
          ],
        },
        {
          groupName: "设计执行",
          items: [
            {
              id: "01",
              name: "识别应用设计",
              detail:
                "将品牌视觉延伸至线下实际接触点；让整体形象更完整统一，提升品牌专业感。",
            },
            {
              id: "02",
              name: "包装设计",
              detail:
                "以美感与功能兼具的设计展现产品特色；强化品牌质感，使商品在陈列中更吸睛。",
            },
            {
              id: "03",
              name: "印刷品设计",
              detail: "排版与设计呈现品牌延伸；打造兼具质感与实用性的印刷品。",
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
