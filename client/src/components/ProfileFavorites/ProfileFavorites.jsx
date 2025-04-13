import React, { useMemo } from "react";
import s from "./ProfileFavorites.module.scss";
const ProfileFavorites = ({ title = "No title", images, limit = 3 }) => {
  const renderImages = useMemo(() => {
    return !images ? new Array(limit).fill(0) : images.slice(limit);
  }, [images, limit]);

  return (
    <div className={s.favorites}>
      <h4 className={s.favorites__title}>{title}</h4>
      <div className={s.favorites__content}>
        {renderImages.map((image, index) => {
          return (
            <div className={s.favorites__poster_wrapper}>
              <img
                className={s.favorites__poster}
                src="/img/main/rock.jpg"
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileFavorites;
