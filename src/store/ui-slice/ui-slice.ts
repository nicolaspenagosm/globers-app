import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type UiState = {
  screenIsMobile: boolean;
  appIsFetching: boolean;
};

const initialState: UiState = {
  screenIsMobile: false,
  appIsFetching: false,
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
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
