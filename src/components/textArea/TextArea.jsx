import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import { TextAreaLayout } from "./TextArea.styled";

const TextArea = () => {
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
        preview="preview"
        height="100%"
      />
    </TextAreaLayout>
  );
};

export default TextArea;
