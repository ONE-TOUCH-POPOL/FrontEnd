/* eslint-disable */
import React, { useState } from "react";
import OpenSidebar from "../../components/openSidebar/OpenSidebar";
import CloseSidebar from "../../components/closeSidebar/CloseSidebar";
import { StudyRecordLayout, ContentLayout, ToggleButton } from "./StudyRecord.Layout";
import TextArea from "../../components/textArea/TextArea";
import TitleArea from "../../components/titleArea/TitleArea";
const StudyRecord = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [toggleState, setToggleState] = useState(false);

  const handleOpenSidebar = () => {
    setSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  const hanldToggleButton = () => {
    setToggleState((prev) => !prev);
  };
  return (
    <StudyRecordLayout>
      {sidebarOpen ? (
        <CloseSidebar handleCloseSidebar={handleCloseSidebar}></CloseSidebar>
      ) : (
        <OpenSidebar handleOpenSidebar={handleOpenSidebar}></OpenSidebar>
      )}
      <ContentLayout>
        <TitleArea></TitleArea>
        <TextArea toggleState={toggleState}></TextArea>
        <ToggleButton onClick={hanldToggleButton}>
          {/* {toggleState ? "ON" : "OFF"} */}
          <div className={`toggle-container ${toggleState ? "toggle--checked" : null}`} />
          <div className={`toggle-circle ${toggleState ? "toggle--checked" : null}`} />
        </ToggleButton>
      </ContentLayout>
    </StudyRecordLayout>
  );
};

export default StudyRecord;
