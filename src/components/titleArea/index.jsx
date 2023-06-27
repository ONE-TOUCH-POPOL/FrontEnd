import React, { useEffect, useState } from "react";
import useSelectRecordStore from "../../store/selectRecord";
import TitleArea from "./TitleArea";

const TitleAreaComponent = () => {
  const selectRecord = useSelectRecordStore((state) => state.selectRecord);
  const [record, setRecord] = useState(selectRecord);

  useEffect(() => {
    updateRecord(selectRecord);
  }, [selectRecord]);

  const updateRecord = (r) => {
    setRecord(r);
  };

  return <TitleArea record={record}></TitleArea>;
};

export default TitleAreaComponent;
