import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../contexts/AuthContext";
import SectionHead from "../../Shared/SectionHead/SectionHead";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useApi from "../../../api/api";
import { useParams } from "react-router-dom";
import useAxios from "../../../hooks/useAxios";
const UpdateClass = () => {
  const { currentUser } = useAuth();
  const [axiosSecure] = useAxios();
  const [classImage, setClassImage] = useState(null);
  const { classId } = useParams();
  const [matchClass, setMatchClass] = useState(null);
  const { register, handleSubmit, reset } = useForm({
    defaultValues: async () => {
      const response = await axiosSecure.get(`/users/${currentUser?.email}`);
      const matchObj = response.data?.classes?.find((el) => el._id === classId);
      setMatchClass(matchObj);
      return matchObj;
    },
  });
  const [imgUploading, setImgUploading] = useState(false);
  const { uploadImg, updateClass } = useApi();
  const queryClient = useQueryClient();
  const mutation = useMutation(updateClass, {
    onSuccess: () => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Class updated successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      reset();
      queryClient.invalidateQueries(["classes", "user", currentUser?.email]);
    },
  });

  const onSubmit = async (data) => {
    //when user upload new image
    if (classImage) {
      setImgUploading(true);
      // console.log(data);
      const files = classImage;
      const formData = new FormData();
      formData.append("image", files[0]);
      await uploadImg(formData)
        .then((response) => response.json())
        .then((result) => {
          setImgUploading(false);
          data.classImage = result.data.url;
          data.instructorPhoto = currentUser?.photoURL;
          delete data._id;
          if (result.success) {
            setImgUploading(true);
            mutation.mutate({ id: classId, data });
          }
        })
        .catch((error) => {
          console.error("Error uploading image:", error);
        });
    } else {
      //when user done upload any image
      data.instructorPhoto = currentUser?.photoURL;
      delete data._id;
      mutation.mutate({ id: classId, data });
    }
  };
  return (
    <div className="p-10 min-h-[95vh] bg-gray-200 dark:bg-slate-950 rounded-md mx-auto">
      <SectionHead title="UPDATE A CLASS" className="mb-5" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-x-2">
          <div className="mb-4 flex-1">
            <label
              className="dark:text-white block text-gray-700 font-bold mb-2"
              htmlFor="className"
            >
              Class name
            </label>
            <input
              className="dark:bg-slate-800 dark:text-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="className"
              type="text"
              placeholder="Enter class name"
              {...register("className", { required: true })}
            />
          </div>
          <div className="mb-4 flex-1">
            <label
              className="dark:text-white block text-gray-700 font-bold mb-2"
              htmlFor="className"
            >
              Class Category
            </label>
            <input
              className="dark:bg-slate-800 dark:text-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="category"
              type="text"
              placeholder="Enter class category"
              {...register("category", { required: true })}
            />
          </div>
        </div>
        <div className="flex gap-x-2">
          <div className="mb-4 flex-1">
            <label
              className="dark:text-white block text-gray-700 font-bold mb-2"
              htmlFor="classTime"
            >
              Class Time
            </label>
            <input
              className="dark:bg-slate-800 dark:text-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="classTime"
              type="text"
              placeholder="09-11 am"
              {...register("classTime", { required: true })}
            />
          </div>
          <div className="mb-4 flex-1">
            <label
              className="dark:text-white block text-gray-700 font-bold mb-2"
              htmlFor="classDay"
            >
              Class Day
            </label>
            <input
              className="dark:bg-slate-800 dark:text-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="classDay"
              type="text"
              placeholder="Sun, Tue, Wed"
              {...register("classDay", { required: true })}
            />
          </div>
        </div>
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="classImage"
        >
          Class Image
        </label>
        <div className="mb-4 flex gap-2 items-center">
          <div className="flex-1">
            <input
              className="dark:bg-slate-800 dark:text-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="classImage"
              type="file"
              accept="image/*"
              // {...register("classImage")}
              onChange={(e) => setClassImage(e.target.files)}
            />
          </div>
          <div>
            <img className="w-16 sm:w-24" src={matchClass?.classImage} alt="" />
          </div>
        </div>
        <div className="flex gap-x-1 flex-1">
          <div className="mb-4 flex-1">
            <label
              className="dark:text-white block text-gray-700 font-bold mb-2"
              htmlFor="instructorName"
            >
              Instructor name
            </label>
            <input
              className="dark:bg-slate-800 dark:text-white appearance-none border rounded w-full py-2 px-3 bg-gray-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="instructorName"
              type="text"
              value={currentUser?.displayName}
              readOnly
            />
          </div>
          <div className="mb-4 flex-1">
            <label
              className="dark:text-white block text-gray-700 font-bold mb-2"
              htmlFor="instructorEmail"
            >
              Instructor email
            </label>
            <input
              className="dark:bg-slate-800 dark:text-white appearance-none border rounded w-full py-2 px-3 bg-gray-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="instructorEmail"
              type="text"
              value={currentUser?.email}
              readOnly
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            className="dark:text-white block text-gray-700 font-bold mb-2"
            htmlFor="availableSeats"
          >
            Available seats
          </label>
          <input
            className="dark:bg-slate-800 dark:text-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            className="dark:bg-slate-800  dark:text-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            {imgUploading || mutation.isLoading
              ? "Processing..."
              : "Update Class"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateClass;
