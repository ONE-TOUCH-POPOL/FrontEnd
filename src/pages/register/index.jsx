/* eslint-disable */
import React from "react";
import Register from "./Register";
import axios from "axios";
import useStore from "../../store/modal";
const RegisterPage = () => {
  const modal = useStore();
  const openSuccessModal = () => {
    modal.set_modal();
    modal.set_modal_size("26%", "26%");
    modal.set_modal_text("회원가입 성공!! ");
  };

  const openNoDupEmailModal = () => {
    modal.set_modal();
    modal.set_modal_size("26%", "30%");
    modal.set_modal_text("중복된 이메일이 존재하지 않음 써도됨 ㅇㅇ");
  };
  const openDupEmailModal = () => {
    modal.set_modal();
    modal.set_modal_size("26%", "30%");
    modal.set_modal_text("중복된 이메일이 존재합니다.");
  };

  const checkDupEmail = async (email) => {
    console.log("button click");
    console.log(email);
    await axios
      .post("http://221.164.64.185:8080/api/v1/signup/checkDuplicateEmail", {
        email: email,
      })
      .then((resp) => {
        console.log(resp.data);
        if (resp.data.success) openNoDupEmailModal();
        else openDupEmailModal();
      });
  };
  const onSubmit = (e) => {
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
      // alert("제대로 했습니다");

      axios
        .post("http://221.164.64.185:8080/api/v1/signup", {
          email: inputEmail,
          password: inputPassword,
        })
        .then((resp) => {
          console.log(resp.data);
          if (resp.data.success) openSuccessModal();
        });
    }
  };

  return (
    <div>
      <Register checkDupEmail={checkDupEmail} onSubmit={onSubmit}></Register>
    </div>
  );
};

export default RegisterPage;
