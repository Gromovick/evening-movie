import React from "react";
import s from "./Section.module.scss";
const Section = ({ title, children }) => {
  return (
    <article className={s.section}>
      <div className="container">
        <div className={s.section__inner}>
          <h5 className={s.section__title}>{title ? title : "No title"}</h5>
          {children}
        </div>
      </div>
    </article>
  );
};

export default Section;
