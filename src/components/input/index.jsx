/* eslint-disable */
import React from "react";
import Input from "./Input";

const InputComponent = ({ type, placeholder, ...props }) => {
  return <Input type={type} placeholder={placeholder} name={props.name} {...props}></Input>;
};

export default InputComponent;
