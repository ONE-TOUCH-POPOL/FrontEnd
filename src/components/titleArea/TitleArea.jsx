import React from "react";
import { TitleAreaLayout, TitleStyle, ContentStyle, ButtonList } from "./TitleArea.styled";
import useSelectDayStore from "../../store/selectDay";
import Button from "../button";

const TitleArea = () => {
  const selectDay = useSelectDayStore((state) => state.selectDay);

  return (
    <>
      <TitleAreaLayout>
        <TitleStyle>제목이 길어지면 늘어날까</TitleStyle>
        <ContentStyle style={{ margin: "auto" }}>{selectDay.format("YYYY-MM-DD")}</ContentStyle>
        <ButtonList>
          <Button width="24%">정리글 생성</Button>
          <Button width="24%">카테고리</Button>
          <Button width="24%">코드 포맷팅</Button>
          <Button width="24%" backgroundColor="#FFCCEF">
            질문 생성
          </Button>
        </ButtonList>
      </TitleAreaLayout>
    </>
  );
};

export default TitleArea;
