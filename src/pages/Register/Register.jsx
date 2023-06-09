import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SectionHead from "../Shared/SectionHead/SectionHead";
import { FaEye, FaEyeSlash, FaSearch } from "react-icons/fa";
import Select from "react-select";

const Register = () => {
  const [isSeenPassword, setSeenPassword] = useState(false);
  const [gender, setGender] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl mx-auto my-5">
      <SectionHead titile="Login" subtitle="Explore now..." />
      <div className="mt-12">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="text-sm font-bold text-gray-700 tracking-wide">
              Name
            </div>
            <input
              className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-amber-500"
              type=""
              placeholder="Alex"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )}
          </div>
          <div>
            <div className="text-sm font-bold text-gray-700 tracking-wide">
              Email Address
            </div>
            <input
              className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-amber-500"
              type=""
              placeholder="alex@gmail.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>
          <div className="mt-8">
            <div className="text-sm font-bold text-gray-700 tracking-wide">
              Password
            </div>
            <div className="relative">
              <input
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-amber-500"
                type={isSeenPassword ? "text" : "password"}
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                  pattern: {
                    value:
                      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*()_+]).{6,}$/,
                    message:
                      "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character",
                  },
                })}
              />
              <div
                className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
                onClick={() => setSeenPassword(!isSeenPassword)}
              >
                {isSeenPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
          </div>
          <div className="mt-8">
            <div className="text-sm font-bold text-gray-700 tracking-wide">
              Re-type Password
            </div>
            <div className="relative">
              <input
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-amber-500"
                type={isSeenPassword ? "text" : "password"}
                placeholder="Enter your password"
                {...register("confirmPassword", {
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
              />
              <div
                className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
                onClick={() => setSeenPassword(!isSeenPassword)}
              >
                {isSeenPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
            {errors.confirmPassword && (
              <span className="text-red-500">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>
          <div>
            <div className="text-sm font-bold text-gray-700 tracking-wide">
              Profile Picture
            </div>
            <input
              type="file"
              className="file-input file-input-bordered w-full"
              {...register("profilePicture")}
            />
          </div>
          <div>
            <div className="text-sm font-bold text-gray-700 tracking-wide">
              Gender
            </div>
            <Select
              id="selectOption"
              name="selectOption"
              options={[
                { value: "male", label: "Male" },
                { value: "female", label: "Female" },
                { value: "other", label: "Other" },
              ]}
              defaultInputValue={gender}
              onChange={setGender}
            />
          </div>
          <div className="mt-10">
            <button
              className="bg-amber-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                    font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-amber-600
                    shadow-lg"
              type="submit"
              disabled={Object.keys(errors).length > 0}
            >
              Register
            </button>
          </div>
        </form>
        <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
          Already have an account?
          <a className="cursor-pointer text-amber-600 hover:text-amber-800 ms-2">
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
