import css from './Register.module.css';

const Register = () => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;

    const userRegisterData = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    form.reset();

    console.log('submit Register >>', userRegisterData);
  };

  return (
    <>
      <h3>Register page</h3>
      <p>публичный маршрут регистрации нового пользователя с формой</p>

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