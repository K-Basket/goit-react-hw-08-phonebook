import css from './UserMenu.module.css';

const UserMenu = () => {
  return (
    <div className={css.link}>
      <span>Welcome, NAME</span>
      <button className={css.button} type="button">
        Exit
      </button>
    </div>
  );
};

export default UserMenu;
