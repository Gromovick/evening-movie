import React from "react";
import s from "./Slider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const Slider = ({ children, className, ...props }) => {
  return (
    <Swiper
      slidesPerView={1}
      {...props}
      className={`${"mySwiper"} ${className}`}
    >
      {children}
    </Swiper>
  );
};

export default Slider;
