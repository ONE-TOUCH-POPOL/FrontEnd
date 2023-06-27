import React from "react";
import useStore from "../../store/modal";
import loginPostAPI from "../../api/loginPost";
import { Form } from "./Login.layout";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import useLoginStore from "../../store/login";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const modal = useStore();
  const loginState = useLoginStore((state) => state.login);
  const navigate = useNavigate();

  const changeLoginState = () => {
    loginState();
  };
  const openSuccessModal = () => {
    modal.set_modal();
    modal.set_modal_size("26%", "26%");
    modal.set_modal_text("로그인 성공!! ");
  };
  const openFailModal = () => {
    modal.set_modal();
    modal.set_modal_size("26%", "30%");
    modal.set_modal_text("이메일/비밀번호 다시 확인해주세요 ");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("click");

    const loginData = await loginPostAPI.loginPost(e);
    if (loginData.data.success) {
      console.log(loginData.data.response);

      const accessToken = loginData.data.response.accessToken;
      const refreshToken = loginData.data.response.refreshToken;
      localStorage.setItem("refresh-token", refreshToken);
      localStorage.setItem("access-token", accessToken);

      changeLoginState();
      openSuccessModal();

      navigate("/");
    } else if (loginData.data.apiError && loginData.data.apiError.status === 1001) openFailModal();
  };

  return (
    <>
      <Form onSubmit={onSubmit}>
        <h2>로그인</h2>
        <br />

        <Input type="text" name="email" placeholder="이메일" />
        <Input type="password" name="password" placeholder="비밀번호" />
        <div style={{ width: "100%", marginTop: "10px" }}>
          <Button type="submit">로그인</Button>
        </div>
      </Form>
    </>
  );
};

export default Login;
