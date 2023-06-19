/* eslint-disable */
import React, { useState } from "react";

import useStore from "../../store/modal";
import registerPostAPI from "../../api/registerPost";

import { Form, DupEmailMessage, NoDupEmailMessage } from "./Register.layout";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

const Register = () => {
  const [email, setEmail] = useState("");
  const modal = useStore();
  const [isEmailDuplicate, setIsEmailDuplicate] = useState(0);

  const openSuccessModal = () => {
    modal.set_modal();
    modal.set_modal_size("26%", "26%");
    modal.set_modal_text("회원가입 성공!! ");
  };

  const checkDupEmail = async (email) => {
    const success = await registerPostAPI.checkDupEmailPost(email);
    if (success) {
      setIsEmailDuplicate(1);
    } else setIsEmailDuplicate(2);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("click");

    const inputEmail = e.target.email.value;
    const inputPassword = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    console.log(e.target.confirmPassword.value);

    const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*\d).{6,}$/;

    const isValidEmail = EMAIL_REGEX.test(inputEmail);
    const isValidPassword = PASSWORD_REGEX.test(inputPassword);
    const isPasswordConfirm = inputPassword == confirmPassword ? true : false;

    console.log(isPasswordConfirm);
    if (!isValidEmail) alert("이메일 제대로 써라!");
    if (!isValidPassword) alert("패스워드 제대로 써라! ");
    if (!isPasswordConfirm) alert("다른 패스워드 입력됨");
    if (isValidEmail && isValidPassword && isPasswordConfirm) {
      const success = await registerPostAPI.signUpPost(e);
      if (success) openSuccessModal();
    }
  };

  return (
    <>
      <Form onSubmit={onSubmit}>
        <h2>회원 가입</h2>
        <br />
        <Input
          type="text"
          name="email"
          placeholder="이메일 입력"
          onChange={(e) => setEmail(e.target.value)}
          onBlur={async () => await checkDupEmail(email)}
        />
        {isEmailDuplicate == 2 && <DupEmailMessage>✖ 중복된 이메일이 존재합니다.</DupEmailMessage>}
        {isEmailDuplicate == 1 && <NoDupEmailMessage> ✔ 사용 가능한 이메일입니다. </NoDupEmailMessage>}
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
