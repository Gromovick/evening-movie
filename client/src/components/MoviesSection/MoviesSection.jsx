import React from "react";
import Section from "../Section/Section";
import SectionSlider from "../SectionSlider/SectionSlider";
import { SwiperSlide } from "swiper/react";
import GroupCard from "../GroupCard/GroupCard";
import s from "./MoviesSection.module.scss";
import MovieCard from "../MovieCard/MovieCard";
import Movies from "../Movies/Movies";
import TV from "../TV/TV";

const slides = [{}, {}, {}, {}, {}];

const MoviesSection = () => {
  return (
    <>
      <Movies />
      {/* <TV /> */}
    </>
  );
};

export default MoviesSection;
