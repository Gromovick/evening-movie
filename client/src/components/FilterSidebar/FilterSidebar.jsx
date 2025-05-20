import * as React from "react";
import MyFilterAccordion from "../MyFilterAccordion/MyFilterAccordion";
import { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  ScopedCssBaseline,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { List } from "@mui/material";
import MyAccordion from "../MyAccordion/MyAccordion";
import useWindowInfo from "../../hooks/useWindowInfo";
import { useLocation, useNavigate } from "react-router";
import { MainPageApi } from "../../http/MainPageApi";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { useEffect } from "react";
import { debounce } from "lodash";
const FilterSidebar = ({ setMovies, setGlobalType }) => {
  const { device } = useWindowInfo();
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);

  const initialType = searchParams.get("type") || "movie";

  const initialGenres = searchParams.get("with_genres")
    ? searchParams
        .get("with_genres")
        .split("|")
        .reduce((acc, id) => {
          acc[id] = true;
          return acc;
        }, {})
    : {};
  const [active, setActive] = useState({ [initialType]: initialGenres });
  const [type, setType] = useState(initialType);
  const [query, setQuery] = useState({ detailed: true });
  useEffect(() => {
    setGlobalType(type);
  }, [type]);
  const handleChange = (event, newType) => {
    setType(newType);
  };

  const { isSuccess, isPending, error, data, isFetching } = useQuery({
    queryKey: ["search-genres", type],
    queryFn: () => MainPageApi.getValidGenres({ type }),
    staleTime: 10 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    placeholderData: keepPreviousData,
  });
  const request = useQuery({
    queryKey: ["search-movies", type, query],
    queryFn: () => MainPageApi.getMoviesList({ ...query }, type),
    enabled:
      !!type &&
      (!searchParams.get("with_genres") || query.with_genres?.length > 0),
    staleTime: 10 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    placeholderData: keepPreviousData,
  });
  const debouncedSetQuery = useMemo(
    () =>
      debounce((activeGenreIds, type) => {
        setQuery((prev) => ({
          ...prev,
          with_genres: activeGenreIds,
        }));
      }, 300),
    []
  );

  const movies = useMemo(() => {
    return request?.data?.result?.data;
  }, [request.data]);

  useEffect(() => {
    setMovies(movies);
  }, [movies]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    params.set("type", type);

    const activeGenreIds = active[type]
      ? Object.entries(active[type])
          .filter(([, checked]) => checked)
          .map(([id]) => id)
      : [];

    if (activeGenreIds.length > 0) {
      params.set("with_genres", activeGenreIds.join("|"));
    } else {
      params.delete("with_genres");
    }

    debouncedSetQuery(activeGenreIds, type);
    const queryString =
      `type=${type}` +
      (activeGenreIds.length ? `&with_genres=${activeGenreIds.join("|")}` : "");
    console.log(queryString);

    navigate({ search: queryString }, { replace: true });
  }, [type, active]);

  const types = [
    {
      value: "movie",
      name: "Movie",
    },
    {
      value: "tv",
      name: "TV",
    },
  ];

  const genresCheckboxes = useMemo(() => {
    return data?.result?.genres.map((genre) => {
      return { id: genre.id, label: genre.name };
    });
  }, [data?.result?.genres]);

  const control = {
    value: type,
    onChange: handleChange,
    exclusive: true,
  };
  return (
    <>
      {device === "desktop" && (
        <div>
          <ScopedCssBaseline sx={{ background: "transparent" }}>
            <List sx={[{ p: 0 }]}>
              <MyAccordion name="Type" openDefault={true}>
                <ToggleButtonGroup size="small" {...control} color="success">
                  {types.map((type) => {
                    console.log(type.value);

                    return (
                      <ToggleButton value={type.value} key={type.value}>
                        {type.name}
                      </ToggleButton>
                    );
                  })}
                </ToggleButtonGroup>
              </MyAccordion>
              <MyFilterAccordion
                setActiveCheckboxes={setActive}
                activeCheckboxes={active}
                checkboxes={genresCheckboxes || []}
                name={"Genres"}
                withType={type}
              />
              <Divider />
            </List>
          </ScopedCssBaseline>
        </div>
      )}
    </>
  );
};

export default FilterSidebar;
