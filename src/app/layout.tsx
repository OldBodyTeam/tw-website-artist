import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LeftNav } from "@/components/left-nav/left-nav";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { AntdProvider } from "./antd-provider";
import { rootMetadata, structuredData } from "@/lib/seo";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = rootMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = JSON.stringify(structuredData).replace(/</g, "\\u003c");

  return (
    <html lang="zh-TW">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd }}
        />
        <AntdRegistry>
          <AntdProvider>
            <div className="flex min-h-[100dvh] w-full items-stretch overflow-x-clip md:h-screen">
              <LeftNav />
              <div className="min-w-0 flex-1">{children}</div>
            </div>
          </AntdProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
