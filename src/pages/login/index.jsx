/* eslint-disable */
import React from "react";
import Login from "./Login";

const LoginPage = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("click");

    const email = e.target.email.value;
    const password = e.target.password.value;
    return;
  };
  return <Login onSubmit={onSubmit}></Login>;
};

export default LoginPage;
