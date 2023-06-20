import React from "react";
import Dropdown from "./Dropdown";
const DropdownComponent = ({ name, children, ...props }) => {
  return <Dropdown name={name} children={children} {...props}></Dropdown>;
};

export default DropdownComponent;
