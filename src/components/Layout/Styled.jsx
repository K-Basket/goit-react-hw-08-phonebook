import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderSt = styled.header`
  top: 0;
  left: 0;
  position: sticky;
`;

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
