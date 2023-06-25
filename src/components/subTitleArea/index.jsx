import React, { useEffect, useState } from "react";
import useSelectRecordStore from "../../store/selectRecord";
import SubTitleArea from "./SubTitleArea";

const SubTitleAreaComponent = () => {
  const selectRecord = useSelectRecordStore((state) => state.selectRecord);
  const [record, setRecord] = useState(selectRecord);

  useEffect(() => {
    updateRecord(selectRecord);
  }, [selectRecord]);

  const updateRecord = (r) => {
    setRecord(r);
  };

  return <SubTitleArea record={record}></SubTitleArea>;
};

export default SubTitleAreaComponent;
