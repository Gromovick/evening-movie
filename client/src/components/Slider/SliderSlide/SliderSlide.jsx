import React from "react";
import s from "./SliderSlide.module.scss";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
const SliderSlide = ({ children, ...props }) => {
  return <SwiperSlide {...props}>{children}</SwiperSlide>;
};

export default SliderSlide;
