import React, { useCallback } from "react";
import s from "./MovieInfoPart.module.scss";

const MovieInfoPart = ({
  title = "No title",
  icon,
  position = "left",
  children,
}) => {
  const renderIcon = useCallback(
    (pos) => {
      if (!icon) return null;
      if (position === pos) {
        return <div className={s.part__icon_wrapper}>{icon}</div>;
      }
    },
    [icon, position]
  );
  return (
    <div className={s.part}>
      <div className={s.part__title_wrapper}>
        {renderIcon("left")}
        <h4 className={s.part__title}>{title}</h4>
        {renderIcon("right")}
      </div>
      <div className={s.part__content}>{children}</div>
    </div>
  );
};

export default MovieInfoPart;
