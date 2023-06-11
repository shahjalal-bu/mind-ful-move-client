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
import useClasses from "../../../hooks/useClasses";
// import Axios from "../utils/Axios";

const ManageClasses = () => {
  const [classes, loading, refetch] = useClasses();

  if (loading) return <GlobalSpinner />;
  if (classes)
    return (
      <div className="bg-gray-200 rounded-md p-5">
        <SectionHead titile="Manage Classes" />
        <div className="divider my-0"></div>
        <div className="overflow-x-auto overflow-y-auto h-[82vh]">
          <table className="table">
            <thead className="sticky bg-gray-300 top-0 text-black">
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Img</th>
                <th className="text-center">
                  Instructor
                  <br />
                  Name
                </th>
                <th className="text-center">
                  Instructor
                  <br />
                  Email
                </th>
                <th>Status</th>
                <th>Price</th>
                <th className="text-center">
                  Available <br />
                  Seats
                </th>
                <th className="center">Approved</th>
                <th className="center">Deny</th>
                <th className="center">Feedback</th>
              </tr>
            </thead>
            <tbody className="">
              {classes?.map((el, index) => (
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
                  <td>{el?.instructorName}</td>
                  <td>{el?.instructorEmail}</td>
                  <td>
                    <span className="badge">{el?.status}</span>
                  </td>
                  <td>{el?.price}</td>
                  <td>{el?.availableSeats}</td>
                  <td>
                    <div className="btn btn-success btn-sm">Approved</div>
                  </td>
                  <td>
                    <div className="btn btn-warning  btn-sm">Deny</div>
                  </td>
                  <td>
                    <div className="btn btn-info btn-sm">Feedback</div>
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
