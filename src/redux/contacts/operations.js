import { createAsyncThunk } from '@reduxjs/toolkit';
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
