import React, { useMemo } from "react";
import SectionSlider from "../SectionSlider/SectionSlider";
import { SwiperSlide } from "swiper/react";
import GroupCard from "../GroupCard/GroupCard";
import { MainPageApi } from "../../http/MainPageApi";
import { useQuery } from "@tanstack/react-query";

const query = {
  sort_by: "popularity.desc",
  page: 1,
};

const TopInSlider = ({ type = "movie" }) => {
  const { isSuccess, isPending, error, data, isFetching } = useQuery({
    queryKey: ["top_in_slider", type],
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
      const keyData = result[key];
      return {
        genreName: key,
        movies: keyData.slice(0, 4),
      };
    });
  }, [result]);
  return (
    <SectionSlider title={"Popular Top 10 In Genres "} type={"medium"}>
      {isSuccess &&
        slides?.map((slide) => (
          <SwiperSlide>
            <GroupCard data={slide} topIn={20} />
          </SwiperSlide>
        ))}
    </SectionSlider>
  );
};

export default TopInSlider;
