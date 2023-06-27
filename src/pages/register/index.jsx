// import React, { useState } from "react";
// import { Form } from "./Register.layout";
// import Input from "../../components/input/Input";
// import Button from "../../components/button/Button";
import Register from "./Register";
const RegisterPage = ({ onSubmit, checkDupEmail }) => {
  return (
    <div>
      <Register checkDupEmail={checkDupEmail} onSubmit={onSubmit}></Register>
    </div>
  );
};

export default RegisterPage;
