import React from "react";
import { SubTitleAreaLayout, LeftSubTitleAreaLayout, RightSubTitleAreaLayout, ContentStyle, DateStyle } from "./SubTitleArea.styled";
import useSelectDayStore from "../../store/selectDay";

const SubTitleArea = ({ record }) => {
  const selectDay = useSelectDayStore((state) => state.selectDay);
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
