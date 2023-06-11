import { Navigate, useLocation } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import useInstructor from "../hooks/useInstructor";
import GlobalSpinner from "../pages/Shared/GlobalSpinner/GlobalSpinner";

const InstructorRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();
  const [isInstructor, isInstructorLoading] = useInstructor();
  console.log(isInstructor);
  const location = useLocation();

  if (loading || isInstructorLoading) {
    return <GlobalSpinner />;
  }

  if (currentUser && isInstructor) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default InstructorRoute;
