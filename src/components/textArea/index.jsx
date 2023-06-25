import React, { useEffect, useState } from "react";
import useSelectRecordStore from "../../store/selectRecord";
import TextArea from "./TextArea";

const TextAreaComponent = ({ toggleState }) => {
  const selectRecord = useSelectRecordStore((state) => state.selectRecord);
  const [record, setRecord] = useState(selectRecord);

  useEffect(() => {
    updateRecord(selectRecord);
  }, [selectRecord]);

  const updateRecord = (r) => {
    setRecord(r);
  };

  return <TextArea toggleState={toggleState} record={record}></TextArea>;
};

export default TextAreaComponent;
