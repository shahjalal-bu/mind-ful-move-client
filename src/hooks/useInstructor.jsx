import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import { useAuth } from "../contexts/AuthContext";

const useInstructor = () => {
  const { currentUser, loading } = useAuth();
  console.log(currentUser);
  const [axiosSecure] = useAxios();
  // use axios secure with react query
  const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
    queryKey: ["isInstructor", currentUser?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/users/check-instructor/${currentUser?.email}`
      );
      return res.data.instructor;
    },
  });
  return [isInstructor, isInstructorLoading];
};
export default useInstructor;
