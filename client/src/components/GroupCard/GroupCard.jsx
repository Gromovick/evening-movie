import React from "react";
import s from "./GroupCard.module.scss";
import { Link } from "react-router";
const GroupCard = ({ topIn }) => {
  return (
    <Link to={"/movie"} className={s.card}>
      <div className={s.card__grid}>
        <img className={s.card__grid_img} src="/img/group/1.webp" alt="" />
        <img className={s.card__grid_img} src="/img/group/2.avif" alt="" />
        <img className={s.card__grid_img} src="/img/group/3.avif" alt="" />
        <img className={s.card__grid_img} src="/img/group/4.jpg" alt="" />
      </div>
      <div className={s.card__link} to={"movie"}>
        <div className={s.card__link_text_wrapper}>
          {topIn && (
            <div className={s.card__link_top_wrapper}>
              <p className={s.card__link_top}>{`Top ${topIn} in`}</p>
            </div>
          )}
          <p className={s.card__link_text}>Action</p>
        </div>
        <svg
          className={s.card__link_icon}
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
      </div>
    </Link>
  );
};

export default GroupCard;
