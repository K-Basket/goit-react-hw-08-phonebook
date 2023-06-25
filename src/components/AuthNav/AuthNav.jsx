import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import { NavLinkSt } from './Styled';

const AuthNav = () => {
  return (
    <div>
      <NavLinkSt to="/register" className={css.link}>
        Register
      </NavLinkSt>
      <NavLinkSt to="/login" className={css.link}>
        Login
      </NavLinkSt>
    </div>
  );
};

export default AuthNav;
