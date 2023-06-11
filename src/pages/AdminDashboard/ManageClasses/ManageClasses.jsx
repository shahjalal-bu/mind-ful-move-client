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
import GlobalSpinner from "../../Shared/GlobalSpinner/GlobalSpinner";
// import Axios from "../utils/Axios";

const ManageClasses = () => {
  //   const handleDelete = async (id) => {
  //     try {
  //       const response = await Axios.delete(`/toys/${id}`);
  //       console.log(response.data);
  //       //TODO: froned updated needed
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   const isDelete = async (id) => {
  //     const res = await Swal.fire({
  //       title: "Are you sure?",
  //       text: "You want to delete this product?",
  //       icon: "warning",
  //       confirmButtonText: "Delete",
  //       showCancelButton: true,
  //     });
  //     if (res.isConfirmed) {
  //       handleDelete(id);
  //     }
  //   };
  //   const handleDealsOfTheDay = async (id, dealsOfTheDay) => {
  //     try {
  //       const response = await Axios.patch(`toys/deals-of-the-day/${id}`, {
  //         dealsOfTheDay: true,
  //       });
  //       console.log(response.data);
  //       // Handle response data
  //     } catch (error) {
  //       console.error(error);
  //       // Handle error
  //     }
  //   };

  //   const isDealsOfDay = async (id, dealsOfTheDay) => {
  //     const res = await Swal.fire({
  //       title: "Are you sure?",
  //       text: "You want to deal of the day this product?",
  //       icon: "warning",
  //       confirmButtonText: "YES",
  //       showCancelButton: true,
  //     });
  //     if (res.isConfirmed) {
  //       handleDealsOfTheDay(id, dealsOfTheDay);
  //     }
  //   };
  let isLoading, user;

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
                    <div className="btn btn-warning btn-sm">Update</div>
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

export default ManageClasses;
