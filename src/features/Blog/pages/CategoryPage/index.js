import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Pagination, Space } from 'antd';
import BlogCategoriesTable from 'features/Blog/components/BlogCategoriesTable';
import React, { useEffect } from "react";
import { useSelector, useDispatch, } from 'react-redux';
import { fetchListBlogCategories, setSelectedCategoryBlogDefault, setCategoryFormVisible } from 'features/Blog/blogSlice';
import './style.scss';
import BlogCategoriesAddForm from 'features/Blog/components/BlogCategoriesAddForm';

function CategoryPage(props) {
  const { isCategoryFormVisible } = useSelector((state) => state.blog)


  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchListBlogCategories());
  }, []);

  const handleOnClick = () => {
    dispatch(setCategoryFormVisible(true));
    dispatch(setSelectedCategoryBlogDefault());
  };



  return (

    <div className="blog-category-page">
      <Space direction="vertical" style={{ width: "100%" }} size='large'>
        <div className='blog-category-button--add'>
          <Button
            type="primary"
            icon={<PlusCircleOutlined />}
            size='mediunm'
            onClick={handleOnClick}
          >
            Thêm danh mục mới
          </Button>
        </div>

        <div className="blog-category-table">
          <BlogCategoriesTable />
        </div>
      </Space>

      {isCategoryFormVisible && <BlogCategoriesAddForm />}
    </div>
  )
}

export default CategoryPage;
