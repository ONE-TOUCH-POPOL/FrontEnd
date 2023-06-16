import React, { useState } from "react";
import { Form } from "./Register.layout";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

const Register = ({ onSubmit, checkDupEmail }) => {
  const [email, setEmail] = useState("");

  return (
    <>
      <Form onSubmit={onSubmit}>
        <h2>회원 가입</h2>
        <br />
        <div>
          <div style={{ width: "79%", float: "left", marginRight: "1%" }}>
            <Input type="text" name="email" placeholder="이메일 입력" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div style={{ width: "20%", float: "left", marginTop: "11.25px" }}>
            <Button style={{ fontSize: "50%", height: "22.5px" }} type="button" onClick={() => checkDupEmail(email)}>
              중복 체크
            </Button>
          </div>
        </div>

        <Input type="password" name="password" placeholder="비밀번호 입력 (6자 이상)" />
        <Input type="password" name="confirmPassword" placeholder="비밀번호 확인" />
        <div style={{ width: "100%", marginTop: "10px" }}>
          <Button type="submit">회원 가입</Button>
        </div>
      </Form>
    </>
  );
};

export default Register;
