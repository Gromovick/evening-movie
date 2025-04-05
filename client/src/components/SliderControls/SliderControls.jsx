import React from "react";
import s from "./SliderControls.module.scss";
const SliderControls = ({
  className = "",
  controls = { slideNext: () => {}, slidePrev: () => {} },
  pagination = { paginationCount: 2, activeSlide: 1, changeSlide: () => {} },
  style = 1,
  wide = false,
}) => {
  const isFn = (fn) => typeof fn === "function";

  const handleSlideChange = (index) => {
    if (isFn(pagination?.changeSlide)) pagination?.changeSlide(index);
  };

  const renderPagination = () => {
    if (!pagination) return null;

    if (pagination === true) {
      return (
        <div className={s.pagination}>
          <button className={s.pagination__dot} />
          <button className={s.pagination__dot} />
        </div>
      );
    }

    if (typeof pagination === "object" && pagination.paginationCount) {
      return (
        <div className={s.pagination}>
          {Array.from({ length: pagination.paginationCount }).map((_, idx) => (
            <button
              onClick={() => handleSlideChange(idx)}
              key={idx}
              className={`${s.pagination__dot} ${
                idx === pagination?.activeSlide ? s.pagination__dot__active : ""
              }`}
            />
          ))}
        </div>
      );
    }

    return null;
  };

  const handlePrev = () => {
    if (isFn(controls?.slidePrev)) controls.slidePrev();
  };

  const handleNext = () => {
    if (isFn(controls?.slideNext)) controls.slideNext();
  };

  const renderArrowButton = (direction = "prev") => (
    <button
      className={`${s.controls__button} ${
        s[`controls__button_style_${style}`]
      }`}
      onClick={direction === "prev" ? handlePrev : handleNext}
    >
      <svg
        className={s.controls__button_svg}
        viewBox="0 0 24 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.75 1.25L22.5 10M22.5 10L13.75 18.75M22.5 10H1.5"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );

  return (
    <div
      className={`${className} ${s.controls} ${wide ? s.controls_wide : ""}`}
    >
      {renderArrowButton("prev")}

      {renderPagination()}

      {renderArrowButton("next")}
    </div>
  );
};

export default SliderControls;
