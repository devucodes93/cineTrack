import express from "express";
import {
  createReview,
  getReviewsForMovie,
  serveMovies,
} from "../controllers/movieController.js";
import { authMiddleware } from "../middlewares/authMiddleWare.js";
const router = express.Router();

// @route   GET /api/movies/
router.get("/", authMiddleware, serveMovies);

// @route   POST /api/movies/create/:movieId
router.post("/create/:movieId", authMiddleware, createReview);

// @route   POST /api/movies/get-reviews/:movieId
router.post("/get-reviews/:movieId", authMiddleware, getReviewsForMovie);
export default router;
