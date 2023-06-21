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
  extraReducers: {},
});

export const authReducer = authSlise.reducer;
