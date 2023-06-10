import React from "react";

const Register = ({ onSubmit }) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" name="email" />
        <input type="password" name="password" />
        <input type="password" name="confirmPassword" />
        <button type="submit">회원 가입</button>
      </form>
    </>
  );
};

export default Register;
