import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Keyboard, Pagination, Navigation } from "swiper";

export default function Hero() {
  return (
    <>
      <div className="container-swiper flexCenter">
        <div className="  text-hero flexCenter">
          <img
            src="./Images/component2.png"
            alt="component1"
            className="compoent1"
          />
        </div>

        <div className="text-hero">
          <h3> สถาปนิกหลวง</h3>
          <p>
            ในฐานะช่างของแผนดิน เรามุ่งให้บริการงานช่างและให้คำปรึกษาทุกระดับ
          </p>
        </div>
        <div className="container-swiper1 ">
          <img src="./Images/component1.png" alt="component2" />
        </div>
        <div className="container-swiper1 ">
          <img src="./Images/component3.png" alt="component3" />
        </div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Keyboard, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="hero-img1"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero-img2"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero-img3"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero-img4"></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
