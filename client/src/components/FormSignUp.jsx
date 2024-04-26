import React, { useState } from "react";
import TagLine from "./TagLine";
import Button from "./Button";
import { googleicon } from "../assets";
import Heading from "./Heading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormSignUp = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/sign-up",
        {
          username,
          email,
          password,
        }
      );
      console.log("Data posted:", response.data);
      if (response.data.success) {
        navigate("/verification-code");
      }
      if (!response.data.success) {
        navigate("/sign-up");
      }
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <div className="bg-n-6 px-15 py-24 rounded-3xl w-full h-screen flex flex-grow flex-col">
      <h1 className="h3">Welcome to Webify</h1>
      <TagLine className={`mr-20 mt-4`}>Please Enter Your Details</TagLine>

      <form
        onSubmit={handleOnSubmit}
        className="mt-8 w-full flex flex-col space-y-4"
      >
        <div className="">
          <label htmlFor="email" className="text-lg font-medium">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="w-full border-2 border-n-5/50 rounded-xl p-4 mt-1 bg-transparent"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email" className="text-lg font-medium">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your username"
            className="w-full border-2 border-n-5/50 rounded-xl p-4 mt-1 bg-transparent"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password" className="text-lg font-medium">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            className="w-full border-2 border-n-5/50 rounded-xl p-4 mt-1 bg-transparent"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <Button
            type="submit"
            className={`w-full translate-all ease-in-out hover:scale-[1.01] h-12 mt-4`}
            scale
          >
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FormSignUp;
