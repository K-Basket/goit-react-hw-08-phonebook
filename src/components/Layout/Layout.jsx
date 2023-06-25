import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { isLoggetInSelector } from 'redux/auth/selectors';
import { Suspense } from 'react';
import { Section } from 'components/Section/Section';
import { NavLinkSt, NavSt } from './Styled';

const { Outlet } = require('react-router-dom');

const Layout = () => {
  const isLoggetIn = useSelector(isLoggetInSelector);

  return (
    <>
      <header>
        <Section>
          <NavSt>
            <div>
              <NavLinkSt to="/">Home</NavLinkSt>
              {isLoggetIn && <NavLinkSt to="/contacts">Contacts</NavLinkSt>}
            </div>
            {isLoggetIn ? <UserMenu /> : <AuthNav />}
          </NavSt>
        </Section>
      </header>

      <main>
        <Section>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Section>
      </main>
    </>
  );
};

export default Layout;
