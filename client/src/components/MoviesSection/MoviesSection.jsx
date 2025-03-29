import React from "react";
import Section from "../Section/Section";
import SectionSlider from "../SectionSlider/SectionSlider";
import { SwiperSlide } from "swiper/react";

const MoviesSection = () => {
  return (
    <Section title={"Movie"}>
      <SectionSlider title={"Our Genres"}>
        <SwiperSlide>
          <div>Slide 1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div>Slide 2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div>Slide 3</div>
        </SwiperSlide>
      </SectionSlider>
    </Section>
  );
};

export default MoviesSection;
