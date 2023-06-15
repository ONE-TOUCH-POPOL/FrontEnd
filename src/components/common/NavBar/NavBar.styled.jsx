import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled.img`
  height: 34px;
  border-radius: 153px;
`;
const StyledNav = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  background: #abc8ff;
  /* background: #92a8d1; */
  text-align: right;
  padding: 10px 0px;
`;

const StyledNavLink = styled(Link)`
  color: white;
  /* margin: 8px; */
  text-decoration: none;
`;

const NavLinks = styled.div`
  a {
    display: inline-block;
    margin-top: 8px;
    color: #fff;
    margin-left: 1em;
    text-decoration: none;

    &:hover {
      color: #cdcdcd;
    }
  }
`;

export { StyledNav, StyledNavLink, StyledLogo, NavLinks };
