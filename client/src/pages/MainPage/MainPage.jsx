import React from "react";
import s from "./MainPage.module.scss";
import Hero from "../../components/Hero/Hero";
const MainPage = () => {
  return (
    <main className={s.main}>
      <Hero />
    </main>
  );
};

export default MainPage;
