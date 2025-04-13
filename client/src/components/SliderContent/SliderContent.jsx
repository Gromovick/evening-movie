import React from "react";
import s from "./SliderContent.module.scss";
import Rating from "../Rating/Rating";
const SliderContent = ({ slide, index }) => {
  return (
    <div className={s.content}>
      <h1 className={s.content__title}>
        {slide?.title || slide?.name || "No title"}
      </h1>
      <p className={s.content__desc}>{slide?.overview || "No description"}</p>
      <Rating rating={slide?.vote_average} number={true} />
    </div>
  );
};

export default SliderContent;
