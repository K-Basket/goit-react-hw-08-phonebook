import { NavLinkSt } from './Styled';

const AuthNav = () => {
  return (
    <div>
      <NavLinkSt to="/register">Register</NavLinkSt>
      <NavLinkSt to="/login">Login</NavLinkSt>
    </div>
  );
};

export default AuthNav;
