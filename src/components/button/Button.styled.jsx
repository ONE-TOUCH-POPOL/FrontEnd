import styled from "styled-components";

const StyledButton = styled.button`
  cursor: pointer;
  border-radius: 5px;
  height: 45px;
  width: ${(props) => props.width || "100%"};
  background-color: ${(props) => props.backgroundColor || "#abc8ff"};
  color: white;
`;

export { StyledButton };
