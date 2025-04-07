import React from "react";
import s from "./ProfilePage.module.scss";
const ProfilePage = () => {
  return (
    <div className={s.profile}>
      <img
        className={s.profile__back_img}
        src="/img/main/poster2.webp"
        alt=""
      />
      <div className="container">
        <div className={s.profile__inner}>
          <div className={s.profile__top_info}>
            <img
              className={s.profile__banner}
              src="/img/main/banner.png"
              alt=""
            />
            <div className={s.profile__info_content}>
              <div className={s.profile__image_wrapper}>
                <img
                  className={s.profile__image}
                  src="/img/main/pfp.jpg"
                  alt=""
                />
              </div>
              <div className={s.profile__data}>
                <div className={s.profile__data_top}>
                  <div className={s.profile__names_wrapper}>
                    <h2 className={s.profile__name}>Seva Super</h2>
                    <h4 className={s.profile__username}>@seva</h4>
                  </div>
                  <button className={s.follow}>Follow</button>
                </div>
                <div className={s.profile__subs_wrapper}>
                  <h5 className={s.profile__subs}>Followers: 100.3k</h5>
                </div>
              </div>
            </div>
            <p className={s.profile__description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              pharetra risus nec orci lacinia, in varius lorem bibendum.
              Praesent in pretium sem. Sed a feugiat ligula.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
