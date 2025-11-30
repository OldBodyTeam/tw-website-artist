import Image from "next/image";
export default function Service() {
  return (
    <div className="flex-1 h-screen relative bg-black p-[44px] flex flex-col">
      <div className="flex items-center justify-between">
        <Image src="/home-2/company.png" alt="2" width={320} height={32} />
        <Image src="/home-2/logo.png" alt="2" width={264} height={48} />
      </div>
      <div className="flex justify-between items-center mt-[64px] overflow-auto flex-1">
        <div className="flex-1 grid grid-cols-4 gap-[16px] overflow-x-hidden overflow-y-auto swiper-no-mousewheel">
          {Array.from({ length: 140 }).map((_, index) => (
            <div key={index} className="bg-[#222222] w-full h-[304px]">
              1
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
