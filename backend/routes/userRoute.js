import express from "express";
import {
  checkAuth,
  login,
  logout,
  signUp,
} from "../controllers/userController.js";

import { authMiddleware } from "../middlewares/authMiddleWare.js";

const router = express.Router();

// @route   POST /api/auth/signup
router.post("/signup", signUp);

// @route   POST /api/auth/login
router.post("/login", login);

// @route   POST /api/auth/check-auth
router.post("/check-auth", authMiddleware, checkAuth);

// @route   POST /api/auth/logout
router.post("/logout", authMiddleware, logout);

export default router;
