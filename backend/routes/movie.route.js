import express from "express";
import {
	getMovieDetails,
	getAnimeByCategory,
	getMovieTrailers,
	getSimilarMovies,
	getTopRatedAnime,
} from "../controllers/movie.controller.js";

const router = express.Router();

router.get("/:id/top_rated", getTopRatedAnime);
// router.get("/top_rated", getAnimeByCategory);
router.get("/:id/trailers", getMovieTrailers);
router.get("/:id/details", getMovieDetails);
router.get("/:id/similar", getSimilarMovies);
router.get("/:category", getAnimeByCategory);


export default router;
