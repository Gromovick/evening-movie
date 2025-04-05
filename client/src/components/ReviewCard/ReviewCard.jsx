import React from "react";
import s from "./ReviewCard.module.scss";
import Rating from "../Rating/Rating";
const ReviewCard = () => {
  return (
    <div className={s.review}>
      <div className={s.review__top}>
        <h4 className={s.review__nickname}>Aniket Roy</h4>
        <Rating rating={7.8} wrapped={true} number={true} />
      </div>
      <p className={s.review__content}>
        This movie was recommended to me by a very dear friend who went for the
        movie by herself. I went to the cinemas to watch but had a houseful
        board so couldn’t watch it.
      </p>
    </div>
  );
};

export default ReviewCard;
