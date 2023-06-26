import { useDispatch, useSelector } from 'react-redux';
import { loginThunk } from 'redux/auth/operations';
import Notiflix from 'notiflix';
import { errorSelector, isLoadingSelector } from 'redux/auth/selectors';
import { Loader } from 'components/Loader/Loader';
import { Button } from '@mui/material';
import { FormSt, LabelSt } from 'Pages/Register/Styled';

const Login = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(isLoadingSelector);
  const error = useSelector(errorSelector);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;

    const userLoginData = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    const { email, password } = userLoginData;
    if (email === '' || password === '') {
      return Notiflix.Notify.info('Please fill out the form.');
    }

    dispatch(loginThunk(userLoginData));
    form.reset();

    console.log('submit Login >>', userLoginData);
  };

  return (
    <>
      {isLoading && !error && <Loader />}

      <FormSt onSubmit={handleSubmit} autoComplete="off">
        <LabelSt>
          Email
          <input type="email" name="email" />
        </LabelSt>
        <LabelSt>
          Password
          <input type="password" name="password" />
        </LabelSt>

        <Button variant="contained" size="small" color="warning" type="submit">
          Log in
        </Button>
      </FormSt>
    </>
  );
};

export default Login;
