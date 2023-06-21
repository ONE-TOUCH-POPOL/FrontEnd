/* eslint-disable */
import React, { useState } from "react";
import OpenSidebar from "../../components/openSidebar/OpenSidebar";
import CloseSidebar from "../../components/closeSidebar/CloseSidebar";
import { StudyRecordLayout, ContentLayout } from "./StudyRecord.Layout";
import TextArea from "../../components/textArea/TextArea";

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
        <TextArea></TextArea>
      </ContentLayout>
    </StudyRecordLayout>
  );

  // return (
  //   <StudyRecordLayout>
  //     {sidebarOpen ? (
  //       <>
  //         <CloseSidebar handleCloseSidebar={handleCloseSidebar}></CloseSidebar>
  //       </>
  //     ) : (
  //       <>
  //         <OpenSidebar handleOpenSidebar={handleOpenSidebar}></OpenSidebar>
  //         <ContentLayout>
  //           <TextArea></TextArea>
  //         </ContentLayout>
  //       </>
  //     )}
  //   </StudyRecordLayout>
  // );
};

export default StudyRecord;
