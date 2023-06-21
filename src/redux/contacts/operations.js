// 💙💛
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://648d87dc2de8d0ea11e7f308.mockapi.io/contacts';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async () => {
    try {
      const { data } = await axios();

      return data;
    } catch (error) {
      console.warn(error);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    try {
      const { data } = await axios.post(``, contact);

      return data;
    } catch (error) {
      console.warn(error);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    try {
      const { data } = await axios.delete(`/${id}`);

      return data;
    } catch (error) {
      console.warn(error);
    }
  }
);
