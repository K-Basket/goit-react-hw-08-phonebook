import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavLinkSt = styled(NavLink)`
  padding: 8px 16px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: orangered;
  }
`;

export const NavSt = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
