import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

//Utils
import connectDB from "./Config/db.js";

//Routes
import userRoutes from "./Routes/userRoutes.js";

dotenv.config();

const port = process.env.PORT || 5000;
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api", userRoutes);

app.listen(port, () => console.log("server running on port 😊"));
