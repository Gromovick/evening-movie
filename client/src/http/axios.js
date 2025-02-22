import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:7000/api",
  withCredentials: true,
});

const API_URL = "http://localhost:7000/api";


http.interceptors.request.use(
  (config) => config,
  async (error) => {
    const originalReq = error.config;

    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalReq._isRetry = true;
      try {
        const response = await axios.get(`${API_URL}/refresh`, {
          withCredentials: true,
        });
        return http.request(originalReq);
      } catch (error) {
        console.log(error.message);
      }
    }
    throw error;
  }
);

export default http;
