import React from "react";
import s from "./Header.module.css";
import { Input } from "antd";
const Header = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.header}>
       
        <div className={s.inputCenter}>
          <div className={s.inputWrapper}>
            <Input placeholder="Search" className={s.input} aria-label="Search bar" />
            <button className={s.searchBtn} aria-description="Search button" >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={s.search}
                viewBox="0 -960 960 960"
              >
                <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
              </svg>
            </button>
          </div>
        </div>
        <div className={s.users}>
          <div className={s.streakWrapper}>
            <span className={s.counter} aria-description="Streak counter" >10</span>
            <button className={s.streak} aria-description="Streak active button" >
              <img className={s.fire} src="/img/streak.png" alt="" />
            </button>
          </div>

          <button className={s.notificationsBtn} aria-description="Notifications button" >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={s.notifications}
              viewBox="0 -960 960 960"
            >
              <path d="M80-560q0-100 44.5-183.5T244-882l47 64q-60 44-95.5 111T160-560H80Zm720 0q0-80-35.5-147T669-818l47-64q75 55 119.5 138.5T880-560h-80ZM160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z" />
            </svg>
          </button>
          <button className={s.pfpBtn} aria-description="Profile button" >
            <img
              className={s.pfp}
              src="/img/login/poster_1.jpg"
              alt="User profile picture"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
