import React, { useState } from "react";
import { StyledButton, StyledDropDown } from "./Dropdown.styled";
const Dropdown = ({ name, children, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    if (props.type === "record") props.onClick();
  };
  // const isleaf = !React.Children.count(children);
  //{isleaf ? "" : isOpen ? "" : ""}
  return (
    <StyledDropDown name={name} {...props}>
      <StyledButton onClick={handleClick}>{name}</StyledButton>
      {isOpen && <div style={{ marginLeft: "10px" }}>{children}</div>}
    </StyledDropDown>
  );
};
export default Dropdown;
