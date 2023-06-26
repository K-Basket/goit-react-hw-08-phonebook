import { useDispatch, useSelector } from 'react-redux';
import { registerThunk } from 'redux/auth/operations';
import { Loader } from 'components/Loader/Loader';
import { errorSelector, isLoadingSelector } from 'redux/auth/selectors';
import { FormSt, LabelSt } from './Styled';
import { Button } from '@mui/material';
import Notiflix from 'notiflix';

const Register = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(isLoadingSelector);
  const error = useSelector(errorSelector);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;

    const userRegisterData = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    const { name, email, password } = userRegisterData;
    if (name === '' || email === '' || password === '') {
      return Notiflix.Notify.info('Please fill out the form.');
    }

    dispatch(registerThunk(userRegisterData));
    form.reset();

    console.log('submit Register >>', userRegisterData);
  };

  return (
    <>
      {isLoading && !error && <Loader />}

      <FormSt onSubmit={handleSubmit} autoComplete="off">
        <LabelSt>
          Username
          <input type="text" name="name" />
        </LabelSt>
        <LabelSt>
          Email
          <input type="email" name="email" />
        </LabelSt>
        <LabelSt>
          Password
          <input type="password" name="password" />
        </LabelSt>

        <Button variant="contained" size="small" color="warning" type="submit">
          Register
        </Button>
      </FormSt>
    </>
  );
};

export default Register;
