import React from "react";
import { OpenSidebarLayout, OpenSidebarCalendarLayout, OpenSidebarCategoryLayout } from "./OpenSidebar.styled";
import CalendarComponent from "../../components/calendar";
import TabMenuComponent from "../../components/tabMenu";
const OpenSidebar = ({ handleOpenSidebar }) => {
  return (
    <div>
      <OpenSidebarLayout>
        <button onClick={handleOpenSidebar} style={{ background: "white", paddingLeft: "80%" }}>
          <img src="/img/double_arrow_left.png" style={{ background: "white", width: "20px", cursor: "pointer" }} alt="closeArrow" />
        </button>
        <TabMenuComponent></TabMenuComponent>
        {/* <OpenSidebarCategoryLayout>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </OpenSidebarCategoryLayout> */}
        <OpenSidebarCalendarLayout>
          <CalendarComponent />
        </OpenSidebarCalendarLayout>
      </OpenSidebarLayout>
    </div>
  );
};

export default OpenSidebar;
