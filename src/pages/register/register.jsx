import React, { useState } from "react";

import useStore from "../../store/modal";
import registerPostAPI from "../../api/registerPost";

import { Form, WarnMessage, GoodMessage } from "./Register.layout";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

const Register = () => {
  const modal = useStore();
  const [email, setEmail] = useState("");
  const [isEmailDuplicate, setIsEmailDuplicate] = useState(0);

  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(true);

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
    setIsEmailDuplicate(0);
    const inputEmail = e.target.email.value;
    const inputPassword = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    console.log(e.target.confirmPassword.value);

    const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*\d).{6,}$/;
    if (!EMAIL_REGEX.test(inputEmail)) setIsValidEmail(false);
    else setIsValidEmail(true);
    if (!PASSWORD_REGEX.test(inputPassword)) setIsValidPassword(false);
    else setIsValidPassword(true);
    if (inputPassword !== confirmPassword) setIsPasswordConfirm(false);
    else setIsPasswordConfirm(true);

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
        {isEmailDuplicate === 2 && <WarnMessage>✖ 중복된 이메일이 존재합니다.</WarnMessage>}
        {isEmailDuplicate === 1 && <GoodMessage> ✔ 사용 가능한 이메일입니다. </GoodMessage>}
        {!isValidEmail && <WarnMessage>✖ 유효하지 않는 이메일입니다. </WarnMessage>}

        <Input type="password" name="password" placeholder="비밀번호 입력 (6자 이상)" />
        {!isValidPassword && <WarnMessage>✖ 유효하지 않은 비밀번호입니다.(소문자+숫자 6자 이상)</WarnMessage>}

        <Input type="password" name="confirmPassword" placeholder="비밀번호 확인" />
        {!isPasswordConfirm && <WarnMessage>✖ 비밀번호가 일치하지 않습니다.</WarnMessage>}

        <div style={{ width: "100%", marginTop: "10px" }}>
          <Button type="submit">회원 가입</Button>
        </div>
      </Form>
    </>
  );
};

export default Register;
