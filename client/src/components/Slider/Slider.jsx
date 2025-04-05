import React, { useMemo } from "react";
import s from "./Slider.module.scss";
import { Swiper } from "swiper/react";
import "swiper/css";

const BREAKPOINT_MAP = {
  mobile: 10,
  tablet: 750, // 1280
  desktop: 1280, //1440
  initial: 1440, // 1920
};

const Slider = ({ children, className, breakpoints, ...props }) => {
  const convertedBreakpoints = useMemo(() => {
    if (!breakpoints) {
      return {};
    }
    let mappedBreakpoints = {};
    for (let key in breakpoints) {
      if (BREAKPOINT_MAP[key]) {
        mappedBreakpoints[BREAKPOINT_MAP[key]] = breakpoints[key];
      }
    }
    console.log("Converted Breakpoints:", mappedBreakpoints);
    return mappedBreakpoints;
  }, [breakpoints]);

  return (
    <Swiper
      {...props}
      className={`${s.mySwiper} ${className}`}
      breakpoints={{ ...convertedBreakpoints }}
    >
      {children}
    </Swiper>
  );
};

export default Slider;
