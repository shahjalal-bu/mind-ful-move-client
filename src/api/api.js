import useAxios from "../hooks/useAxios";
import Axios from "../utils/Axios";

const useApi = () => {
  const [axiosSecure] = useAxios();
  const uploadImg = (formData) =>
    fetch(import.meta.env.VITE_PHOTOHOSTAPI, {
      method: "POST",
      body: formData,
    });
  //add class
  const addClass = async (newClass) => {
    const response = await Axios.post("/classes", newClass);
    return response.data;
  };

  //add users
  const addUser = async (newUser) => {
    const response = await Axios.post("/users", newUser);
    return response.data;
  };
  //get all user
  const getAllUser = async () => {
    const response = await axiosSecure.get("/users");
    return response.data;
  };
  //get all user
  const getAllClasses = async () => {
    const response = await Axios.get("/classes");
    return response.data;
  };
  //update user role admin
  const makeAdmin = async (userId) => {
    const response = await axiosSecure.patch(`/users/make-admin/${userId}`);
    return response.data;
  };
  //make instructor
  const makeInstructor = async (userId) => {
    try {
      const response = await Axios.patch(`/users/make-instructor/${userId}`);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  //update user role admin
  const aprrovedClass = async (classId) => {
    const response = await axiosSecure.patch(
      `/classes/approved-class/${classId}`
    );
    return response.data;
  };

  const deniedClass = async (classId) => {
    const response = await axiosSecure.patch(
      `/classes/denied-class/${classId}`
    );
    return response.data;
  };

  const feedbackClass = async ({ id, feedback }) => {
    console.log(id, feedback);
    const response = await axiosSecure.patch(`/classes/feedback-class/${id}`, {
      feedback: feedback,
    });
    return response.data;
  };

  const selectClass = async ({ email, classId }) => {
    const response = await axiosSecure.patch(`/users/select-class/${email}`, {
      classId,
    });
    return response;
  };

  return {
    uploadImg,
    addClass,
    addUser,
    getAllUser,
    makeAdmin,
    makeInstructor,
    getAllClasses,
    aprrovedClass,
    deniedClass,
    feedbackClass,
    selectClass,
  };
};

export default useApi;
