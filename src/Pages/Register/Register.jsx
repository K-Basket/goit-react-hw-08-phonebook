import { useDispatch, useSelector } from 'react-redux';
import css from './Register.module.css';
import { registerThunk } from 'redux/auth/operations';
import { Loader } from 'components/Loader/Loader';
import { errorSelector, isLoadingSelector } from 'redux/auth/selectors';

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

    dispatch(registerThunk(userRegisterData));
    form.reset();

    console.log('submit Register >>', userRegisterData);
  };

  return (
    <>
      {isLoading && !error && <Loader />}

      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label}>
          Username
          <input type="text" name="name" />
        </label>
        <label className={css.label}>
          Email
          <input type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;
