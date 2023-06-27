import React from "react";
import RecordPerDay from "./RecordPerDay";

const RecordPerDayComponent = ({ records, selectDay }) => {
  const filteredRecords = records.filter((record) =>
    record.subCategories.some((subCategory) =>
      subCategory.studyRecordDetailList.some((studyRecord) => studyRecord.recordDate === selectDay.format("YYYY-MM-DD"))
    )
  );

  return <RecordPerDay selectDay={selectDay} filteredRecords={filteredRecords}></RecordPerDay>;
};

export default RecordPerDayComponent;
