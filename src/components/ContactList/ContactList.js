import { useEffect } from 'react';
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

  return (
    <>
      {isLoading && !error && <p>Request in progress...</p>}
      <ul>
        {getFiltered().map(({ id, name, number }) => (
          <li key={id}>
            <div className={css.item}>
              <p>
                <span>{name}</span>
                <span>: {number}</span>
              </p>

              <button onClick={() => dispatch(deleteContactThunk(id))}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
