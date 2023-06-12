/* eslint-disable */
import React, { useEffect, useState } from "react";
import { StyledLogo, StyledNav, StyledNavLink, NavLinks } from "./NavBar.styled";
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
        <StyledNavLink to="/">
          <StyledLogo src="/img/logo.jpeg" alt="Logo"></StyledLogo>
        </StyledNavLink>
        <NavLinks>
          <StyledNavLink to="/">Home</StyledNavLink>
          {isLogin ? <StyledNavLink to="/logout">로그아웃</StyledNavLink> : <StyledNavLink to="/login">로그인</StyledNavLink>}
          <StyledNavLink to="/signup">회원가입</StyledNavLink>
        </NavLinks>
      </StyledNav>
      <Outlet />
    </>
  );
};

export default NavBar;
