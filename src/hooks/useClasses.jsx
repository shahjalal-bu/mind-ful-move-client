import { useQuery } from "@tanstack/react-query";
import useApi from "../api/api";

const useClasses = () => {
  const { getAllClasses } = useApi();
  const {
    data: classes = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["classes"],
    queryFn: getAllClasses,
  });

  return [classes, loading, refetch];
};

export default useClasses;
