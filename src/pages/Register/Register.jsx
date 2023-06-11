import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import SectionHead from "../Shared/SectionHead/SectionHead";
import { FaEye, FaEyeSlash, FaSearch } from "react-icons/fa";
import Select from "react-select";
import useApi from "../../api/api";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { signup } = useAuth();
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
  const [isRegistering, setRegistering] = useState(false);
  const { uploadImg } = useApi();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setRegistering(true);
    await signup(
      data.email,
      data.password,
      data.name,
      uploadedImageUrl
    );
    reset();
    setRegistering(false);
    navigate("/");
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setIsLoading(true);
    const formData = new FormData();
    formData.append("image", file);
    uploadImg(formData)
      .then((response) => response.json())
      .then((data) => {
        setUploadedImageUrl(data.data.url);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
        setIsLoading(false);
      });
  };
  return (
    <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl mx-auto my-5">
      <SectionHead titile="Login" subtitle="Explore now..." />
      {uploadedImageUrl && (
        <div className="flex justify-center">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src={uploadedImageUrl} />
            </div>
          </div>
        </div>
      )}
      <div className="mt-12">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="text-sm font-bold text-gray-700 tracking-wide">
              Name<span className="text-red-500">*</span>
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
              Email Address<span className="text-red-500">*</span>
            </div>
            <input
              className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-amber-500"
              type="email"
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
          <div>
            <div className="text-sm font-bold text-gray-700 tracking-wide">
              Phone Number
            </div>
            <input
              className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-amber-500"
              type="phone"
              placeholder="01545687886"
              {...register("phone")}
            />
          </div>
          <div>
            <div className="text-sm font-bold text-gray-700 tracking-wide">
              Address
            </div>
            <input
              className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-amber-500"
              type="text"
              placeholder="Dhaka, Bangladesh"
              {...register("address")}
            />
          </div>
          <div className="mt-8">
            <div className="text-sm font-bold text-gray-700 tracking-wide">
              Password<span className="text-red-500">*</span>
            </div>
            <div className="relative">
              <input
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-amber-500"
                type="password"
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
            </div>
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
          </div>
          <div className="mt-8">
            <div className="text-sm font-bold text-gray-700 tracking-wide">
              Re-type Password<span className="text-red-500">*</span>
            </div>
            <div className="relative">
              <input
                className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-amber-500"
                type="password"
                placeholder="Enter your password"
                {...register("confirmPassword", {
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
              />
            </div>
            {errors.confirmPassword && (
              <span className="text-red-500">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>

          <div>
            <div className="text-sm font-bold text-gray-700 tracking-wide">
              Profile Picture<span className="text-red-500">*</span>
            </div>
            <Controller
              name="profilePicture"
              control={control}
              defaultValue=""
              rules={{ required: "Profile picture is required" }}
              render={({ field }) => (
                <div>
                  <input
                    type="file"
                    className="file-input file-input-warning file-input-bordered w-full"
                    accept="image/*"
                    onChange={(e) => {
                      field.onChange(e);
                      handleImageUpload(e);
                    }}
                  />
                  {isLoading && <p>Uploading image...</p>}
                  {uploadedImageUrl && <p>Image uploaded successfully</p>}
                </div>
              )}
            />
            {errors.profilePicture && (
              <span className="text-red-500">
                {errors.profilePicture.message}
              </span>
            )}
          </div>
          <div>
            <div className="text-sm font-bold text-gray-700 tracking-wide">
              Gender
            </div>
            <Controller
              name="gender"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <select
                  {...field}
                  className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-amber-500"
                >
                  <option value="">Select an option</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="purple">Other</option>
                </select>
              )}
            />
          </div>

          <div className="mt-10">
            <button
              className="bg-amber-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                    font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-amber-600
                    shadow-lg"
              type="submit"
              disabled={Object.keys(errors).length > 0 || isRegistering}
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
