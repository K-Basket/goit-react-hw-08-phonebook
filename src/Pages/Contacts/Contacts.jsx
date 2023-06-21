import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';

const Contacts = () => {
  return (
    <>
      <h3>Contacts page</h3>
      <p>приватный маршрут для работы со списком контактов пользователя</p>

      <h1>Phonebook</h1>
      <p>React Hooks & Redux toolkit (async) & User registration and login</p>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};

export default Contacts;
