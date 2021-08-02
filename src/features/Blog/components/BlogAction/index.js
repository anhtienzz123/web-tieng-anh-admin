import React from "react";
import PropTypes from "prop-types";
import { Menu, Dropdown, Button, Space } from "antd";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchBlog, setFormVisible } from "features/Blog/blogSlice";

BlogAction.propTypes = {
  blogId: PropTypes.number,
};

BlogAction.defaultProps = {
  blogId: 0,
};

function BlogAction({ blogId }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleContentUpdate = () => {
    history.push(`/admin/blogs/${blogId}/update-content`);
  };

  const handleUpdate = () => {
    dispatch(fetchBlog({ blogId }));
    dispatch(setFormVisible(true));
  };

  const menu = (
    <Menu>
      <Menu.Item>Xem chi tiết</Menu.Item>
      <Menu.Divider />
      <Menu.Item onClick={handleUpdate}>Sửa thông tin</Menu.Item>
      <Menu.Divider />
      <Menu.Item onClick={handleContentUpdate}>Sửa nội dung</Menu.Item>
      <Menu.Divider />
      <Menu.Item>Xóa</Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} placement="bottomLeft">
      <Button type="primary" ghost>
        Thao tác
      </Button>
    </Dropdown>
  );
}

export default BlogAction;
