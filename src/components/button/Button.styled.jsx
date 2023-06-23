import styled from "styled-components";

const StyledButton = styled.button`
  cursor: pointer;
  border-radius: 5px;
  height: ${(props) => props.height || "45px"};
  width: ${(props) => props.width || "100%"};
  background-color: ${(props) => props.backgroundcolor || "#abc8ff"};
  color: ${(props) => props.color || "white"};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  &:hover {
    background-color: ${(props) => props.hoverbackgroundcolor || props.backgroundcolor || "#abc8ff"};
  }
`;

export { StyledButton };
