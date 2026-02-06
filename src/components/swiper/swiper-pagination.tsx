import { useSwiper } from "swiper/react";
import clsx from "clsx";
import { FC } from "react";
export interface SwiperPaginationProps {
  activeIndex: number;
}
const SwiperPagination: FC<SwiperPaginationProps> = ({ activeIndex }) => {
  const swiper = useSwiper();
  return (
    <div className="flex w-full items-center justify-between gap-[3px] absolute top-11 z-[300] cursor-pointer px-11 hidden md:flex">
      <div
        className={clsx(
          "flex-1 transition-all duration-300 h-1 [clip-path:polygon(0_0,100%_0,calc(100%_-_8px)_100%,0_100%)]",
          activeIndex >= 0 ? "bg-brand" : "bg-ash"
        )}
        onClick={() => swiper.slideTo(0)}
      ></div>
      <div
        className={clsx(
          "flex-1 transition-all duration-300 h-1 [clip-path:polygon(8px_0,100%_0,calc(100%_-_8px)_100%,0_100%)]",
          activeIndex >= 1 ? "bg-brand" : "bg-ash"
        )}
        onClick={() => swiper.slideTo(1)}
      ></div>
      <div
        className={clsx(
          "flex-1 transition-all duration-300 h-1 [clip-path:polygon(8px_0,100%_0,calc(100%_-_8px)_100%,0_100%)]",
          activeIndex >= 2 ? "bg-brand" : "bg-ash"
        )}
        onClick={() => swiper.slideTo(2)}
      ></div>
      <div
        className={clsx(
          "flex-1 transition-all duration-300 h-1 [clip-path:polygon(8px_0,100%_0,calc(100%_-_8px)_100%,0_100%)]",
          activeIndex >= 3 ? "bg-brand" : "bg-ash"
        )}
        onClick={() => swiper.slideTo(3)}
      ></div>
    </div>
  );
};
export { SwiperPagination };
