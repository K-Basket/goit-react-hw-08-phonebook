import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from 'Pages/Home/Home';
import Register from 'Pages/Register/Register';
import Login from 'Pages/Login/Login';
import Contacts from 'Pages/Contacts/Contacts';
import { useDispatch, useSelector } from 'react-redux';
import { isRefreshingSelector } from 'redux/auth/selectors';
import { useEffect } from 'react';
import { refreshUserThunk } from 'redux/auth/operations';

export function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(isRefreshingSelector);

  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  return isRefreshing ? (
    'Fetching user data...'
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="contacts" element={<Contacts />} />

          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}
