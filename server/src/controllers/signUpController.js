import { sendVerificationEmail } from "../helpers/sendVerificationEmail.js";
import userModel from "../models/UserModel.js";
import bcrypt from "bcrypt";

export const signUpController = async (req, res) => {
  // fetching values from request body
  try {
    const { username, email, password } = req.body;
    // checking if the username is unique

    const ifUsernameIsTaken = await userModel.findOne({
      username,
      isVerified: true,
    });

    // generating otp or verifyCode

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    if (ifUsernameIsTaken) {
      return res.json({
        success: false,
        message: "Username is already taken",
      });
    }

    // checking if the email is unique or not
    const ifEmailIsTaken = await userModel.findOne({
      email,
      isVerified: true,
    });

    if (ifEmailIsTaken) {
      return res.json({
        success: false,
        message: "Email is already taken",
      });
    } else {
      // hashing password for security purposes
      const hashedPassword = await bcrypt.hash(password, 10);
      const expiryTime = new Date();
      const verifyCodeExpiry = expiryTime.setHours(expiryTime.getHours() + 1); // Add 1 hour
      const user = new userModel({
        username,
        email,
        password: hashedPassword,
        verifyCode: otp,
        verifyCodeExpiry: verifyCodeExpiry,
        isVerified: false,
      });
      await user.save();
    }

    console.log("send email start");
    const sendEmail = await sendVerificationEmail(username, email, otp);
    console.log(sendEmail);
    console.log("send email stop");
    if (sendEmail.error) {
      console.log(error);
    }
    res.json({
      success: true,
      message: "User registered successfully",
    });
  } catch (error) {
    console.error(error);
    return res.json({
      success: false,
      message: "Failed to register user",
    });
  }
};
