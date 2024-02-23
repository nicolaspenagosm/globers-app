import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth-slice/auth-slice';
import uiReducer from './ui-slice/ui-slice';

import { useDispatch } from 'react-redux';

const store = configureStore({
  reducer: { auth: authReducer, ui: uiReducer },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
