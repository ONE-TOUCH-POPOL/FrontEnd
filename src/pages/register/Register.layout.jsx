import styled from "styled-components";
const Wrapper = styled.form`
  & + & {
    margin-top: 1rem;
  }
`;

const Label = styled.span`
  font-size: 1rem;
  margin-bottom: 0.25rem;
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid;
  outline: none;
  border-radius: 0px;
  line-height: 2.5rem;
  font-size: 1.2rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;

const RegisterLayout = ({ label, ...props }) => (
  <Wrapper>
    <Label>{label}</Label>
    <Input {...props} />
  </Wrapper>
);
export default RegisterLayout;
