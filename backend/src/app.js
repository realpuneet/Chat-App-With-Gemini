import express from "express";
import morgan from 'morgan';
import userRoute from './routes/user.route.js';
import cookieParser from "cookie-parser";

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/user', userRoute);


app.get("/", (req, res) => {
  res.send("Hello");
});


export default app;
