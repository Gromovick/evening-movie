import React from "react";
import s from "./SearchPage.module.scss";
import MovieCard from "../../components/MovieCard/MovieCard";
import { Button } from "@mui/material";

const SearchPage = () => {
  return (
    <div className={s.search}>
      <div className="container">
        <div className={s.search__inner}>
          <Button variant="contained">Contained</Button>
          <div className={s.search__movie_grid}>{/* <MovieCard /> */}</div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
