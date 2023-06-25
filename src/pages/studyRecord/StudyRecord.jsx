import React, { useState, useEffect } from "react";
import OpenSidebar from "../../components/openSidebar/OpenSidebar";
import CloseSidebar from "../../components/closeSidebar/CloseSidebar";
import { StudyRecordLayout, ContentLayout, ToggleButton } from "./StudyRecord.Layout";
import TextArea from "../../components/textArea";
import TitleArea from "../../components/titleArea";
import SubTitleArea from "../../components/subTitleArea";
import studyRecordAllGet from "../../api/studyRecordGet";
import useLoginStore from "../../store/login";
import useSelectDayStore from "../../store/selectDay";

const StudyRecord = () => {
  const isLogin = useLoginStore((state) => state.isLogin);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [toggleState, setToggleState] = useState(false);
  const [records, setRecords] = useState([]);
  const selectDay = useSelectDayStore((state) => state.selectDay);
  useEffect(() => {
    const fetchData = async () => {
      const data = await studyRecordAllGet();
      setRecords(data);
      // console.log(setRecords);
    };
    if (isLogin) {
      fetchData();
    }
  }, [isLogin]);
  // console.log(records);

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
        <OpenSidebar handleOpenSidebar={handleOpenSidebar} records={records} selectDay={selectDay}></OpenSidebar>
      )}
      <ContentLayout>
        <TitleArea></TitleArea>
        <SubTitleArea></SubTitleArea>
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
