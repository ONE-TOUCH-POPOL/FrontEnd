import React from "react";
import NavBar from "./NavBar";

const NavBarComponent = () => {
  // 비즈니스 로직이 들어감
  const click = (e) => {
    console.log("클릭했다");
    const apiKey = process.env.REACT_APP_API_URL;
    console.log(apiKey);
  };
  return <NavBar click={click}></NavBar>;
};

export default NavBarComponent;
