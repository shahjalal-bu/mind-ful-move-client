import React, { useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { MdOutlineCancel, MdOutlineLocalOffer } from "react-icons/md";

import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import SectionHead from "../../Shared/SectionHead/SectionHead";
import useUsers from "../../../hooks/useUsers";
import GlobalSpinner from "../../Shared/GlobalSpinner/GlobalSpinner";

const ManageUsers = () => {
  const [users, loading, refetch] = useUsers();
  console.log(users);
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
  if (loading) return <GlobalSpinner />;

  if (users && Array.isArray(users) && users.length > 0)
    return (
      <div className="bg-gray-200 rounded-md p-5">
        <SectionHead titile="Manage Users" />
        <div className="divider my-0"></div>
        <div className="overflow-x-auto overflow-y-auto h-[82vh]">
          <table className="table">
            <thead className="sticky bg-gray-300 top-0 text-black">
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Img</th>
                <th>Email</th>
                <th>Category</th>
                <th className="text-center">Function</th>
              </tr>
            </thead>
            <tbody className="">
              {users.map((el, index) => (
                <tr key={el?._id}>
                  <th>{index + 1}</th>
                  <td>{el?.displayName}</td>
                  <td>
                    <img
                      className="w-16 h-16 rounded-md"
                      src={el?.photoURL}
                      alt="img"
                    />
                  </td>
                  <td>{el?.email}</td>
                  <td>{el?.role}</td>

                  <td>
                    <button className="btn btn-warning btn-sm mx-1">
                      Make Admin
                    </button>
                    <button className="btn btn-warning btn-sm mx-1">
                      Make Instructor
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

export default ManageUsers;
