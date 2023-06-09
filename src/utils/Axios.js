import axios from "axios";

const Axios = axios.create({
  baseURL: "https://edu-toys-hub-server.vercel.app",
  headers: {
    "Content-Type": "application/json",
  },
});


export default Axios;
