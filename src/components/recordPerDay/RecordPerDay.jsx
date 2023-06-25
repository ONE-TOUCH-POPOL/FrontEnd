import React from "react";
import { OneRecordPerDay, StyledButton } from "./RecordPerDay.styled";
const RecordPerDay = ({ filteredRecords, selectDay }) => {
  return (
    <ul>
      {filteredRecords.map((record) =>
        record.subCategories.map((subCategory) =>
          subCategory.studyRecordDetailList.map((studyRecord) => {
            if (studyRecord.recordDate === selectDay.format("YYYY-MM-DD")) {
              return (
                <OneRecordPerDay key={studyRecord.id}>
                  <StyledButton>{studyRecord.title}</StyledButton>
                </OneRecordPerDay>
              );
            }
            return null;
          })
        )
      )}
    </ul>
  );
};

export default RecordPerDay;
