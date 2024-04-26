import React from "react";
import TagLine from "./TagLine";
import Button from "./Button";
import { googleicon } from "../assets";
import Heading from "./Heading";
import { Link } from "react-router-dom";

const FormLogin = () => {
  return (
    <div className="bg-n-6 px-15 py-24 rounded-3xl w-full h-full">
      <h1 className="h3">Welcome to Webify</h1>
      <TagLine className={`mr-20 mt-4`}>Please Enter Your Details</TagLine>

      <form className="mt-8 w-full">
        <div>
          <label htmlFor="email" className="text-lg font-medium">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="w-full border-2 border-n-5/50 rounded-xl p-4 mt-1 bg-transparent"
          />
        </div>

        {/* <div>
                <label htmlFor="email" className='text-lg font-medium'>
                    Username
                </label>
                <input type="text" 
                       name="username" 
                       id="username" 
                       placeholder='Enter your username'
                       className='w-full border-2 border-n-5/50 rounded-xl p-4 mt-1 bg-transparent'/>
            </div> */}

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
          />
        </div>

        {/* <div className='mt-8 flex justify-between items-center'>
                <div>
                    <input 
                        type="checkbox" 
                        name="remember" 
                        id="remember" 
                    />
                    <label htmlFor="remember" className='ml-2 font-medium text-base'>
                        Remember me
                    </label>
                </div>
                <a
                    className="text-xs font-code font-bold tracking-wider uppercase border-b text-violet-500"
                    href="/"
                >
                Forgot Password?
            </a>
            </div> */}

        <div className="mt-8 felx flex-col gap-12 w-full">
        <div className="mb-4">
        <Button className={`w-full translate-all ease-in-out hover:scale-[1.01] h-12 mt-4`} scale>
          Sign In
        </Button>
      </div>
          {/* <div>
                    <Button className={`w-full translate-all ease-in-out hover:scale-[1.01]`} white scale href={"#login"}>
                         <span><img 
                            src={googleicon} 
                            alt="googleicon" 
                            width={24} 
                            height={24}
                        /></span>
                        <span>Sign in with Google</span>
                        
                    </Button>
                </div> */}

        </div>
      </form>
          <div className="mt-8 flex justify-between items-center">
            <p className="body-2 mt-4 text-n-4">Don't have an account?</p>
              <Link to="/sign-up">Sign Up</Link>
          </div>
    </div>
  );
};

export default FormLogin;
