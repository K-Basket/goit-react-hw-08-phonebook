import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { itemsSelector, listSelector } from 'redux/contacts/selectors';
import {
  deleteContactThunk,
  fetchContactsThunk,
} from 'redux/contacts/operations';
import { setContactUpdate, setIsUpdate } from 'redux/contacts/slice';
import { ButtonsSt, ContactSt, ItemSt, ListSt, WrapSt } from './Styled';
import { Button } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import UpdateIcon from '@mui/icons-material/Update';

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
    const getContactUpdate = items.find(el => el._id === getContactId);
    console.log('getContactUpdate :>> ', getContactUpdate);

    dispatch(setIsUpdate(true));
    dispatch(setContactUpdate(getContactUpdate)); // записал в state из items
  };

  return (
    <>
      <ListSt>
        {getFiltered().map(({ _id, name, phone }) => (
          <ItemSt key={_id}>
            <WrapSt>
              <ContactSt>
                <p>{name}:</p>
                <p> {phone}</p>
              </ContactSt>

              <ButtonsSt>
                <Button
                  variant="outlined"
                  startIcon={<UpdateIcon />}
                  size="small"
                  color="success"
                  onClick={handleContactUpdate}
                  data-id={_id}
                >
                  update
                </Button>

                <Button
                  variant="outlined"
                  color="error"
                  size="small"
                  startIcon={<DeleteForeverIcon />}
                  onClick={() => dispatch(deleteContactThunk(_id))}
                >
                  Delete
                </Button>
              </ButtonsSt>
            </WrapSt>
          </ItemSt>
        ))}
      </ListSt>
    </>
  );
}
