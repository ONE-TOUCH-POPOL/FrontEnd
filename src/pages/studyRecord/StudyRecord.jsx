/* eslint-disable */
import React, { useState } from "react";
import OpenSidebar from "../../components/openSidebar/OpenSidebar";
import CloseSidebar from "../../components/closeSidebar/CloseSidebar";
import { StudyRecordLayout } from "./StudyRecord.Layout";

const StudyRecord = () => {
  // sidebar test
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleOpenSidebar = () => {
    setSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div>
      {sidebarOpen ? (
        <CloseSidebar handleCloseSidebar={handleCloseSidebar}></CloseSidebar>
      ) : (
        <OpenSidebar handleOpenSidebar={handleOpenSidebar}></OpenSidebar>
      )}
    </div>
  );
};

export default StudyRecord;
