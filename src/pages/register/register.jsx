import React from "react";
import Button from "../../components/button/Button";
// import { RegisterLayout } from "./Register.layout";

const Register = ({ onSubmit }) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <div>이메일</div>
          <input type="text" name="email" />
        </div>
        <div>
          <div>비밀번호</div>
          <input type="password" name="password" />
        </div>
        <div>
          <div>비밀번호 확인</div>
          <input type="password" name="confirmPassword" />
        </div>
        <div style={{ width: "100px" }}>
          <Button backgroundColor="#dd869c" type="submit">
            회원 가입
          </Button>
        </div>
      </form>
    </>
  );
};

export default Register;
