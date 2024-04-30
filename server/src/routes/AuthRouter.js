import express from "express";
import { signUpController } from "../controllers/signUpController.js";
import { verificationCodeController } from "../controllers/verificationCodeController.js";
import { signInController } from "../controllers/signInController.js";
import { dashboardController } from "../controllers/dashboardController.js";
import { verifyToken } from "../middleware/verifyTokenMiddleware.js";
import { ContactController } from "../controllers/ContactController.js";

const router = express.Router();

// router.post("/sign-up", signUpController);
// router.post("/sign-up/verification-code", verificationCodeController);
// router.post("/sign-in", signInController);
router.post("/contact", ContactController);
router.post("/dashboard", verifyToken, dashboardController);

export { router };
