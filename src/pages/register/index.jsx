/* eslint-disable */
import React from "react";

const Register = () => {
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

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name="email" />
        <input type="password" name="password" />
        <button type="submit">회원 가입</button>
      </form>
    </div>
  );
};

export default Register;
