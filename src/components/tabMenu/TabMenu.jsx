import React, { useState } from "react";
import { TabMenuStyle, Desc } from "./TabMenu.styled";
const TabMenu = () => {
  const [currentTab, clickTab] = useState(0);

  const tabMenuNames = [
    { name: "카테고리", content: "카테고리 content" },
    { name: "일자", content: "일자 content" },
  ];
  const selectMenuHandler = (index) => {
    clickTab(index);
  };
  return (
    <>
      <div>
        <TabMenuStyle>
          {tabMenuNames.map((el, index) => (
            <li className={index === currentTab ? "submenu focused" : "submenu"} onClick={() => selectMenuHandler(index)}>
              {el.name}
            </li>
          ))}
        </TabMenuStyle>
        <Desc>
          <p>{tabMenuNames[currentTab].content}</p>
        </Desc>
      </div>
    </>
  );
};

export default TabMenu;
