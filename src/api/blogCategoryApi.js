import axiosClient from "./axiosClient";

const BASE_URL = '/admin/blogs/categories';

const blogCategoryApi = {
  fetchListCategories: () => {
    return axiosClient.get("/blog-categories");
  },

  addCategory: (category) => {
    return axiosClient.post(BASE_URL, category);
  },

  updateCategory: (id, category) => {
    return axiosClient.put(`${BASE_URL}/${id}`, category);
  },

  deleteCategory: (id) => {
    return axiosClient.delete(`${BASE_URL}/${id}`);
  }


};

export default blogCategoryApi;
