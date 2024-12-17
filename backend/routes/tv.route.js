import express from "express";
import {
	getSimilarTvs,
	getTopRatedAnimeTV,
	getTvDetails,
	getAnimeTVByCategory,
	getTvTrailers,
} from "../controllers/tv.controller.js";

const router = express.Router();

router.get("/:id/top_rated", getTopRatedAnimeTV);
// router.get("/top_rated", getAnimeTVByCategory);
router.get("/:id/trailers", getTvTrailers);
router.get("/:id/details", getTvDetails);
router.get("/:id/similar", getSimilarTvs);
router.get("/:category", getAnimeTVByCategory);

export default router;
