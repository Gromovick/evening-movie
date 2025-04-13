import React from "react";
import Section from "../Section/Section";
import SectionSlider from "../SectionSlider/SectionSlider";
import { SwiperSlide } from "swiper/react";
import GroupCard from "../GroupCard/GroupCard";
import GenresSlider from "../GenresSlider/GenresSlider";
import MovieCard from "../MovieCard/MovieCard";
import TopInSlider from "../TopInSlider/TopInSlider";
import MovieSlider from "../MovieSlider/MovieSlider";
import Popular from "../Popular/Popular";

const Movies = () => {
  return (
    <Section title={"Movie"}>
      <GenresSlider type={"movie"} />
      <MovieSlider type={"movie"} />
      <TopInSlider type={"movie"} />
      <Popular type={"movie"} />
    </Section>
  );
};

export default Movies;
