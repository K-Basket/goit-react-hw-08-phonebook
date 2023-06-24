import { createSlice } from '@reduxjs/toolkit';
import {
  addContactThunk,
  deleteContactThunk,
  fetchContactsThunk,
  patchContactThunk,
} from './operations';

const handlePanding = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handleFetchContacts = (state, { payload }) => {
  state.isLoading = false;
  state.items = payload;
  state.error = '';
};

const handleAddContact = (state, { payload }) => {
  state.isLoading = false;
  state.items.push(payload);
  state.error = '';
};

const handlePatchContact = (state, { payload }) => {
  state.isLoading = false;

  const { id, name, number } = payload;
  const contact = state.items.find(el => el.id === id);

  contact.name = name;
  contact.number = number;

  state.error = '';

  // console.log('payload Patch :>> ', payload);
};

const handleDelete = (state, { payload }) => {
  state.isLoading = false;
  state.items = state.items.filter(el => el.id !== payload.id);
  state.error = '';
};

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchContactsThunk.fulfilled, handleFetchContacts)
      .addCase(addContactThunk.fulfilled, handleAddContact)
      .addCase(patchContactThunk.fulfilled, handlePatchContact)
      .addCase(deleteContactThunk.fulfilled, handleDelete)
      .addMatcher(action => {
        return action.type.endsWith('/pending'); // ко всем .pending применится handlePanding
      }, handlePanding)
      .addMatcher(action => {
        return action.type.endsWith('/rejected'); // ко всем .rejected применится handleRejected
      }, handleRejected);
  },

  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { setFilter, setIsLoading } = contactsSlice.actions;
