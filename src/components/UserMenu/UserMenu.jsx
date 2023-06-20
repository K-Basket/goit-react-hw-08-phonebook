import css from './UserMenu.module.css';

const UserMenu = () => {
  return (
    <div className={css.link}>
      <p></p>
      <p>Welcome, koshykkv@gmail.com</p>
      <button className={css.btn} type="button">
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
