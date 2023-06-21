import { createSlice } from '@reduxjs/toolkit';
import {
  addContactThunk,
  deleteContactThunk,
  fetchContactsThunk,
} from './operations';

const handlePanding = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.items = payload;
  state.error = '';
};

const handleAddContact = (state, { payload }) => {
  state.isLoading = false;
  state.items.push(payload);
  state.error = '';
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
      .addCase(fetchContactsThunk.fulfilled, handleFulfilled)
      .addCase(addContactThunk.fulfilled, handleAddContact)
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
export const { setFilter } = contactsSlice.actions;
