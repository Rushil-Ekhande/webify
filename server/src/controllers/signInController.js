import bcrypt from "bcrypt";
import userModel from "../models/UserModel.js";
import jwt from "jsonwebtoken";

export const signInController = async (req, res) => {
 try {
    const {email, password} = req.body;

    const user = await userModel.findOne({email});

    if(!user){
        return res.json({
            success: false,
            message: "User doesn't exist of this email Id"
        });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if(!isPasswordCorrect){
        return res.json({
            success: false,
            message: "Invalid password enter the correct password"
        });
    }
    else{
        const payload = {
            username: user.username,
            email: user.email,
            _id: user._id,
            isVerified: user.isVerified
        };
        jwt.sign(payload, process.env.JWT_SECRET_KEY , { expiresIn: '1h' }, (err, token) => {
            if(err){
                console.log(err);
                return res.json({
                    success: false,
                    message: "Unable to sign in jwt token"
                });
            }
            res.cookie('token', token);
            return res.json({
                success: true,
                message: "Invalid password enter the correct password",
                token
            });
        });
    }

 } catch (error) {
    console.log(error);
    return res.json({
        success: false,
        message: "Failed to sign in"
    })
 }
}
