import React from "react";
import { OneRecordPerDay, StyledButton } from "./RecordPerDay.styled";
import useSelectRecordStore from "../../store/selectRecord";

const RecordPerDay = ({ filteredRecords, selectDay }) => {
  const setSelectRecord = useSelectRecordStore((state) => state.setSelectRecord);

  return (
    <ul>
      {filteredRecords.map((record) =>
        record.subCategories.map((subCategory) =>
          subCategory.studyRecordDetailList.map((studyRecord) => {
            if (studyRecord.recordDate === selectDay.format("YYYY-MM-DD")) {
              return (
                <OneRecordPerDay key={studyRecord.id}>
                  <StyledButton
                    onClick={() => {
                      setSelectRecord({
                        ...studyRecord,
                        mainCategory: record.mainCodeName,
                        subCategory: subCategory.codeName,
                      });
                    }}
                  >
                    {studyRecord.title}
                  </StyledButton>
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
