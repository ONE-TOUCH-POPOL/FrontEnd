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

const reissuePost = async (accessToken) => {
  // const accessToken = resp.headers.get("authorization").split(" ")[1];
  // console.log(accessToken);
  // auth.setTokens(accessToken);
  const resp = await api.post(
    "/reissue",
    {},
    {
      withCredentials: true,
      headers: {
        Authorization: "Bearer " + accessToken,
        "Content-Type": "application/json",
      },
    }
  );
  return resp.data.success;
};
const loginPostAPI = { loginPost, reissuePost };
export default loginPostAPI;
