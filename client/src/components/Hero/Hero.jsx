import React, { useRef, useState } from "react";
import s from "./Hero.module.scss";
import Slider from "../Slider/Slider";
import SliderSlide from "../Slider/SliderSlide/SliderSlide";
import { SwiperSlide } from "swiper/react";
import { AnimatePresence, motion } from "motion/react";
import { Autoplay } from "swiper/modules";
import { useOnLoad } from "../../hooks/useOnLoad";

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
    title: "Gravity Falls",
    desc: `The series follows the adventures of Dipper Pines (Jason Ritter) and his twin sister Mabel (Kristen Schaal), who are sent to spend the summer with their great-uncle (or "Grunkle") Stan (Hirsch) in Gravity Falls, Oregon, a mysterious town full of paranormal incidents and supernatural creatures.`,
  },
  {
    poster: "/img/main/poster3.webp",
    title: "Breaking Bad",
    desc: `Walter White (Bryan Cranston), an over-qualified, dispirited high-school chemistry teacher struggling with a recent diagnosis of stage-three lung cancer. White turns to a life of crime and partners with a former student, Jesse Pinkman (Aaron Paul), to produce and distribute methamphetamine to secure his family's financial future before he dies, while navigating the dangers of the criminal underworld.`,
  },
  {
    poster: "/img/main/poster4.webp",
    title: "Attack on Titan",
    desc: `It is set in a world where humanity is forced to live in cities surrounded by three enormous walls that protect them from gigantic man-eating humanoids referred to as Titans; the story follows Eren Yeager, who vows to exterminate the Titans after they bring about the destruction of his hometown and the death of his mother. `,
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slider = useRef(null);
  const load = useOnLoad();
  console.log(load);

  return (
    <section id={s.hero} className="section">
      <div className="container">
        <div className={s.hero__inner}>
          <div className={s.hero__slider_wrapper}>
            <Slider
              modules={[Autoplay]}
              // autoplay={{
              //   delay: 10000,
              //   disableOnInteraction: false,
              // }}
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
                    currentSlide === index &&
                    load && (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.85, y: 100 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.85, y: 100 }}
                        transition={{ duration: 0.35 }}
                        className={s.hero__slide_content}
                      >
                        <h1 className={s.hero__slide_title}>{slide.title}</h1>
                        <p className={s.hero__slide_desc}>{slide.desc}</p>
                      </motion.div>
                    )
                  );
                })}
              </AnimatePresence>
              <div className={s.hero__slider_watch}>
                <button className={s.hero__slider_play}>
                  <svg
                    className={s.hero__slider_btn_icon}
                    viewBox="0 0 19 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.75 2.59479C0.75 0.930972 2.53383 -0.123757 3.9917 0.678068L17.4557 8.08328C18.9668 8.91436 18.9668 11.0856 17.4557 11.9167L3.9917 19.3219C2.53383 20.1238 0.75 19.069 0.75 17.4052V2.59479Z"
                      fill="white"
                    />
                  </svg>
                  <span className={s.hero__slider_play_text}>Play Now</span>
                </button>
                <div className={s.hero__slider_watch_sub}>
                  <button className={s.hero__slider_add}>
                    <svg
                      className={s.hero__slider_btn_icon}
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.5 1V15M15.5 8L1.5 8"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                  <button className={s.hero__slider_thumb}>
                    <svg
                      className={s.hero__slider_btn_icon}
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.238 10.9584C7.17874 10.9584 8.02756 10.4382 8.60811 9.69799C9.51014 8.54785 10.647 7.59067 11.9465 6.89862C12.789 6.44994 13.52 5.78337 13.8745 4.89712C14.1226 4.27699 14.25 3.61522 14.25 2.94732V2.20837C14.25 1.72512 14.6418 1.33337 15.125 1.33337C16.5747 1.33337 17.75 2.50863 17.75 3.95837C17.75 5.30194 17.4472 6.57478 16.9061 7.71236C16.5962 8.36376 17.0309 9.20837 17.7522 9.20837M17.7522 9.20837H21.399C22.5968 9.20837 23.6689 10.018 23.7957 11.209C23.8481 11.7016 23.875 12.2019 23.875 12.7084C23.875 16.0306 22.7178 19.0825 20.7845 21.4831C20.3323 22.0446 19.6332 22.3334 18.9123 22.3334H14.227C13.6627 22.3334 13.1021 22.2424 12.5668 22.064L8.93324 20.8528C8.39791 20.6743 7.83732 20.5834 7.27304 20.5834H5.38824M17.7522 9.20837H15.125M5.38824 20.5834C5.48485 20.822 5.58999 21.0564 5.70327 21.2859C5.93326 21.7521 5.61223 22.3334 5.09245 22.3334H4.03337C2.99654 22.3334 2.0349 21.729 1.73232 20.7373C1.33743 19.4431 1.125 18.0693 1.125 16.6459C1.125 14.8347 1.46894 13.1038 2.09507 11.515C2.45097 10.6119 3.36189 10.0834 4.33258 10.0834H5.5608C6.11138 10.0834 6.43019 10.7319 6.14435 11.2025C5.1802 12.7898 4.625 14.653 4.625 16.6459C4.625 18.0383 4.89604 19.3674 5.38824 20.5834Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
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
