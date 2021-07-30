import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const KEY = "exam";

const examSlice = createSlice({
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

const { reducer, actions } = examSlice;
export const { setLoading } = actions;
export default reducer;
