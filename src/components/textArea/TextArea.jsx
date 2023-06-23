import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import { TextAreaLayout, MdEditorBottomLayout } from "./TextArea.styled";
import Button from "../button/Button";

const TextArea = ({ toggleState }) => {
  const [text, setText] = useState("");
  // const [view, setView] = useState("live");
  const onChangeMD = (value, event) => {
    console.log(value, event);
    setText(value);
  };

  return (
    <TextAreaLayout>
      <MDEditor
        name="contents"
        value={text}
        onChange={(value, event) => {
          onChangeMD(value, event);
        }}
        preview={toggleState ? "preview" : "live"}
        height="100%"
        data-color-mode="light"
      />

      <MdEditorBottomLayout>
        <Button backgroundColor="white" color="black" width="20%">
          나가기
        </Button>
        <Button hoverBackgroundColor="#518DFF" width="20%">
          임시저장
        </Button>
        <Button hoverBackgroundColor="#518DFF" width="20%">
          저장
        </Button>
        <Button backgroundColor="#FFCCEF" width="20%">
          삭제
        </Button>
      </MdEditorBottomLayout>
    </TextAreaLayout>
  );
};

export default TextArea;
