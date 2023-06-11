import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../contexts/AuthContext";
import useApi from "../api/api";

const useInstructor = () => {
  const { currentUser, loading } = useAuth();
  const { checkInstructor } = useApi();

  // use axios secure with react query
  const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
    queryKey: ["isInstructor", currentUser?.email],
    enabled: !loading,
    queryFn: checkInstructor,
  });
  return [isInstructor, isInstructorLoading];
};
export default useInstructor;
