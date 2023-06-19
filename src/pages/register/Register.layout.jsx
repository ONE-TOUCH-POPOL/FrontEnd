import styled from "styled-components";

const Form = styled.form`
  margin: 100px auto;
  width: 420px;
  padding: 50px;
  border: 2px solid #e7e7e7;
  border-radius: 5px;
`;

const WarnMessage = styled.p`
  color: #ff4d7c;
  font-size: 11px;
  margin-top: 3px;
  margin-left: 5px;
  text-align: left;
`;
const GoodMessage = styled.p`
  color: #63c92c;
  font-size: 11px;
  margin-top: 3px;
  margin-left: 5px;
  text-align: left;
`;

export { Form, WarnMessage, GoodMessage };
