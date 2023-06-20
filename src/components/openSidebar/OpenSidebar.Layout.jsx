import styled from "styled-components";

const OpenSidebarLayout = styled.div`
  position: fixed;
  width: 200px;
  height: 100%;
  border-right: 2px solid #abc8ff;
  /* float: left; */

  left: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const OpenSidebarCalendarLayout = styled.div`
  display: flex;
  width: 200px;
  height: 200px;
  padding-bottom: 111%;
  /* height: 30%; */
  margin-top: auto;
  /* margin-bottom: 12px; */
`;

export { OpenSidebarLayout, OpenSidebarCalendarLayout };
