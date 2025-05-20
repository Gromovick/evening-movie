import { MoviesService } from "../services/MoviesService.js";
import { handleError } from "../utils/handleError.js";
import { ResFormatter } from "../utils/ResFormatter.js";

class MoviesControllerClass {
    async getGenres(req, res, next) {
        try {
            const { type, ...query } = req.query;

            const data = await MoviesService.getGenres({ type, query });
            ResFormatter.resAnswer(res, 200, data);
        } catch (error) {
            next(handleError(error, ""));
        }
    }
    async getTrending(req, res, next) {
        try {
            const { type, ...query } = req.query;
            const data = await MoviesService.getTrending({ type, query });
            ResFormatter.resAnswer(res, 200, data);
        } catch (error) {
            next(handleError(error, ""));
        }
    }
    async getMoviesByGenre(req, res, next) {
        try {
            const { page, limit, genreId = 53 } = req.body;
            const data = await MoviesService.getMoviesByGenre({ page, limit, genreId });
            ResFormatter.resAnswer(res, 200, data);
        } catch (error) {
            next(handleError(error, ""));
        }
    }
    async getMovies(req, res, next) {
        try {
            const { detailed = false, type, ...query } = req.query;
            console.log("MOVIES TYPE", type);
            const data = await MoviesService.getMovies({ query, type, detailed });
            ResFormatter.resAnswer(res, 200, data);
        } catch (error) {
            next(handleError(error, ""));
        }
    }
    async getMovie(req, res, next) {
        try {
            const { type, ...query } = req.query;
            const { id } = req.params;

            console.log("MOVIE TYPE", type);
            const data = await MoviesService.getMovie({ query, type, id });
            ResFormatter.resAnswer(res, 200, data);
        } catch (error) {
            next(handleError(error, ""));
        }
    }
    async getCastByMovieID(req, res, next) {
        try {
            const { type, ...query } = req.query;
            const { id } = req.params;

            console.log("MOVIE TYPE", type);
            const data = await MoviesService.getCastByMovieID({ query, type, id });
            ResFormatter.resAnswer(res, 200, data);
        } catch (error) {
            next(handleError(error, ""));
        }
    }
    async getValidGenres(req, res, next) {
        try {
            const { type, ...query } = req.query;
            const data = await MoviesService.getValidGenres({ query, type });
            ResFormatter.resAnswer(res, 200, data);
        } catch (error) {
            next(handleError(error, ""));
        }
    }
}

export const MoviesController = new MoviesControllerClass();