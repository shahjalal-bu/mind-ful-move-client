import { useEffect } from "react";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
});

const useAxios = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("access-token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          await logout();
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  }, [logout, navigate]);

  return [axiosSecure];
};

export default useAxios;
