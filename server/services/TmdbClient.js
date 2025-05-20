import { request } from "undici";
import { TMDB_CONFIG } from "../utils/TmdbConfig.js";

export class TmdbClient {
    static async get(endpoint, queryObj = {}) {
        const query = buildQueryString(queryObj);
        const url = `${TMDB_CONFIG.BASE_URL}${endpoint}?${query}`;
        console.log(url);
        
        const response = await request(url, {
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

export function buildQueryString(queryObj, noEncodeKeys = ["with_genres"]) {
    return Object.entries(queryObj)
        .filter(([, val]) => val !== undefined && val !== null)
        .map(([key, val]) => {
            if (noEncodeKeys.includes(key)) {
                return `${key}=${val}`;
            }
            return `${encodeURIComponent(key)}=${encodeURIComponent(val)}`;
        })
        .join("&");
}