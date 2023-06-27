import React from "react";
import { StyledInput } from "./Input.styled";
const Input = ({ type, placeholder, ...props }) => {
  return <StyledInput type={type} placeholder={placeholder} name={props.name} {...props}></StyledInput>;
};

export default Input;
