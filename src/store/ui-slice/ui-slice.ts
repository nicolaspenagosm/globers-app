import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type UiState = {
  screenIsMobile: boolean;
};

const initialState: UiState = {
  screenIsMobile: false,
};
const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setScreenIsMobile(state, { payload }: PayloadAction<boolean>) {
      state.screenIsMobile = payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
