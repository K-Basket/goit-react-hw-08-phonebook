import { useDispatch, useSelector } from 'react-redux';
import { userSelector } from 'redux/auth/selectors';
import { logoutThunk } from 'redux/auth/operations';
import { TextSt, UserMenuSt } from './Styled';
import { Button } from '@mui/material';

const UserMenu = () => {
  const { name, email } = useSelector(userSelector);
  const dispatch = useDispatch();

  const handleLogOut = () => dispatch(logoutThunk());

  return (
    <UserMenuSt>
      <TextSt>
        Welcome, <span>{name}!</span> {`(${email})`}
      </TextSt>

      <Button
        variant="contained"
        onClick={handleLogOut}
        size="small"
        color="warning"
      >
        Log out
      </Button>
    </UserMenuSt>
  );
};

export default UserMenu;
