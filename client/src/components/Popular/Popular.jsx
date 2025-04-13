import { useQuery } from "@tanstack/react-query";
import React from "react";
import { MainPageApi } from "../../http/MainPageApi";
import SectionSlider from "../SectionSlider/SectionSlider";
import { SwiperSlide } from "swiper/react";
import MovieCard from "../MovieCard/MovieCard";
const query = {
  include_adult: false,
  include_video: false,
  language: "en-US",
  page: 1,
  sort_by: "popularity.desc",
  with_release_type: "2|3",
  "release_date.gte": "{min_date}",
  "release_date.lte": "{max_date}",
  detailed: true,
};
const Popular = ({ type = "movie" }) => {
  const { isSuccess, isPending, error, data, isFetching } = useQuery({
    queryKey: ["playing_now", type],
    queryFn: () => MainPageApi.getMoviesList(query, type),
    staleTime: 10 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
  const message = data?.message;
  const result = data?.result?.data;

  return (
    <SectionSlider title={"Playing now"} type={"medium"}>
      {isSuccess &&
        !isPending &&
        result?.map((movie) => (
          <SwiperSlide>
            <MovieCard
              type={type}
              info={movie}
              params={{ rating: {}, watching: {} }}
              showInfo={true}
            />
          </SwiperSlide>
        ))}
    </SectionSlider>
  );
};

export default Popular;
