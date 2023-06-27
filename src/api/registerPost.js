import api from "./api";

const signUpPost = async (e) => {
  const inputEmail = e.target.email.value;
  const inputPassword = e.target.password.value;

  const resp = await api.post("/signup", {
    email: inputEmail,
    password: inputPassword,
  });
  return resp.data.success;
};

const checkDupEmailPost = async (email) => {
  console.log("button click");
  console.log(email);
  const resp = await api.post(
    "/signup/checkDuplicateEmail",
    {
      email: email,
    },
    { withCredentials: true }
  );
  return resp.data.success;
};

const registerPostAPI = { checkDupEmailPost, signUpPost };
export default registerPostAPI;
