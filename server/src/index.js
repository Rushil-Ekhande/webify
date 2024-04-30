import "./config.js";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
const PORT = process.env.PORT;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

// connecting database and then running the server
dbConnect().then(() => {
  app.listen(PORT, () => {
    console.log("server is running on port", PORT);
  });
});

// Routes
import { router as AuthRouter } from "./routes/AuthRouter.js";
import { dbConnect } from "./lib/dbConnect.js";

app.use("/api/auth", AuthRouter);
