import { Navigate, useLocation } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import useAdmin from "../hooks/useAdmin";
import GlobalSpinner from "../components/GlobalSpinner";
import useInstructor from "../hooks/useInstructor";

const InstructorRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();
  const [isInstructor, isInstructorLoading] = useInstructor();
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
