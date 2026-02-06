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
import { useState, useEffect } from "react";

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

  // 监听路由变化，自动关闭侧边栏
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setVisible(false);
  }, [pathname]);

  return (
    // 加条线
    <Drawer direction="left" open={visible} onOpenChange={setVisible}>
      <div className="md:bg-paper md:h-screen fixed top-8 left-8 md:static md:top-auto md:left-auto z-50">
        {/* Mobile Trigger */}
        <DrawerTrigger asChild>
          <button
            type="button"
            className="md:hidden w-full fixed top-0 left-0 flex items-center justify-center z-30 p-4"
          >
            <Image
              src="/nav/mobile-menu.svg"
              alt="menu"
              width={22}
              height={22}
              className="absolute top-4 left-4"
            />
            <Image src="/home-1/1.svg" alt="menu" width={132} height={24} />
          </button>
        </DrawerTrigger>
        {/* Desktop Trigger */}
        <DrawerTrigger asChild>
          <button
            type="button"
            className="hidden md:flex w-12 h-full flex-col items-center px-2 py-10 gap-4"
          >
            <Image src="/nav-icon.svg" alt="logo" width={32} height={32} />
            <div className="flex-1 w-px bg-ink/10"></div>
          </button>
        </DrawerTrigger>
        <DrawerTitle></DrawerTitle>
        <DrawerContent className="backdrop-blur-0 md:backdrop-blur">
          <div className="bg-paper h-screen p-6 md:p-10 flex flex-col justify-between">
            <div>
              <Image
                src="/logo.svg"
                alt="logo"
                width={176}
                height={32}
                className="mb-10"
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
                      className="flex items-center justify-between w-full mb-4 cursor-pointer"
                      onClick={() => setVisible(false)}
                    >
                      <div className="text-ink text-base font-bold cursor-pointer">
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
                    <div className="w-full h-px bg-ink/10"></div>
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
              <div className="h-px w-full my-4 bg-ink/10" />
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <Image
                    src="/nav/chat.svg"
                    alt="location"
                    width={18}
                    height={18}
                  />
                  彰化縣員林市園林大街80號
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src="/nav/phone.svg"
                    alt="location"
                    width={18}
                    height={18}
                  />
                  0932-050383
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src="/nav/location.svg"
                    alt="location"
                    width={18}
                    height={18}
                  />
                  artistmkt.co@gmail.com
                </div>
              </div>
              <div className="flex items-center justify-between my-8">
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
              <div className="text-foreground/70 text-xs font-normal">
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
