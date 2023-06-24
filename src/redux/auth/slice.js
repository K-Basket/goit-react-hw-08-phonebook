import { createSlice } from '@reduxjs/toolkit';
import {
  loginThunk,
  logoutThunk,
  refreshUserThunk,
  registerThunk,
} from './operations';

const handlePanding = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handleRegisterThunk = (state, { payload }) => {
  state.user = payload.user; // записали в state name, email пользователя
  state.token = payload.token; // записали в state token, token пользователя
  state.isLoggetIn = true;

  console.log('registerThunk/payload :>> ', payload);
};

const handleLoginThunk = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggetIn = true;
};

const handleLogoutThunk = (state, { payload }) => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggetIn = false;
};

const handleRefreshUserThunk = (state, { payload }) => {
  state.user = payload;
  state.isLoggetIn = true;
};

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggetIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

const authSlise = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(registerThunk.fulfilled, handleRegisterThunk)
      .addCase(loginThunk.fulfilled, handleLoginThunk)
      .addCase(logoutThunk.fulfilled, handleLogoutThunk)
      .addCase(refreshUserThunk.fulfilled, handleRefreshUserThunk)
      .addMatcher(action => {
        return action.type.endsWith('/pending');
      }, handlePanding)
      .addMatcher(action => {
        return action.type.endsWith('/rejected');
      }, handleRejected);
  },
});

export const authReducer = authSlise.reducer;
