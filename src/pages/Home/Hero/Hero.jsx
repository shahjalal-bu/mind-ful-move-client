import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./hero.css";
//import image
import img from "../../../assets/img";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Hero() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className={`h-80 sm:h-[calc(100vh-12vh)] w-full bg-cover bg-no-repeat`}
            style={{
              background: `url(${img.bg1})`,
              backgroundPosition: "center right",
            }}
          >
            <div className="absolute inset-0 bg-[rgba(255,255,255,0.6)]"></div>
            <div className="max-w-[1380px] justify-center sm:justify-start h-full mx-auto flex items-center z-20 relative">
              <div className="p-10">
                <p className="font-grandHotel antialiased text-xl sm:text-3xl text-amber-500">
                  Student Special
                </p>
                <h1 className="font-luckiestGuy font-extrabold text-2xl  sm:text-7xl leading-[1.2] my-5">
                  3 Weeks Unlimited <br /> Yoga For Only $39
                </h1>
                <div>
                  <button className="btn btn-md btn-primary">LEARN MORE</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`h-80 sm:h-[calc(100vh-12vh)] relative w-full bg-cover bg-no-repeat`}
            style={{
              background: `url(${img.bg2})`,
              backgroundPosition: "center right",
            }}
          >
            <div className="absolute inset-0 bg-[rgba(255,255,255,0.6)]"></div>
            <div className="max-w-[1380px] justify-center sm:justify-start h-full relative z-50 mx-auto flex flex-row-reverse items-center">
              <div className="p-10">
                <p className="font-grandHotel antialiased text-xl sm:text-3xl text-amber-500">
                  Student Special
                </p>
                <h1 className="font-luckiestGuy font-extrabold text-2xl  sm:text-7xl leading-[1.2] my-5">
                  3 Weeks Unlimited <br /> Yoga For Only $39
                </h1>
                <div>
                  <button className="btn btn-md btn-primary">LEARN MORE</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`h-80 sm:h-[calc(100vh-12vh)] w-full bg-cover bg-no-repeat`}
            style={{
              background: `url(${img.bg3})`,
              backgroundPosition: "top center",
            }}
          >
            <div className="absolute inset-0 bg-[rgba(255,255,255,0.6)]"></div>
            <div className="max-w-[1380px] justify-center sm:justify-start h-full relative z-50 mx-auto flex  items-center">
              <div className="p-10">
                <p className="font-grandHotel antialiased text-xl sm:text-3xl text-amber-500">
                  Student Special
                </p>
                <h1 className="font-luckiestGuy font-extrabold text-2xl  sm:text-7xl leading-[1.2] my-5">
                  3 Weeks Unlimited <br /> Yoga For Only $39
                </h1>
                <div>
                  <button className="btn btn-md btn-primary">LEARN MORE</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-80 sm:h-[calc(100vh-12vh)] sm:w-full bg-center bg-no-repeat bg-contain"
            style={{
              background: `url(${img.bg4})`,
              backgroundPosition: "top center",
            }}
          >
            <div className="absolute inset-0 bg-[rgba(255,255,255,0.6)]"></div>
            <div className="max-w-[1380px] justify-center sm:justify-start h-full relative z-50 mx-auto flex flex-row-reverse items-center">
              <div className="p-10">
                <p className="font-grandHotel antialiased text-xl sm:text-3xl text-amber-500">
                  Student Special
                </p>
                <h1 className="font-luckiestGuy font-extrabold text-2xl  sm:text-7xl leading-[1.2] my-5">
                  3 Weeks Unlimited <br /> Yoga For Only $39
                </h1>
                <div>
                  <button className="btn btn-md btn-primary">LEARN MORE</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
