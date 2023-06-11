import React, { useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { MdOutlineCancel, MdOutlineLocalOffer } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import SectionHead from "../../Shared/SectionHead/SectionHead";
import useUsers from "../../../hooks/useUsers";
import GlobalSpinner from "../../Shared/GlobalSpinner/GlobalSpinner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useApi from "../../../api/api";

const ManageUsers = () => {
  const [users, loading, refetch] = useUsers();
  const { makeAdmin, makeInstructor } = useApi();
  const queryClient = useQueryClient();
  const { mutate: updateAdminRole } = useMutation({
    mutationFn: makeAdmin,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
  const { mutate: updateInstructorRole } = useMutation({
    mutationFn: makeInstructor,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
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
                    <button
                      className="btn btn-warning btn-sm mx-1"
                      onClick={() => updateAdminRole(el._id)}
                      disabled={el.role === "admin"}
                    >
                      Make Admin
                    </button>
                    <button
                      className="btn btn-warning btn-sm mx-1"
                      onClick={() => updateInstructorRole(el._id)}
                      disabled={el.role === "instructor"}
                    >
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
