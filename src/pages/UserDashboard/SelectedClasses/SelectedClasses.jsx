import React, { useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { MdOutlineCancel, MdOutlineLocalOffer } from "react-icons/md";
import { CiDiscount1 } from "react-icons/ci";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import SectionHead from "../../Shared/SectionHead/SectionHead";
import GlobalSpinner from "../../Shared/GlobalSpinner/GlobalSpinner";
import useClasses from "../../../hooks/useClasses";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useApi from "../../../api/api";
import { useAuth } from "../../../contexts/AuthContext";
import useUserDataWithClasses from "../../../hooks/useUserDataWithClasses";

const ManageClasses = () => {
  const [isOpen, setIsOpen] = useState({}); // Separate isOpen state for each class
  const { currentUser } = useAuth();
  const [user, isLoading, refetch] = useUserDataWithClasses();
  // const [classes, loading, refetch] = useClasses();
  const { aprrovedClass, deniedClass } = useApi();
  const queryClient = useQueryClient();
  // const { mutate: aprrovedClassMutaion } = useMutation({
  //   mutationFn: aprrovedClass,
  //   onSuccess: () => {
  //     // Invalidate and refetch
  //     queryClient.invalidateQueries({
  //       queryKey: ["classes"],
  //     });
  //   },
  // });

  if (isLoading) return <GlobalSpinner />;
  if (user?.selectedClasses)
    return (
      <div className="bg-gray-200 rounded-md p-5">
        <SectionHead titile="Manage Classes" />
        <div className="divider my-0"></div>
        <div className="overflow-y-auto h-[82vh]">
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
              {user?.selectedClasses?.map((el, index) => (
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
                    <button className="btn btn-success btn-sm">Approved</button>
                  </td>
                  <td>
                    <button className="btn btn-warning  btn-sm">Denied</button>
                  </td>
                  <td>
                    <button className="btn btn-info btn-sm">Feedback</button>
                    {/* <FeedBack
                      id={el._id}
                      isOpen={isOpen[el._id]}
                      setIsOpen={(value) =>
                        setIsOpen((prevState) => ({
                          ...prevState,
                          [el._id]: value,
                        }))
                      }
                      refetch={refetch}
                    /> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-center"></div>
        </div>
      </div>
    );
};

export default ManageClasses;
