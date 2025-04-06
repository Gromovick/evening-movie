import React from "react";
import s from "./MovieInfoPart.module.scss";

const MovieInfoPart = ({
  title = "No title",
  icon,
  position = "left",
  children,
}) => {
  console.log("RERENDER");

  return (
    <div className={s.part}>
      <div className={s.part__title_wrapper}>
        {position === "left" && icon && (
          <div className={s.part__icon_wrapper}>{icon}</div>
        )}
        <h4 className={s.part__title}>{title}</h4>
        {position === "right" && icon && (
          <div className={s.part__icon_wrapper}>{icon}</div>
        )}
      </div>
      <div className={s.part__content}>{children}</div>
    </div>
  );
};

export default MovieInfoPart;
