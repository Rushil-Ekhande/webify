import userModel from "../models/UserModel.js";

export const verificationCodeController = async (req, res) => {
    try {
        const { username, verifyCode } = req.body;

        const user = await userModel.findOne({
            username
        })
        if(user){
            if(user.verifyCode == verifyCode){
                user.isVerified = true;
                console.log(user.isVerified);
                console.log("in if");
                await user.save();
                return res.json({
                    success: true,
                    message: "User verified"
                })
            }
            else{
                return res.json({
                    success: false,
                    message: "verification code doesn't matched"
                })
            }
        }
        else{
            return res.json({
                success: false,
                message: "User doesn't exist"
            })
        }

    } catch (error) {
        console.error(error);
        return res.json({
            success: false,
            message: "Unable to verfy your account"
        })
    }
}