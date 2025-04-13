import React, { useRef, useState } from "react";
import s from "./BigSlider.module.scss";
import Slider from "../Slider/Slider";
import "swiper/css/pagination";

import { SwiperSlide } from "swiper/react";
import { AnimatePresence, motion } from "motion/react";
import { Autoplay } from "swiper/modules";
import { useOnLoad } from "../../hooks/useOnLoad";
import useWindowInfo from "../../hooks/useWindowInfo";
import { Pagination } from "swiper/modules";
import Rating from "../Rating/Rating";
import { useLocation } from "react-router";
const pagination = {
  clickable: true,
  dynamicBullets: true,
  // bulletActiveClass: `${s.active}`,
  // renderBullet: function (index, className) {
  //   return `<button class="${
  //     `s.big_slider__slider_pagination_btn`
  //   } ${className}">${index + 1}</button>`;
  // },

  el: ".pagination",
  renderBullet: function (index, className) {
    return `<button class="${
      s.big_slider__slider_pagination_btn
    } ${className}"> <span>${index + 1}</span> </button>`;
  },
};
const BigSlider = ({
  controls = true,
  btns = true,
  slides = [0, 0],
  renderContent,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const swiperRef = useRef(null);
  const touchStartRef = useRef({ x: 0, y: 0 });
  const delay = 5000;
  const handleTouchStart = (event) => {
    const touch = event.touches?.[0] ?? event;
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  };
  const location = useLocation();
  const load = useOnLoad();
  // console.log("LOAD",load);

  const { device } = useWindowInfo();
  return (
    <div
      className={s.big_slider__slider_wrapper}
      style={{ "--delay": `${delay}ms` }}
    >
      <Slider
        rewind={true}
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay,
          disableOnInteraction: false,
        }}
        pagination={device === "mobile" ? false : pagination}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          swiper.update();
        }}
        direction={"vertical"}
        allowTouchMove={false}
        onSlideChange={(e) => setCurrentSlide(e.activeIndex)}
        slidesPerView={1}
        className={s.big_slider__slider}
        spaceBetween={0}
      >
        {slides.map((slide, index) => {
          return (
            <SwiperSlide className={s.big_slider__slide}>
              <div className={s.big_slider__slide_poster_wrapper}>
                <img
                  className={s.big_slider__slide_poster}
                  src={
                    slide
                      ? `${import.meta.env.VITE_TMDB_BACK_IMAGE_BASE_URL}${
                          slide.backdrop_path
                        }`
                      : "/img/main/poster2.webp"
                  }
                  alt="slide poster"
                  loading={index !== 0 ? "lazy" : "eager"}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Slider>
      <div className={s.big_slider__slider_content_wrapper}>
        <div className="container" style={{ width: "100%" }}>
          <div
            className={"pagination"}
            style={{ position: "absolute", zIndex: "100" }}
          ></div>
          <div className={s.big_slider__slider_content}>
            <AnimatePresence>
              {slides.map((slide, index) => {
                return (
                  currentSlide === index &&
                  load && (
                    <motion.div
                      mode="popLayout"
                      layout
                      key={`${location.pathname}-${slide?.id || index}`}
                      initial={{ opacity: 0, scale: 0.85, y: 100 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.85, y: 100 }}
                      transition={{ duration: 0.35 }}
                      className={s.big_slider__slide_content}
                    >
                      {renderContent ? (
                        renderContent({ slide, index })
                      ) : (
                        <>
                          <h1 className={s.big_slider__slide_title}>
                            {slide.title || slide.name}
                          </h1>
                          <p className={s.big_slider__slide_desc}>
                            {slide.overview}
                          </p>
                          <Rating
                            className={s.rating}
                            rating={slide.vote_average}
                            number={true}
                          />
                        </>
                      )}
                    </motion.div>
                  )
                );
              })}
            </AnimatePresence>
          </div>
        </div>
        {/* <div className={s.big_slider__slider_pagination}>
          {[...Array(5)].map((e, index) => {
            return (
              <button
                className={`${s.big_slider__slider_pagination_btn} ${
                  index === 2 ? s.big_slider__slider_pagination_btn__active : ""
                }`}
              >
                {index + 1}
              </button>
            );
          })}
        </div> */}
      </div>
    </div>
  );
};

export default BigSlider;
