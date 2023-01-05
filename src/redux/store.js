import { configureStore } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

import { phonebookReducer } from './phonebookSlice';

// const persistConfig = {
//   key: 'phonebook',
//   storage,
//   blacklist: ['filter'],
// };

// const persistedReducer = persistReducer(persistConfig, phonebookReducer);

export const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// export const persistor = persistStore(store);
