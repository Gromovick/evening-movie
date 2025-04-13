import React, { useMemo } from "react";
import s from "./MovieCard.module.scss";
import { Link } from "react-router";
import Rating from "../Rating/Rating";
import BlackBox from "../BlackBox/BlackBox";
const MovieCard = ({
  params,
  showInfo = false,
  info = {
    country: "Unknown country",
    date: "Unknown date",
    title: "Unknown title",
  },
  type = "movie",
}) => {
  const date = useMemo(() => {
    const date = new Date(info?.release_date || info?.first_air_date);

    const day = String(date.getDate()).padStart(2, "0");
    const month = date.toLocaleString("en-US", { month: "short" }); // May / Nov / etc.
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  }, []);

  return (
    <div className={s.card}>
      <Link to={`/movie/${info?.id}?type=${type}`} className={s.card__link}>
        <div className={s.card__poster_wrapper}>
          <div className={s.card__genres_content}>
            <div className={s.card__genres}>
              {info?.genres?.map((genre) => (
                <BlackBox className={s.card__genres_wrapper}>
                  {genre.name}
                </BlackBox>
              ))}
            </div>
          </div>

          <img
            className={s.card__poster}
            src={`${import.meta.env.VITE_TMDB_IMAGE_BASE_URL}${
              info?.poster_path
            }`}
            alt=""
          />
        </div>
        <div className={s.card__content}>
          {showInfo ? (
            <div className={s.card__date_wrapper}>
              <p className={s.card__country}>{`${
                info?.origin_country
                  ? info?.origin_country[0]
                  : "Unknown country"
              },`}</p>
              <p className={s.card__date}>{date || "Unknown date"}</p>
            </div>
          ) : null}
          <p className={s.card__title}>
            {info?.title || info?.name || "Unknown title"}
          </p>
        </div>
        <div className={s.card__info}>
          {params?.duration && (
            <div
              className={`${s.card__info_wrapper} ${
                params?.duration?.fill ? s.card__info_wrapper__fill : ""
              }`}
            >
              <div
                className={` ${s.card__info_duration} ${s.card__info_content}`}
              >
                <svg
                  className={`${s.card__info_duration_icon} ${s.card__info_icon}`}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 0.25C4.61522 0.25 0.25 4.61522 0.25 10C0.25 15.3848 4.61522 19.75 10 19.75C15.3848 19.75 19.75 15.3848 19.75 10C19.75 4.61522 15.3848 0.25 10 0.25ZM10.75 4C10.75 3.58579 10.4142 3.25 10 3.25C9.58579 3.25 9.25 3.58579 9.25 4V10C9.25 10.4142 9.58579 10.75 10 10.75H14.5C14.9142 10.75 15.25 10.4142 15.25 10C15.25 9.58579 14.9142 9.25 14.5 9.25H10.75V4Z"
                    fill="#999999"
                  />
                </svg>
                <p
                  className={`${s.card__info_duration_text} ${s.card__info_text}`}
                >
                  1h 30min
                </p>
              </div>
            </div>
          )}
          {params?.watching && (
            <div
              className={`${s.card__info_wrapper} ${
                params?.watching?.fill ? s.card__info_wrapper__fill : ""
              }`}
            >
              <div
                className={` ${s.card__info_watching} ${s.card__info_content}`}
              >
                <svg
                  className={`${s.card__info_watching_icon} ${s.card__info_icon}`}
                  viewBox="0 0 23 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5996 12C13.2565 12 14.5996 10.6569 14.5996 9C14.5996 7.34315 13.2565 6 11.5996 6C9.94275 6 8.59961 7.34315 8.59961 9C8.59961 10.6569 9.94275 12 11.5996 12Z"
                    fill="#999999"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.92302 8.4467C2.41027 3.97571 6.62752 0.75 11.6001 0.75C16.5704 0.75 20.7861 3.97271 22.2752 8.44045C22.3955 8.80152 22.3956 9.19217 22.2755 9.55331C20.7882 14.0243 16.571 17.25 11.5984 17.25C6.62808 17.25 2.41245 14.0273 0.923348 9.55955C0.803006 9.19849 0.802892 8.80783 0.92302 8.4467ZM16.8496 9C16.8496 11.8995 14.4991 14.25 11.5996 14.25C8.70011 14.25 6.34961 11.8995 6.34961 9C6.34961 6.1005 8.70011 3.75 11.5996 3.75C14.4991 3.75 16.8496 6.1005 16.8496 9Z"
                    fill="#999999"
                  />
                </svg>

                <p
                  className={`${s.card__info_watching_text} ${s.card__info_text}`}
                >
                  999K
                </p>
              </div>
            </div>
          )}
          {params?.season && (
            <div
              className={`${s.card__info_wrapper} ${
                params?.seasons?.fill ? s.card__info_wrapper__fill : ""
              }`}
            >
              <div
                className={` ${s.card__info_seasons} ${s.card__info_content}`}
              >
                <svg
                  className={`${s.card__info_seasons_icon} ${s.card__info_icon}`}
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.81641 1.65724C4.1935 1.55472 4.59029 1.5 4.99986 1.5H15.4999C15.9094 1.5 16.3062 1.55472 16.6833 1.65724C16.1906 0.674537 15.174 0 13.9999 0H6.49986C5.3257 0 4.3091 0.674537 3.81641 1.65724Z"
                    fill="#999999"
                  />
                  <path
                    d="M0.5 9C0.5 7.34315 1.84315 6 3.5 6H17C18.6569 6 20 7.34315 20 9V15C20 16.6569 18.6569 18 17 18H3.5C1.84315 18 0.5 16.6569 0.5 15V9Z"
                    fill="#999999"
                  />
                  <path
                    d="M3.49986 4.5C3.09029 4.5 2.6935 4.55472 2.31641 4.65724C2.8091 3.67454 3.8257 3 4.99986 3H15.4999C16.674 3 17.6906 3.67454 18.1833 4.65724C17.8062 4.55472 17.4094 4.5 16.9999 4.5H3.49986Z"
                    fill="#999999"
                  />
                </svg>
                <p
                  className={`${s.card__info_seasons_text} ${s.card__info_text}`}
                >
                  4 Season
                </p>
              </div>
            </div>
          )}
          {params?.release && (
            <div
              className={`${s.card__info_wrapper} ${
                params?.release?.fill ? s.card__info_wrapper__fill : ""
              }`}
            >
              <div
                className={` ${s.card__info_release} ${s.card__info_content}`}
              >
                <p
                  className={`${s.card__info_release_text} ${s.card__info_text}`}
                >
                  Released at 14 April 2023
                </p>
              </div>
            </div>
          )}
          {params?.rating && (
            <div
              className={`${s.card__info_wrapper} ${
                params?.rating?.fill ? s.card__info_wrapper__fill : ""
              }`}
            >
              <div
                className={` ${s.card__info_rating} ${s.card__info_content}`}
              >
                <Rating
                  key={info?.id}
                  rating={info?.vote_average}
                  count={5}
                  number={true}
                />
                <p
                  className={`${s.card__info_release_text} ${s.card__info_text}`}
                >
                  20K
                </p>
              </div>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
