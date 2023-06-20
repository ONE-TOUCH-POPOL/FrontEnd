import React from "react";
import TabMenu from "./TabMenu";
const TabMenuComponent = ({ handleOpenSidebar, currentTab, clickTab }) => {
  return <TabMenu handleOpenSidebar={handleOpenSidebar} currentTab={currentTab} clickTab={clickTab} />;
};

export default TabMenuComponent;
