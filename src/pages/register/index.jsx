/* eslint-disable */
import React from "react";
import Register from "./Register";

const RegisterPage = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    console.log(e.target.confirmPassword.value);

    const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*\d).{6,}$/;

    const isValidEmail = EMAIL_REGEX.test(email);
    const isValidPassword = PASSWORD_REGEX.test(password);
    const isPasswordConfirm = password == confirmPassword ? true : false;

    console.log(isPasswordConfirm);
    if (!isValidEmail) alert("이메일 제대로 써라!");
    if (!isValidPassword) alert("패스워드 제대로 써라! ");
    if (!isPasswordConfirm) alert("다른 패스워드 입력됨");
    if (isValidEmail && isValidPassword && isPasswordConfirm) {
      alert("제대로 했습니다");
      return;
    }
  };

  return <Register onSubmit={onSubmit}></Register>;
};

export default RegisterPage;
