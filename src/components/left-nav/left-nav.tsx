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
import { useState } from "react";

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
  const [visible, setVisible] = useState(false);

  return (
    // 加条线
    <Drawer direction="left" open={visible} onOpenChange={setVisible}>
      <div className="z-50 md:static md:h-screen md:bg-[#F8F8EC]">
        {/* Mobile Trigger */}
        <DrawerTrigger asChild>
          <button
            type="button"
            aria-label="Open navigation menu"
            className="fixed inset-x-0 top-0 z-30 flex items-center justify-center border-b border-white/6 bg-[#05050c]/88 pb-[10px] backdrop-blur-md md:hidden"
            style={{
              paddingTop: "calc(env(safe-area-inset-top) + 10px)",
              paddingRight: "max(16px, env(safe-area-inset-right))",
              paddingLeft: "max(16px, env(safe-area-inset-left))",
            }}
          >
            <Image
              src="/nav/mobile-menu.svg"
              alt="menu"
              width={22}
              height={22}
              className="absolute"
              style={{
                top: "calc(env(safe-area-inset-top) + 10px)",
                left: "max(16px, env(safe-area-inset-left))",
              }}
            />
            <Image
              src="/home-1/1.svg"
              alt="menu"
              width={132}
              height={24}
              className="h-auto w-[118px]"
            />
          </button>
        </DrawerTrigger>
        {/* Desktop Trigger */}
        <DrawerTrigger asChild>
          <button
            type="button"
            className="hidden md:flex w-[48px] h-full flex-col items-center px-[8px] py-[40px] gap-[16px]"
          >
            <Image src="/nav-icon.svg" alt="logo" width={32} height={32} />
            <div className="flex-1 bg-[#0A090F] w-[1px] opacity-10"></div>
          </button>
        </DrawerTrigger>
        <DrawerTitle></DrawerTitle>
        <DrawerContent className="backdrop-blur-[8px]">
          <div className="flex min-h-[100dvh] flex-col justify-between overflow-y-auto bg-[#F8F8EC] pt-[calc(env(safe-area-inset-top)+24px)] pr-[max(24px,env(safe-area-inset-right))] pb-[calc(env(safe-area-inset-bottom)+24px)] pl-[max(24px,env(safe-area-inset-left))] md:h-screen md:min-h-0 md:p-[40px]">
            <div>
              <Image
                src="/logo.svg"
                alt="logo"
                width={176}
                height={32}
                className="mb-[40px]"
              />
              <RadioGroup value={pathname}>
                {menu.map((item) => (
                  // 加手
                  <Link
                    key={item.path}
                    href={item.path}
                    className="cursor-pointer"
                  >
                    <Label
                      htmlFor={item.name}
                      className="flex items-center justify-between w-full mb-[16px] cursor-pointer"
                      onClick={() => setVisible(false)}
                    >
                      <div className="text-[#0A090F] text-[16px] font-bold cursor-pointer">
                        {item.name}
                      </div>
                      <RadioGroupItem
                        value={item.path}
                        id={item.name}
                        className="cursor-pointer"
                      >
                        {item.name}
                      </RadioGroupItem>
                    </Label>
                    <div className="w-full h-[1px] bg-[#0A090F] opacity-10"></div>
                  </Link>
                ))}
              </RadioGroup>
            </div>
            <div>
              <Image
                src="/nav/nav-logo.png"
                alt="logo"
                width={160}
                height={16}
              />
              <div className="h-[1px] w-full my-[16px] bg-[#0A090F] opacity-10" />
              <div className="flex flex-col gap-[16px]">
                <div className="flex items-center gap-[8px]">
                  <Image
                    src="/nav/chat.svg"
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
                    src="/nav/location.svg"
                    alt="location"
                    width={18}
                    height={18}
                  />
                  artistmkt.co@gmail.com
                </div>
              </div>
              <div className="flex items-center justify-between my-[32px]">
                <Link
                  href="https://www.facebook.com/artistmkt"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="/nav/ins.svg"
                    alt="location"
                    width={30}
                    height={30}
                  />
                </Link>
                <Link
                  href="https://www.instagram.com/artist.mkt/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="/nav/tel.svg"
                    alt="location"
                    width={30}
                    height={30}
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/108332681/admin/dashboard"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src="/nav/face.svg"
                    alt="location"
                    width={30}
                    height={30}
                  />
                </Link>
              </div>
              <div className="text-[#32373d] text-[12px] font-regular">
                © 2025 亞堤思新創整合行销 | Artist MKT. All Rights Reserved.
              </div>
            </div>
          </div>
        </DrawerContent>
      </div>
    </Drawer>
  );
};

export { LeftNav };
