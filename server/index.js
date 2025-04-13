import { configDotenv } from "dotenv";
configDotenv();

import express from "express";
import cors from "cors";
import mongoose, { connect } from "mongoose";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import { connectDB } from "./config/db.js";
import { errorHandler } from "./middleware/errorHandler.js";
import userRouter from "./routes/userRouter.js";
import moviesRouter from "./routes/moviesRouter.js";
import { CacheController } from "./config/cache.js";



const app = express();

app.use(helmet());
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
morgan(":method :url :status :res[content-length] - :response-time ms");
app.use(morgan("dev"));

const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 1000000000000 });
app.use(limiter);

app.use("/api", userRouter);
app.use("/api", moviesRouter);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
CacheController.connect()
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await connectDB();
});
