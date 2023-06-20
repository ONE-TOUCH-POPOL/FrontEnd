import styled from "styled-components";
const TabTopStyle = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  padding-right: 10px;
`;
const TabMenuStyle = styled.ul`
  display: flex;
  color: black;
  font-weight: bold;
  font-size: 15px;
  padding-left: 10px;
  cursor: pointer;
  width: 97%;
  /* justify-content: space-evenly; */

  .submenu {
    margin-left: 5px;
    display: flex;
    padding: 8px;
    border-radius: 7px;
    flex-direction: column;
  }

  .focused {
    //선택된 Tabmenu 에만 적용되는 CSS를 구현
    background-color: #abc8ff;
    width: 45%;
  }

  .notfocused {
    background-color: white;
    width: 45%;
  }
`;

const Desc = styled.div`
  /* text-align: center; */
`;

export { TabTopStyle, TabMenuStyle, Desc };
