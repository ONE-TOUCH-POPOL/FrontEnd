/* eslint-disable */
import React from "react";
import Button from "./Button";

const ButtonComponent = ({ children, click, ...props }) => {
  return (
    <Button click={click} {...props}>
      {children}
    </Button>
  );
};

export default ButtonComponent;
