import React from "react";
import s from "./Stars.module.scss";
const Stars = ({ starWidth = 18, index = 0, starGap = 0, className }) => {
  return (
    <svg
      x={index * (starWidth + starGap)}
      width={starWidth}
      height={starWidth}
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className ? className : ""} ${s.test}`}
    >
      <path
        d="M9.13086 0L12.2467 4.7114L17.6904 6.21885L14.1724 10.6381L14.4209 16.2812L9.13086 14.301L3.84079 16.2812L4.08931 10.6381L0.571351 6.21885L6.01501 4.7114L9.13086 0Z"
        fill="#E60000"
      />
    </svg>
  );
};

export default Stars;
