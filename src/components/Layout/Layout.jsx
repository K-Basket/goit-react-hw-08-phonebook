import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import css from './Layout.module.css';

const { Outlet, NavLink } = require('react-router-dom');

const Layout = () => {
  return (
    <>
      <header>
        <nav className={css.nav}>
          <NavLink to="/" className={css.link}>
            Home
          </NavLink>
          <AuthNav />
          <UserMenu />
          {/* <NavLink to="/contacts">Contacts</NavLink> */}
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
