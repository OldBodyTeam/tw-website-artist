import type { Metadata } from "next";

export type PageSeoConfig = {
  title: string;
  description: string;
  keywords: readonly string[];
  ogTitle: string;
  ogDescription: string;
};

export const SITE_NAME = "亞堤思新創整合行銷";
export const SITE_URL = "https://artist-mkt.com";
export const SITE_LOCALE = "zh_TW";

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/artistmkt",
  instagram: "https://www.instagram.com/artist.mkt/",
  linkedin: "https://www.linkedin.com/company/108332681/admin/dashboard",
} as const;

export const SERVICE_SLUGS = [
  "branding-strategy",
  "web-design",
  "social-media-marketing",
  "wom-marketing",
  "digital-advertising",
  "print-production",
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

const MARKETING_KEYWORDS = [
  "亞堤思新創整合行銷",
  "品牌規劃",
  "logo設計",
  "網站設計",
  "社群行銷",
  "口碑行銷",
  "廣告投放",
  "印刷",
  "數位行銷",
  "行銷公司",
  "彰化行銷公司",
] as const;

const CASE_KEYWORDS = [
  "亞堤思新創整合行銷",
  "整合行銷案例",
  "品牌規劃案例",
  "logo設計案例",
  "網站設計案例",
  "社群行銷案例",
  "口碑行銷案例",
  "廣告投放案例",
  "印刷整合案例",
  "數位行銷案例",
] as const;

const CONTACT_KEYWORDS = [
  "亞堤思新創整合行銷",
  "聯絡亞堤思",
  "品牌規劃",
  "網站設計",
  "社群行銷",
  "口碑行銷",
  "廣告投放",
  "印刷整合",
  "數位行銷",
  "行銷公司",
] as const;

const SERVICE_DETAIL_DESCRIPTION =
  "亞堤思新創整合行銷提供完整的整合行銷服務，涵蓋品牌規劃、網站架設、社群行銷、口碑行銷、廣告投放及各類印刷服務。我們以策略為核心、創意為橋樑，將數位與實體資源整合運用，協助品牌從概念到落地，打造有溫度且具成效的行銷方案，提升品牌價值與市場競爭力。";

const SERVICE_DETAIL_OG_DESCRIPTION =
  "亞堤思新創整合行銷提供完整的整合行銷服務，涵蓋品牌規劃、網站架設、社群行銷、口碑行銷、廣告投放及各類印刷服務。我們以策略為核心、創意為橋樑，將數位與實體資源整合運用，協助品牌從概念到落地，打造有溫度且具成效的行銷方案，提升品牌價值與市場競爭力。";

export const pageSeo = {
  home: {
    title:
      "亞堤思新創整合行銷｜品牌規劃｜網站設計｜社群行銷｜口碑行銷｜廣告投放｜印刷",
    description:
      "亞堤思新創整合行銷，提供品牌規劃、網站設計、社群行銷與口碑行銷、廣告投放及各類印刷服務。我們以策略為核心、創意為橋樑，整合數位行銷資源，協助品牌從 0 到 100，打造有溫度又有效果的整合行銷方案。",
    keywords: MARKETING_KEYWORDS,
    ogTitle:
      "亞堤思新創整合行銷｜品牌規劃｜網站設計｜社群行銷｜口碑行銷｜廣告投放｜印刷",
    ogDescription:
      "亞堤思新創整合行銷，提供品牌規劃、網站設計、社群與口碑行銷、廣告投放及各類印刷服務。我們以策略為核心、創意為橋樑，整合數位行銷資源，協助品牌從 0 到 100，打造有溫度又有效果的整合行銷方案。",
  },
  about: {
    title:
      "關於亞堤思新創整合行銷 – 品牌規劃｜網站設計｜社群行銷｜口碑行銷｜廣告投放｜印刷",
    description:
      "亞堤思新創整合行銷專注於品牌策略與整合行銷，結合品牌規劃、網站設計、社群行銷、口碑行銷、廣告投放及各類印刷服務。我們以專業、細心、靈活創新的方式，陪伴企業從策略到執行，打造有溫度且具成效的完整行銷方案。無論是數位曝光還是實體觸點，我們都確保品牌形象一致，協助企業在市場中建立長期競爭力，讓每一分行銷投入都發揮最大價值。",
    keywords: MARKETING_KEYWORDS,
    ogTitle:
      "關於亞堤思新創整合行銷 – 品牌規劃｜網站設計｜社群行銷｜口碑行銷｜廣告投放｜印刷",
    ogDescription:
      "亞堤思新創整合行銷專注於品牌策略與整合行銷，結合品牌規劃、網站設計、社群行銷、口碑行銷、廣告投放及各類印刷服務。我們以專業、細心、靈活創新的方式，陪伴企業從策略到執行，打造有溫度且具成效的完整行銷方案。無論是數位曝光還是實體觸點，我們都確保品牌形象一致，協助企業在市場中建立長期競爭力，讓每一分行銷投入都發揮最大價值。",
  },
  service: {
    title: "亞堤思新創整合行銷 – 服務項目",
    description: SERVICE_DETAIL_DESCRIPTION,
    keywords: MARKETING_KEYWORDS,
    ogTitle: "亞堤思新創整合行銷 – 服務項目",
    ogDescription: SERVICE_DETAIL_OG_DESCRIPTION,
  },
  example: {
    title:
      "案例分享 – 亞堤思新創整合行銷 – 品牌規劃｜網站設計｜社群行銷｜口碑行銷｜廣告投放｜印刷",
    description:
      "亞堤思新創整合行銷展示多元整合行銷案例，涵蓋品牌規劃、網站架設、社群行銷、口碑行銷、廣告投放及各類印刷服務。我們將策略與創意融合，陪伴企業從概念到落地，成功打造有溫度且具成效的品牌行銷方案，幫助客戶提升品牌價值與市場競爭力。",
    keywords: CASE_KEYWORDS,
    ogTitle: "亞堤思新創整合行銷案例｜成功打造完整品牌行銷方案",
    ogDescription:
      "瀏覽亞堤思新創整合行銷案例，了解我們如何結合品牌規劃、網站架設、社群與口碑行銷、廣告投放及印刷整合服務，陪伴企業從策略到執行，打造有溫度且具成效的整合行銷方案。",
  },
  contact: {
    title: "聯絡亞堤思新創整合行銷｜打造完整品牌行銷方案",
    description:
      "想了解亞堤思新創整合行銷的完整服務或洽談合作？我們提供品牌規劃、網站架設、社群行銷、口碑行銷、廣告投放及各類印刷服務。歡迎透過電話、Email 或線上表單聯絡我們，我們將以專業與熱誠，協助您的品牌打造有溫度且具成效的行銷方案。",
    keywords: CONTACT_KEYWORDS,
    ogTitle: "聯絡亞堤思新創整合行銷｜打造完整品牌行銷方案",
    ogDescription:
      "歡迎聯絡亞堤思新創整合行銷，了解我們如何透過品牌規劃、網站架設、社群行銷、口碑行銷、廣告投放與印刷整合服務，陪伴企業從策略到執行，打造有溫度且具成效的整合行銷方案。",
  },
} satisfies Record<"home" | "about" | "service" | "example" | "contact", PageSeoConfig>;

const createServiceSeo = (title: string): PageSeoConfig => ({
  title,
  description: SERVICE_DETAIL_DESCRIPTION,
  keywords: MARKETING_KEYWORDS,
  ogTitle: title,
  ogDescription: SERVICE_DETAIL_OG_DESCRIPTION,
});

export const serviceSeoBySlug = {
  "branding-strategy": createServiceSeo(
    "亞堤思新創整合行銷 – 服務項目｜品牌規劃",
  ),
  "web-design": createServiceSeo("亞堤思新創整合行銷 – 服務項目｜網站設計"),
  "social-media-marketing": createServiceSeo(
    "亞堤思新創整合行銷 – 服務項目｜社群行銷",
  ),
  "wom-marketing": createServiceSeo("亞堤思新創整合行銷 – 服務項目｜口碑行銷"),
  "digital-advertising": createServiceSeo(
    "亞堤思新創整合行銷 – 服務項目｜廣告投放",
  ),
  "print-production": createServiceSeo(
    "亞堤思新創整合行銷 – 服務項目｜各類印刷",
  ),
} satisfies Record<ServiceSlug, PageSeoConfig>;

export const PUBLIC_ROUTE_PATHS = [
  "/",
  "/about",
  "/service",
  "/example",
  "/contact",
] as const;

export function toAbsoluteUrl(pathname: string) {
  return new URL(pathname, SITE_URL).toString();
}

export function createPageMetadata(
  config: PageSeoConfig,
  pathname: string,
): Metadata {
  return {
    title: config.title,
    description: config.description,
    keywords: [...config.keywords],
    alternates: {
      canonical: pathname,
    },
    openGraph: {
      title: config.ogTitle,
      description: config.ogDescription,
      url: pathname,
      siteName: SITE_NAME,
      locale: SITE_LOCALE,
      type: "website",
    },
    twitter: {
      card: "summary",
      title: config.ogTitle,
      description: config.ogDescription,
    },
  };
}

export function getServiceSeoConfig(slug: string) {
  return serviceSeoBySlug[slug as ServiceSlug];
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: pageSeo.home.title,
  description: pageSeo.home.description,
  keywords: [...pageSeo.home.keywords],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: pageSeo.home.ogTitle,
    description: pageSeo.home.ogDescription,
    url: "/",
    siteName: SITE_NAME,
    locale: SITE_LOCALE,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: pageSeo.home.ogTitle,
    description: pageSeo.home.ogDescription,
  },
};

const organizationId = `${SITE_URL}/#organization`;
const websiteId = `${SITE_URL}/#website`;

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: SITE_NAME,
      alternateName: "Artist MKT",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: toAbsoluteUrl("/home-2/logo.png"),
      },
      telephone: "0932-050383",
      email: "artistmkt.co@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressCountry: "TW",
        addressRegion: "彰化縣",
        addressLocality: "員林市",
        streetAddress: "園林大街80號",
      },
      sameAs: [
        SOCIAL_LINKS.facebook,
        SOCIAL_LINKS.instagram,
        SOCIAL_LINKS.linkedin,
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "0932-050383",
          email: "artistmkt.co@gmail.com",
          contactType: "customer service",
          areaServed: "TW",
          availableLanguage: ["zh-TW"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "zh-TW",
      publisher: {
        "@id": organizationId,
      },
    },
  ],
} as const;
