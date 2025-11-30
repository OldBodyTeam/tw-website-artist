import Image from "next/image";
const TopNav = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 w-full">
      {/* Mobile Title */}
      <div className="md:hidden flex items-center justify-center relative">
        <Image
          src="/home-2/mobile-title.png"
          alt="Artist.com"
          width={152}
          height={45}
          className="absolute top-1/2 left-1/2"
        />
      </div>

      {/* Desktop Images */}
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
  );
};
export { TopNav };
