import React, { useEffect, useRef, useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaAngleRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const videos = [
  "https://cdn.dribbble.com/userupload/44360845/file/4988e26dadf995df34b5bfde3d04d45d.mp4",
  "https://cdn.dribbble.com/userupload/44953456/file/76723a83e127562547a28df5001d257b.webm",
  "https://cdn.dribbble.com/userupload/16569515/file/original-d99071d642c8efd87400222a0c344e1a.mp4",
];

const BannerSection = () => {
  const [CurrentAdd, setCurrentAdd] = useState(0);
  const swiperRef = useRef(null);
  const PrevBtn = () => {
    swiperRef.current.slidePrev();
  };
  const NextBtn = () => {
    swiperRef.current.slideNext();
  };

  return (
    <div className="min-w-0 mt-3">
      <div className="relative z-10 w-full flex justify-center items-center">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setCurrentAdd(swiper.realIndex);
          }}
          autoplay={{
            delay: 7000,
          }}
          modules={[Autoplay]}
        >
          <div>
            {videos.map((src, i) => (
              <div>
                <SwiperSlide key={i}>
                  <video
                    src={src}
                    autoPlay
                    loop
                    muted
                    className="w-full px-1 lg:px-0 object-fill h-80 md:h-100 lg:h-130 rounded-xl"
                  ></video>
                </SwiperSlide>
              </div>
            ))}
          </div>
        </Swiper>
        <div className="absolute z-30 w-full flex justify-between px-2">
          <button onClick={PrevBtn}>
            <span>
              <FaChevronLeft className="cursor-pointer" size={25} />
            </span>
          </button>
          <button onClick={NextBtn}>
            <span>
              <FaChevronRight className="cursor-pointer" size={25} />
            </span>
          </button>
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-end gap-2 z-40">
          {videos.map((_, i) => (
            <button
              key={i - 1}
              onClick={() => setCurrentAdd(i)}
              className={`h-2 w-2 rounded-full transition-all ${
                CurrentAdd === i ? "bg-white w-4" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
