import React, { useEffect, useState } from "react";
import { SubTitleAreaLayout, LeftSubTitleAreaLayout, RightSubTitleAreaLayout, ContentStyle, DateStyle } from "./SubTitleArea.styled";
import useSelectDayStore from "../../store/selectDay";
import useSelectRecordStore from "../../store/selectRecord";

const SubTitleArea = () => {
  const selectDay = useSelectDayStore((state) => state.selectDay);
  const selectRecord = useSelectRecordStore((state) => state.selectRecord);
  const [record, setRecord] = useState(selectRecord);

  useEffect(() => {
    updateRecord(selectRecord);

    console.log("change select record");
    console.log(selectRecord);
    console.log("record?.mainCodeName" + record?.mainCodeName);
  }, [selectRecord]);

  const updateRecord = (r) => {
    setRecord(r);
  };
  return (
    <>
      <SubTitleAreaLayout>
        <LeftSubTitleAreaLayout>
          <ContentStyle>대분류 : {record?.mainCategory || "OO"} </ContentStyle>
          <ContentStyle>소분류 : {record?.subCategory || "XX"}</ContentStyle>
        </LeftSubTitleAreaLayout>
        <RightSubTitleAreaLayout>
          <DateStyle style={{ margin: "auto" }}>{selectDay.format("YYYY-MM-DD")}</DateStyle>
        </RightSubTitleAreaLayout>
      </SubTitleAreaLayout>
    </>
  );
};

export default SubTitleArea;
