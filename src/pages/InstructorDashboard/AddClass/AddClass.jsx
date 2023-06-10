import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../contexts/AuthContext";
import SectionHead from "../../Shared/SectionHead/SectionHead";
import { uploadImg } from "../../../api/api";

const AddClass = () => {
  const { register, handleSubmit } = useForm();
  const { currentUser } = useAuth();

  const onSubmit = async (data) => {
    const file = data.classImage[0];
    const formData = new FormData();
    formData.append("image", file);

    await uploadImg(formData)
      .then((response) => response.json())
      .then((result) => {
        data.classImage = result.data.url;
        console.log(data);
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      });
  };

  return (
    <div className="p-10 min-h-[95vh] bg-gray-200 rounded-md mx-auto">
      <SectionHead titile="ADD A CLASS" />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="className"
          >
            Class name
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="className"
            type="text"
            placeholder="Enter class name"
            {...register("className", { required: true })}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="classImage"
          >
            Class Image
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="classImage"
            type="file"
            accept="image/*"
            {...register("classImage", { required: true })}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="instructorName"
          >
            Instructor name
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 bg-gray-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="instructorName"
            type="text"
            value={currentUser?.displayName}
            readOnly
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="instructorEmail"
          >
            Instructor email
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 bg-gray-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="instructorEmail"
            type="text"
            value={currentUser?.email}
            readOnly
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="availableSeats"
          >
            Available seats
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="availableSeats"
            type="number"
            placeholder="Enter available seats"
            {...register("availableSeats", { required: true, min: 1 })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="price">
            Price
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="price"
            type="number"
            placeholder="Enter price"
            {...register("price", { required: true, min: 0 })}
          />
        </div>
        <div className="flex">
          <button
            className="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex-1"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddClass;
