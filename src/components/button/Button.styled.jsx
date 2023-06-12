import styled from "styled-components";

const StyledButton = styled.button`
  cursor: pointer;
  border-radius: 5px;
  height: 45px;
  width: 100%;
  background-color: ${(props) => props.backgroundColor || "#92a8d1"};
  color: white;
`;

export { StyledButton };
