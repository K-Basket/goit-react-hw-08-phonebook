import { useDispatch, useSelector } from 'react-redux';
import css from './UserMenu.module.css';
import { userSelector } from 'redux/auth/selectors';
import { logoutThunk } from 'redux/auth/operations';

const UserMenu = () => {
  const { name, email } = useSelector(userSelector);
  const dispatch = useDispatch();

  const handleLogOut = () => dispatch(logoutThunk());

  return (
    <div className={css.link}>
      <p></p>
      <p>{`Welcome, ${name}! (${email})`}</p>
      <button className={css.btn} type="button" onClick={handleLogOut}>
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
