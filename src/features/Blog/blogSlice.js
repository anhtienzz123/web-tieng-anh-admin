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

    console.log("blog: ", blog);
    return blog;
  }
);

export const deleteBlog = createAsyncThunk(
  `${KEY}/deleteBlog`,
  async (params, thunkApi) => {
    const { blogId } = params;

    await blogApi.deleteBlog(blogId);

    return blogId;
  }
);

const blogSlice = createSlice({
  name: KEY,
  initialState: {
    isLoading: false,
    blogs: [],
    blogsPage: {},
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
    addBlog: (state, action) => {
      state.blogs.push(action.payload);
    },
    updateBlog: (state, action) => {
      const blog = action.payload;

      const index = state.blogs.findIndex((blogEle) => blogEle.id === blog.id);

      state.blogs[index] = blog;
    },
  },
  extraReducers: {
    [fetchListBlogs.fulfilled]: (state, action) => {
      state.isLoading = false;

      state.blogsPage = action.payload;
      state.blogs = action.payload.data;
    },
    [fetchListBlogs.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchListBlogCategories.fulfilled]: (state, action) => {
      state.blogCategories = action.payload;
    },
    [fetchBlog.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.selectedBlog = action.payload;
    },
    [fetchBlog.pending]: (state, action) => {
      state.isLoading = true;
    },
    [deleteBlog.pending]: (state, action) => {
      state.isLoading = true;
    },
    [deleteBlog.fulfilled]: (state, action) => {
      state.isLoading = false;

      state.blogs = state.blogs.filter(
        (blogEle) => blogEle.id !== action.payload
      );
    },
    [deleteBlog.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

const { reducer, actions } = blogSlice;
export const {
  setLoading,
  setSelectedBlogDefault,
  setFormVisible,
  addBlog,
  updateBlog,
} = actions;
export default reducer;
