import { throwHandleError } from "../utils/throwHandleError.js";
import { request } from 'undici'
import { ResFormatter } from '../utils/ResFormatter.js';
import { throwApiError } from "../utils/throwApiError.js";
import { TmdbClient } from "./TmdbClient.js";
// throwApiError(
//     409,
//     "Conflict while registering user",
//     "Користувач з таким email або username вже існує"
//   );

const AUTH_HEADER = process.env.AUTH_HEADER;

async function tmdbRequest({ url, queryObj }) {
    const BASE_URL = url || "https://api.themoviedb.org/3";
    const query = new URLSearchParams(queryObj)
    const response = await request(`${BASE_URL}?${query.toString()}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: AUTH_HEADER,
        },
    });

    const data = await response.body.json();
    return data;
}

function validRequest({ maxPage = 1, page = 1, }) {
    const MAX_PAGE = maxPage;
    // const MAX_LIMIT = maxLimit;
    const validatedPage = Number.isInteger(page) && page > 0 ? Math.min(page, MAX_PAGE) : 1;
    // const validatedLimit = Number.isInteger(limit) && limit > 0 && limit <= MAX_LIMIT ? limit : MAX_LIMIT;
    return { validatedPage }
}

class MoviesServiceClass {
    async getGenres({ type = "movie", query }) {
        try {
            const endpoint = `/genre/${type === "movie" ? "movie" : "tv"}/list`
            const query = {
                language: "en"
            }
            const genresData = await TmdbClient.get(endpoint, query)
            console.log(genresData);

            const shuffledGenres = genresData.genres.sort(() => 0.5 - Math.random());
            const data = {};
            await Promise.all(shuffledGenres.map(async (genre) => {
                const id = genre.id;
                // console.log("ID", id)
                const moviesByGenre = await this.getMovies({ query: { with_genres: id, ...query }, type })
                // console.log(moviesByGenre);

                const shuffledMovies = moviesByGenre.result.data.results.sort(() => 0.5 - Math.random())
                data[genre.name] = shuffledMovies;
            }));

            return ResFormatter.resForm(
                { data },
                "You have got genres"
            );

        } catch (error) {
            throwHandleError(error, "Server error while getting our genres");

        }
    }

    async getMovies({ query = {}, type = "movie", detailed = false }) {
        try {
            const endpoint = `/discover/${type === "movie" ? "movie" : "tv"}`;
            const MAX_PAGE = 500;
            const objQuery = { ...query }


            if (!objQuery.with_genres || objQuery.with_genres === "all") {
                delete objQuery.with_genres;
            }


            let data = await TmdbClient.get(endpoint, objQuery)


            if (detailed) {
                const movies = data.results;
                data = await Promise.all(
                    movies.map(async movie => {
                        const res = await this.getMovie({ type, id: movie.id });
                        return res.result.data;
                    })
                );
            }
            return ResFormatter.resForm(
                {
                    data
                },
                'Movies retrieved successfully'
            );
        } catch (error) {
            throwHandleError(error, 'Error while fetching movies');
        }
    }
    async getTrending({ query = {}, type = "movie" }) {
        try {
            const endpoint = `/trending/${type === "movie" ? "movie" : "tv"}/week`;
            const objQuery = { ...query, language: "en-US" }
            const data = await TmdbClient.get(endpoint, objQuery)
            return ResFormatter.resForm(
                {
                    data
                },
                'Movies retrieved successfully'
            );
        } catch (error) {
            throwHandleError(error, 'Error while fetching movies');
        }
    }
    async getMovie({ query = {}, type = "movie", id }) {
        try {
            const endpoint = `/${type === "movie" ? "movie" : "tv"}/${id}`;
            const objQuery = { ...query, language: "en-US" }
            const data = await TmdbClient.get(endpoint, objQuery)
            const cast = await this.getCastByMovieID({ type, id })
            data.cast = cast.result.cast.cast;
            return ResFormatter.resForm(
                {
                    data
                },
                'Movies retrieved successfully'
            );
        } catch (error) {
            throwHandleError(error, 'Error while fetching movies');
        }
    }
    async getCastByMovieID({ query = {}, type = "movie", id }) {
        try {
            const endpoint = `/${type === "movie" ? "movie" : "tv"}/${id}/credits`;
            const objQuery = { ...query, language: "en-US" }
            const data = await TmdbClient.get(endpoint, objQuery)
            return ResFormatter.resForm(
                {
                    cast: data,
                },
                'Movies retrieved successfully'
            );
        } catch (error) {
            throwHandleError(error, 'Error while fetching movies');
        }
    }
}

export const MoviesService = new MoviesServiceClass()