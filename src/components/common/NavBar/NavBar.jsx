import React from "react";
import { StyledNav, StyledNavLink } from "./NavBar.styled";
import { Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <StyledNav>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/login">로그인</StyledNavLink>
        <StyledNavLink to="/join">회원가입</StyledNavLink>
      </StyledNav>
      <Outlet />
    </>
  );
};

export default NavBar;
