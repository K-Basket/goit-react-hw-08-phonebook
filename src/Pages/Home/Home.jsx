import { useSelector } from 'react-redux';
import { isLoggetInSelector, userSelector } from 'redux/auth/selectors';

const Home = () => {
  const isLoggetIn = useSelector(isLoggetInSelector);
  const { name } = useSelector(userSelector);

  return (
    <>
      <h3>Home page</h3>
      {isLoggetIn ? (
        <p>{`Welcome to our site, ${name}!`}</p>
      ) : (
        <p>Please register or login to your account.</p>
      )}

      {/* <h1>Phonebook</h1>
      <p>React Hooks & Redux toolkit (async) & User registration and login</p>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList /> */}
    </>
  );
};

export default Home;
