"use client";
import React, { useEffect, useRef, useState } from "react";

interface StickyWatcherProps {
  offsetTop?: number;
  onChange?: (isStuck: boolean) => void;
  children: React.ReactNode;
  className?: string;
  scrollContainer?: React.RefObject<HTMLElement | null>;
  style?: React.CSSProperties;
}

const StickyWatcher: React.FC<StickyWatcherProps> = ({
  offsetTop = 0,
  onChange,
  children,
  className = "",
  scrollContainer,
  style,
}) => {
  const [isStuck, setIsStuck] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // 1. 获取滚动容器在视口中的顶部位置
        // 如果没有 rootBounds (视口滚动)，则默认为 0
        const rootTop = entry.rootBounds?.top ?? 0;

        // 2. 计算哨兵元素的实际视口位置
        const sentinelTop = entry.boundingClientRect.top;

        // 3. 核心修正：
        // 判断条件 = 哨兵位置 <= (容器顶部 + 偏移量 + 1px误差)
        const isScrollingDownPastThreshold =
          sentinelTop <= rootTop + offsetTop + 1;

        // 4. 只有当“不可见”且“已经滚过阈值”时，才算吸顶
        const stuck = !entry.isIntersecting && isScrollingDownPastThreshold;
        console.log("StickyWatcher - isStuck:", stuck);
        setIsStuck(stuck);
        if (onChange) {
          onChange(stuck);
        }
      },
      {
        root: scrollContainer?.current || null,
        threshold: [0],
        // rootMargin 保持不变，它负责控制 isIntersecting 的触发时机
        rootMargin: `-${offsetTop}px 0px 0px 0px`,
      }
    );

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
    };
  }, [offsetTop, onChange, scrollContainer]);

  return (
    <>
      {/* 哨兵 */}
      <div
        ref={sentinelRef}
        style={{
          width: "100%",
          height: "1px",
          marginBottom: "-1px", // 让哨兵和内容头部重叠，提高精度
          visibility: "hidden",
          pointerEvents: "none",
        }}
      />

      {/* 实际 Sticky 元素 */}
      <div
        className={className}
        style={{
          position: "sticky",
          top: `${offsetTop}px`,
          zIndex: 10,
          ...style,
        }}
      >
        {children}
      </div>
    </>
  );
};

export default StickyWatcher;
