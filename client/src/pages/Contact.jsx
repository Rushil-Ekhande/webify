import {useState} from "react";
import Section from "../components/Section";
import Heading from "../components/Heading";
import { socials } from "../constants";
import Button from "../components/Button";
import { googleicon } from "../assets";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("in the sub")
      const response = await axios.post(
        "http://localhost:3000/api/auth/contact",
        {
          username,
          email,
          message,
        }
      );
      if(!response.data.success){
        console.error(response.data.message)
      }
      navigate('/message')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Section crosses crossesOffset="lg:translate-y-[5.25rem]" id="signup">
      <div className="container flex w-full min-h-screen justify-center">
        <div className="bg-n-7 w-full p-8 md:p-12 rounded-xl shadow-lg flex flex-col md:flex-row md:justify-between md:space-y-0 space-y-6 md:space-x-6 overflow-hidden  max-md:flex-col-reverse">
          <div className="flex flex-col justify-between space-y-8">
            <div className={"mt-4 max-md:hidden"}>
              <h2 className="h2">Contact Us</h2>
              <p className="body-2 mt-4 text-n-4 max-w-lg">
                Have a question or ready to get started? Fill out the form
                below, and we'll be in touch soon. We're here to help with
                anything you need!

                <strong>
                  If you want to work with us contact us now
                </strong>
              </p>
            </div>

            <div className="flex flex-col space-y-8 max-md:mt-12">
              <div className="inline-flex space-x-2 items-center max-md:mt-12">
                <ion-icon name="mail" className="text-3xl"></ion-icon>
                <span>webify@gmail.com</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <ion-icon name="call" className="text-3xl"></ion-icon>
                <span>+91 81045-99864</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <ion-icon name="location" className="text-3xl"></ion-icon>
                <span>Mumbai, India</span>
              </div>
            </div>

            <div>
              <ul className="flex flex-wrap gap-5">
                {socials.map((item) => (
                  <a
                    href={item.url}
                    key={item.id}
                    target="_blank"
                    className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full translate-colors hover:bg-n-6"
                  >
                    <img
                      src={item.iconUrl}
                      alt={item.title}
                      width={20}
                      height={20}
                    />
                  </a>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:w-1/2 relative max-lg:w-full">
            <div className="absolute bg-violet-500 rounded-full w-52 h-52 z-5 -top-28 -right-28"></div>
            <div className="absolute bg-violet-500 rounded-full w-52 h-52 z-5 -left-28 -bottom-20"></div>

            <div className={"my-4 max-md:block hidden"}>
              <h2 className="h2">Contact Us</h2>
              <p className="body-2 mt-4 text-n-4 max-w-lg">
                Have a question or ready to get started? Fill out the form
                below, and we'll be in touch soon. We're here to help with
                anything you need!

                <strong>
                  If you want to work with us contact us now
                </strong>
              </p>
            </div>

            <div className="relative z-10 bg-n-6 rounded-xl shadow-lg p-8 w-full">
              <form onSubmit={handleOnSubmit} className="mt-8 w-full space-y-4">
                <div>
                  <label htmlFor="useremail" className="text-lg font-medium">
                    Email
                  </label>
                  <input
                    type="useremail"
                    name="useremail"
                    id="useremail"
                    placeholder="Enter your email"
                    className="w-full border-2 border-n-5/50 rounded-xl p-4 mt-1 bg-transparent"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="username" className="text-lg font-medium">
                  Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Enter your Name"
                    className="w-full border-2 border-n-5/50 rounded-xl p-4 mt-1 bg-transparent"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-lg font-medium">
                    Message
                  </label>
                  <textarea
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your Message"
                    rows="6"
                    className="w-full border-2 border-n-5/50 rounded-xl p-4 mt-1 bg-transparent"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                <div className="mt-8 felx flex-col gap-12 w-full">
                  <div className="mb-4 ">
                    <Button
                    type="submit"
                      className={`w-full translate-all ease-in-out hover:scale-[1.01]`}
                      scale
                    >
                      Submit
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
