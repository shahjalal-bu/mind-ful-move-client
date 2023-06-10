import Axios from "../utils/Axios";

export const uploadImg = (formData) =>
  fetch(import.meta.env.VITE_PHOTOHOSTAPI, {
    method: "POST",
    body: formData,
  });

export const addClass = async (newTodo) => {
  const response = await Axios.post("/classes", newTodo);
  return response.data;
};
