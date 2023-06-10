import React from "react";
import styled from "styled-components";
import { Link, Outlet } from "react-router-dom";

const StyledNav = styled.div`
  width: 100%;
  background: #92a8d1;
  text-align: right;
  padding: 15px 0px;
`;

const StyledNavLink = styled(Link)`
  color: white;
  margin: 8px;
  text-decoration: none;
`;

const NavBar = () => {
  return (
    <div>
      <StyledNav>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/login">로그인</StyledNavLink>
        <StyledNavLink to="/join">회원가입</StyledNavLink>
      </StyledNav>
      <Outlet />
    </div>
  );
};

export default NavBar;
