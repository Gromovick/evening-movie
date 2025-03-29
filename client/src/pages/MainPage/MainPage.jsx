import React from "react";
import s from "./MainPage.module.scss";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import MoviesSection from "../../components/MoviesSection/MoviesSection";
const MainPage = () => {
  return (
    <main className={s.main}>
      <Hero />
      <MoviesSection />
    </main>
  );
};

export default MainPage;
