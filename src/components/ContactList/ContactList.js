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
} from 'redux/contacts/operations';

export function ContactList() {
  const [update, setUpdate] = useState(false);

  const filter = useSelector(listSelector);
  const items = useSelector(itemsSelector);
  const isLoading = useSelector(isLoadingSelector);
  const error = useSelector(errorSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  function getFiltered() {
    const normalizedFilter = filter.toLowerCase();

    return items.filter(el => el.name.toLowerCase().includes(normalizedFilter));
  }

  const handleContactUpdate = evt => {
    setUpdate(true);
    const getContactId = evt.target.dataset.id;
    const getContactUpdate = items.find(el => el.id === getContactId);

    console.log('getContactId :>> ', getContactId);
    console.log('items :>> ', getContactUpdate);
    // console.log('contact update');
  };

  const handleContactCorrect = () => {
    console.log('sabmitCorrect :>> ');
  };

  return (
    <>
      {/* {console.log('update >>', update)} */}

      {update && (
        <form onSubmit={handleContactCorrect}>
          <label>
            Name
            <input type="text" name="name" />
          </label>

          <label>
            Number
            <input type="tel" name="number" />
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
