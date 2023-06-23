import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import css from './Layout.module.css';
import { useSelector } from 'react-redux';
import { isLoggetInSelector } from 'redux/auth/selectors';
import { Suspense } from 'react';

const { Outlet, NavLink } = require('react-router-dom');

const Layout = () => {
  const isLoggetIn = useSelector(isLoggetInSelector);

  return (
    <>
      <header>
        <nav className={css.nav}>
          <div>
            <NavLink to="/" className={css.link}>
              Home
            </NavLink>
            {isLoggetIn && (
              <NavLink to="/contacts" className={css.link}>
                Contacts
              </NavLink>
            )}
          </div>
          {isLoggetIn ? <UserMenu /> : <AuthNav />}
        </nav>
      </header>

      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
