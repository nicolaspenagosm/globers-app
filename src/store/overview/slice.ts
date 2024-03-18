import { createSlice } from '@reduxjs/toolkit';
import { OverviewState } from './types';
import { fetchOverviewData } from './actions';
import { HTTP_STATUS } from '../../resources/http';

const initialState: OverviewState = {
  overviewRequestStatus: null,
  firstFavoritesContacs: [],
  firstContacts: [],
  errorMsg: null,
};

const overviewSlice = createSlice({
  name: 'overview',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOverviewData.pending, (state) => {
      state.overviewRequestStatus = HTTP_STATUS.PENDING;
    }),
      builder.addCase(fetchOverviewData.fulfilled, (state, { payload }) => {
        state.overviewRequestStatus = HTTP_STATUS.FULFILLED;
        state.firstContacts = payload.contacts;
        state.firstFavoritesContacs = payload.favContacts;
      }),
      builder.addCase(fetchOverviewData.rejected, (state, { payload }) => {
        state.overviewRequestStatus = HTTP_STATUS.REJECTED;
        state.errorMsg = payload!.errorMsg;
      });
  },
});

export const overviewActions = overviewSlice.actions;
export default overviewSlice.reducer;

/*
extraReducers: (builder) => {
    builder.addCase(signUp.pending, (state) => {
      state.authRequestSatus = HTTP_STATUS.PENDING;
    });
    builder.addCase(login.pending, (state) => {
      state.authRequestSatus = HTTP_STATUS.PENDING;
    });
    export const authActions = authSlice.actions;
export default authSlice.reducer;
*/
