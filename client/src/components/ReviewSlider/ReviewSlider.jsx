import React, { useRef, useState } from "react";
import s from "./ReviewSlider.module.scss";
import Slider from "../Slider/Slider";
import { SwiperSlide } from "swiper/react";
import ReviewCard from "../ReviewCard/ReviewCard";
import SliderControls from "../SliderControls/SliderControls";

const breakpoints = {
  initial: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  tablet: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
};

const ReviewSlider = () => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSwiper = (swiper) => {
    sliderRef.current = swiper;
    swiper.on("slideChange", () => {
      setActiveIndex(swiper.realIndex);
    });
  };
  const handleSlideNext = () => {
    sliderRef.current?.slideNext();
  };

  const handleSlidePrev = () => {
    sliderRef.current?.slidePrev();
  };
  const handleSlideChange = (index) => {
    sliderRef.current?.slideTo(index);
  };
  return (
    <>
      <Slider breakpoints={breakpoints} onSwiper={handleSwiper}>
        <SwiperSlide>
          <ReviewCard />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewCard />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewCard />
        </SwiperSlide>
      </Slider>
      <SliderControls
        style={3}
        wide={false}
        pagination={{
          paginationCount: 3,
          activeSlide: activeIndex,
          changeSlide: handleSlideChange,
        }}
        controls={{
          slideNext: handleSlideNext,
          slidePrev: handleSlidePrev,
        }}
      />
    </>
  );
};

export default ReviewSlider;
