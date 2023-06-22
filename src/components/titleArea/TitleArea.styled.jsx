import styled from "styled-components";

const TitleAreaLayout = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  /* justify-content: center; */
  align-items: center;
`;

const TitleStyle = styled.div`
  font-size: 25px;
  font-weight: bold;
  padding-left: 20px;
`;

const ContentStyle = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

const ButtonList = styled.div`
  display: flex;
  justify-content: space-between;
  width: 35%;
`;
export { TitleAreaLayout, TitleStyle, ContentStyle, ButtonList };
