
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

  //update user role admin

  const makeAdmin = async (userId) => {
    const response = await axiosSecure.patch(`/users/make-admin/${userId}`);
    return response.data;
  };
  // //check user admin
  // const checkAdmin = async () => {
  //   const response = await axiosSecure.get(`/users/check-admin/`);
  //   return response.data;
  // };
  // //check user admin
  // const checkInstructor = async (email) => {
  //   const response = await axiosSecure.get(`/users/check-instructor/`);
  //   return response.data;
  // };
  //update user role instructor

  const makeInstructor = async (userId) => {
    try {
      const response = await Axios.patch(`/users/make-instructor/${userId}`);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    uploadImg,
    addClass,
    addUser,
    getAllUser,
    makeAdmin,
    makeInstructor,
  
  };
};

export default useApi;
