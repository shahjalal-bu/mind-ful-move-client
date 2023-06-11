import useAxios from "../hooks/useAxios";
import Axios from "../utils/Axios";

const useApi = () => {
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
    const response = await Axios.get("/users");
    console.log(response.data);
    return response.data;
  };

  return { uploadImg, addClass, addUser, getAllUser };
};

export default useApi;
