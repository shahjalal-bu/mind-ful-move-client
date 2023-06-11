import { Navigate, useLocation } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import useAdmin from "../hooks/useAdmin";
import GlobalSpinner from "../pages/Shared/GlobalSpinner/GlobalSpinner";


const AdminRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();
  console.log(isAdmin);
  if (loading || isAdminLoading) {
    return <GlobalSpinner />;
  }

  if (currentUser && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
