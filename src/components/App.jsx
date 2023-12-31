import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { isRefreshingSelector } from 'redux/auth/selectors';
import { lazy, useEffect } from 'react';
import { refreshUserThunk } from 'redux/auth/operations';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const Home = lazy(() => import('Pages/Home/Home'));
const Register = lazy(() => import('Pages/Register/Register'));
const Login = lazy(() => import('Pages/Login/Login'));
const Contacts = lazy(() => import('Pages/Contacts/Contacts'));

export function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(isRefreshingSelector);

  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  // ========================================================= Варииант с пропсами
  return isRefreshing ? (
    'Fetching user data...'
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="register"
            element={
              <RestrictedRoute
                component={<Register />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute component={<Login />} redirectTo="/contacts" />
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute component={<Contacts />} redirectTo="/login" />
            }
          />

          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );

  // ========================================================= Варииант с children
  // return isRefreshing ? (
  //   'Fetching user data...'
  // ) : (
  //   <>
  //     <Routes>
  //       <Route path="/" element={<Layout />}>
  //         <Route index element={<Home />} />
  //         <Route
  //           path="register"
  //           element={
  //             <RestrictedRoute>
  //               <Register />
  //             </RestrictedRoute>
  //           }
  //         />
  //         <Route
  //           path="login"
  //           element={
  //             <RestrictedRoute>
  //               <Login />
  //             </RestrictedRoute>
  //           }
  //         />
  //         <Route
  //           path="contacts"
  //           element={
  //             <PrivateRoute>
  //               <Contacts />
  //             </PrivateRoute>
  //           }
  //         />

  //         <Route path="*" element={<Home />} />
  //       </Route>
  //     </Routes>
  //   </>
  // );
}
