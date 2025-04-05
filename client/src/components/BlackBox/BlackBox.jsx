import React from "react";
import s from "./BlackBox.module.scss"
const BlackBox = ({ children, className }) => {
  return <div className={`${className || ""} ${s.box}`}>{children}</div>;
};

export default BlackBox;
