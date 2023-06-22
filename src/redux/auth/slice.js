import {
  loginThunk,
  logoutThunk,
  refreshUserThunk,
  registerThunk,
} from './operations';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggetIn: false,
  isRefreshing: false,
};

const authSlise = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.user = action.payload.user; // записали в state name, email пользователя
        state.token = action.payload.token; // записали в state token пользователя
        state.isLoggetIn = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggetIn = true;
      })
      .addCase(logoutThunk.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggetIn = false;
      })
      .addCase(refreshUserThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggetIn = true;
      })
      .addMatcher(
        action => {
          return action.type.endsWith('/pending');
        },
        (state, action) => {
          return state;
        }
      )
      .addMatcher(
        action => {
          return action.type.endsWith('/rejected');
        },
        (state, action) => {
          return state;
        }
      );
  },
});

export const authReducer = authSlise.reducer;
