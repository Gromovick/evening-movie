import React from "react";
import Section from "../Section/Section";
import SectionSlider from "../SectionSlider/SectionSlider";
import { SwiperSlide } from "swiper/react";
import GroupCard from "../GroupCard/GroupCard";
import s from "./MoviesSection.module.scss";
import MovieCard from "../MovieCard/MovieCard";

const slides = [{}, {}, {}, {}, {}];

const MoviesSection = () => {
  return (
    <>
      <Section title={"Movie"}>
        <SectionSlider title={"Our Genres"} slides={slides} type={"small"}>
          <SwiperSlide className={s.slide}>
            <GroupCard />
          </SwiperSlide>
          <SwiperSlide className={s.slide}>
            <GroupCard />
          </SwiperSlide>
          <SwiperSlide className={s.slide}>
            <GroupCard />
          </SwiperSlide>
          <SwiperSlide className={s.slide}>
            <GroupCard />
          </SwiperSlide>
          <SwiperSlide className={s.slide}>
            <GroupCard />
          </SwiperSlide>
          <SwiperSlide className={s.slide}>
            <GroupCard />
          </SwiperSlide>
          <SwiperSlide className={s.slide}>
            <GroupCard />
          </SwiperSlide>
          <SwiperSlide className={s.slide}>
            <GroupCard />
          </SwiperSlide>
        </SectionSlider>
        <SectionSlider
          title={"Popular Top 10 In Genres "}
          slides={slides}
          type={"medium"}
        >
          <SwiperSlide className={s.slide}>
            <GroupCard topIn={10} />
          </SwiperSlide>
          <SwiperSlide className={s.slide}>
            <GroupCard topIn={10} />
          </SwiperSlide>
          <SwiperSlide className={s.slide}>
            <GroupCard topIn={10} />
          </SwiperSlide>
          <SwiperSlide className={s.slide}>
            <GroupCard topIn={10} />
          </SwiperSlide>
          <SwiperSlide className={s.slide}>
            <GroupCard topIn={10} />
          </SwiperSlide>
          <SwiperSlide className={s.slide}>
            <GroupCard topIn={10} />
          </SwiperSlide>
        </SectionSlider>

        <SectionSlider
          title={"Should to watch"}
          slides={slides}
          type={"medium"}
        >
          <SwiperSlide>
            <MovieCard params={{ rating: {}, watching: {} }} />
          </SwiperSlide>
          <SwiperSlide>
            <MovieCard params={{ duration: {}, season: {} }} />
          </SwiperSlide>
          <SwiperSlide>
            <MovieCard params={{ release: { fill: true } }} />
          </SwiperSlide>
          <SwiperSlide>
            <MovieCard params={{ duration: {}, watching: {} }} />
          </SwiperSlide>
          <SwiperSlide>
            <MovieCard params={{ duration: {}, season: {} }} />
          </SwiperSlide>
          <SwiperSlide>
            <MovieCard params={{ release: { fill: true } }} />
          </SwiperSlide>
          <SwiperSlide>
            <MovieCard params={{ duration: {}, watching: {} }} />
          </SwiperSlide>
          <SwiperSlide>
            <MovieCard params={{ duration: {}, season: {} }} />
          </SwiperSlide>
          <SwiperSlide>
            <MovieCard params={{ release: { fill: true } }} />
          </SwiperSlide>
        </SectionSlider>
      </Section>
      <Section title={"Shows"}>
        <SectionSlider title={"Our Genres"} slides={slides} type={"small"}>
          <SwiperSlide className={s.slide}>
            <GroupCard />
          </SwiperSlide>
          <SwiperSlide className={s.slide}>
            <GroupCard />
          </SwiperSlide>
          <SwiperSlide className={s.slide}>
            <GroupCard />
          </SwiperSlide>
          <SwiperSlide className={s.slide}>
            <GroupCard />
          </SwiperSlide>
          <SwiperSlide className={s.slide}>
            <GroupCard />
          </SwiperSlide>
          <SwiperSlide className={s.slide}>
            <GroupCard />
          </SwiperSlide>
          <SwiperSlide className={s.slide}>
            <GroupCard />
          </SwiperSlide>
          <SwiperSlide className={s.slide}>
            <GroupCard />
          </SwiperSlide>
        </SectionSlider>
        <SectionSlider
          title={"Popular Top 10 In Genres "}
          slides={slides}
          type={"medium"}
        >
          <SwiperSlide className={s.slide}>
            <GroupCard topIn={10} />
          </SwiperSlide>
          <SwiperSlide className={s.slide}>
            <GroupCard topIn={10} />
          </SwiperSlide>
          <SwiperSlide className={s.slide}>
            <GroupCard topIn={10} />
          </SwiperSlide>
          <SwiperSlide className={s.slide}>
            <GroupCard topIn={10} />
          </SwiperSlide>
          <SwiperSlide className={s.slide}>
            <GroupCard topIn={10} />
          </SwiperSlide>
          <SwiperSlide className={s.slide}>
            <GroupCard topIn={10} />
          </SwiperSlide>
        </SectionSlider>

        <SectionSlider
          title={"Should to watch"}
          slides={slides}
          type={"medium"}
        >
          <SwiperSlide>
            <MovieCard params={{ rating: {}, watching: {} }} />
          </SwiperSlide>
          <SwiperSlide>
            <MovieCard params={{ duration: {}, season: {} }} />
          </SwiperSlide>
          <SwiperSlide>
            <MovieCard params={{ release: { fill: true } }} />
          </SwiperSlide>
          <SwiperSlide>
            <MovieCard params={{ duration: {}, watching: {} }} />
          </SwiperSlide>
          <SwiperSlide>
            <MovieCard params={{ duration: {}, season: {} }} />
          </SwiperSlide>
          <SwiperSlide>
            <MovieCard params={{ release: { fill: true } }} />
          </SwiperSlide>
          <SwiperSlide>
            <MovieCard params={{ duration: {}, watching: {} }} />
          </SwiperSlide>
          <SwiperSlide>
            <MovieCard params={{ duration: {}, season: {} }} />
          </SwiperSlide>
          <SwiperSlide>
            <MovieCard params={{ release: { fill: true } }} />
          </SwiperSlide>
        </SectionSlider>
      </Section>
    </>
  );
};

export default MoviesSection;
