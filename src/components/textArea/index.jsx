import React, { useEffect, useState } from "react";
import useSelectRecordStore from "../../store/selectRecord";
import TextArea from "./TextArea";
import { useNavigate } from "react-router-dom";

const TextAreaComponent = ({ toggleState }) => {
  const navigate = useNavigate();
  const selectRecord = useSelectRecordStore((state) => state.selectRecord);
  const [text, setText] = useState(selectRecord?.content || "test");

  useEffect(() => {
    setText(selectRecord?.content || "test");
  }, [selectRecord]);

  const handleExit = () => {
    navigate("/");
  };

  const handleTempStore = () => {
    localStorage.setItem("currentRecord", JSON.stringify(selectRecord));
    localStorage.setItem("currentRecordText", text);
  };

  const onChangeMD = (value, event) => {
    setText(value);
  };

  return (
    <TextArea toggleState={toggleState} text={text} onChangeMD={onChangeMD} handleExit={handleExit} handleTempStore={handleTempStore}></TextArea>
  );
};

export default TextAreaComponent;
