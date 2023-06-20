import React, { useState } from "react";
import { OpenSidebarLayout, OpenSidebarCalendarLayout } from "./OpenSidebar.Layout";
import CalendarComponent from "../../components/calendar";
import TabMenuComponent from "../../components/tabMenu";

const OpenSidebar = ({ handleOpenSidebar }) => {
  const [currentTab, setCurrentTab] = useState(0);
  const handleTabClick = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <div>
      <OpenSidebarLayout>
        <TabMenuComponent handleOpenSidebar={handleOpenSidebar} currentTab={currentTab} clickTab={handleTabClick}></TabMenuComponent>
        <OpenSidebarCalendarLayout>{currentTab === 1 && <CalendarComponent />}</OpenSidebarCalendarLayout>
      </OpenSidebarLayout>
    </div>
  );
};

export default OpenSidebar;
