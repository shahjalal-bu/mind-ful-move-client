import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import SectionHead from "../../Shared/SectionHead/SectionHead";
import GlobalSpinner from "../../Shared/GlobalSpinner/GlobalSpinner";
import useClasses from "../../../hooks/useClasses";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useApi from "../../../api/api";
import { useAuth } from "../../../contexts/AuthContext";
import useUserDataWithClasses from "../../../hooks/useUserDataWithClasses";
import { Link } from "react-router-dom";

const EnrolledClasses = () => {
  const [isOpen, setIsOpen] = useState({});
  const { currentUser } = useAuth();
  const [user, isLoading, refetch] = useUserDataWithClasses();
  const { aprrovedClass, deniedClass } = useApi();
  const queryClient = useQueryClient();
  const { deleteClass } = useApi();

  const { mutate: deleteClassMutaion } = useMutation({
    mutationFn: deleteClass,
    onSuccess: (data) => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Successfully delete",
        showConfirmButton: false,
        timer: 1500,
      });
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["classes"] });
      refetch();
      console.log(data);
    },
  });

  if (isLoading) return <GlobalSpinner />;
  if (user?.paymentClasses)
    return (
      <div className="bg-gray-200 rounded-md p-5">
        <SectionHead titile="My SelectedClasses Classes" />
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
                <th>Price</th>
                <th className="text-center">
                  Available <br />
                  Seats
                </th>
                <th className="center">Delete</th>
                <th className="center">Pay</th>
              </tr>
            </thead>
            <tbody className="">
              {user?.paymentClasses?.map((el, index) => (
                <tr key={el?._id}>
                  <th>{index + 1}</th>
                  <td>{el?.classData?.className}</td>
                  <td>
                    <img
                      className="w-16 h-16 rounded-md"
                      src={el?.classData?.classImage}
                      alt="img"
                    />
                  </td>
                  <td>{el?.classData?.instructorName}</td>
                  <td>{el?.classData?.instructorEmail}</td>

                  <td>{el?.classData?.price}</td>
                  <td>{el?.transactionId}</td>
                  <td>{el?.paymentAmount}</td>
                  <td>{el?.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-center"></div>
        </div>
      </div>
    );
};

export default EnrolledClasses;
