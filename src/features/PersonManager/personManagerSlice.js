import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import studentApi from "api/personApi";

const KEY = "personManager";

export const fetchPersons = createAsyncThunk(
  `${KEY}/fetchPersons`,
  async (params, thunkApi) => {
    const { name } = params;
    const data = await studentApi.getPersons(name);
    return data;
  }
);

const personManagerSlice = createSlice({
  name: KEY,
  initialState: {
    isLoading: false,
    persons: [],
  },
  reducers: {},
  extraReducers: {
    // khi đang xử lý
    [fetchPersons.pending]: (state, action) => {
      state.isLoading = true;
    },
    // khi thành công
    [fetchPersons.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.persons = action.payload;
    },
    // khi thất bại
    [fetchPersons.rejected]: (state, action) => {},
  },
});

const { reducer, actions } = personManagerSlice;

export default reducer;
