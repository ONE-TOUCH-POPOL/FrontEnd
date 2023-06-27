import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL + "/api/v1",
  // baseURL: "http://localhost:8080/api/v1",
});
axios.defaults.withCredentials = true; // withCredentials 전역 설정
api.interceptors.response.use(
  // response interceptor
  (response) => {
    return response;
  },
  async (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default api;
