import React, { useCallback, useEffect, useRef } from "react";
import { SwiperSlide } from "swiper/react";
import s from "./CastSlider.module.scss";
import Slider from "../Slider/Slider";
const CastSlider = ({
  cast = [0, 0, 0, 0, 0, 0, 0, 0, 0],
  renderControls,
  customControls,
}) => {
  const slider = useRef(null);

  const handleSlideNext = useCallback(() => {
    slider.current?.slideNext();
  }, [slider.current]);

  const handleSlidePrev = useCallback(() => {
    slider.current?.slidePrev();
  }, [slider.current]);

  useEffect(() => {
    if (customControls) {
      customControls({ next: handleSlideNext, prev: handleSlidePrev });
    }
  }, []);

  return (
    <div className={s.cast__slider_wrapper}>
      <Slider
        className={s.cast__slider}
        onSwiper={(swiper) => {
          slider.current = swiper;
        }}
        slidesPerView={"auto"}
        spaceBetween={20}
      >
        {cast.map((e) => (
          <SwiperSlide>
            <img
              className={s.cast__slider_img}
              src="/img/main/rock.jpg"
              alt=""
            />
          </SwiperSlide>
        ))}
      </Slider>
    </div>
  );
};

export default CastSlider;
