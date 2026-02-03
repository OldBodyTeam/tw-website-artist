import Image from "next/image";
import { LeftNav } from "@/components/left-nav/left-nav";
import { ProcessGrid } from "./ProcessGrid";
import { services, ServiceWhatWeDoItem } from "@/data/services";

type ServiceDetailProps = {
  params: Promise<{ slug: string }>;
};

export default async function ServiceDetail({ params }: ServiceDetailProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-[#0A090F] text-white flex items-center justify-center">
        Service not found
      </div>
    );
  }

  const getImageSrc = (index: number = 0) => {
    const img = service.images?.[index];
    if (img?.path) {
      return `/${img.path}`;
    }
    return "/example/1.png";
  };

  const renderHeroImage = ({
    className = "w-full h-auto object-cover",
    sizes = "100vw",
  }: {
    className?: string;
    sizes?: string;
  } = {}) => {
    return (
      <Image
        src={getImageSrc(0)}
        alt={service.title}
        width={1200}
        height={735}
        className={className}
        sizes={sizes}
      />
    );
  };

  const renderCapabilities = () => {
    const { ourCapabilities } = service;
    return (
      <>
        {ourCapabilities.content && (
          <div className="text-white text-[16px] leading-[24px] max-w-[400px]">
            {ourCapabilities.content}
          </div>
        )}
        {ourCapabilities.capabilityList && (
          <div className="flex gap-[16px] flex-wrap flex-1">
            {ourCapabilities.capabilityList.map((cap, idx) => (
              <div
                key={idx}
                className="p-[24px] border-[1px] border-[rgba(255,255,255,0.1)] bg-[rgba(20,19,24,1)] flex-1 min-w-[300px]"
              >
                <div className="text-white text-[18px] leading-[21px] font-normal mb-[16px]">
                  {cap.type}
                </div>
                <div className="text-white text-[14px] leading-[20px] font-light opacity-[65]">
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
                className="text-white text-[16px] border-b border-[rgba(255,255,255,0.1)] py-4 flex items-center"
              >
                <div className="w-2 h-2 rounded-full bg-white mr-4 opacity-50"></div>
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
                  className="border-t border-[rgba(255,255,255,0.1)] py-6"
                >
                  <h4 className="text-white text-[18px] mb-3 font-medium">
                    {item.type}
                  </h4>
                  <p className="text-white text-[14px] leading-relaxed opacity-65">
                    {item.detail}
                  </p>
                </div>
              )
            )}
          </div>
        );
      }
    }

    if (whatWeDo.contentGroups) {
      return (
        <div className="flex flex-col gap-12">
          {whatWeDo.contentGroups.map((group, idx) => (
            <div key={idx}>
              {group.groupName && (
                <div className="text-white text-[20px] mb-6 font-medium border-l-4 border-white pl-4">
                  {group.groupName}
                </div>
              )}
              {group.content && (
                <p className="text-white text-[16px] leading-relaxed opacity-65 mb-6 max-w-[800px]">
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

  return (
    <div className="flex-1 bg-[#0A090F]">
      {/* Mobile View */}
      <div className="md:hidden h-screen overflow-auto">
        <div className="flex-1 bg-[#0A090F]">
          <LeftNav />
          <div className="h-[54px]"></div>

          {/* Hero Section */}
          <div className="mb-[24px] px-[16px] py-[20px]">
            {renderHeroImage()}
            <h2 className="text-[20px] text-white mb-[14px] leading-[24px] mt-[18px]">
              {service.title}
            </h2>
            <div className="text-[11px] leading-[16px] font-light text-white opacity-[0.65]">
              {service.description}
            </div>
          </div>

          {/* Approach Section */}
          <div className="px-[16px] py-[20px]">
            {renderHeroImage()}
            <h2 className="text-[20px] text-white mb-[14px] leading-[24px] mt-[18px] mb-[6px]">
              {service.ourApproach.title}
            </h2>
            <p className="text-[11px] leading-[16px] font-light text-white opacity-[0.65] mb-2">
              {service.ourApproach.subtitle}
            </p>
            <div className="text-[11px] leading-[16px] font-light text-white opacity-[0.65]">
              {service.ourApproach.content}
            </div>
          </div>

          {/* Capabilities Section */}
          <div className="px-[16px] py-[24px] bg-[rgba(104,104,109,0.1)]">
            <h2 className="text-[20px] text-white mb-[14px] leading-[24px] mt-[6px]">
              {service.ourCapabilities.title}
            </h2>
            <p className="text-[11px] leading-[16px] font-light mb-[14px] text-white opacity-[0.65]">
              {service.ourCapabilities.subtitle}
            </p>
            <div className="flex flex-col gap-4">
              {service.ourCapabilities.content && (
                <p className="text-[11px] leading-[16px] font-light text-white opacity-[0.65]">
                  {service.ourCapabilities.content}
                </p>
              )}
              {service.ourCapabilities.capabilityList && (
                <div className="space-y-[10px] flex flex-col gap-[10px] mt-[12px]">
                  {service.ourCapabilities.capabilityList.map((cap, index) => (
                    <div
                      key={index}
                      className="border border-border p-[12px] !border-[rgba(255,255,255,0.1)]"
                    >
                      <h3 className="text-[16px] leading-[18px] text-white mb-[8px]">
                        {cap.type}
                      </h3>
                      <p className="text-[11px] leading-[16px] font-light text-white opacity-[0.65]">
                        {cap.detail}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Process/Steps Section */}
          <div className="px-[16px] py-[24px]">
            <div className="text-[20px] text-white leading-[24px] mb-[16px]">
              {service.whatWeDo.title}
            </div>
            {renderWhatWeDo()}
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex flex-1 h-screen bg-[#0A090F] py-[20px] px-[16px] md:py-[44px] md:px-[64px] flex-col md:h-auto md:min-h-screen overflow-auto">
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
          <div className="">
            <div className="flex flex-col gap-[4px] mb-[48px]">
              <div className="text-white text-[36px] leading-[42px] font-semibold">
                {service.title}
              </div>
            </div>
            <div className="flex gap-[32px]">
              <div className="text-white text-[16px] leading-[24px] opacity-[65] font-extralight max-w-[600px] whitespace-pre-line">
                {service.description}
              </div>
              <div className="min-w-[752px] min-h-[460px] relative">
                {renderHeroImage({
                  className: "w-full h-full object-cover",
                  sizes: "(min-width: 768px) 50vw, 100vw",
                })}
              </div>
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
            <div className="min-w-[752px] min-h-[460px] relative">
              {renderHeroImage({
                className: "w-full h-full object-cover",
                sizes: "(min-width: 768px) 50vw, 100vw",
              })}
            </div>
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
      </div>
    </div>
  );
}
