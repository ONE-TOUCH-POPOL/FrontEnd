import React, { useState } from "react";
import { OpenSidebarLayout, OpenSidebarCalendarLayout, OpenSidebarListLayout } from "./OpenSidebar.Layout";
import Calendar from "../calendar";
import TabMenu from "../tabMenu";
import Category from "../category";
import RecordPerDay from "../recordPerDay";

const OpenSidebar = ({ handleOpenSidebar, records, selectDay }) => {
  const [currentTab, setCurrentTab] = useState(0);
  const handleTabClick = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <div>
      <OpenSidebarLayout>
        <TabMenu handleOpenSidebar={handleOpenSidebar} currentTab={currentTab} clickTab={handleTabClick}></TabMenu>
        {currentTab === 1 && (
          <OpenSidebarCalendarLayout>
            <Calendar />
            <RecordPerDay records={records} selectDay={selectDay} />
          </OpenSidebarCalendarLayout>
        )}
        <OpenSidebarListLayout>{currentTab === 0 && <Category records={records} />}</OpenSidebarListLayout>
      </OpenSidebarLayout>
    </div>
  );
};

export default OpenSidebar;
