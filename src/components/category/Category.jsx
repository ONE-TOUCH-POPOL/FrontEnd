import React from "react";
import Dropdown from "../dropdown";

const Category = ({ categories }) => {
  return (
    <div style={{ marginLeft: "15px" }}>
      {categories &&
        categories.map((mainCategory) => (
          <Dropdown key={mainCategory.mainCode} name={mainCategory.mainCodeName} type="main">
            {mainCategory &&
              mainCategory.subCategories.map((subCategory) => (
                <Dropdown key={subCategory.id} name={subCategory.codeName} type="sub">
                  {subCategory.studyRecordDetailList.map((record) => (
                    <Dropdown key={record.id} name={record.title}></Dropdown>
                  ))}
                </Dropdown>
              ))}
          </Dropdown>
        ))}
    </div>
  );
};

export default Category;
