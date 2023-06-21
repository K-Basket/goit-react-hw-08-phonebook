import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios('/contacts');

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts', contact);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const fetchContactsThunk = createAsyncThunk(
//   'contacts/fetchAll',
//   async () => {
//     try {
//       const { data } = await axios(
//         'https://648d87dc2de8d0ea11e7f308.mockapi.io/contacts'
//       );

//       return data;
//     } catch (error) {
//       console.warn(error);
//     }
//   }
// );

// export const addContactThunk = createAsyncThunk(
//   'contacts/addContact',
//   async contact => {
//     try {
//       const { data } = await axios.post(
//         'https://648d87dc2de8d0ea11e7f308.mockapi.io/contacts',
//         contact
//       );

//       return data;
//     } catch (error) {
//       console.warn(error);
//     }
//   }
// );

// export const deleteContactThunk = createAsyncThunk(
//   'contacts/deleteContact',
//   async id => {
//     try {
//       const { data } = await axios.delete(
//         `https://648d87dc2de8d0ea11e7f308.mockapi.io/contacts/${id}`
//       );

//       return data;
//     } catch (error) {
//       console.warn(error);
//     }
//   }
// );
