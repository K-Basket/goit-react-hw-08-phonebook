import { useEffect } from 'react';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { itemsSelector, listSelector } from 'redux/contacts/selectors';
import {
  deleteContactThunk,
  fetchContactsThunk,
} from 'redux/contacts/operations';
import { setContactUpdate, setIsUpdate } from 'redux/contacts/slice';

export function ContactList() {
  const items = useSelector(itemsSelector);
  const filter = useSelector(listSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  function getFiltered() {
    const normalizedFilter = filter.toLowerCase();

    return items.filter(el => el.name.toLowerCase().includes(normalizedFilter));
  }

  const handleContactUpdate = evt => {
    const getContactId = evt.target.dataset.id;
    const getContactUpdate = items.find(el => el.id === getContactId);

    dispatch(setIsUpdate(true));
    dispatch(setContactUpdate(getContactUpdate)); // записал в state из items
  };

  return (
    <>
      <ul>
        {getFiltered().map(({ id, name, number }) => (
          <li className={css.link} key={id}>
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
