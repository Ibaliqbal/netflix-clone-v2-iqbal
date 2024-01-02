import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AvatarImg from "../../../assets/images/avatar.jpg";

function SkeletonCast() {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={10}
      navigation
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 5,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
      }}
    >
      {[Array(15).keys()].map((_, i) => (
        <SwiperSlide
          key={i}
          className="flex flex-col items-center gap-8 py-3 animate-pulse"
        >
          <div className="md:w-[250px] md:h-[250px] w-[150px] h-[150px] bg-gray-300 rounded-full" />
          <p className="text-white w-[150px] h-[120px]"></p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SkeletonCast;
