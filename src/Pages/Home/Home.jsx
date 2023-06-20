import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';

const Home = () => {
  return (
    <>
      <h3>Home page</h3>
      <h1>Phonebook</h1>
      <p>React Hooks & Redux toolkit (async) & User registration and login</p>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};

export default Home;
