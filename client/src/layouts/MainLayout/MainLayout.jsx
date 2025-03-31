import React from "react";
import s from "./MainLayout.module.scss";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
const MainLayout = ({ children }) => {
  return (
    <div className={s.layout}>
      {/* <Header /> */}
      <div className={s.content}>{children}</div>
      <Footer/>
    </div>
  );
};

export default MainLayout;
