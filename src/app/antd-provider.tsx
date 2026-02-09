"use client";

import "@ant-design/v5-patch-for-react-19";
import { ConfigProvider } from "antd";
import type { ReactNode } from "react";

const theme = {
  components: {
    Form: {
      labelColor: "white",
    },
    Input: {
      paddingInline: 20,
      paddingBlock: 12,
      activeBorderColor: "transparent",
      hoverBorderColor: "rgba(255, 255, 255, 0.3)",
      activeShadow: "0 0 0 1px rgba(255, 255, 255, 0.3)",
      colorTextPlaceholder: "rgba(255, 255, 255, 0.8)",
      colorText: "white",
    },
    Radio: {
      colorText: "rgba(255, 255, 255, 0.8)",
      radioSize: 14,
      colorPrimary: "#f8ff31",
      colorPrimaryHover: "#f8ff31",
    },
  },
  token: {
    colorTextPlaceholder: "rgba(255, 255, 255, 0.3)",
    borderRadius: 0,
    colorBgContainer: "black",
    colorBorder: "rgba(255, 255, 255, 0.3)",
  },
};

function AntdProvider({ children }: { children: ReactNode }) {
  return <ConfigProvider theme={theme}>{children}</ConfigProvider>;
}

export { AntdProvider };
