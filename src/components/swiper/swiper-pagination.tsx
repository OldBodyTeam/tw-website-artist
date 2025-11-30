import { useSwiper } from "swiper/react";
import clsx from "clsx";
import { FC } from "react";
export interface SwiperPaginationProps {
  activeIndex: number;
}
const SwiperPagination: FC<SwiperPaginationProps> = ({ activeIndex }) => {
  const swiper = useSwiper();
  return (
    <div className="flex w-full items-center justify-between gap-[3px] absolute top-[44px] z-[300] cursor-pointer px-[44px]  hidden md:flex">
      <div
        className={clsx(
          "flex-1 transition-all duration-300 h-[4px] [clip-path:polygon(0_0,100%_0,calc(100%_-_8px)_100%,0_100%)]",
          activeIndex >= 0 ? "bg-[#f8ff31]" : "bg-[#979797]"
        )}
        onClick={() => swiper.slideTo(0)}
      ></div>
      <div
        className={clsx(
          "flex-1 transition-all duration-300 h-[4px] [clip-path:polygon(8px_0,100%_0,calc(100%_-_8px)_100%,0_100%)]",
          activeIndex >= 1 ? "bg-[#f8ff31]" : "bg-[#979797]"
        )}
        onClick={() => swiper.slideTo(1)}
      ></div>
      <div
        className={clsx(
          "flex-1 transition-all duration-300 h-[4px] [clip-path:polygon(8px_0,100%_0,calc(100%_-_8px)_100%,0_100%)]",
          activeIndex >= 2 ? "bg-[#f8ff31]" : "bg-[#979797]"
        )}
        onClick={() => swiper.slideTo(2)}
      ></div>
      <div
        className={clsx(
          "flex-1 transition-all duration-300 h-[4px] [clip-path:polygon(8px_0,100%_0,calc(100%_-_8px)_100%,0_100%)]",
          activeIndex >= 3 ? "bg-[#f8ff31]" : "bg-[#979797]"
        )}
        onClick={() => swiper.slideTo(3)}
      ></div>
    </div>
  );
};
export { SwiperPagination };
