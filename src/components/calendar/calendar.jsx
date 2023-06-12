/* eslint-disable */
import React from "react";
import { StyledButton } from "./Button.styled";

const Button = ({ children, click, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
