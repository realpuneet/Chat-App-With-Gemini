import express from "express";
import morgan from "morgan";
import userRoute from "./routes/user.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/user", userRoute);

export default app;
