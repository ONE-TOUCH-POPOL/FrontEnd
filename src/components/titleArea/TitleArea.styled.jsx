import styled from "styled-components";

const TitleAreaLayout = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: space-between;
  align-items: center;
`;

const TitleStyle = styled.div`
  width: 50%;
  font-size: 33px;
  font-weight: bold;
`;

const ButtonList = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  padding: 15px;
`;
export { TitleAreaLayout, TitleStyle, ButtonList };
