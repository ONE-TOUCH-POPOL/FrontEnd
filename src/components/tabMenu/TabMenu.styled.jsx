import styled from "styled-components";
const TabMenuStyle = styled.ul`
  color: black;
  font-weight: bold;
  display: flex;
  /* list-style: none; */
  padding: 0px 10% 0px 0px;
  cursor: pointer;
  .submenu {
    display: flex;
    /* width: calc(100% / 3); */
    padding: 8px;
    font-size: 15px;
    border-radius: 7px;
  }

  .focused {
    //선택된 Tabmenu 에만 적용되는 CSS를 구현
    background-color: #abc8ff;
    width: 40%;
    /* color: white; */
  }
  /* 
  & div.desc {
    text-align: center;
  } */
`;

const Desc = styled.div`
  /* text-align: center; */
`;

export { TabMenuStyle, Desc };
