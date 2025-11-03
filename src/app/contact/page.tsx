import Image from "next/image";
import { ContactForm } from "./_component/form";
export default function Contact() {
  return (
    <div className="flex-1 h-screen relative bg-black py-[44px] px-[64px]">
      <div className="flex items-center justify-between">
        <Image src="/home-2/company.png" alt="2" width={320} height={32} />
        <Image src="/home-2/logo.png" alt="2" width={264} height={48} />
      </div>
      <div className="flex justify-between items-center mt-[64px]">
        <ContactForm />
        <Image src="/contact/p.png" alt="2" width={450} height={700} />
      </div>
    </div>
  );
}
