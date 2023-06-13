import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import { useAuth } from "../contexts/AuthContext";

const usePayments = () => {
  const { currentUser, loading } = useAuth();
  const [axiosSecure] = useAxios();
  // use axios secure with react query
  const {
    data: payments = [],
    isLoading: isLoading,
    refetch,
  } = useQuery({
    queryKey: ["payments", currentUser?.email],
    queryFn: async () => {
      const response = await axiosSecure.get(
        `/payment/find-with-email/${currentUser?.email}`
      );
      return response.data;
    },
  });

  return [payments, isLoading, refetch];
};
export default usePayments;
