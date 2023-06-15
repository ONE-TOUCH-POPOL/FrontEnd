import styled from "styled-components";

const SidebarLayout = styled.div`
  position: fixed;
  width: 200px;
  height: 100%;
  border-right: 2px solid #abc8ff;
  /* float: left; */

  left: 0;
  padding: 20px 0px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SidebarCategoryLayout = styled.div`
  flex: 1;
  display: flex;
  border-bottom: 1px solid #abc8ff;
`;

const SidebarCalendarLayout = styled.div`
  display: flex;
  width: 100%;
  height: 0;
  padding-bottom: 120%;
  /* height: 30%; */
  margin-top: auto;
  /* margin-bottom: 12px; */
`;

// const ContentLayout = styled.div`
//   width: 80%;
//   height: 100%;
//   background-color: blue;
//   float: left;
// `;

export { SidebarLayout, SidebarCalendarLayout, SidebarCategoryLayout };
