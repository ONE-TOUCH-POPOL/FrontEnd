import React from "react";
import { TabTopStyle, TabMenuStyle } from "./TabMenu.styled";
const TabMenu = ({ handleOpenSidebar, currentTab, clickTab }) => {
  // const [currentTab, clickTab] = useState(1);

  const tabMenuNames = [
    { id: 0, name: "카테고리", content: "카테고리 content" },
    { id: 1, name: "일자", content: "일자 content" },
  ];
  const handleTabClick = (tab) => {
    clickTab(tab);
  };
  return (
    <>
      <TabTopStyle>
        <TabMenuStyle>
          {tabMenuNames.map((el, index) => (
            <li key={el.id} className={index === currentTab ? "submenu focused" : "submenu notfocused"} onClick={() => handleTabClick(index)}>
              {el.name}
            </li>
          ))}
        </TabMenuStyle>
        <button onClick={handleOpenSidebar} style={{ background: "white" }}>
          <img src="/img/double_arrow_left.png" style={{ background: "white", width: "20px", cursor: "pointer" }} alt="closeArrow" />
        </button>
      </TabTopStyle>
      {/* <div>
        <Desc>
          <p>{tabMenuNames[currentTab].content}</p>
        </Desc>
      </div> */}
    </>
  );
};

export default TabMenu;
