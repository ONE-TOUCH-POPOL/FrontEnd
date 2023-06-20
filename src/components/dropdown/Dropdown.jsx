import React, { useState } from "react";
import { StyledButton, StyledDropDown } from "./Dropdown.styled";
const Dropdown = ({ name, children, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const isleaf = !React.Children.count(children);
  //{isleaf ? "" : isOpen ? "" : ""}
  return (
    <StyledDropDown name={name} {...props}>
      <StyledButton onClick={() => setIsOpen(!isOpen)}>{name}</StyledButton>
      {isOpen && <div style={{ marginLeft: "10px" }}>{children}</div>}
    </StyledDropDown>
  );
};
export default Dropdown;
