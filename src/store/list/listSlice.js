import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, getContacts } from 'api/contactsApi';

// делаем запрос на backend методом createAsyncThunk, создает автоматом экшены pending, fulfilled, rejected
export const fetchContactsThunk = createAsyncThunk('contacts/fetchAll', () => {
  return getContacts(); // Запрос на backend
});

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  contactId => {
    return deleteContact(contactId); // Запрос на backend
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  contact => {
    return addContact(contact); // 💙💛 contact получает данные и функция отправляет на backend и возвращает объект. Запрос на backend
  }
);

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

export const listSlice = createSlice({
  name: 'contacts',
  initialState: initialState,

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

export const listReducer = listSlice.reducer;
export const { setFilter } = listSlice.actions;
