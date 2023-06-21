import React from "react";
import { TitleAreaLayout, ContentStyle } from "./TitleArea.styled";
import useSelectDayStore from "../../store/selectDay";
// import Button from "../button";

const TitleArea = () => {
  const selectDay = useSelectDayStore((state) => state.selectDay);

  return (
    <>
      <TitleAreaLayout>
        <ContentStyle>제 목</ContentStyle>
        <ContentStyle>{selectDay.format("YYYY-MM-DD")}</ContentStyle>
        {/* <ButtonList>
          <Button>정리글 생성</Button>
          <Button>카테고리</Button>
          <Button>코드 포맷팅</Button>
          <Button>질문 생성</Button>
        </ButtonList> */}
      </TitleAreaLayout>
    </>
  );
};

export default TitleArea;
