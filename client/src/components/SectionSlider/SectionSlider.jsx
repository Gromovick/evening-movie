import React, { useState } from "react";
import s from "./SectionSlider.module.scss";
import Slider from "../Slider/Slider";

const slides = [{}, {}, {}, {}];

const SectionSlider = ({ title, children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  function handleActiveSlide(index) {
    setCurrentSlide(index);
  }

  return (
    <>
      <div className={s.slider__wrapper}>
        <div className={s.slider__top_content}>
          <h3 className={s.slider__title}>{title ? title : "No title"}</h3>
          <div className={s.slider__controls}>
            <button className={s.slider__controls_btn}>
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
                return (
                  <button
                    onClick={() => {
                      handleActiveSlide(index);
                    }}
                    className={`${s.slider__pagination_btn} ${
                      index === currentSlide ? s.active : ""
                    }`}
                  ></button>
                );
              })}
            </div>
            <button className={s.slider__controls_btn}>
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
        </div>
      </div>
      <Slider className={s.slider}>{children}</Slider>
    </>
  );
};

export default SectionSlider;
