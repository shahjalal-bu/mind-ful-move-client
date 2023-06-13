import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import SectionHead from "../../Shared/SectionHead/SectionHead";
import useUserDataWithClasses from "../../../hooks/useUserDataWithClasses";
import GlobalSpinner from "../../Shared/GlobalSpinner/GlobalSpinner";
import ShowFeedBack from "./ShowFeedback";

const CreatedClasses = () => {
  const [user, isLoading] = useUserDataWithClasses();
  const [isOpen, setIsOpen] = useState({});
  if (isLoading) return <GlobalSpinner />;
    return (
      <div className="bg-gray-200 dark:bg-slate-950 rounded-md p-5">
        <SectionHead title="My Created Classes" />
        <div className="divider my-0"></div>
        <div className="overflow-x-auto overflow-y-auto h-[82vh]">
          <table className="table">
            <thead className="sticky bg-gray-300 dark:bg-black dark:text-white top-0 text-black">
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
                  <td>
                    <button
                      className="btn btn-info btn-sm"
                      disabled={!(el?.status === "denied")}
                      onClick={() =>
                        setIsOpen((prevState) => ({
                          ...prevState,
                          [el._id]: true,
                        }))
                      }
                    >
                      Feedback
                    </button>
                    <ShowFeedBack
                      feedback={el?.feedback}
                      isOpen={isOpen[el._id]}
                      setIsOpen={(value) =>
                        setIsOpen((prevState) => ({
                          ...prevState,
                          [el._id]: value,
                        }))
                      }
                    />
                  </td>
                  <td>
                    <Link to={`/dashboard/my-update-class/${el?._id}`}>
                      <button
                        disabled={el?.status === "approved"}
                        className="btn btn-warning btn-sm"
                      >
                        Update
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
        </div>
      </div>
    );
};

export default CreatedClasses;
