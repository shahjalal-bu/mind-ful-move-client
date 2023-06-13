import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import { useAuth } from "../contexts/AuthContext";


const useAdmin = () => {
  const { currentUser, loading } = useAuth();
  const [axiosSecure] = useAxios();
  // use axios secure with react query
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", currentUser?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/check-admin/${currentUser?.email}`);
      return res.data.admin;
    },
  });
  return [isAdmin, isAdminLoading];
};
export default useAdmin;
