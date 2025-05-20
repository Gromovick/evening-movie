import http from "./axios";


export class MainPageApi {
    static async getGenresSlider(query = {}, type = "movie") {
        const urlQuery = new URLSearchParams({ ...query, type })
        const res = await http.get(`${import.meta.env.VITE_SERVER_BASE_URL}${import.meta.env.VITE_GENRES_SLIDER_ENDPOINT}?${urlQuery}`)
        return res.data;
    }
    static async getMoviesList(query = {}, type = "movie") {
        // const urlQuery = new URLSearchParams({ ...query, type })
        // console.log("urlQuery", urlQuery);
        const urlQuery = Object.entries({ ...query, type })
            .map(([key, val]) =>
                key === "with_genres"
                    ? `${key}=${val}` // no encoding of commas
                    : `${encodeURIComponent(key)}=${encodeURIComponent(val)}`
            )
            .join("&");
        console.log(urlQuery);

        const res = await http.get(`${import.meta.env.VITE_SERVER_BASE_URL}${import.meta.env.VITE_TMDB_MOVIE_LIST_BASE_URL}?${urlQuery}`)
        return res.data;
    }
    static async getMovieById(query = {}, id) {
        const urlQuery = new URLSearchParams({ ...query })
        const res = await http.get(`${import.meta.env.VITE_SERVER_BASE_URL}${import.meta.env.VITE_TMDB_MOVIE_GET_BY_ID_BASE_URL}/${id}?${urlQuery}`)
        return res.data;
    }
    static async getTrending(query = {}, id) {
        const urlQuery = new URLSearchParams({ ...query })
        const res = await http.get(`${import.meta.env.VITE_SERVER_BASE_URL}${import.meta.env.VITE_TMDB_TRENDING_BASE_URL}/?${urlQuery}`)
        return res.data;
    }
    static async getValidGenres(query = {}) {
        const urlQuery = new URLSearchParams({ ...query })
        const res = await http.get(`${import.meta.env.VITE_SERVER_BASE_URL}${import.meta.env.VITE_TMDB_VALID_GENRES}/?${urlQuery}`)
        return res.data;
    }
}
