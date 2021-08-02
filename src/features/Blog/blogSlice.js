import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { act } from "@testing-library/react";
import blogApi from "api/blogApi";
import blogCategoryApi from "api/blogCategory";
import { blogValues } from "./initialAndValidateValues";

const KEY = "blog";

export const fetchListBlogs = createAsyncThunk(
  `${KEY}/fetchListBlogs`,
  async (params, thunkApi) => {
    const { name, categorySlug, page, size } = params;

    const blogs = await blogApi.fetchListBlogs(name, categorySlug, page, size);

    return blogs;
  }
);

export const fetchListBlogCategories = createAsyncThunk(
  `${KEY}/fetchListBlogCategories`,
  async (params, thunkApi) => {
    const categories = await blogCategoryApi.fetchListCategories();

    return categories;
  }
);

export const fetchBlog = createAsyncThunk(
  `${KEY}/fetchBlog`,
  async (params, thunkApi) => {
    const { blogId } = params;
    const blog = await blogApi.fetchBlog(blogId);

    return blog;
  }
);

const blogSlice = createSlice({
  name: KEY,
  initialState: {
    isLoading: false,
    blogs: [],
    blogCategories: [],
    isFormVisible: false,
    selectedBlog: blogValues.initial,
  },
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setSelectedBlogDefault: (state, action) => {
      state.selectedBlog = blogValues.initial;
    },
    setFormVisible: (state, action) => {
      state.isFormVisible = action.payload;
    },
  },
  extraReducers: {
    [fetchListBlogs.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.blogs = action.payload;
    },
    [fetchListBlogs.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchListBlogCategories.fulfilled]: (state, action) => {
      state.blogCategories = action.payload;
    },
    [fetchBlog.fulfilled]: (state, action) => {
      state.selectedBlog = action.payload;
    },
  },
});

const { reducer, actions } = blogSlice;
export const { setLoading, setSelectedBlogDefault, setFormVisible } = actions;
export default reducer;
