import React from "react";
import { Form } from "./Login.layout";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

const Login = ({ onSubmit }) => {
  return (
    <>
      <Form onSumit={onSubmit}>
        <h2>로그인</h2>
        <br />

        <Input type="text" name="email" placeholder="이메일" />
        <Input type="password" name="password" placeholder="비밀번호" />
        <div style={{ width: "100%", marginTop: "10px" }}>
          <Button type="submit">로그인</Button>
        </div>
      </Form>
    </>
  );
};

export default Login;
