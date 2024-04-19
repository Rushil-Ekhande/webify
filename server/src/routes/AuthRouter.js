import express from "express";
import { signUpController } from "../controllers/signUpController.js";

const router = express.Router();

router.post("/sign-up", signUpController);

export {
    router
}