import React, { useState } from "react";
import SectionHead from "../Shared/SectionHead/SectionHead";
import { FaEye, FaEyeSlash, FaSearch } from "react-icons/fa";

const Login = () => {
  const [isSeenPassword, setSeenPassword] = useState(false);
  return (
    <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl mx-auto my-5">
      <SectionHead titile="Login" subtitle="Explore now..." />
      <div className="mt-12">
        <form>
          <div>
            <div className="text-sm font-bold text-gray-700 tracking-wide">
              Email Address
            </div>
            <input
              className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-amber-500"
              type=""
              placeholder="alex@gmail.com"
            />
          </div>
          <div className="mt-8">
            <div className="flex justify-between items-center">
              <div className="text-sm font-bold text-gray-700 tracking-wide">
                Password
              </div>
              <div>
                <a
                  className="text-xs font-display font-semibold text-amber-600 hover:text-amber-800
                            cursor-pointer"
                >
                  Forgot Password?
                </a>
              </div>
            </div>
            <div className="relative">
              <input
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-amber-500"
                type={isSeenPassword ? "text" : "password"}
                placeholder="Enter your password"
              />
              <div
                className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
                onClick={() => setSeenPassword(!isSeenPassword)}
              >
                {isSeenPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              className="bg-amber-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                    font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-amber-600
                    shadow-lg"
            >
              Log In
            </button>
            <div className="divider">OR</div>
            <button
              className="bg-blue-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                    font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-blue-600
                    shadow-lg"
            >
              Log In With Google
            </button>
          </div>
        </form>
        <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
          Don't have an account ?
          <a className="cursor-pointer text-amber-600 hover:text-amber-800 ms-2">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};
export default Login;
