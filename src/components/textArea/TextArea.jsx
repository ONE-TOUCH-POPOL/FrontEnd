import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import { TextAreaLayout } from "./TextArea.styled";

const TextArea = () => {
  const [text, setText] = useState("");
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
        height="100%"
      />
    </TextAreaLayout>
  );
};

export default TextArea;
