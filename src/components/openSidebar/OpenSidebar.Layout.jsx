import styled from "styled-components";

const OpenSidebarLayout = styled.div`
  width: 250px;
  height: 100%;
  border-right: 2px solid #abc8ff;
  float: left;

  left: 0;
  display: flex;
  flex-direction: column;
`;
const OpenSidebarListLayout = styled.div`
  display: flex;
  /* flex: 1; */
  margin-top: auto;
  height: 100%;
  margin-bottom: 10px;
  /* border-bottom: 1px solid #abc8ff; */
`;
const OpenSidebarCalendarLayout = styled.div`
  display: flex;
  /* height: 200px; */
  /* padding-bottom: 15px; */
  /* padding-bottom: 100%; */
  margin-bottom: auto;
  height: auto;
`;

export { OpenSidebarLayout, OpenSidebarCalendarLayout, OpenSidebarListLayout };
