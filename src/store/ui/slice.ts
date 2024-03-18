import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type UiState = {
  screenIsMobile: boolean;
  appIsFetching: boolean;
  isLightTheme: boolean;
};

export const LIGHT_MODE = 'light';
export const DARK_MODE = 'dark';
export const MODE_KEY = 'themeMode';

const initialState: UiState = {
  screenIsMobile: false,
  appIsFetching: false,
  isLightTheme: localStorage.getItem(MODE_KEY) === LIGHT_MODE ? true : false,
};
const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setScreenIsMobile(state, { payload }: PayloadAction<boolean>) {
      state.screenIsMobile = payload;
    },
    setAppIsFetching(state, { payload }: PayloadAction<boolean>) {
      state.appIsFetching = payload;
    },
    setIsLightTheme(state, { payload }: PayloadAction<boolean>) {
      state.isLightTheme = payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
