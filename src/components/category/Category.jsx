import React from "react";
import Dropdown from "../dropdown";

const Category = () => {
  return (
    // 예시
    // 이후 map으로 하나씩!
    <div style={{ marginLeft: "15px" }}>
      <Dropdown name="메인카테고리1" type="main">
        <Dropdown name="서브카테고리1" type="sub" />
        <Dropdown name="서브카테고리2" type="sub">
          <Dropdown name="글제목1" />
          <Dropdown name="글제목2" />
        </Dropdown>
        <Dropdown name="서브카테고리3" type="sub" />
        <Dropdown name="서브카테고리4" type="sub" />
      </Dropdown>

      <Dropdown name="메인카테고리2" type="main">
        <Dropdown name="서브카테고리1" type="sub" />
        <Dropdown name="서브카테고리2" type="sub" />
      </Dropdown>
    </div>
  );
};

export default Category;
