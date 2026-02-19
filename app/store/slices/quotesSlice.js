import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  quotes: [],
  loading: false,
  error: null
};

const quotesSlice = createSlice({
  name: 'quotes',
  initialState,
  reducers: {
    fetchQuotesRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchQuotesSuccess: (state, action) => {
      state.loading = false;
      state.quotes = action.payload;
    },
    fetchQuotesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const {
  fetchQuotesRequest,
  fetchQuotesSuccess,
  fetchQuotesFailure
} = quotesSlice.actions;

export default quotesSlice.reducer;
