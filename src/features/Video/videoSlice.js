import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const KEY = "video";

const videoSlice = createSlice({
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

const { reducer, actions } = videoSlice;
export const { setLoading } = actions;
export default reducer;
