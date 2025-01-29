import axios from "axios";

const api = axios.create({
  baseURL: "https://679a1892747b09cdcccdac6b.mockapi.io",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
