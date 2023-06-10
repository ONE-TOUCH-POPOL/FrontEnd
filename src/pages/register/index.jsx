/* eslint-disable */
import React from "react";
import Register from "./register";

const RegisterPage = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log(e.target.email.value);
    const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*\d).{6,}$/;
    const isValidEmail = EMAIL_REGEX.test(email);
    if (isValidEmail) {
      alert("제대로 했숩니다.");
      return;
    }
    alert("이메일 제대로 써라!");
  };

  return <Register onSubmit={onSubmit}></Register>;
};

export default RegisterPage;
