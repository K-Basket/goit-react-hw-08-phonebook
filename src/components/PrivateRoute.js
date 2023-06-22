/*
- PrivateRoute - обертка, используется ограничения доступа к приватной странице
если user залогинен, тогда переходим на приватную страницу, если нет - на какую-то другую
*/
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isLoggetInSelector, isRefreshingSelector } from 'redux/auth/selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggetIn = useSelector(isLoggetInSelector);
  const isRefreshing = useSelector(isRefreshingSelector);

  const shouldRedirect = !isRefreshing && !isLoggetIn;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

PrivateRoute.propTypes = {
  component: PropTypes.object.isRequired,
  redirectTo: PropTypes.string.isRequired,
};
