/* eslint-disable */
import React, { useState } from "react";
import OpenSidebar from "../../components/openSidebar/OpenSidebar";
import CloseSidebar from "../../components/closeSidebar/CloseSidebar";
import { StudyRecordLayout, ContentLayout, TextAreaButton } from "./StudyRecord.Layout";
import TextArea from "../../components/textArea/TextArea";
import TitleArea from "../../components/titleArea/TitleArea";
const StudyRecord = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleOpenSidebar = () => {
    setSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <StudyRecordLayout>
      {sidebarOpen ? (
        <CloseSidebar handleCloseSidebar={handleCloseSidebar}></CloseSidebar>
      ) : (
        <OpenSidebar handleOpenSidebar={handleOpenSidebar}></OpenSidebar>
      )}
      <ContentLayout>
        <TitleArea>
          <TextAreaButton>
            <img src="/img/double_arrow_left.png" style={{ background: "black", width: "20px", cursor: "pointer" }} alt="closeArrow" />
          </TextAreaButton>
        </TitleArea>
        <TextArea></TextArea>
      </ContentLayout>
    </StudyRecordLayout>
  );
};

export default StudyRecord;
