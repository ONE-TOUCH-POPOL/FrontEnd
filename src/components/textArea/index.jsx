import React, { useEffect, useState } from "react";
import useSelectRecordStore from "../../store/selectRecord";
import TextArea from "./TextArea";

const TextAreaComponent = ({ toggleState }) => {
  const selectRecord = useSelectRecordStore((state) => state.selectRecord);
  const [text, setText] = useState(selectRecord?.content || "test");

  useEffect(() => {
    setText(selectRecord?.content || "test");
  }, [selectRecord]);

  const onChangeMD = (value, event) => {
    setText(value);
  };

  return <TextArea toggleState={toggleState} text={text} onChangeMD={onChangeMD}></TextArea>;
};

export default TextAreaComponent;
