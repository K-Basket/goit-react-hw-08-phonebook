import { useDispatch, useSelector } from 'react-redux';
import { patchContactThunk } from 'redux/contacts/operations';
import { contactUpdateSelector } from 'redux/contacts/selectors';
import { setContactUpdate, setIsUpdate } from 'redux/contacts/slice';
import { FormSt, InputSt, LabelSt } from './Styled';
import { Button } from '@mui/material';
import { useEffect } from 'react';

export const UpdateForm = () => {
  const dispatch = useDispatch();

  const contactUpdate = useSelector(contactUpdateSelector);

  // закрыть форму по ESC
  useEffect(() => {
    function handleKeyDown(evt) {
      if (evt.code === 'Escape') {
        dispatch(setIsUpdate(false));
      }
    }
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch]);

  // запись в стейт из поля input
  const handleChange = evt => {
    const inputName = evt.target.name;
    const value = evt.target.value;

    if (inputName === 'name')
      dispatch(setContactUpdate({ ...contactUpdate, ...{ name: value } }));

    if (inputName === 'number')
      dispatch(setContactUpdate({ ...contactUpdate, ...{ number: value } }));
  };

  const handleContactCorrect = evt => {
    evt.preventDefault();

    dispatch(patchContactThunk(contactUpdate));
    dispatch(setIsUpdate(false));
  };

  const { name, number } = contactUpdate;

  return (
    <>
      <FormSt onSubmit={handleContactCorrect}>
        <LabelSt>
          change Name
          <InputSt
            type="text"
            name="name"
            placeholder={name}
            onChange={handleChange}
          />
        </LabelSt>

        <LabelSt>
          change Number
          <InputSt
            type="tel"
            name="number"
            placeholder={number}
            onChange={handleChange}
          />
        </LabelSt>

        <Button variant="contained" size="small" color="success" type="submit">
          Correct contact
        </Button>
      </FormSt>
    </>
  );
};
