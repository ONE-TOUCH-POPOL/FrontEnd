import React from "react";
import { StyledNav, StyledNavLink } from "./NavBar.styled";
import { Outlet } from "react-router-dom";

const NavBar = ({ click }) => {
  return (
    <>
      <StyledNav>
        <button onClick={click}></button>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/login">로그인</StyledNavLink>
        <StyledNavLink to="/join">회원가입</StyledNavLink>
      </StyledNav>
      <Outlet />
    </>
  );
};

export default NavBar;
