import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import videoApi from "api/videoApi";
import { videoValues } from 'features/Video/initialAndValidateValues';

const KEY = "video";


export const fetchVideoCategory = createAsyncThunk(`${KEY}/fetchCategoryVideo`, async (params, thunkApi) => {
  const videos = await videoApi.fetchCategoryVideo();
  return videos;
});



const videoSlice = createSlice({
  name: KEY,
  initialState: {
    isLoading: false,
    isCategoryFormVisible: false,
    selectedCategoryVideo: videoValues.initial,
    videoCategory: [],
  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setCategoryFormVisible: (state, action) => {
      state.isCategoryFormVisible = action.payload;
    },
    setDefaultCategory: (state, action) => {
      state.selectedCategoryVideo = videoValues.initial;
    },
  },
  extraReducers: {
    [fetchVideoCategory.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchVideoCategory.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [fetchVideoCategory.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.videoCategory = action.payload;
    },




  },
});

const { reducer, actions } = videoSlice;
export const { setLoading, setCategoryFormVisible, setDefaultCategory } = actions;
export default reducer;
