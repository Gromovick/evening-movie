import React from "react";
import Header from "../../components/Header/Header";
import s from "./HeaderLayout.module.css"
const HeaderLayout = ({ children }) => {
  return (
    <div className={s.layout}>
      <Header />
      <div className={s.content}></div>
    </div>
  );
};

export default HeaderLayout;
