import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../contexts/AuthContext";
import SectionHead from "../../Shared/SectionHead/SectionHead";
// import { addClass, uploadImg } from "../../../api/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useApi from "../../../api/api";

const AddClass = () => {
  const { currentUser } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const [imgUploading, setImgUploading] = useState(false);
  const { addClass, uploadImg } = useApi();
  const queryClient = useQueryClient();
  const mutation = useMutation(addClass, {
    onSuccess: () => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Item added successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      reset();
      queryClient.invalidateQueries(["classes", "user", currentUser?.email]);
    },
  });

  const onSubmit = async (data) => {
    setImgUploading(true);
    const file = data.classImage[0];
    const formData = new FormData();
    formData.append("image", file);
    await uploadImg(formData)
      .then((response) => response.json())
      .then((result) => {
        setImgUploading(false);
        data.classImage = result.data.url;
        data.instructorName = currentUser.displayName;
        data.instructorPhoto = currentUser.photoUrl;
        data.instructorEmail = currentUser.email;
        data.status = "pending";
        data.rating = 0;
        data.enrolledStudents = 0;
        data.feedback = "";
        if (result.success) {
          mutation.mutate(data);
        }
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      });
  };

  return (
    <div className="p-10 min-h-[95vh] bg-gray-200 rounded-md mx-auto">
      <SectionHead titile="ADD A CLASS" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-x-2">
          <div className="mb-4 flex-1">
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
          <div className="mb-4 flex-1">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="className"
            >
              Class Category
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="category"
              type="text"
              placeholder="Enter class category"
              {...register("category", { required: true })}
            />
          </div>
        </div>{" "}
        <div className="flex gap-x-2">
          <div className="mb-4 flex-1">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="classTime"
            >
              Class Time
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="classTime"
              type="text"
              placeholder="09-11 am"
              {...register("classTime", { required: true })}
            />
          </div>
          <div className="mb-4 flex-1">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="classDay"
            >
              Class Day
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="classDay"
              type="text"
              placeholder="Sun, Tue, Wed"
              {...register("classDay", { required: true })}
            />
          </div>
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
        <div className="flex gap-x-1 flex-1">
          <div className="mb-4 flex-1">
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
          <div className="mb-4 flex-1">
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
            disabled={imgUploading || mutation.isLoading}
          >
            {imgUploading || mutation.isLoading ? "Processing..." : "Add"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddClass;
