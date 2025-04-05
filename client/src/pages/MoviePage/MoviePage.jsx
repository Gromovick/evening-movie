import React, { useRef } from "react";
import s from "./MoviePage.module.scss";
import BigSlider from "../../components/BigSlider/BigSlider";
import CastSlider from "../../components/CastSlider/CastSlider";
import ReviewCard from "../../components/ReviewCard/ReviewCard";
import ReviewSlider from "../../components/ReviewSlider/ReviewSlider";
import MovieInfoPart from "../../components/MovieInfoPart/MovieInfoPart";
import BlackBox from "../../components/BlackBox/BlackBox";
import Rating from "../../components/Rating/Rating";
const MoviePage = () => {
  const slideNext = useRef(() => {});
  const slidePrev = useRef(() => {});

  return (
    <section className={s.movie}>
      <div className="container">
        <div className={s.movie__inner}>
          <BigSlider controls={false} />
          <div className={s.movie__content}>
            <div className={s.movie__global}>
              <div
                className={`${s.movie__description_wrapper} ${s.movie__section_wrapper}`}
              >
                <div
                  className={`${s.movie__description_top} ${s.movie__section_top}`}
                >
                  <h4
                    className={`${s.movie__description_title} ${s.movie__section_title}`}
                  >
                    Description
                  </h4>
                </div>
                <p className={s.movie__description}>
                  A fiery young man clashes with an unflinching forest officer
                  in a south Indian village where spirituality, fate and
                  folklore rule the lands.
                </p>
              </div>
              <div
                className={`${s.movie__cast_wrapper} ${s.movie__section_wrapper}`}
              >
                <div className={`${s.movie__cast_top} ${s.movie__section_top}`}>
                  <h4
                    className={`${s.movie__cast_title} ${s.movie__section_title}`}
                  >
                    Cast
                  </h4>
                  <div className={s.movie__cast_controls}>
                    <button
                      className={s.movie__cast_control}
                      onClick={() => slidePrev.current?.()}
                    >
                      <svg
                        className={s.movie__cast_control_svg}
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
                    </button>
                    <button
                      className={s.movie__cast_control}
                      onClick={() => slideNext.current?.()}
                    >
                      <svg
                        className={s.movie__cast_control_svg}
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
                    </button>
                  </div>
                </div>

                <CastSlider
                  customControls={({ next, prev }) => {
                    console.log(next);

                    slideNext.current = next;
                    slidePrev.current = prev;
                  }}
                />
              </div>
              <div
                className={`${s.movie__reviews_wrapper} ${s.movie__section_wrapper}`}
              >
                <div
                  className={`${s.movie__reviews_top} ${s.movie__section_top}`}
                >
                  <h4
                    className={`${s.movie__reviews_title} ${s.movie__section_title}`}
                  >
                    Reviews
                  </h4>
                  <button className={s.movie__reviews_btn}>
                    <svg
                      className={s.movie__reviews_btn_icon}
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.5 1V15M15.5 8L1.5 8"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <span className={s.movie__reviews_btn_text}>
                      Add Your Review
                    </span>
                  </button>
                </div>
                <ReviewSlider />
              </div>
            </div>
            <div className={s.movie__info}>
              <MovieInfoPart
                icon={
                  <svg
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.75 1.5V3.75M15.25 1.5V3.75M1 17.25V6C1 4.75736 2.00736 3.75 3.25 3.75H16.75C17.9926 3.75 19 4.75736 19 6V17.25M1 17.25C1 18.4926 2.00736 19.5 3.25 19.5H16.75C17.9926 19.5 19 18.4926 19 17.25M1 17.25V9.75C1 8.50736 2.00736 7.5 3.25 7.5H16.75C17.9926 7.5 19 8.50736 19 9.75V17.25"
                      stroke="#999999"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                }
                title="Released Year"
              >
                <p className={s.semi_20}>2022</p>
              </MovieInfoPart>
              <MovieInfoPart
                icon={
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.5 19.5L13.75 8.25L19 19.5M10 16.5H17.5M1 4.12136C2.96557 3.87626 4.96804 3.75 7 3.75M7 3.75C8.12081 3.75 9.23265 3.78841 10.3343 3.864M7 3.75V1.5M10.3343 3.864C9.17633 9.15781 5.68868 13.5801 1 16.0023M10.3343 3.864C11.2298 3.92545 12.1186 4.01146 13 4.12136M8.41128 12.6162C6.78554 10.9619 5.47704 8.99491 4.58432 6.81366"
                      stroke="#999999"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                }
                title="Available Languages"
              >
                <div className={`${s.box__wrapper} ${s.box__small_wrapper}`}>
                  {[...Array(5)].map((e) => (
                    <BlackBox className={s.box__small}>
                      <p className={s.medium_18}>English</p>
                    </BlackBox>
                  ))}
                </div>
              </MovieInfoPart>
              <MovieInfoPart
                icon={
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.48073 1.9987C9.67288 1.53673 10.3273 1.53673 10.5195 1.9987L12.6454 7.11016C12.7264 7.30492 12.9096 7.43799 13.1199 7.45485L18.6381 7.89724C19.1369 7.93722 19.3391 8.55963 18.9591 8.88514L14.7548 12.4866C14.5946 12.6238 14.5246 12.8391 14.5736 13.0443L15.858 18.4292C15.9741 18.9159 15.4447 19.3005 15.0177 19.0397L10.2933 16.1541C10.1133 16.0441 9.88691 16.0441 9.7069 16.1541L4.98251 19.0397C4.55551 19.3005 4.02606 18.9159 4.14215 18.4292L5.42664 13.0443C5.47558 12.8391 5.40562 12.6238 5.24543 12.4866L1.04111 8.88514C0.661119 8.55964 0.863352 7.93722 1.36209 7.89724L6.88034 7.45485C7.0906 7.43799 7.27375 7.30492 7.35476 7.11016L9.48073 1.9987Z"
                      stroke="#999999"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                }
                title="Ratings"
              >
                <div className={`${s.box__wrapper} ${s.box__big_wrapper}`}>
                  <BlackBox className={s.box__big}>
                    <p className={s.semi_20}>IMDb</p>
                    <Rating
                      className={s.box__big_rating}
                      rating={4.5}
                      number={true}
                    />
                  </BlackBox>
                </div>
              </MovieInfoPart>
              <MovieInfoPart
                icon={
                  <svg
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.75 3.5C0.75 2.25736 1.75736 1.25 3 1.25H5.25C6.49264 1.25 7.5 2.25736 7.5 3.5V5.75C7.5 6.99264 6.49264 8 5.25 8H3C1.75736 8 0.75 6.99264 0.75 5.75V3.5Z"
                      stroke="#999999"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M0.75 13.25C0.75 12.0074 1.75736 11 3 11H5.25C6.49264 11 7.5 12.0074 7.5 13.25V15.5C7.5 16.7426 6.49264 17.75 5.25 17.75H3C1.75736 17.75 0.75 16.7426 0.75 15.5V13.25Z"
                      stroke="#999999"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.5 3.5C10.5 2.25736 11.5074 1.25 12.75 1.25H15C16.2426 1.25 17.25 2.25736 17.25 3.5V5.75C17.25 6.99264 16.2426 8 15 8H12.75C11.5074 8 10.5 6.99264 10.5 5.75V3.5Z"
                      stroke="#999999"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.5 13.25C10.5 12.0074 11.5074 11 12.75 11H15C16.2426 11 17.25 12.0074 17.25 13.25V15.5C17.25 16.7426 16.2426 17.75 15 17.75H12.75C11.5074 17.75 10.5 16.7426 10.5 15.5V13.25Z"
                      stroke="#999999"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                }
                title="Gernes"
              >
                <div className={`${s.box__wrapper} ${s.box__small_wrapper}`}>
                  {[...Array(5)].map((e) => (
                    <BlackBox className={s.box__small}>
                      <p className={s.medium_18}>Action</p>
                    </BlackBox>
                  ))}
                </div>
              </MovieInfoPart>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoviePage;
