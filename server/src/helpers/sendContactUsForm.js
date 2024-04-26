import { resend } from "../lib/resend.js";

export const sendContactUsForm = async( username, email, message ) => {
    try {
        const {data,error} = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: email,
            subject: `Webify Contact us form | By user ${username} from ${email}`,
            html: `<div>
                    <h1>Hello, ${username}</h1> <br>
                    <hr>
                    <p>Message send from ${email}</p><br><br>
                    <p><strong>There messge --> ${message}</strong></p>
                </div>`,
          });
          
          if(error){
              return error
          }
        return data;

    } catch (error) {
        console.error(error);
    }
}
