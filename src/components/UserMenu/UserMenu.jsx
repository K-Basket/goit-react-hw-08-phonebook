import { useDispatch, useSelector } from 'react-redux';
import { userSelector } from 'redux/auth/selectors';
import { logoutThunk } from 'redux/auth/operations';
import { TextSt, UserMenuSt } from './Styled';

const UserMenu = () => {
  const { name, email } = useSelector(userSelector);
  const dispatch = useDispatch();

  const handleLogOut = () => dispatch(logoutThunk());

  return (
    <UserMenuSt>
      <TextSt>
        Welcome, <span>{name}!</span> {`(${email})`}
      </TextSt>
      <button type="button" onClick={handleLogOut}>
        Log out
      </button>
    </UserMenuSt>
  );
};

export default UserMenu;
