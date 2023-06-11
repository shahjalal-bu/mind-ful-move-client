import { useQuery } from "@tanstack/react-query";
import useApi from "../api/api";

const useUsers = () => {
  const { getAllUser } = useApi();
  const {
    data: users = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUser,
  });

  return [users, loading, refetch];
};

export default useUsers;
