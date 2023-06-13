import React from "react";
import { ImPlus, ImStatsDots } from "react-icons/im";
import { BiHome, BiShoppingBag } from "react-icons/bi";
import { FiShoppingBag } from "react-icons/fi";
import ActiveLink from "../pages/Shared/ActiveLink/ActiveLink";
import { useAuth } from "../contexts/AuthContext";
import { AiOutlineLogout } from "react-icons/ai";
import { SiGoogleclassroom } from "react-icons/si";
import { BsPaypal, BsPeopleFill } from "react-icons/bs";
import GlobalSpinner from "../pages/Shared/GlobalSpinner/GlobalSpinner.jsx";

import img from "../assets/img";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import { Link } from "react-router-dom";

//student dashboard
const userNavigationData = [
  {
    path: "my-selected-classes",
    element: "My Selected Classes",
    icon: <BiShoppingBag />,
  },
  {
    path: "my-enrolled-classes",
    element: "My Enrolled Classes",
    icon: <FiShoppingBag />,
  },
  {
    path: "my-payment-history",
    element: "Payment history",
    icon: <BsPaypal />,
  },
];
//instructor navigation
const instructorNavigationData = [
  {
    path: "add-class",
    element: "Add Class",
    icon: <ImPlus />,
  },
  {
    path: "my-created-class",
    element: "My Classes",
    icon: <SiGoogleclassroom />,
  },
];
//admin navigation
const adminNavigationData = [
  {
    path: "manage-classes",
    element: "Manage Classes",
    icon: <SiGoogleclassroom />,
  },
  {
    path: "manage-users",
    element: "Manage Users",
    icon: <BsPeopleFill />,
  },
];
const navigationDataLink = (role) => {
  if (role === "student")
    return userNavigationData.map((el, index) => (
      <ActiveLink to={el.path} key={index}>
        <div className="flex items-center gap-2 border-b  px-2 py-2 text-lg font-semibold border-gray-100">
          {el.icon} <p>{el.element}</p>
        </div>
      </ActiveLink>
    ));
  if (role === "instructor")
    return instructorNavigationData.map((el, index) => (
      <ActiveLink to={el.path} key={index}>
        <div className="flex items-center gap-2 border-b  px-2 py-2 text-lg font-semibold border-gray-100">
          {el.icon} <p>{el.element}</p>
        </div>
      </ActiveLink>
    ));
  if (role === "admin")
    return adminNavigationData.map((el, index) => (
      <ActiveLink to={el.path} key={index}>
        <div className="flex items-center gap-2 border-b  px-2 py-2 text-lg font-semibold border-gray-100">
          {el.icon} <p>{el.element}</p>
        </div>
      </ActiveLink>
    ));
};

const SideNavigation = () => {
  const { currentUser, logout, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const [isInstructor, isInstructorLoading] = useInstructor();
  let navContent;
  if (!isAdminLoading && !isInstructorLoading) {
    if (isAdmin) {
      navContent = navigationDataLink("admin");
    } else if (isInstructor) {
      navContent = navigationDataLink("instructor");
    } else {
      navContent = navigationDataLink("student");
    }
  }
  if (loading || isAdminLoading || isInstructorLoading)
    return <GlobalSpinner />;
  return (
    <div className=" bg-gray-200 dark:bg-slate-950 sm:min-h-[95vh]  lg:flex flex-col sm:w-60  p-3 rounded-md ">
      <div className="mb-4">
        <Link to="/">
          <img src={img.logo} className="w-9/12 mx-auto" alt="" />
        </Link>
      </div>
      <div>
        <ActiveLink to="/">
          <div className="flex items-center gap-2 border-b  px-2 py-2 text-lg font-semibold border-gray-100">
            <BiHome /> <p>Home</p>
          </div>
        </ActiveLink>
        {navContent}
      </div>
      <div className="mt-auto p-3">
        <div className="divider"></div>
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="avatar online">
            <div className="w-16 rounded-full">
              <img src={currentUser?.photoURL} />
            </div>
          </div>

          <div className="text-gray-800 dark:text-white font-bold">
            {currentUser?.displayName}
          </div>
          <p className="text-gray-500 dark:text-white">{currentUser?.email}</p>

          <button className="btn btn-warning btn-circle" onClick={logout}>
            <AiOutlineLogout size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default SideNavigation;
