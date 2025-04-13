import React from "react";
import Section from "../Section/Section";
import GenresSlider from "../GenresSlider/GenresSlider";
import TopInSlider from "../TopInSlider/TopInSlider";
import MovieSlider from "../MovieSlider/MovieSlider";

const TV = () => {
  return (
    <Section title={"Shows"}>
      <GenresSlider type="tv" />
      <TopInSlider type="tv" />
      <MovieSlider type="tv" />
    </Section>
  );
};

export default TV;
