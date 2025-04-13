import React from "react";
import s from "./PersonCard.module.scss";
const PersonCard = ({ name = "No name", src, country = "Unknown", info }) => {
  console.log(info);

  return (
    <div className={s.person}>
      <img className={s.photo} src={src || "/img/default/pfp.webp"} alt="" />
      <div className={s.personContent}>
        <h4 className={s.name}>{name}</h4>
        <p className={s.from}>{`From ${country}`}</p>
      </div>
    </div>
  );
};

export default PersonCard;
