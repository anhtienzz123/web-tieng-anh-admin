import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import videoApi from "api/videoApi";
import { videoValues } from 'features/Video/initialAndValidateValues';

const KEY = "video";


export const fetchVideoCategory = createAsyncThunk(`${KEY}/fetchCategoryVideo`, async (params, thunkApi) => {
  const videos = await videoApi.fetchCategoryVideo();
  return videos;
});

export const deleteCategory = createAsyncThunk(
  'deleteVideoCategory',
  async (params, thunkApi) => {
    const { categoryId } = params;
    await videoApi.deleteCategoryVideo(categoryId);
    return categoryId;
  }
)



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

    addCategoryVideo: (state, action) => {
      state.videoCategory.push(action.payload);
    },
    setCategoryUpdate: (state, action) => {
      state.selectedCategoryVideo = action.payload;

    },

    updateCategoryVideo: (state, action) => {
      const video = action.payload;

      const index = state.videoCategory.findIndex((videoEle) => videoEle.id === video.id);

      state.videoCategory[index] = video;
    }
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
    [deleteCategory.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.videoCategory = state.videoCategory.filter(
        element => element.id !== action.payload
      );
    },

    [deleteCategory.pending]: (state, action) => {
      state.isLoading = true;
    },

    [deleteCategory.rejected]: (state, action) => {
      state.isLoading = false;
    },




  },
});

const { reducer, actions } = videoSlice;
export const { setLoading, setCategoryUpdate, updateCategoryVideo, addCategoryVideo, setCategoryFormVisible, setDefaultCategory } = actions;
export default reducer;
