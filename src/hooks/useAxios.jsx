import { useEffect } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../contexts/AuthContext";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxios = () => {
  // const logout = useAuth();
  // const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("access-token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    // axiosSecure.interceptors.response.use(
    //   (response) => response,
    //   async (error) => {
    //     if (
    //       error.response &&
    //       (error.response.status === 401 || error.response.status === 403)
    //     ) {
    //       await logout();
    //       navigate("/login");
    //     }
    //     return Promise.reject(error);
    //   }
    // );
  }, []);

  return [axiosSecure];
};

export default useAxios;
