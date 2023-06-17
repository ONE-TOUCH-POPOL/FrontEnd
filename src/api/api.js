import axios from "axios";
import useAuthStore from "../store/useAuth";

const api = axios.create({
  baseURL: "http://221.164.64.185:8080",
});

api.interceptors.response.use(
  // response interceptor
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    const prevApiErrorStatus = error.response.data.apiError.status;

    // Access Token이 만료된 경우 (status 1003)
    // token 재발급
    if (prevApiErrorStatus === 1003 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const accessToken = useAuthStore.getState().accessToken;
        const refreshToken = useAuthStore.getState().refreshToken;

        const response = await api.post("/api/v1/reissue", null, {
          headers: {
            Authorization: accessToken,
            Cookie: `refresh-token=${refreshToken}`,
          },
        });

        if (response.data.success) {
          // console.log("api");
          // console.log(response.data);
          useAuthStore.setState({
            accessToken: response.headers["access-token"],
            refreshToken: response.headers["refresh-token"],
          });
          return api(originalRequest);
        }
      } catch (error) {
        console.error("Error reissuing tokens:", error);
        return Promise.reject(error);
      }
    }

    // 그 외의 경우 - 오류를 그대로 반환
    return Promise.reject(error);
  }
);

export default api;
