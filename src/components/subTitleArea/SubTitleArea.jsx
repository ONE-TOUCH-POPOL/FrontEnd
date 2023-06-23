import React from "react";
import { SubTitleAreaLayout, LeftSubTitleAreaLayout, RightSubTitleAreaLayout, ContentStyle, DateStyle } from "./SubTitleArea.styled";
import useSelectDayStore from "../../store/selectDay";

const TitleArea = () => {
  const selectDay = useSelectDayStore((state) => state.selectDay);

  return (
    <>
      <SubTitleAreaLayout>
        <LeftSubTitleAreaLayout>
          <ContentStyle>대분류 : OO</ContentStyle>
          <ContentStyle>소분류 : XX </ContentStyle>
        </LeftSubTitleAreaLayout>
        <RightSubTitleAreaLayout>
          <DateStyle style={{ margin: "auto" }}>{selectDay.format("YYYY-MM-DD")}</DateStyle>
        </RightSubTitleAreaLayout>
      </SubTitleAreaLayout>
    </>
  );
};

export default TitleArea;
