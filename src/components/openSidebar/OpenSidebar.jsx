import React from "react";
import { OpenSidebarLayout, OpenSidebarCalendarLayout } from "./OpenSidebar.styled";
import CalendarComponent from "../../components/calendar";
import TabMenuComponent from "../../components/tabMenu";
const OpenSidebar = ({ handleOpenSidebar }) => {
  return (
    <div>
      <OpenSidebarLayout>
        <TabMenuComponent handleOpenSidebar={handleOpenSidebar}></TabMenuComponent>
        <OpenSidebarCalendarLayout>
          <CalendarComponent />
        </OpenSidebarCalendarLayout>
      </OpenSidebarLayout>
    </div>
  );
};

export default OpenSidebar;
