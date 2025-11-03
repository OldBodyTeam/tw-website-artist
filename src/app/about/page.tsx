import Image from "next/image";
import { ScrollPage } from "./_components/scroll-page";
export default function About() {
  return (
    <div className="flex-1 h-screen relative bg-black py-[44px] px-[64px] flex flex-col">
      <div className="flex items-center justify-between">
        <Image src="/home-2/company.png" alt="2" width={320} height={32} />
        <Image src="/home-2/logo.png" alt="2" width={264} height={48} />
      </div>
      <div className="flex justify-between items-center mt-[64px] overflow-y-hidden  overflow-x-auto flex-1">
        <ScrollPage />
      </div>
    </div>
  );
}
