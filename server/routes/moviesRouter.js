import express from "express";
import { MoviesController } from "../controllers/MoviesController.js";
import { createCacheMiddleware } from "../utils/createCacheMiddleware.js";

const router = express.Router();


// router.get("/movies/genre", MoviesController.getMoviesByGenre);
router.get("/valid-genres", createCacheMiddleware(3600), MoviesController.getValidGenres)
router.get("/movies", createCacheMiddleware(3600), MoviesController.getMovies)
router.get("/movies/genres", createCacheMiddleware(3600), MoviesController.getGenres);
router.get("/movies/trending", createCacheMiddleware(3600), MoviesController.getTrending);
router.get("/movie/:id", createCacheMiddleware(3600), MoviesController.getMovie);
router.get("/cast/:id", createCacheMiddleware(3600), MoviesController.getCastByMovieID);

export default router;