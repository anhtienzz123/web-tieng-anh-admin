import { Button, Divider, Pagination, Space } from "antd";
import {
  fetchListBlogCategories,
  fetchListBlogs,
  setFormVisible,
  setSelectedBlogDefault,
} from "features/Blog/blogSlice";
import BlogAddForm from "features/Blog/components/BlogAddForm";
import BlogSearch from "features/Blog/components/BlogSearch";
import BlogsTable from "features/Blog/components/BlogsTable";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import commonFuc from "utils/commonFuc";
import "./style.scss";

function MainPage(props) {
  const dispatch = useDispatch();
  const { blogsPage, blogs, isFormVisible } = useSelector(
    (state) => state.blog
  );
  const { page, totalPages } = blogsPage;
  const { blogCategories } = useSelector((state) => state.blog);

  const [query, setQuery] = useState({
    name: "",
    categorySlug: "",
    page: 0,
    size: 10,
  });

  const handleFormVisible = (status) => {
    dispatch(setFormVisible(status));
  };

  const handleAddClick = () => {
    handleFormVisible(true);
    dispatch(setSelectedBlogDefault());
  };

  const handleSearchChange = (queryValue) => {
    const { name, categorySlug } = queryValue;

    setQuery({ ...query, name, categorySlug });
  };

  const handlePageChange = (page, pageSize) => {
    setQuery({ ...query, page: page - 1 });
  };

  useEffect(() => {
    dispatch(fetchListBlogs(query));
  }, [query]);

  useEffect(() => {
    dispatch(fetchListBlogCategories());
  }, []);

  return (
    <div id="blog-main-page">
      <div>
        <Button type="primary" onClick={handleAddClick}>
          Thêm blog
        </Button>
      </div>
      <Divider orientation="left">Tìm kiếm</Divider>
      <BlogSearch categories={blogCategories} onChange={handleSearchChange} />
      <Divider></Divider>
      <Space direction="vertical" style={{ width: "100%" }}>
        <div className="blog-main-page__table">
          <BlogsTable
            blogs={commonFuc.addSTTForList(blogs, query.page * query.size)}
          />
        </div>
        <div style={{ textAlign: "right" }}>
          <Pagination
            defaultCurrent={page + 1}
            total={totalPages * 10}
            onChange={handlePageChange}
            showSizeChanger={false}
          />
        </div>
      </Space>

      {isFormVisible && <BlogAddForm onFormVisble={handleFormVisible} />}
    </div>
  );
}

export default MainPage;
