import { sendContactUsForm } from "../helpers/sendContactUsForm.js";
import contactModel from "../models/ContactModel.js";

export const ContactController = async (req, res) => {
  try {
    const { username, email, message } = req.body;
    const contact = new contactModel({
      username,
      email,
      message,
    });

    await contact.save();
    const emailsend = await sendContactUsForm(
      username,
      "webifygoonline@gmail.com",
      message
    );
    console.log(emailsend);
    if (emailsend.error) {
      console.log(error);
      return res.json({
        success: false,
        message: error,
      });
    }
    res.json({
      success: true,
      message: "Registered contact form",
    });
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      message: "Failed to register contact form",
    });
  }
};
