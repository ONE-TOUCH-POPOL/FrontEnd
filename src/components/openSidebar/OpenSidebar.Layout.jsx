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
  margin-top: auto;
  height: 100%;
  margin-bottom: 10px;
`;
const OpenSidebarCalendarLayout = styled.div`
  display: flex;
  margin-bottom: auto;
  height: auto;
  flex-direction: column;
`;

export { OpenSidebarLayout, OpenSidebarCalendarLayout, OpenSidebarListLayout };
