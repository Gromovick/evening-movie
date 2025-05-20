import React, { useState } from "react";
import s from "./ProfilePage.module.scss";
import useWindowInfo from "../../hooks/useWindowInfo";
import Tabs from "../../components/Tabs/Tabs";
import ProfileFavorites from "../../components/ProfileFavorites/ProfileFavorites";
import MyBtn from "../../components/MyBtn/MyBtn";
const ProfilePage = () => {
  const { width, height, device } = useWindowInfo();
  const tabs = {
    movies: <ProfileFavorites title="Favorite movies" />,
    actors: <ProfileFavorites title="Favorite actors" />,
  };
  const [activeKey, setActiveKey] = useState("movies");
  return (
    <div className={s.profile}>
      <img
        className={s.profile__back_img}
        src="/img/main/poster2.webp"
        alt=""
      />
      <div className="container container--hollow--tablet-inline">
        <div className={s.profile__inner}>
          <div className={s.profile__top_info}>
            <img
              className={s.profile__banner}
              src="/img/main/banner.png"
              alt=""
            />
            <div className={s.profile__content_container}>
              <div className={s.profile__info_content}>
                <div className={s.profile__image_wrapper}>
                  <img
                    className={s.profile__image}
                    src="/img/main/pfp.jpg"
                    alt=""
                  />
                  {device === "mobile" ? (
                    <MyBtn className={s.profile__follow}>Follow</MyBtn>
                  ) : null}
                </div>
                <div className={s.profile__data}>
                  <div className={s.profile__data_top}>
                    <div className={s.profile__names_wrapper}>
                      <h2 className={s.profile__name}>Seva Super</h2>
                      <h4 className={s.profile__username}>@seva</h4>
                    </div>
                    {device !== "mobile" ? (
                      <MyBtn
                        custom={{ type: "outline" }}
                        className={s.profile__follow}
                      >
                        Follow
                      </MyBtn>
                    ) : null}
                  </div>
                  <div className={s.profile__subs_wrapper}>
                    <h5 className={s.profile__subs}>Followers:</h5>
                    <span className={s.profile__subs_counter}>103 k</span>
                  </div>
                </div>
              </div>
              <p className={s.profile__description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                pharetra risus nec orci lacinia, in varius lorem bibendum.
                Praesent in pretium sem. Sed a feugiat ligula.
              </p>

              {device !== "desktop" && (
                <div className={s.profile__favorites__controls}>
                  <MyBtn onClick={() => setActiveKey("movies")}>Movies</MyBtn>
                  <MyBtn onClick={() => setActiveKey("actors")}>Actors</MyBtn>
                </div>
              )}
              {device !== "desktop" ? (
                <Tabs tabs={tabs} defaultKey={"movies"} activeKey={activeKey} />
              ) : (
                <div className={s.profile__favorites}>
                  {Object.keys(tabs).map((key) => tabs[key])}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
