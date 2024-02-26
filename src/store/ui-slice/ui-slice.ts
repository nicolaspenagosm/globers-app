import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type UiState = {
  screenIsMobile: boolean;
  appIsFetching: boolean;
  isLightTheme: boolean;
};

const initialState: UiState = {
  screenIsMobile: false,
  appIsFetching: false,
  isLightTheme: true,
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
    setIsLightTheme(state, {payload}:PayloadAction<boolean>){
      state.isLightTheme = payload;
    }
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
