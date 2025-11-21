"use client";
import Image from "next/image";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import Link from "next/link";
import { usePathname } from "next/navigation";
export const menu = [
  {
    name: "首頁",
    path: "/",
  },
  {
    name: "關於",
    path: "/about",
  },
  {
    name: "服務",
    path: "/service",
  },
  {
    name: "案例",
    path: "/example",
  },
  {
    name: "聯絡",
    path: "/contact",
  },
];
const LeftNav = () => {
  const pathname = usePathname();
  return (
    <Drawer direction="left">
      <div className="md:bg-[#F8F8EC] md:h-screen fixed top-8 left-8 md:static md:top-auto md:left-auto z-50">
        <DrawerTrigger>
          {/* Mobile Trigger */}
          <div className="md:hidden">
            <Image
              src="/nav/mobile-menu.svg"
              alt="menu"
              width={32}
              height={32}
            />
          </div>
          {/* Desktop Trigger */}
          <div className="hidden md:flex w-[48px] h-full flex-col items-center px-[8px] py-[40px] gap-[16px]">
            <Image src="/nav-icon.svg" alt="logo" width={32} height={32} />
            <div className="flex-1 bg-[#0A090F] w-[1px] opacity-10"></div>
          </div>
        </DrawerTrigger>
        <DrawerTitle></DrawerTitle>
        <DrawerContent>
          <div className="bg-[#F8F8EC] h-screen p-[40px] flex flex-col justify-between">
            <div>
              <Image
                src="/logo.svg"
                alt="logo"
                width={176}
                height={32}
                className="mb-[40px]"
              />
              <RadioGroup defaultValue={menu[0].path} value={pathname}>
                {menu.map((item) => (
                  <Link key={item.path} href={item.path}>
                    <Label
                      htmlFor={item.name}
                      className="flex items-center justify-between w-full mb-[16px] "
                    >
                      <div className="text-[#0A090F] text-[16px] font-bold">
                        {item.name}
                      </div>
                      <RadioGroupItem value={item.path} id={item.name}>
                        {item.name}
                      </RadioGroupItem>
                    </Label>
                    <div className="w-full h-[1px] bg-[#0A090F] opacity-10"></div>
                  </Link>
                ))}
              </RadioGroup>
            </div>
            <div>
              <div className="text-[#231915]">亞堤思新創整合行销</div>
              <div className="h-[1px] w-full my-[16px] bg-[#0A090F] opacity-10" />
              <div className="flex flex-col gap-[16px]">
                <div className="flex items-center gap-[8px]">
                  <Image
                    src="/nav/location.svg"
                    alt="location"
                    width={18}
                    height={18}
                  />
                  彰化縣員林市園林大街80號
                </div>
                <div className="flex items-center gap-[8px]">
                  <Image
                    src="/nav/phone.svg"
                    alt="location"
                    width={18}
                    height={18}
                  />
                  0932-050383
                </div>
                <div className="flex items-center gap-[8px]">
                  <Image
                    src="/nav/chat.svg"
                    alt="location"
                    width={18}
                    height={18}
                  />
                  artistmkt.co@gmail.com
                </div>
              </div>
              <div className="flex items-center justify-between my-[32px]">
                <Image
                  src="/nav/face.svg"
                  alt="location"
                  width={30}
                  height={30}
                />
                <Image
                  src="/nav/tel.svg"
                  alt="location"
                  width={30}
                  height={30}
                />
                <Image
                  src="/nav/ins.svg"
                  alt="location"
                  width={30}
                  height={30}
                />
              </div>
              <div className="text-[#32373d] text-[12px] font-regular">
                c 2025 亞堤思新創整合行销 | Artist MKT. All Rights Reserved.
              </div>
            </div>
          </div>
        </DrawerContent>
      </div>
    </Drawer>
  );
};

export { LeftNav };
