import React, { useCallback, useMemo } from "react";
import s from "./Rating.module.scss";
import Stars from "../Stars/Stars";
import { nanoid } from "@reduxjs/toolkit";
const Rating = ({
  rating = 10,
  count = 5,
  fraction = 10,
  className,
  number = false,
  wrapped = false,
}) => {
  const [fullShapes, partialFill] = useMemo(() => {
    let fillPerShape = fraction / count; // Each shape represents a fraction of the max rating (default: 2 per shape)
    let fullShapes = Math.floor(rating / fillPerShape);
    let partialFill = ((rating % fillPerShape) / fillPerShape) * 100; // Convert remainder to percentage
    return [fullShapes, partialFill];
  }, [rating, count]);

  const id = useMemo(() => {
    return nanoid();
  }, []);

  return (
    <div className={`${s.wrapper} ${wrapped ? s.wrapped : ""}`}>
      <div className={`${className || ""} ${s.rating}`}>
        {[...Array(count)].map((e, i) => {
          let fillPercent =
            i < fullShapes ? 100 : i === fullShapes ? partialFill : 0;
          return (
            <svg className={s.star} viewBox="0 0 20 20">
              <defs>
                <linearGradient
                  id={`gradient-${id}-${i}`}
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset={`${fillPercent}%`} stopColor="red" />
                  <stop offset={`${fillPercent}%`} stopColor="gray" />
                </linearGradient>
              </defs>
              <path
                d="M9.13086 0L12.2467 4.7114L17.6904 6.21885L14.1724 10.6381L14.4209 16.2812L9.13086 14.301L3.84079 16.2812L4.08931 10.6381L0.571351 6.21885L6.01501 4.7114L9.13086 0Z"
                fill={`url(#gradient-${id}-${i})`}
              />
            </svg>
          );
        })}
      </div>
      {number && <span className={s.counter}>{rating.toFixed(1)}</span>}
    </div>
  );
};

export default Rating;
