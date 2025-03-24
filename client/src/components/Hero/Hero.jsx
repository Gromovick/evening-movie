import React from "react";
import s from "./Hero.module.scss";
import Slider from "../Slider/Slider";
import SliderSlide from "../Slider/SliderSlide/SliderSlide";
import { SwiperSlide } from "swiper/react";

const slides = [
  {
    poster: "/img/main/poster1.webp",
    title: "Avengers : Endgame",
    desc: `With the help
     of remaining allies, the Avengers must assemble once more in
      order to undo Thanos's actions and undo the chaos to the
       universe, no matter what consequences may be in store, and no matter
        who they face... Avenge the fallen.`,
  },
  {
    poster: "/img/main/poster2.webp",
    title: "Avengers : Endgame",
    desc: `With the help
     of remaining allies, the Avengers must assemble once more in
      order to undo Thanos's actions and undo the chaos to the
       universe, no matter what consequences may be in store, and no matter
        who they face... Avenge the fallen.`,
  },
  {
    poster: "/img/main/poster3.webp",
    title: "Avengers : Endgame",
    desc: `With the help
     of remaining allies, the Avengers must assemble once more in
      order to undo Thanos's actions and undo the chaos to the
       universe, no matter what consequences may be in store, and no matter
        who they face... Avenge the fallen.`,
  },
  {
    poster: "/img/main/poster4.webp",
    title: "Avengers : Endgame",
    desc: `With the help
     of remaining allies, the Avengers must assemble once more in
      order to undo Thanos's actions and undo the chaos to the
       universe, no matter what consequences may be in store, and no matter
        who they face... Avenge the fallen.`,
  },
];

const Hero = () => {
  return (
    <section id={s.hero} className="section">
      <div className="container">
        <div className={s.hero__inner}>
          <div className={s.hero__slider_wrapper}>
            <Slider className={s.hero__slider}>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
