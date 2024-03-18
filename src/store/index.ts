import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/slice';
import uiReducer from './ui/slice';
import overviewReducer from './overview/slice';

import { useDispatch } from 'react-redux';

const store = configureStore({
  reducer: { auth: authReducer, ui: uiReducer, overview: overviewReducer },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
