import React, { useState, useEffect } from "react";
import OpenSidebar from "../../components/openSidebar/OpenSidebar";
import CloseSidebar from "../../components/closeSidebar/CloseSidebar";
import { StudyRecordLayout, ContentLayout, ToggleButton } from "./StudyRecord.Layout";
import TextArea from "../../components/textArea/TextArea";
import TitleArea from "../../components/titleArea/TitleArea";
import SubTitleArea from "../../components/subTitleArea";
import studyRecordAllGet from "../../api/studyRecordGet";
import useLoginStore from "../../store/login";

const StudyRecord = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [toggleState, setToggleState] = useState(false);
  const [categories, setCategories] = useState([]);
  const isLogin = useLoginStore((state) => state.isLogin);

  useEffect(() => {
    const fetchData = async () => {
      const data = await studyRecordAllGet();
      setCategories(data);
    };
    if (isLogin) {
      fetchData();
    }
  }, [isLogin]);

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
        <OpenSidebar handleOpenSidebar={handleOpenSidebar} categories={categories}></OpenSidebar>
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
