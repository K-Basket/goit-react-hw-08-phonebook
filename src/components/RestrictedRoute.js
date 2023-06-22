/*
- RestrictedRoute - обертка, используется для перенаправления usera на другую страницу после регистрации или login
- Если маршрут ограничен и пользователь вошел в систему, визуализировать < Navigate > для redirectTo
- В противном случае визуализировать компонент
*/

// ========================================================= Варииант с пропсами

import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isLoggetInSelector } from 'redux/auth/selectors';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggetIn = useSelector(isLoggetInSelector);

  return isLoggetIn ? <Navigate to={redirectTo} /> : Component;
};

RestrictedRoute.propTypes = {
  component: PropTypes.object.isRequired,
  redirectTo: PropTypes.string.isRequired,
};

// ========================================================= Варииант с children
// import { useSelector } from 'react-redux';
// import { Navigate } from 'react-router-dom';
// import { isLoggetInSelector } from 'redux/auth/selectors';

// export const RestrictedRoute = ({ children }) => {
//   const isLoggetIn = useSelector(isLoggetInSelector);

//   return isLoggetIn ? <Navigate to="/contacts" /> : children;
// };
