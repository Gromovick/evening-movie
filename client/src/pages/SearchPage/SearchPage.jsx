import React from "react";
import s from "./SearchPage.module.scss";
import MovieCard from "../../components/MovieCard/MovieCard";
import { Button } from "@mui/material";
import FilterSidebar from "../../components/FilterSidebar/FilterSidebar";
import { useState } from "react";

const SearchPage = () => {
  const [movies, setMovies] = useState([]);
  // console.log("MOVIES", movies);
  const [type, setType] = useState("movie");
  return (
    <div className={s.search}>
      <div className="container">
        <div className={s.search__inner}>
          <div className={s.search__filtering}>
            <div className={s.search__filter_wrapper}>
              <div className={s.search__filter_sticky}>
                <FilterSidebar setMovies={setMovies} setGlobalType={setType} />
              </div>
            </div>
            <div className={s.search__movies_grid}>
              {movies?.map((movie) => {
                return <MovieCard info={movie} type={type} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
