import React, { useState } from "react";
import { OpenSidebarLayout, OpenSidebarCalendarLayout, OpenSidebarListLayout } from "./OpenSidebar.Layout";
import CalendarComponent from "../calendar";
import TabMenuComponent from "../tabMenu";
import CategoryComponent from "../category";

const OpenSidebar = ({ handleOpenSidebar }) => {
  const [currentTab, setCurrentTab] = useState(0);
  const handleTabClick = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <div>
      <OpenSidebarLayout>
        <TabMenuComponent handleOpenSidebar={handleOpenSidebar} currentTab={currentTab} clickTab={handleTabClick}></TabMenuComponent>
        {currentTab === 1 && (
          <OpenSidebarCalendarLayout>
            <CalendarComponent />
          </OpenSidebarCalendarLayout>
        )}
        <OpenSidebarListLayout>{currentTab === 0 && <CategoryComponent />}</OpenSidebarListLayout>
      </OpenSidebarLayout>
    </div>
  );
};

export default OpenSidebar;
