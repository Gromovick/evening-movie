import React from "react";
import SectionSlider from "../SectionSlider/SectionSlider";
import { SwiperSlide } from "swiper/react";
import MovieCard from "../MovieCard/MovieCard";
import { useQuery } from "@tanstack/react-query";
import { MainPageApi } from "../../http/MainPageApi";
const query = {
  sort_by: "vote_count.desc",
  detailed: true,
};
const MovieSlider = ({ type = "movie" }) => {
  const { isSuccess, isPending, error, data, isFetching } = useQuery({
    queryKey: ["movie_slider", type],
    queryFn: () => MainPageApi.getMoviesList(query, type),
    staleTime: 10 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
  const message = data?.message;
  const result = data?.result?.data;

  return (
    <SectionSlider title={"Should to watch"} type={"medium"}>
      {isSuccess &&
        !isFetching &&
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

export default MovieSlider;
