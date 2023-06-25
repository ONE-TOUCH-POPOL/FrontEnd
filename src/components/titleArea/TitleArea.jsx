import React from "react";
import { TitleAreaLayout, TitleStyle, ButtonList } from "./TitleArea.styled";
// import useSelectDayStore from "../../store/selectDay";
import Button from "../button";

const TitleArea = ({ record }) => {
  const propsButtonArr = [
    { fontWeight: "bold", color: "black", fontSize: "13px", width: "17%", text: "정리글 생성" },
    { fontWeight: "bold", color: "black", fontSize: "13px", width: "17%", text: "카테고리" },
    { fontWeight: "bold", color: "black", fontSize: "13px", width: "17%", text: "코드 포맷팅" },
    { fontWeight: "bold", color: "black", fontSize: "13px", width: "17%", backgroundcolor: "#FFCCEF", text: "질문 생성" },
  ];

  return (
    <>
      <TitleAreaLayout>
        <TitleStyle>{record?.title || "제목되나??"}</TitleStyle>
        <ButtonList>
          {propsButtonArr.map((data, index) => {
            return (
              <Button
                key={index}
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
