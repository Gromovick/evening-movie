import React, { useCallback, useEffect, useRef, useState } from "react";
import s from "./SectionSlider.module.scss";
import Slider from "../Slider/Slider";
import "swiper/css/scrollbar";
import { Navigation } from "swiper/modules";
import { Scrollbar } from "swiper/modules";
import { FreeMode } from "swiper/modules";
import { activeMobile } from "../../utils/media";
import useWindowSize from "../../hooks/useWindowSize";

const types = {
  wide: {},
  medium: {
    initial: {
      slidesPerView: 4,
      spaceBetween: 30,
      freeMode: false,
    },
    desktop: {
      slidesPerView: 4,
      spaceBetween: 20,
      freeMode: false,
    },
    tablet: {
      slidesPerView: 2.5,
      spaceBetween: 15,
      freeMode: false,
    },
    mobile: {
      slidesPerView: 1.25,
      spaceBetween: 15,
      freeMode: true,
    },
  },
  small: {
    initial: {
      slidesPerView: 5,
      spaceBetween: 30,
      freeMode: false,
    },
    desktop: {
      slidesPerView: 5,
      spaceBetween: 20,
      freeMode: false,
    },
    tablet: {
      slidesPerView: 3,
      spaceBetween: 15,
      freeMode: false,
    },
    mobile: {
      slidesPerView: 1.5,
      spaceBetween: 15,
      freeMode: true,
    },
  },
};

const SectionSlider = ({ title, children, slides, type }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slider = useRef(null);
  const mobile = activeMobile();
  const { w, h } = useWindowSize();

  const scrollRef = useRef(null);

  const handleActiveSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  const handleScrollNext = useCallback(() => {
    if (slider.current) {
      slider.current.slideNext();
    }
  }, [slider.current]);
  const handleScrollPrev = useCallback(() => {
    if (slider.current) {
      slider.current.slidePrev();
    }
  }, [slider.current]);

  return (
    <>
      <div className={s.slider__wrapper}>
        <div className={s.slider__top_content}>
          <h3 className={s.slider__title}>{title ? title : "No title"}</h3>
          {w >= mobile && (
            <div className={s.slider__controls}>
              <button
                onClick={handleScrollPrev}
                id={"prev"}
                className={s.slider__controls_btn}
              >
                <svg
                  style={{ transform: "rotateZ(180deg)" }}
                  className={s.slider__controls_btn_icon}
                  viewBox="0 0 24 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.75 1.25L22.5 10M22.5 10L13.75 18.75M22.5 10H1.5"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <div className={s.slider__pagination}>
                {slides.map((slide, index) => {
                  return index !== slides.length - 1 ? (
                    <button
                      onClick={() => {
                        handleActiveSlide(index);
                      }}
                      className={`${s.slider__pagination_btn} ${
                        index === currentSlide ? s.active : ""
                      }`}
                    ></button>
                  ) : null;
                })}
              </div>
              <button
                onClick={handleScrollNext}
                id={"next"}
                className={s.slider__controls_btn}
              >
                <svg
                  className={s.slider__controls_btn_icon}
                  viewBox="0 0 24 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.75 1.25L22.5 10M22.5 10L13.75 18.75M22.5 10H1.5"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>

        <Slider
          modules={[FreeMode, Scrollbar, Navigation]}
          scrollbar={{
            el: `.${s.slider__scroll_bar}`,
            draggable: true,
            hide: false,
          }}
          className={s.slider}
          onSwiper={(swiper) => {
            slider.current = swiper;
          }}
          onSlideChange={(e) => {
            setCurrentSlide(e.activeIndex);
          }}
          breakpoints={type ? types[type] : types.small}
        >
          {children}
        </Slider>
        <div ref={scrollRef} className={s.slider__scroll_wrapper}>
          <div className={s.slider__scroll_bar}></div>
        </div>
      </div>
    </>
  );
};

export default SectionSlider;
