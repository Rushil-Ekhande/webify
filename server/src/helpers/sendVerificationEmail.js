import { resend } from "../lib/resend.js";

export const sendVerificationEmail = async (username, email, otp) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject:
        "Webify verification code | verify your email using the given verification code",
      html: `<div>
                    <h1>Hello, ${username}</h1> <br>
                    <hr>
                    <p>Thank you for registering to our website. Use the folowing code to verify your account.</p><br><br>
                    <p><strong>Your Verification code is ${otp}</strong></p>
                </div>`,
    });
    console.log(data);
    if (error) {
      return error;
    }
    return data;
  } catch (error) {
    console.error(error);
  }
};
