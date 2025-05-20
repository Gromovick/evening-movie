import React, { useMemo } from "react";
import s from "./MyBtn.module.scss";

const MyBtn = ({ children, className, custom = {}, ...props }) => {
  const customClasses = useMemo(() => {
    return Object.values(custom)
      .map((value) => {
        return s[value] || "";
      })
      .join(" ");
  }, [custom]);
  console.log(customClasses);

  return (
    <button {...props} className={`${s.button} ${customClasses} ${className}`}>
      {children}
    </button>
  );
};

export default MyBtn;
