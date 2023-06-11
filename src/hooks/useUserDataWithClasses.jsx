import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import { useAuth } from "../contexts/AuthContext";

const useUserDataWithClasses = () => {
  const { currentUser, loading } = useAuth();
  const [axiosSecure] = useAxios();
  // use axios secure with react query
  const {
    data: user = [],
    isLoading: isLoading,
    refetch,
  } = useQuery({
    queryKey: ["user", currentUser?.email],
    queryFn: async () => {
      const response = await axiosSecure.get(`/users/${currentUser?.email}`);
      return response.data;
    },
  });

  return [user, isLoading, refetch];
};
export default useUserDataWithClasses;
