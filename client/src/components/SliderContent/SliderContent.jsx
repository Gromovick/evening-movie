import React from "react";
import s from "./SliderContent.module.scss";
const SliderContent = ({ slide, index }) => {
  return (
    <>
      <h1 className={s.content__title}>{slide?.title || "No title"}</h1>
      <p className={s.content__desc}>{slide?.desc || "No description"}</p>
    </>
  );
};

export default SliderContent;
