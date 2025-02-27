import React from "react";
import s from "./MainLayout.module.css";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import HeaderLayout from "../HeaderLayout/HeaderLayout";

const MainLayout = ({ children }) => {
  return (
    <div className={s.layout}>
      <Sidebar />
      <HeaderLayout>
        {children}
      </HeaderLayout>
    </div>
  );
};

export default MainLayout;
