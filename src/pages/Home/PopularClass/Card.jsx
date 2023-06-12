import React from "react";
import {
  AiOutlineCalendar,
  AiOutlineClockCircle,
  AiOutlinePlus,
} from "react-icons/ai";
import useApi from "../../../api/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "../../../contexts/AuthContext";
import Swal from "sweetalert2";

const Card = ({ data }) => {
  const { currentUser } = useAuth();
  const { selectClass } = useApi();
  const queryClient = useQueryClient();

  const { mutate: slecteClassMutaion } = useMutation({
    mutationFn: selectClass,
    onSuccess: (data) => {
      if (data.data.error) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: data.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: data.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
      }

      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["classes"] });
      console.log(data);
    },
  });

  const {
    _id,
    className,
    category,
    classImage,
    instructorName,
    classTime,
    classDay,
  } = data;
  return (
    <div className="bg-white rounded shadow-lg  group">
      <div className="relative">
        <img
          src={classImage}
          alt="Yoga"
          className="w-full h-60 object-cover  mb-4"
        />
        <div className="flex p-1 rounded-xl gap-x-1 shadow shadow-gray-300 absolute -bottom-3 right-4 bg-white z-10">
          <img
            src="https://bestwebcreator.com/dhyana/demo/assets/images/cl_teacher_img1.jpg"
            className="w-6 h-6 rounded-full"
          />
          <span>{instructorName}</span>
        </div>
        {/* TODO: transiton not working */}
        <div className="w-full h-full justify-center items-center bg-black/50 absolute left-0  hidden group-hover:top-0 group-hover:flex">
          <button
            className="bg-white p-2 rounded-full cursor-pointer"
            onClick={() =>
              slecteClassMutaion({ email: currentUser?.email, classId: _id })
            }
          >
            <AiOutlinePlus size={25} />
          </button>
        </div>
      </div>
      <div className="pb-5 px-5">
        <div className="badge badge-accent text-white font-semibold">
          {category}
        </div>
        <h3 className="text-2xl font-aleo font-bold mb-2 antialiased my-2">
          {className}
        </h3>
        <div className="flex gap-x-3">
          <div className="flex items-center gap-x-2">
            <AiOutlineCalendar className="text-amber-500" />
            <span className="text-gray-400 gap-x-2">{classDay}</span>
          </div>
          <div className="flex items-center gap-x-2">
            <AiOutlineClockCircle className="text-amber-500" />
            <span className="text-gray-400">{classTime}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
