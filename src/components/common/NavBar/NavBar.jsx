/* eslint-disable */
import React from "react";
import { StyledLogo, StyledNav, StyledNavLink, NavLinks } from "./NavBar.styled";
import { Outlet } from "react-router-dom";
import useLoginStore from "../../../store/login";
const NavBar = () => {
  const isLogin = useLoginStore((state) => state.isLogin);
  const loginState = useLoginStore((state) => state.logout);

  const changeLoginState = () => {
    loginState();
  };
  return (
    <>
      <StyledNav>
        <StyledNavLink to="/">
          <StyledLogo src="/img/logo.jpeg" alt="Logo"></StyledLogo>
        </StyledNavLink>
        <NavLinks>
          <StyledNavLink to="/record">Record</StyledNavLink>
          {isLogin ? (
            <StyledNavLink to="/" onClick={changeLoginState}>
              로그아웃
            </StyledNavLink>
          ) : (
            <StyledNavLink to="/login">로그인</StyledNavLink>
          )}
          <StyledNavLink to="/signup">회원가입</StyledNavLink>
        </NavLinks>
      </StyledNav>
      <Outlet />
    </>
  );
};

export default NavBar;
