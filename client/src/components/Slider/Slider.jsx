import React, { useMemo } from "react";
import s from "./Slider.module.scss";
import { Swiper } from "swiper/react";
import "swiper/css";

const BREAKPOINT_MAP = {
  mobile: 10,
  tablet: 550, // 780
  desktop: 780, //1280
  initial: 1440, // 1440
};

const Slider = ({ children, className, breakpoints, ...props }) => {
  const convertedBreakpoints = useMemo(() => {
    if (!breakpoints) {
      return {};
    }
    let mappedBreakpoints = {};
    for (let key in breakpoints) {
      console.log(key);

      if (BREAKPOINT_MAP[key]) {
        mappedBreakpoints[BREAKPOINT_MAP[key]] = breakpoints[key];
      }
    }
    return mappedBreakpoints;
  }, [breakpoints]);

  return (
    <Swiper
      {...props}
      className={`${"mySwiper"} ${className}`}
      breakpoints={convertedBreakpoints}
    >
      {children}
    </Swiper>
  );
};

export default Slider;
