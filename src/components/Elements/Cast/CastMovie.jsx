import React from "react";
import { useFetchCast } from "../../../hooks/useFetchDatas";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import imgavatar from "../../../assets/images/avatar.jpg";
import SkeletonCast from "../Skeleton/SkeletonCast";

function CastMovie({ id }) {
  const [data, error, isLoading, isError] = useFetchCast("movie", id);
  if (isError) return `Error : ${error.message}`;
  return !isLoading ? (
    <Swiper
      slidesPerView={3}
      spaceBetween={10}
      autoplay
      scrollbar={{ draggable: true }}
      modules={[Scrollbar, Autoplay]}
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
      className="py-14 swiper-container"
    >
      {data?.map((act) => (
        <SwiperSlide
          key={act.id}
          className="flex flex-col items-center gap-8 py-3"
        >
          <div
            className="md:w-[250px] md:h-[250px] w-[150px] h-[150px] bg-cover rounded-full"
            style={{
              backgroundImage:
                act.profile_path !== null
                  ? `url(${import.meta.env.VITE_BASE_URL_IMG}${
                      act.profile_path
                    })`
                  : `url(${imgavatar})`,
            }}
          />
          <p className="text-white">{act.original_name}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  ) : (
    <SkeletonCast />
  );
}

export default CastMovie;
