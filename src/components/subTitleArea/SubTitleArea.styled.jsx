import styled from "styled-components";

const SubTitleAreaLayout = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
  border-top: 1px solid #e0e0e0;
  padding-left: 20px;
`;

const LeftSubTitleAreaLayout = styled.div`
  display: flex;
  width: 50%;
  height: 50px;
  align-items: center;
`;

const RightSubTitleAreaLayout = styled.div`
  display: flex;
  width: 50%;
  height: 50px;
  align-items: center;
`;

const DateStyle = styled.div`
  width: 50%;
  font-size: 23px;
  font-weight: bold;
  text-align: center;
`;

const ContentStyle = styled.div`
  width: 50%;
  font-size: 23px;
  font-weight: bold;
  text-align: left;
`;

export { SubTitleAreaLayout, LeftSubTitleAreaLayout, RightSubTitleAreaLayout, ContentStyle, DateStyle };
