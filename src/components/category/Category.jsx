import React from "react";
import Dropdown from "../dropdown";
import useSelectRecordStore from "../../store/selectRecord";

const Category = ({ records }) => {
  const setSelectRecord = useSelectRecordStore((state) => state.setSelectRecord);

  return (
    <div style={{ marginLeft: "15px" }}>
      {records &&
        records.map((mainCategory) => (
          <Dropdown key={mainCategory.mainCode} name={mainCategory.mainCodeName} type="main">
            {mainCategory &&
              mainCategory.subCategories.map((subCategory) => (
                <Dropdown key={subCategory.id} name={subCategory.codeName} type="sub">
                  {subCategory.studyRecordDetailList.map((record) => (
                    <Dropdown
                      key={record.id}
                      name={record.title}
                      type="record"
                      onClick={() => {
                        setSelectRecord({
                          ...record,
                          mainCategory: mainCategory.mainCodeName,
                          subCategory: subCategory.codeName,
                        });
                      }}
                    ></Dropdown>
                  ))}
                </Dropdown>
              ))}
          </Dropdown>
        ))}
    </div>
  );
};

export default Category;
