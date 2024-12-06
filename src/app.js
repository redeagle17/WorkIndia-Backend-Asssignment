import express from "express";
import { errorMiddleware } from "./middlewares/error.middleware.js";

const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));


app.use(errorMiddleware);

export default app;
