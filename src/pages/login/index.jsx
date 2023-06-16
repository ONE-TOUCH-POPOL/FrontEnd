/* eslint-disable */
import React from "react";
import Login from "./Login";
import axios from "axios";
import useStore from "../../store/modal";

const LoginPage = () => {
  const modal = useStore();
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

    axios
      .post("http://221.164.64.185:8080/api/v1/login", {
        email: inputEmail,
        password: inputPassword,
      })
      .then((resp) => {
        console.log(resp.data);
        if (resp.data.success) openSuccessModal();
        // status error code 별로 수정할 것
        else openFailModal();
      });

    // return;
  };
  return <Login onSubmit={onSubmit}></Login>;
};

export default LoginPage;
