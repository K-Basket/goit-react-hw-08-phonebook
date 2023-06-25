import { Loader } from 'components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { patchContactThunk } from 'redux/contacts/operations';
import {
  contactUpdateSelector,
  errorSelector,
  isLoadingSelector,
  isUpdateSelector,
} from 'redux/contacts/selectors';
import { setContactUpdate, setIsUpdate } from 'redux/contacts/slice';

export const UpdateForm = () => {
  const dispatch = useDispatch();

  const contactUpdate = useSelector(contactUpdateSelector);
  const isLoading = useSelector(isLoadingSelector);
  const isUpdate = useSelector(isUpdateSelector);
  const error = useSelector(errorSelector);

  // запись в стейт из поля input
  const handleChange = evt => {
    if (evt.target.name === 'name')
      dispatch(
        setContactUpdate({ ...contactUpdate, ...{ name: evt.target.value } })
      );
    // setContactUpdate(
    //   prev => (prev = { ...prev, ...{ name: evt.target.value } })
    // );
    if (evt.target.name === 'number')
      dispatch(
        setContactUpdate({ ...contactUpdate, ...{ number: evt.target.value } })
      );
    // setContactUpdate(
    //   prev => (prev = { ...prev, ...{ number: evt.target.value } })
    // );
  };

  const handleContactCorrect = evt => {
    evt.preventDefault();
    dispatch(patchContactThunk(contactUpdate));
    dispatch(setIsUpdate(false));
    // setIsUpdate(false);
  };

  return (
    <>
      {isLoading && !error && <Loader />}
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
    </>
  );
};
