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

  const { _id, name, phone } = payload;
  const contact = state.items.find(el => el._id === _id);

  contact.name = name;
  contact.phone = phone;

  state.error = '';
};

const handleDelete = (state, { payload }) => {
  state.isLoading = false;
  state.items = state.items.filter(el => el._id !== payload.id);
  state.error = '';
};

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  filter: '',
  isUpdate: false,
  contactUpdate: {},
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
    setIsUpdate: (state, action) => {
      state.isUpdate = action.payload;
    },
    setContactUpdate: (state, action) => {
      state.contactUpdate = action.payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { setFilter, setContactUpdate, setIsUpdate } =
  contactsSlice.actions;
