import React from "react";
import s from "./Section.module.scss";
const Section = ({ title, children }) => {
  return (
    <article className={s.section}>
      <div className="container container--hollow--mobile-right">
        <div className={s.section__inner}>
          <div className={s.section__title_wrapper}>
            <h5 className={s.section__title}>{title ? title : "No title"}</h5>
          </div>
          {children}
        </div>
      </div>
    </article>
  );
};

export default Section;
