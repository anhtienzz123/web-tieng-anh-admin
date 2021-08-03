import axiosClient from "./axiosClient";

const ADMIN_URL = "/admin/blogs";

const blogApi = {
  fetchListBlogs: (name, categorySlug, page, size) => {
    return axiosClient.get("/blogs", {
      params: {
        name,
        categorySlug,
        page,
        size,
      },
    });
  },

  fetchBlog: (id) => {
    return axiosClient.get(`${ADMIN_URL}/${id}`);
  },

  addBlog: (blog) => {
    return axiosClient.post(ADMIN_URL, blog);
  },

  updateBlog: (blogId, blog) => {
    return axiosClient.put(`${ADMIN_URL}/${blogId}`, blog);
  },

  updateBlogImage: (blogId, image) => {
    return axiosClient.put(`${ADMIN_URL}/${blogId}/image`, image);
  },
  deleteBlog: (blogId) => {
    return axiosClient.delete(`${ADMIN_URL}/${blogId}`);
  },
};

export default blogApi;
