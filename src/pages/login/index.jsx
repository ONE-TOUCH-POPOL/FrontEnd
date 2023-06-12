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
      .post("http://221.164.64.185:8080/api/v1/login", {
        email: inputEmail,
        password: inputPassword,
      })
      .then((resp) => {
        console.log(resp.data);

        // status error code 별로
      });

    // return;
  };
  return <Login onSubmit={onSubmit}></Login>;
};

export default LoginPage;
