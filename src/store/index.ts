import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth-slice/auth-slice';

import { useDispatch } from 'react-redux';

const store = configureStore({
  reducer: { auth: authReducer },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
