import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ProcessGrid } from "./ProcessGrid";
import { services, ServiceWhatWeDoItem } from "@/data/services";
import { serviceLinks } from "@/data/service-links";
import { createPageMetadata, getServiceSeoConfig, pageSeo } from "@/lib/seo";

type ServiceDetailProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: ServiceDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const seoConfig = getServiceSeoConfig(slug);

  if (!seoConfig) {
    return {
      ...createPageMetadata(pageSeo.service, "/service"),
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return createPageMetadata(seoConfig, `/service/${slug}`);
}

export default async function ServiceDetail({ params }: ServiceDetailProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  const otherServiceLinks = serviceLinks.filter(
    (l) => l.href.replace("/service/", "") !== slug,
  );
  const mobileSectionClassName =
    "mx-[16px] mb-[14px] min-w-0 overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] px-[16px] py-[18px]";

  if (!service) {
    return (
      <div className="flex min-h-[100dvh] items-center justify-center bg-[#0A090F] text-white">
        Service not found
      </div>
    );
  }

  const renderServiceImage = ({
    index = 0,
    className = "object-cover",
    frameClassName = "aspect-[4/3]",
    sizes = "100vw",
    priority = false,
  }: {
    index?: number;
    className?: string;
    frameClassName?: string;
    sizes?: string;
    priority?: boolean;
  } = {}) => {
    const img = service.images?.[index];
    if (!img?.path) return null;
    return (
      <div className={`relative w-full overflow-hidden ${frameClassName}`}>
        <Image
          src={`/${img.path}`}
          alt={`${service.title} ${index + 1}`}
          fill
          className={className}
          sizes={sizes}
          priority={priority}
        />
      </div>
    );
  };

  const renderCapabilities = () => {
    const { ourCapabilities } = service;
    return (
      <>
        {ourCapabilities.content && (
          <div className="max-w-[400px] break-words text-[15px] leading-[24px] text-white/72 [overflow-wrap:anywhere] md:text-[16px] md:text-white">
            {ourCapabilities.content}
          </div>
        )}
        {ourCapabilities.capabilityList && (
          <div className="flex gap-[16px] flex-wrap flex-1">
            {ourCapabilities.capabilityList.map((cap, idx) => (
              <div
                key={idx}
                className="min-w-0 flex-1 rounded-[20px] border border-[rgba(255,255,255,0.1)] bg-[rgba(20,19,24,1)] p-[18px] md:min-w-[300px] md:rounded-none md:p-[24px]"
              >
                <div className="mb-[12px] text-[17px] leading-[22px] font-normal text-white md:mb-[16px] md:text-[18px] md:leading-[21px]">
                  {cap.type}
                </div>
                <div className="text-[14px] leading-[22px] font-light text-white/72 md:text-[14px] md:leading-[20px] md:text-white/65">
                  {cap.detail}
                </div>
              </div>
            ))}
          </div>
        )}
      </>
    );
  };

  const renderWhatWeDo = () => {
    const { whatWeDo } = service;

    if (whatWeDo.contentList) {
      const isStringList = typeof whatWeDo.contentList[0] === "string";

      if (isStringList) {
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {(whatWeDo.contentList as string[]).map((item, idx) => (
              <div
                key={`${item}-${idx}`}
                className="flex items-start border-b border-[rgba(255,255,255,0.1)] py-4 text-[15px] leading-[24px] text-white md:items-center md:text-[16px]"
              >
                <div className="mt-[9px] mr-4 h-2 w-2 shrink-0 rounded-full bg-white opacity-50 md:mt-0"></div>
                {item}
              </div>
            ))}
          </div>
        );
      } else {
        // object[]
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(whatWeDo.contentList as ServiceWhatWeDoItem[]).map(
              (item, idx) => (
                <div
                  key={`${item.type}-${idx}`}
                className="rounded-[20px] border border-[rgba(255,255,255,0.1)] bg-white/[0.03] px-4 py-5 md:rounded-none md:border-x-0 md:border-b-0 md:border-t md:bg-transparent md:px-0 md:py-6"
                >
                  <h4 className="mb-3 text-[18px] font-medium text-white">
                    {item.type}
                  </h4>
                  <p className="break-words text-[14px] leading-[24px] text-white/72 [overflow-wrap:anywhere] md:leading-relaxed md:text-white/65">
                    {item.detail}
                  </p>
                </div>
              ),
            )}
          </div>
        );
      }
    }

    if (whatWeDo.contentGroups) {
      return (
        <div className="flex flex-col gap-8 md:gap-12">
          {whatWeDo.contentGroups.map((group, idx) => (
            <div key={idx}>
              {group.groupName && (
                <div className="mb-4 border-l-4 border-white pl-4 text-[18px] font-medium text-white md:mb-6 md:text-[20px]">
                  {group.groupName}
                </div>
              )}
              {group.content && (
                <p className="mb-6 max-w-[800px] break-words text-[14px] leading-[24px] text-white/72 [overflow-wrap:anywhere] md:text-[16px] md:leading-relaxed md:text-white/65">
                  {group.content}
                </p>
              )}
              {group.items && (
                <ProcessGrid
                  steps={group.items.map((item) => ({
                    id: item.id,
                    number: item.id,
                    title: item.name,
                    description: item.detail,
                  }))}
                />
              )}
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  const renderOtherServices = ({
    titleClassName,
    containerClassName,
    listClassName,
    itemClassName,
  }: {
    titleClassName: string;
    containerClassName: string;
    listClassName: string;
    itemClassName: string;
  }) => {
    if (!otherServiceLinks.length) return null;
    return (
      <div className={containerClassName}>
        <div className={titleClassName}>
          其他服務
          {/* <span className="opacity-65 text-[12px] ml-4">Other Services</span> */}
        </div>
        <div className={listClassName}>
          {otherServiceLinks.map((v) => (
            <Link key={v.href} href={v.href} className={itemClassName}>
              <div className="group relative overflow-hidden rounded-[20px] border border-[rgba(255,255,255,0.1)] bg-[rgba(20,19,24,1)] md:rounded-none">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-45 group-hover:opacity-60 transition-opacity"
                  style={{ backgroundImage: `url(${v.bgImage})` }}
                />
                <div className="relative z-10 flex min-h-[132px] flex-col justify-end p-[16px] md:min-h-[96px]">
                  <div className="break-words text-[16px] leading-[20px] font-medium text-white [overflow-wrap:anywhere]">
                    {v.title}
                  </div>
                  <div className="mt-[6px] break-words text-[13px] leading-[18px] text-white/70 [overflow-wrap:anywhere] md:mt-[4px] md:text-[12px] md:leading-[16px] md:text-white/65">
                    {v.desc}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex min-h-[100dvh] min-w-0 flex-1 overflow-x-clip bg-[#0A090F] md:h-screen md:overflow-y-auto">
      <div className="min-w-0 flex-1">
        {/* Mobile View */}
        <div className="min-h-[100dvh] overflow-x-clip md:hidden">
          <div className="flex-1 bg-[#0A090F] pt-[calc(env(safe-area-inset-top)+58px)] pb-[calc(env(safe-area-inset-bottom)+28px)]">
            {/* Hero Section */}
            <div className={mobileSectionClassName}>
              <div className="mb-[8px] break-words text-[10px] font-medium uppercase leading-[16px] tracking-[0.18em] text-white/42 [overflow-wrap:anywhere]">
                {service.serviceType}
              </div>
              <h2 className="mb-[12px] max-w-[11ch] text-[24px] leading-[28px] font-semibold tracking-[-0.035em] text-white">
                {service.title}
              </h2>
              <div className="max-w-none break-words text-[14px] leading-[22px] font-light text-white/70 [overflow-wrap:anywhere] [&_div]:mt-3">
                {service.description}
              </div>
              <div className="mt-[16px]">
                {renderServiceImage({
                  frameClassName:
                    "aspect-[16/10] rounded-[20px] border border-white/10 bg-white/[0.04]",
                  sizes: "(max-width: 767px) calc(100vw - 64px), 100vw",
                  priority: true,
                })}
              </div>
            </div>

            {/* Approach Section */}
            <div className={mobileSectionClassName}>
              <h2 className="mb-[6px] text-[20px] leading-[26px] font-semibold text-white">
                {service.ourApproach.title}
              </h2>
              <p className="mb-[10px] break-words text-[10px] font-medium uppercase leading-[16px] tracking-[0.16em] text-white/42 [overflow-wrap:anywhere]">
                {service.ourApproach.subtitle}
              </p>
              <div className="max-w-none break-words text-[14px] leading-[22px] font-light text-white/70 [overflow-wrap:anywhere] [&_div]:mt-3">
                {service.ourApproach.content}
              </div>
              <div className="mt-[16px]">
                {renderServiceImage({
                  index: 1,
                  frameClassName:
                    "aspect-[16/10] rounded-[20px] border border-white/10 bg-white/[0.04]",
                  sizes: "(max-width: 767px) calc(100vw - 64px), 100vw",
                })}
              </div>
            </div>

            {/* Capabilities Section */}
            <div className={`${mobileSectionClassName} bg-[rgba(104,104,109,0.12)]`}>
              <h2 className="mb-[6px] text-[20px] leading-[26px] font-semibold text-white">
                {service.ourCapabilities.title}
              </h2>
              <p className="mb-[12px] break-words text-[10px] font-medium uppercase leading-[16px] tracking-[0.16em] text-white/42 [overflow-wrap:anywhere]">
                {service.ourCapabilities.subtitle}
              </p>
              <div className="flex flex-col gap-4">
                {service.ourCapabilities.content && (
                  <p className="break-words text-[14px] leading-[22px] font-light text-white/70 [overflow-wrap:anywhere]">
                    {service.ourCapabilities.content}
                  </p>
                )}
                {service.ourCapabilities.capabilityList && (
                  <div className="mt-[8px] flex flex-col gap-[12px]">
                    {service.ourCapabilities.capabilityList.map(
                      (cap, index) => (
                        <div
                          key={index}
                          className="rounded-[20px] border border-[rgba(255,255,255,0.1)] bg-[#141318] p-[16px]"
                        >
                          <h3 className="mb-[8px] text-[16px] leading-[22px] text-white">
                            {cap.type}
                          </h3>
                          <p className="break-words text-[14px] leading-[22px] font-light text-white/72 [overflow-wrap:anywhere]">
                            {cap.detail}
                          </p>
                        </div>
                      ),
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Process/Steps Section */}
            <div className={mobileSectionClassName}>
              <div className="mb-[14px] text-[20px] leading-[26px] font-semibold text-white">
                {service.whatWeDo.title}
              </div>
              {renderWhatWeDo()}
            </div>

            {renderOtherServices({
              containerClassName:
                mobileSectionClassName,
              titleClassName:
                "mb-[14px] text-[20px] leading-[26px] font-semibold text-white",
              listClassName:
                "-mx-[16px] flex gap-[10px] overflow-x-auto px-[16px] pb-[4px] snap-x snap-mandatory",
              itemClassName: "w-[216px] max-w-[74vw] min-w-0 flex-none snap-start",
            })}
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex flex-1 bg-[#0A090F] py-[20px] px-[16px] md:py-[44px] md:px-[64px] flex-col md:min-h-screen">
          {/* 顶部标题 */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 w-full">
            <Image
              src="/home-2/mobile-title.png"
              alt="Artist.com"
              width={152}
              height={45}
              className="md:hidden"
            />

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
          <div className="mt-[32px] h-[1px] bg-[rgba(255,255,255,0.1)]" />

          {/* 内容区域 */}
          <div className="flex flex-col mb-[88px]">
            <div className="mt-[16px]">
              <div className="flex flex-col gap-[4px] mb-[48px]">
                <div className="text-white text-[36px] leading-[42px] font-semibold">
                  {service.title}
                </div>
              </div>
              <div className="flex gap-[32px]">
                <div className="text-white text-[16px] leading-[24px] opacity-[65] font-extralight max-w-[600px] whitespace-pre-line">
                  {service.description}
                </div>
                {renderServiceImage({
                  className: "object-cover",
                  sizes: "(min-width: 768px) 50vw, 100vw",
                })}
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-[32px]">
              <div className="min-w-[752px]" />

              <div className="flex flex-col gap-[4px] mb-[48px]">
                <div className="text-white text-[36px] leading-[42px] font-semibold mb-[16px]">
                  {service.ourApproach.title}
                </div>
                <div className="text-white text-[18px] leading-[42px] !font-normal opacity-[65]">
                  {service.ourApproach.subtitle}
                </div>
              </div>
            </div>
            <div className="flex gap-[32px] flex-row-reverse">
              <div className="text-white text-[16px] leading-[24px] opacity-[65] font-extralight max-w-[600px] whitespace-pre-line">
                {service.ourApproach.content}
              </div>
              {renderServiceImage({
                index: 1,
                className: "object-cover",
                sizes: "(min-width: 768px) 50vw, 100vw",
              })}
            </div>
          </div>
          <div className="flex flex-col p-[64px] bg-[rgba(104,104,109,0.1)] mt-[88px] -mx-[64px]">
            <div className="flex flex-col">
              <div className="text-white text-[36px] leading-[42px] font-semibold">
                {service.ourCapabilities.title}
              </div>
              <div className="text-white text-[16px] leading-[24px] mb-[32px] !font-normal opacity-[65]">
                {service.ourCapabilities.subtitle}
              </div>
              <div className="flex gap-[88px]">{renderCapabilities()}</div>
            </div>
          </div>
          <div className="mt-[88px] mb-[40px]">
            <div className="text-white text-[36px] leading-[42px] font-semibold flex justify-center items-center ">
              {service.whatWeDo.title}
            </div>
            <div className="mt-[40px]">{renderWhatWeDo()}</div>
          </div>

          {renderOtherServices({
            containerClassName: "mt-[88px] mb-[40px]",
            titleClassName:
              "text-white text-[36px] leading-[42px] font-semibold mb-[32px] flex justify-center items-center",
            listClassName: "grid grid-cols-5 gap-[16px]",
            itemClassName: "w-full",
          })}
        </div>
      </div>
    </div>
  );
}
