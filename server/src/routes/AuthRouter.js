import express from "express";
import { signUpController } from "../controllers/signUpController.js";
import { verificationCodeController } from "../controllers/verificationCodeController.js";

const router = express.Router();

router.post("/sign-up", signUpController);
router.post("/sign-up/verification-code", verificationCodeController);

export {
    router
}

// todo check the verification of uer using otp and that the isVerified gets to true