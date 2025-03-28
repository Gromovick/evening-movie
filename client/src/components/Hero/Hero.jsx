import React, { useRef, useState } from "react";
import s from "./Hero.module.scss";
import Slider from "../Slider/Slider";
import SliderSlide from "../Slider/SliderSlide/SliderSlide";
import { SwiperSlide } from "swiper/react";
import { AnimatePresence, motion } from "motion/react";
import { Autoplay } from "swiper/modules";

const slides = [
  {
    poster: "/img/main/poster1.webp",
    title: "Avengers : Endgame1",
    desc: `With the help
     of remaining allies, the Avengers must assemble once more in
      order to undo Thanos's actions and undo the chaos to the
       universe, no matter what consequences may be in store, and no matter
        who they face... Avenge the fallen.`,
  },
  {
    poster: "/img/main/poster2.webp",
    title: "Avengers : Endgame2",
    desc: `With the help
     of remaining allies, the Avengers must assemble once more in
      order to undo Thanos's actions and undo the chaos to the
       universe, no matter what consequences may be in store, and no matter
        who they face... Avenge the fallen.`,
  },
  {
    poster: "/img/main/poster3.webp",
    title: "Avengers : Endgame3",
    desc: `With the help
     of remaining allies, the Avengers must assemble once more in
      order to undo Thanos's actions and undo the chaos to the
       universe, no matter what consequences may be in store, and no matter
        who they face... Avenge the fallen.`,
  },
  {
    poster: "/img/main/poster4.webp",
    title: "Avengers : Endgame4",
    desc: `With the help
     of remaining allies, the Avengers must assemble once more in
      order to undo Thanos's actions and undo the chaos to the
       universe, no matter what consequences may be in store, and no matter
        who they face... Avenge the fallen.`,
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slider = useRef(null);
  return (
    <section id={s.hero} className="section">
      <div className="container">
        <div className={s.hero__inner}>
          <div className={s.hero__slider_wrapper}>
            <Slider
              modules={[Autoplay]}
              autoplay={{
                delay: 10000,
                disableOnInteraction: false,
              }}
              onSwiper={(swiper) => {
                slider.current = swiper;
                console.log(swiper);
              }}
              onSlideChange={(e) => setCurrentSlide(e.activeIndex)}
              slidesPerView={1}
              className={s.hero__slider}
            >
              {slides.map((slide) => {
                return (
                  <SwiperSlide className={s.hero__slide}>
                    <img
                      className={s.hero__slide_poster}
                      src={slide.poster}
                      alt="slide poster"
                    />

                    {/* <div className={s.hero__slide_content}>
                      <h3 className={s.hero__slide_title}>{slide.title}</h3>
                      <p className={s.hero__slide_desc}>
                        With the help of remaining allies, the Avengers must
                        assemble once more in order to undo Thanos's actions and
                        undo the chaos to the universe, no matter what
                        consequences may be in store, and no matter who they
                        face... Avenge the fallen.
                      </p>
                    </div> */}
                  </SwiperSlide>
                );
              })}
            </Slider>
            <div className={s.hero__slider_content}>
              <AnimatePresence mode="wait">
                {slides.map((slide, index) => {
                  return (
                    currentSlide === index && (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.85, y: 100 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.85, y: 100 }}
                        transition={{ duration: 0.5 }}
                        className={s.hero__slide_content}
                      >
                        <h1 className={s.hero__slide_title}>{slide.title}</h1>
                        <p className={s.hero__slide_desc}>{slide.desc}</p>
                      </motion.div>
                    )
                  );
                })}
              </AnimatePresence>
              <div className={s.hero__slider_controls}>
                <button
                  id={s.hero__slider_left}
                  className={s.hero__slider_control}
                  onClick={() => {
                    slider.current.slidePrev();
                  }}
                >
                  <svg
                    className={s.hero__slider_control_icon}
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.75 9L1.25 9M1.25 9L9.125 16.875M1.25 9L9.125 1.125"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>

                <div className={s.hero__slider_pagination_wrapper}>
                  {slides.map((slide, index) => (
                    <button
                      onClick={() => {
                        slider.current.slideTo(index);
                      }}
                      className={`${s.hero__slider_pagination} ${
                        currentSlide === index ? s.active : ""
                      }`}
                    ></button>
                  ))}
                </div>

                <button
                  onClick={() => {
                    // console.log(slider.current);
                    slider.current.slideNext();
                  }}
                  id={s.hero__slider_right}
                  className={s.hero__slider_control}
                >
                  <svg
                    className={s.hero__slider_control_icon}
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
