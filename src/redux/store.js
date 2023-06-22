import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/slice';
import { authReducer } from './auth/slice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

// 💙💛
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store); // persistor передаем в index.js

// ==================== Store без redux-persist ====================

/*

import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/slice';
import { authReducer } from './auth/slice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: authReducer,
  },
});

*/
