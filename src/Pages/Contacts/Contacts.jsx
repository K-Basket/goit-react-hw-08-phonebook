import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { Loader } from 'components/Loader/Loader';
import { UpdateForm } from 'components/UpdateForm/UpdateForm';
import { useSelector } from 'react-redux';
import { userSelector } from 'redux/auth/selectors';
import {
  errorSelector,
  isLoadingSelector,
  isUpdateSelector,
} from 'redux/contacts/selectors';
import { FormsContactsSt } from './Styled';

const Contacts = () => {
  const user = useSelector(userSelector);
  const isLoading = useSelector(isLoadingSelector);
  const error = useSelector(errorSelector);
  const isUpdate = useSelector(isUpdateSelector);

  return (
    <>
      {isLoading && !error && <Loader />}
      <h1>Phonebook</h1>
      <p>React Hooks & Redux toolkit (async) & User registration and login</p>
      <ContactForm />
      <h2>{`${user.name}, these are your contacts`}</h2>
      <FormsContactsSt>
        <Filter />
        {isUpdate && <UpdateForm />}
      </FormsContactsSt>
      <ContactList />
    </>
  );
};

export default Contacts;
