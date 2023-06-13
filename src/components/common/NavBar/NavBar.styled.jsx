import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled.img`
  height: 24px;
`;
const StyledNav = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  background: #abc8ff;
  /* background: #92a8d1; */
  text-align: right;
  padding: 8px 0px;
`;

const StyledNavLink = styled(Link)`
  color: white;
  /* margin: 8px; */
  text-decoration: none;
`;

const NavLinks = styled.div`
  a {
    color: #fff;
    margin-left: 1em;
    text-decoration: none;

    &:hover {
      color: #cdcdcd;
    }
  }
`;

export { StyledNav, StyledNavLink, StyledLogo, NavLinks };
