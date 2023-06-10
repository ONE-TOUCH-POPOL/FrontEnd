import { Link } from "react-router-dom";
import styled from "styled-components";

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

export { StyledNav, StyledNavLink };
