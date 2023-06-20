import css from './Login.module.css';

const Login = () => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;

    const userLoginData = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    form.reset();

    console.log('submit Login >>', userLoginData);
  };

  return (
    <>
      <h3>Login page</h3>
      <p>публичный маршрут логина существующего пользователя с формой</p>

      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
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

export default Login;
