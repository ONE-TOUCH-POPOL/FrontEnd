import api from "./api";
const loginPost = async (e) => {
  const inputEmail = e.target.email.value;
  const inputPassword = e.target.password.value;

  const resp = await api.post(
    "/login",
    {
      email: inputEmail,
      password: inputPassword,
    },
    {
      withCredentials: true,
    }
  );
  return resp;
};

const reissuePost = async () => {
  const refreshToken = localStorage.getItem("refresh-token");
  const accessToken = localStorage.getItem("access-token");
  try {
    const resp = await api.post(
      "/reissue",
      { "refresh-token": refreshToken },
      {
        headers: {
          Authorization: accessToken,
          // "Content-Type": "application/json",
        },
      }
    );
    return resp;
  } catch (error) {
    console.error("An error occurred:", error);
    return null;
  }
};
const loginPostAPI = { loginPost, reissuePost };
export default loginPostAPI;
