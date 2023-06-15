import React, { useState } from "react";
import { SidebarLayout, SidebarCalendarLayout, SidebarCategoryLayout } from "./SideBar.styled";
import CalendarComponent from "../../components/calendar";
const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div>
      <button onClick={openSidebar}>Open Sidebar</button>

      {sidebarOpen && (
        <SidebarLayout>
          <button onClick={closeSidebar}>Close Sidebar</button>
          <SidebarCategoryLayout>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </SidebarCategoryLayout>
          <SidebarCalendarLayout>
            <CalendarComponent />
          </SidebarCalendarLayout>
        </SidebarLayout>
      )}
    </div>
  );
};

export default Sidebar;
