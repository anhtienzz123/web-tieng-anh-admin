import axiosClient from "./axiosClient";

const blogCategoryApi = {
  fetchListCategories: () => {
    return axiosClient.get("/blog-categories");
  },
};

export default blogCategoryApi;
