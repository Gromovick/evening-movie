import React, { useRef, useState, useCallback, useMemo } from "react";
import s from "./ReviewSlider.module.scss";
import Slider from "../Slider/Slider";
import { SwiperSlide } from "swiper/react";
import ReviewCard from "../ReviewCard/ReviewCard";
import SliderControls from "../SliderControls/SliderControls";

// Винесено поза компонент — не буде перестворюватися
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
  // console.log("RERENDER");
  
  const handleSwiper = useCallback(
    (swiper) => {
      sliderRef.current = swiper;
      swiper.on("slideChange", () => {
        setActiveIndex(swiper.realIndex);
      });
    },
    [sliderRef.current]
  );

  const handleSlideNext = useCallback(() => {
    sliderRef.current?.slideNext();
  }, [sliderRef.current]);

  const handleSlidePrev = useCallback(() => {
    sliderRef.current?.slidePrev();
  }, [sliderRef.current]);

  const handleSlideChange = useCallback(
    (index) => {
      sliderRef.current?.slideTo(index);
    },
    [sliderRef.current]
  );

  const controls = useMemo(
    () => ({
      slideNext: handleSlideNext,
      slidePrev: handleSlidePrev,
    }),
    [handleSlideNext, handleSlidePrev]
  );

  const pagination = useMemo(
    () => ({
      paginationCount: 3,
      activeSlide: activeIndex,
      changeSlide: handleSlideChange,
    }),
    [activeIndex, handleSlideChange]
  );

  return (
    <>
      <Slider breakpoints={breakpoints} onSwiper={handleSwiper}>
        {[...Array(3)].map((_, i) => (
          <SwiperSlide key={i}>
            <ReviewCard />
          </SwiperSlide>
        ))}
      </Slider>

      <SliderControls
        style={3}
        wide={false}
        pagination={pagination}
        controls={controls}
      />
    </>
  );
};

export default ReviewSlider;
