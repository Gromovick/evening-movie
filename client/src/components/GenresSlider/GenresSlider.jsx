import React, { useMemo } from "react";
import SectionSlider from "../SectionSlider/SectionSlider";
import { SwiperSlide } from "swiper/react";
import GroupCard from "../GroupCard/GroupCard";
import { useQuery } from "@tanstack/react-query";
import { MainPageApi } from "../../http/MainPageApi";

const query = {
  sort_by: "popularity.desc",
  page: 2,
};

const GenresSlider = ({ type = "movie" }) => {
  const { isSuccess, isPending, error, data, isFetching } = useQuery({
    queryKey: ["genres_slider", type],
    queryFn: () => MainPageApi.getGenresSlider(query, type),
    staleTime: 10 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
  const message = data?.message;
  const result = data?.result?.data;
  console.log({ message, result });
  const slides = useMemo(() => {
    const keys = Object.keys(result || {});
    return keys.map((key) => {
      const keyData = result[key]?.genres;

      return {
        genreName: key,
        id: result[key].id,
        movies: keyData?.slice(0, 4), // беремо лише перші 4 фільми
      };
    });
  }, [result]);
  console.log(slides);

  return (
    <SectionSlider title={"Our Genres"} type={"small"}>
      {isSuccess &&
        slides?.map((slide) => (
          <SwiperSlide>
            <GroupCard
              data={slide}
              url={`type=${type}&with_genres=${slide.id}`}
            />{" "}
          </SwiperSlide>
        ))}
    </SectionSlider>
  );
};

export default GenresSlider;
