import React from "react";

const register = ({ onSubmit }) => {
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

export default register;
