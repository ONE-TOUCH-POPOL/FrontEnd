import React from "react";
import MDEditor from "@uiw/react-md-editor";
import { TextAreaLayout, MdEditorBottomLayout } from "./TextArea.styled";
import Button from "../button/Button";

const TextArea = ({ toggleState, text, onChangeMD, ...props }) => {
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
        <Button backgroundcolor="white" color="black" width="20%" onClick={props.handleExit}>
          나가기
        </Button>
        <Button hoverbackgroundcolor="#518DFF" width="20%" onClick={props.handleTempStore}>
          임시저장
        </Button>
        <Button hoverbackgroundcolor="#518DFF" width="20%">
          저장
        </Button>
        <Button backgroundcolor="#FFCCEF" width="20%">
          삭제
        </Button>
      </MdEditorBottomLayout>
    </TextAreaLayout>
  );
};

export default TextArea;
