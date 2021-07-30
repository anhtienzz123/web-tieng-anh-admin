import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const KEY = "blog";

const blogSlice = createSlice({
  name: KEY,
  initialState: {
    isLoading: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: {},
});

const { reducer, actions } = blogSlice;
export const { setLoading } = actions;
export default reducer;
