import React from "react";
import { TitleAreaLayout, TitleStyle, ButtonList } from "./TitleArea.styled";
// import useSelectDayStore from "../../store/selectDay";
import Button from "../button";

const TitleArea = () => {
  // const selectDay = useSelectDayStore((state) => state.selectDay);

  const propsButtonArr = [
    { fontWeight: "bold", color: "black", fontSize: "13px", width: "17%", text: "정리글 생성" },
    { fontWeight: "bold", color: "black", fontSize: "13px", width: "17%", text: "카테고리" },
    { fontWeight: "bold", color: "black", fontSize: "13px", width: "17%", text: "코드 포맷팅" },
    { fontWeight: "bold", color: "black", fontSize: "13px", width: "17%", backgroundcolor: "#FFCCEF", text: "질문 생성" },
  ];
  return (
    <>
      <TitleAreaLayout>
        <TitleStyle>제목이 길어지면 늘어날까</TitleStyle>
        {/* <ContentStyle style={{ margin: "auto" }}>{selectDay.format("YYYY-MM-DD")}</ContentStyle> */}
        <ButtonList>
          {propsButtonArr.map((data) => {
            return (
              <Button
                fontWeight={data.fontWeight}
                color={data.color}
                fontSize={data.fontSize}
                width={data.width}
                backgroundcolor={data.backgroundcolor}
              >
                {data.text}
              </Button>
            );
          })}
        </ButtonList>
      </TitleAreaLayout>
    </>
  );
};

export default TitleArea;
