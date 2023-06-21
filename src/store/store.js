import { configureStore } from '@reduxjs/toolkit';
// import { reducer } from './reducer';
import { listReducer } from './list/listSlice';

// export const store = configureStore({ reducer: reducer });

// ============= По новому сделаю ============== //

export const store = configureStore({
  reducer: {
    contacts: listReducer,
  },
});
