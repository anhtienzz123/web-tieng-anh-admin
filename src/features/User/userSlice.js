import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const KEY = "user";

const userSlice = createSlice({
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

const { reducer, actions } = userSlice;
export const { setLoading } = actions;
export default reducer;
