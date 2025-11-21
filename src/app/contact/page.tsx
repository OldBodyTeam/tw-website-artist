import Image from "next/image";
import { ContactForm } from "./_component/form";
export default function Contact() {
  return (
    <div className="flex-1 h-screen bg-black py-[20px] px-[16px] md:py-[44px] md:px-[64px] flex flex-col md:h-auto md:min-h-screen">
      {/* 顶部标题 */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 w-full">
        {/* Mobile Title */}
        <Image
          src="/home-2/mobile-title.png"
          alt="Artist.com"
          width={152}
          height={45}
          className="md:hidden"
        />

        {/* Desktop Images */}
        <Image
          src="/home-2/company.png"
          alt="company"
          width={320}
          height={32}
          className="hidden md:block"
        />
        <Image
          src="/home-2/logo.png"
          alt="logo"
          width={264}
          height={48}
          className="hidden md:block"
        />
      </div>

      {/* 内容区域 */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-[32px] md:mt-[64px] flex-1 gap-[32px] md:gap-0">
        <ContactForm />
        <Image
          src="/contact/p.png"
          alt="contact"
          width={450}
          height={700}
          className="hidden md:block"
        />
      </div>
    </div>
  );
}
