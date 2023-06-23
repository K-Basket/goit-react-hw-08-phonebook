import { useEffect, useState } from 'react';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  errorSelector,
  isLoadingSelector,
  itemsSelector,
  listSelector,
} from 'redux/contacts/selectors';
import {
  deleteContactThunk,
  fetchContactsThunk,
  patchContactThunk,
} from 'redux/contacts/operations';

export function ContactList() {
  const filter = useSelector(listSelector);
  const items = useSelector(itemsSelector);
  const isLoading = useSelector(isLoadingSelector);
  const error = useSelector(errorSelector);

  const [isUpdate, setIsUpdate] = useState(false);
  const [contactUpdate, setContactUpdate] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  function getFiltered() {
    const normalizedFilter = filter.toLowerCase();

    return items.filter(el => el.name.toLowerCase().includes(normalizedFilter));
  }

  const handleContactUpdate = evt => {
    setIsUpdate(true);

    const getContactId = evt.target.dataset.id;
    const getContactUpdate = items.find(el => el.id === getContactId);

    setContactUpdate(getContactUpdate); // записал в state из items
  };

  // запись в стейт из поля input
  const handleChange = evt => {
    if (evt.target.name === 'name')
      setContactUpdate(
        prev => (prev = { ...prev, ...{ name: evt.target.value } })
      );
    if (evt.target.name === 'number')
      setContactUpdate(
        prev => (prev = { ...prev, ...{ number: evt.target.value } })
      );
  };

  const handleContactCorrect = evt => {
    evt.preventDefault();
    dispatch(patchContactThunk(contactUpdate));
    setIsUpdate(false);
  };

  return (
    <>
      {isUpdate && (
        <form onSubmit={handleContactCorrect}>
          <label>
            Name update
            <input
              type="text"
              name="name"
              // value={contactUpdate.name}
              placeholder={contactUpdate.name}
              onChange={handleChange}
            />
          </label>

          <label>
            Number update
            <input
              type="tel"
              name="number"
              // value={contactUpdate.number}
              placeholder={contactUpdate.number}
              onChange={handleChange}
            />
          </label>

          <button type="submit">Correct contact</button>
        </form>
      )}

      {isLoading && !error && <p>Request in progress...</p>}
      <ul>
        {getFiltered().map(({ id, name, number }) => (
          <li key={id}>
            <div className={css.item}>
              <p>
                <span>{name}</span>
                <span>: {number}</span>
              </p>

              <div>
                <button onClick={() => dispatch(deleteContactThunk(id))}>
                  Delete
                </button>
                <button onClick={handleContactUpdate} data-id={id}>
                  Update
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
