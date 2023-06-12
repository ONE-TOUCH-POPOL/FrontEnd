/* eslint-disable */
import React, { useEffect, useState } from "react";
import { StyledNav, StyledNavLink } from "./NavBar.styled";
import { Outlet } from "react-router-dom";

const NavBar = () => {
  const [isLogin, setIsLogin] = useState(false); // login
  useEffect(() => {
    if (sessionStorage.getItem("email") === null) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  });
  return (
    <>
      <StyledNav>
        <StyledNavLink to="/">Home</StyledNavLink>
        {isLogin ? <StyledNavLink to="/logout">로그아웃</StyledNavLink> : <StyledNavLink to="/login">로그인</StyledNavLink>}
        <StyledNavLink to="/join">회원가입</StyledNavLink>
      </StyledNav>
      <Outlet />
    </>
  );
};

export default NavBar;
