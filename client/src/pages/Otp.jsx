import React, { useState } from "react";
import Section from "../components/Section";
import OtpInput from "../components/OtpInput";
import Heading from "../components/Heading";
import TagLine from "../components/TagLine";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Otp = () => {
    const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [verifyCode, setVerifyCode] = useState("");
  const handleOnChange = async (e) => {
    const value = e.target.value;
    setVerifyCode(value);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/sign-up/verification-code",
        {
          username,
          verifyCode,
        }
      );
      if(!response.data.success){
        navigate("/verification-code")
      }else{
          navigate("/contact")
      }
    } catch (error) {   
      console.log(error);
    }
  };
  return (
    <Section crosses crossesOffset>
      <div className="container h-screen flex flex-col justify-center items-center space-y-6 relative">
        <div className="md:w-60 md:h-44 w-32 h-44 rounded-full bg-gradient-to-tr from-purple-900 to-pink-900 animate-bounce absolute" />
        <div className="w-full h-screen bg-n-7/10 backdrop-blur-xl absolute bottom-0 rounded-3xl z-1" />
        <div className="z-20 flex justify-center space-y-3 items-center flex-col">
          <Heading title={"OTP Verification"} className={`z-20`} />
          <TagLine>
            Check your inbox for the OTP from webify.go.online@gmail.com and
            enter it below.
          </TagLine>
        </div>
        <div className="z-20 space-x-4">
          <form onSubmit={handleOnSubmit}>
            <div className="flex flex-col space-y-2 mb-4">
              <label htmlFor="email" className="text-lg font-medium">
                Username
              </label>
              <input
                type="username"
                name="username"
                id="username"
                placeholder="Enter your username"
                className="w-full border-2 border-n-5/50 rounded-xl p-4 mt-1 bg-transparent"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-4">
                <label>Enter 6 digit verification code</label>
              <input
                type="text"
                className="w-full h-16 p-2 tracking-wider border-2 rounded bg-transparent outline-none text-center font-semibold text-xl border-n-4 focus:border-n-5 focus:text-n-5 text-n-4 transition  z-20"
                value={verifyCode}
                onChange={handleOnChange}
              />
            </div>
            <input type="submit" value="Verify Code" className="m-3 border-white border-2 cursor-pointer"/>
          </form>
        </div>
      </div>
      <Toaster position="bottom-right"/>
    </Section>
  );
};

export default Otp;
