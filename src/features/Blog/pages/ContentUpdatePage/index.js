import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useRouteMatch } from "react-router-dom";
import blogApi from "api/blogApi";
import { Divider, Image } from "antd";
import MyEditor from "components/MyEditor";

ContentUpdatePage.propTypes = {};

function ContentUpdatePage(props) {
  const match = useRouteMatch();
  const { blogId } = match.params;

  const [blog, setBlog] = useState({});
  const { name, slug, image, description, createDate, content, categoryName } =
    blog;

  useEffect(() => {
    const fecthBlog = async () => {
      const blogResult = await blogApi.fetchBlog(blogId);

      setBlog(blogResult);
    };

    fecthBlog();
  }, []);

  return (
    <div id="blog-content-update-page">
      <div>
        {" "}
        <Image src={image} width={400} height={400} />
      </div>
      <div>Tên bài viết: {name} </div>
      <div>Ngày tạo: {createDate}</div>
      <div>Mô tả: {description}</div>

      <Divider orientation="left">Nội dung</Divider>
      <MyEditor />
    </div>
  );
}

export default ContentUpdatePage;
