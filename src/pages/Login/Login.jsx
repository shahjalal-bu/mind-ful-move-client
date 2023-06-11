import React, { useState } from "react";
import SectionHead from "../Shared/SectionHead/SectionHead";
import { FaEye, FaEyeSlash, FaSearch } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const Login = () => {
  const [isSeenPassword, setSeenPassword] = useState(false);
  const { login, googleSignIn } = useAuth();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const res = await login(data.email, data.password);
    if (res.user.email) {
      navigate(from, { replace: true });
    }
  };

  const handleGoogleLogin = async () => {
    const res = await googleSignIn();
    if (res.user.email) {
      navigate(from, { replace: true });
    }
  };

  return (
    <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl mx-auto my-5">
      <SectionHead titile="Login" subtitle="Explore now..." />
      <div className="mt-12">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="text-sm font-bold text-gray-700 tracking-wide">
              Email Address
            </div>
            <input
              className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-amber-500"
              type="email"
              placeholder="alex@gmail.com"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500">Email is required</span>
            )}
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
                {...register("password", { required: true })}
              />
              <div
                className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
                onClick={() => setSeenPassword(!isSeenPassword)}
              >
                {isSeenPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
            {errors.password && (
              <span className="text-red-500">Password is required</span>
            )}
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="bg-amber-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                    font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-amber-600
                    shadow-lg"
            >
              Log In
            </button>
            <div className="divider">OR</div>
          </div>
        </form>
        <button
          className="bg-blue-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                    font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-blue-600
                    shadow-lg"
          onClick={handleGoogleLogin}
        >
          Log In With Google
        </button>
        <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
          Don't have an account?
          <Link
            to="/register"
            className="cursor-pointer text-amber-600 hover:text-amber-800 ms-2"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
