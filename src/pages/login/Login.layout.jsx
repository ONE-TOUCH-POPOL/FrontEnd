import styled from "styled-components";

const Form = styled.div`
  margin: 100px auto;
  width: 420px;
  padding: 50px;
  border: 2px solid #e7e7e7;
  border-radius: 5px;
`;

const Input = styled.input`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 45px;
  border-radius: 5px;
  margin: 0 0 8px;
  padding: 5px 39px 5px 11px;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;
`;

export { Input, Form };
