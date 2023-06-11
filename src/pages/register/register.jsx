import React from "react";
import Button from "../../components/button/Button";
import { Input, Form } from "./Register.layout";

const Register = ({ onSubmit }) => {
  return (
    <>
      <Form onSubmit={onSubmit}>
        <h2>회원 가입</h2>
        <br />
        <Input type="text" name="email" placeholder="이메일 입력" />
        <Input type="password" name="password" placeholder="비밀번호 입력 (소문자, 숫자 포함 6자 이상)" />
        <Input type="password" name="confirmPassword" placeholder="비밀번호 확인" />
        {/* <div style={{ width: "100%", marginTop: "10px" }}> */}
        <Button type="submit">회원 가입</Button>
        {/* </div> */}
      </Form>
    </>
  );
};

export default Register;
