import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./routes/userRoute.js";
import moviesRouter from "./routes/moviesRoute.js";
import cookieParser from "cookie-parser";
import { dbConnect } from "./lib/db.js";
dotenv.config();
const app = express();
// connect to database
dbConnect();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cors configuration
app.use(
  cors({
    origin: ["http://localhost:5173", "https://cine-track1.vercel.app"],
    credentials: true,
  })
);

// routes
app.use("/api/auth", userRouter);
app.use("/api/movies", moviesRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log("server running on port 3001");
});
