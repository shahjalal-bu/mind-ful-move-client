import React, { useEffect, useState } from "react";
// import GlobalSpinner from "../components/GlobalSpinner";
// import Error from "../components/Error";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { MdOutlineCancel, MdOutlineLocalOffer } from "react-icons/md";
import { CiDiscount1 } from "react-icons/ci";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import SectionHead from "../../Shared/SectionHead/SectionHead";
import useUserDataWithClasses from "../../../hooks/useUserDataWithClasses";
import GlobalSpinner from "../../Shared/GlobalSpinner/GlobalSpinner";

const CreatedClasse = () => {
  const [user, isLoading, refetch] = useUserDataWithClasses();
  console.log(user);
  if (isLoading) return <GlobalSpinner />;
  if (user)
    return (
      <div className="bg-gray-200 rounded-md p-5">
        <SectionHead titile="My Created Classes" />
        <div className="divider my-0"></div>
        <div className="overflow-x-auto overflow-y-auto h-[82vh]">
          <table className="table">
            <thead className="sticky bg-gray-300 top-0 text-black">
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Img</th>
                <th>Category</th>
                <th>Status</th>
                <th>Price</th>
                <th>
                  Enrolled <br /> Students
                </th>
                <th>Feedback</th>
                <th>Function</th>
              </tr>
            </thead>
            <tbody className="">
              {user?.classes?.map((el, index) => (
                <tr key={el?._id}>
                  <th>{index + 1}</th>
                  <td>{el?.className}</td>
                  <td>
                    <img
                      className="w-16 h-16 rounded-md"
                      src={el?.classImage}
                      alt="img"
                    />
                  </td>
                  <td>{el?.category}</td>
                  <td>
                    <span className="badge">{el?.status}</span>
                  </td>
                  <td>{el?.price}</td>
                  <td>{el?.enrolledStudents}</td>
                  <td>{el?.feedback}</td>
                  <td>
                    <button
                      disabled={el?.status === "approved"}
                      className="btn btn-warning btn-sm"
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-center">
            {/* <button
                  className="bg-slate-900 rounded-sm py-4 px-2 my-2 w-2/6 text-white"
                  onClick={() => setAllProductsLimit((prev) => prev + 20)}
                >
                  Load More Data
                </button> */}
          </div>
        </div>
      </div>
    );
};

export default CreatedClasse;
