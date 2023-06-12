/* eslint-disable */
import React from "react";
import Login from "./Login";
import axios from "axios";

const LoginPage = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("click");

    const inputEmail = e.target.email.value;
    const inputPassword = e.target.password.value;

    axios
      .post("http://localhost:8080/api/v1/login", {
        email: inputEmail,
        password: inputPassword,
      })
      .then((resp) => {
        console.log(resp.data);

        if (resp.data.email === undefined) {
          alert("입력하신 이메일이 없습니다.");
        } else if (resp.data.email === null) {
          alert("입력하신 비밀번호가 일치하지 않음");
        } else if (resp.data.email === inputEmail) {
          sessionStorage.setItem("email", inputEmail);
        }
        document.location.href = "/";
      });

    return;
  };
  return <Login onSubmit={onSubmit}></Login>;
};

export default LoginPage;
