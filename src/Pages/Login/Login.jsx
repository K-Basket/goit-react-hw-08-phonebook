import { useDispatch, useSelector } from 'react-redux';
import css from './Login.module.css';
import { loginThunk } from 'redux/auth/operations';
import { errorSelector, isLoadingSelector } from 'redux/auth/selectors';
import { Loader } from 'components/Loader/Loader';

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
    dispatch(loginThunk(userLoginData));
    form.reset();

    console.log('submit Login >>', userLoginData);
  };

  return (
    <>
      {isLoading && !error && <Loader />}

      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label}>
          Email
          <input type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">Log in</button>
      </form>
    </>
  );
};

export default Login;
