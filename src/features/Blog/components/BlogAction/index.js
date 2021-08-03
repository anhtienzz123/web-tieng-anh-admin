import React from "react";
import PropTypes from "prop-types";
import { Menu, Dropdown, Button, Modal, Typography, message } from "antd";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteBlog, fetchBlog, setFormVisible } from "features/Blog/blogSlice";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { unwrapResult } from "@reduxjs/toolkit";

const { confirm, Text } = Modal;

BlogAction.propTypes = {
  blogId: PropTypes.number,
};

BlogAction.defaultProps = {
  blogId: 0,
};

function BlogAction({ blogId }) {
  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(fetchBlog({ blogId }));
    dispatch(setFormVisible(true));
  };

  const handleDelete = async () => {
    confirm({
      icon: <ExclamationCircleOutlined />,
      content: "Bạn có chắc chắn xóa không ?",
      async onOk() {
        try {
          unwrapResult(await dispatch(deleteBlog({ blogId })));
          message.success("Xóa thành công");
        } catch (error) {
          message.success("Xóa thất bại");
        }
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const menu = (
    <Menu>
      <Menu.Item>Xem chi tiết</Menu.Item>
      <Menu.Divider />
      <Menu.Item onClick={handleUpdate}>Sửa thông tin</Menu.Item>

      <Menu.Divider />
      <Menu.Item onClick={handleDelete}>Xóa</Menu.Item>
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
