/* eslint-disable */
import React, { useState } from "react";
import Login from "./Login";
// import axios from "axios";
import api from "../../api/api.js";
import useStore from "../../store/modal";
import useAuthStore from "../../store/useAuth";

const LoginPage = () => {
  const modal = useStore();
  const auth = useAuthStore();

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

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("click");

    const inputEmail = e.target.email.value;
    const inputPassword = e.target.password.value;

    api
      .post("/api/v1/login", {
        email: inputEmail,
        password: inputPassword,
      })
      .then((resp) => {
        console.log(resp.data);
        if (resp.data.success) {
          console.log("success");
          console.log(resp.data.response);
          const { accessToken, refreshToken } = resp.data.response;

          // if (accessToken && refreshToken) {
          auth.setTokens(accessToken, refreshToken);

          console.log(accessToken);
          console.log(refreshToken);

          openSuccessModal();
          // } else openFailModal();
        } else if (resp.data.apiError && resp.data.apiError.status === 1001) openFailModal();
      })
      .catch((error) => {
        console.log(error);
      });

    // return;
  };
  return <Login onSubmit={onSubmit}></Login>;
};

export default LoginPage;
