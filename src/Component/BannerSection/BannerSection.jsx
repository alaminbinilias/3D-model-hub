import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAdd((prev) => prev + 1 + videos.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const PrevBtn = () => {
    console.log("PreviousBtn");
    setCurrentAdd((CurrentAdd - 1 + videos.length) % videos.length);
  };
  const NextBtn = () => {
    console.log("NextBtn");
  };

  return (
    // <div className='border object-cover flex items-center justify-center mt-2'>
    //     <div className='flex overflow-hidden w-full brightness-90 transition-transform duration-700 ease-in-out' style={{
    //         transform:`translateX(-${current * 100}%)`
    //     }}>
    //         {
    //             videos.map((src,i)=>(
    //                 <div key={i} className='w-full relative shrink-0'>
    //                 <video
    //                 src={src}
    //                 autoPlay
    //                 loop
    //                 muted
    //                 playsInline
    //                 className='w-full h-[80vh] object-center object-cover'
    //                 ></video>
    //                 </div>
    //             ))
    //         }
    //     </div>
    // </div>
    <div className=" relative z-0 h-full mt-1">
      <div className="w-full max-h-full flex justify-center items-center">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 6800,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, navigation]}
          className="mySwiper"
        >
          {videos.map((src, i) => (
            <div>
              <SwiperSlide
                className=" absolute z-10 transition-transform ease-in-out"
                style={{ transform: `translateX(-${CurrentAdd - 1 * 100}%)` }}
              >
                <video
                  src={src}
                  autoPlay
                  loop
                  muted
                  className=" w-full mt-3 lg:mt-2 max-h-[42vh] lg:max-h-[70vh] object-fill rounded-2xl"
                ></video>
              </SwiperSlide>
            </div>
          ))}
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
              key={i-1}
              onClick={() => setCurrentAdd(i-1)}
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
