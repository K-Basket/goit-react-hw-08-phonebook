import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { useSelector } from 'react-redux';
import { userSelector } from 'redux/auth/selectors';

const Contacts = () => {
  const user = useSelector(userSelector);

  return (
    <>
      <h1>Phonebook</h1>
      <p>React Hooks & Redux toolkit (async) & User registration and login</p>

      <ContactForm />

      <h2>{`${user.name}, these are your contacts`}</h2>
      <Filter />
      <ContactList />
    </>
  );
};

export default Contacts;
