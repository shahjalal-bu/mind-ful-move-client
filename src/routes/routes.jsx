import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Instructors from "../pages/Instructors/Instructors/Instructors";
import Classes from "../pages/Classes/Classes/Classes";
import Dashboard from "../layout/Dashboard";
import SelectedClasses from "../pages/UserDashboard/SelectedClasses/SelectedClasses";
import EnrolledClasses from "../pages/UserDashboard/EnrolledClasses/EnrolledClasses";
import AddClass from "../pages/InstructorDashboard/AddClass/AddClass";
import CreatedClasse from "../pages/InstructorDashboard/CreatedClass/CreatedClass";
import ManageClasses from "../pages/AdminDashboard/ManageClasses/ManageClasses";
import ManageUsers from "../pages/AdminDashboard/ManageUsers/ManageUsers";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import Payment from "../pages/UserDashboard/Payment/Payment";

//user routes
export const userRoutes = [
  {
    path: "my-selected-classes",
    element: <SelectedClasses />,
  },
  {
    path: "my-enrolled-classes",
    element: <EnrolledClasses />,
  },
];

//instructor routes
const instructorRoute = [
  {
    path: "add-class",
    element: (
      <InstructorRoute>
        <AddClass />
      </InstructorRoute>
    ),
  },
  {
    path: "my-created-class",
    element: (
      <InstructorRoute>
        <CreatedClasse />
      </InstructorRoute>
    ),
  },
];

//admin routes
const adminRoute = [
  {
    path: "manage-classes",
    element: (
      <AdminRoute>
        <ManageClasses />
      </AdminRoute>
    ),
  },
  {
    path: "manage-users",
    element: (
      <AdminRoute>
        <ManageUsers />
      </AdminRoute>
    ),
  },
];
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/instructors",
        element: <Instructors />,
      },
      {
        path: "/classes",
        element: <Classes />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/payment/:classId",
        element: <Payment />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [...userRoutes, ...instructorRoute, ...adminRoute],
  },
]);

export default routes;
