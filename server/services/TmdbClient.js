import { request } from "undici";
import { TMDB_CONFIG } from "../utils/TmdbConfig.js";

export class TmdbClient {
    static async get(endpoint, queryObj = {}) {
        const query = new URLSearchParams(queryObj);
        console.log(`${TMDB_CONFIG.BASE_URL}${endpoint}?${query.toString()}`);
        const response = await request(`${TMDB_CONFIG.BASE_URL}${endpoint}?${query.toString()}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: TMDB_CONFIG.HEADER,
            },
        });

        const data = await response.body.json();
        return data;
    }
}