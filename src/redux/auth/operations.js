// 💙💛 resource backend -- https://connections-api.herokuapp.com/docs/#/
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:3001'; // ставим по дефолту базовый URL
axios.defaults.baseURL = 'https://hw02-express.onrender.com'; // ставим по дефолту базовый URL

// функция для авторизации (прикладывания токена) пользователя при запросах на backend.
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// функция для deавторизации пользователя (очистка токена).
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

// credentials (реквизиты для входа) -- сюда прилетает объект с данными из input
export const registerThunk = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/api/auth/register', credentials);
      setAuthHeader(data.token); // прикладываем токен к http-запросу

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// // credentials (реквизиты для входа) -- сюда прилетает объект с данными из input
// export const registerThunk = createAsyncThunk(
//   'auth/register',
//   async (credentials, thunkAPI) => {
//     try {
//       const { data } = await axios.post('/users/signup', credentials);
//       setAuthHeader(data.token); // прикладываем токен к http-запросу

//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/api/auth/login', credentials);
      // console.log('dataLoginThunk :>> ', data);
      setAuthHeader(data.token); // прикладываем токен к http-запросу
      // setAuthHeader(data.token); // прикладываем токен к http-запросу

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const loginThunk = createAsyncThunk(
//   'auth/login',
//   async (credentials, thunkAPI) => {
//     try {
//       const { data } = await axios.post('/users/login', credentials);
//       setAuthHeader(data.token); // прикладываем токен к http-запросу

//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await axios.post('/api/auth/logout');
      clearAuthHeader(); // очистка токина на бекенде
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// позволяет при перезагрузке не разлогиниваться
export const refreshUserThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    // проверка наличия токена в redux state (т.е. проверяем залогинен user или нет)
    const state = thunkAPI.getState(); // получем весь state из Redux (thunkAPI позволяет это сделать)
    const token = state.auth.token; // аналогичная запись --> /const { token } = thunkAPI.getState().auth;/

    if (!token) {
      return thunkAPI.rejectWithValue('No valid token');
    } // если user не залогинен,тогда выйти

    try {
      setAuthHeader(token); // если user залогинен, прикладываем токен к http-запросу
      const { data } = await axios.get('/api/auth/current'); // http-запрос на refreshUser

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
