import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducers = persistReducer(
    {
      key: 'CONSUMIR_API',
      storage,
      whitelist: ['auth'],
    },
    reducers,
  );

  return persistedReducers;
};
