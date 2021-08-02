import React from "react";
import PropTypes from "prop-types";
import { Table } from "antd";
import commonFuc from "utils/commonFuc";
import BlogAction from "../BlogAction";

BlogsTable.propTypes = {
  blogs: PropTypes.array,
};

BlogsTable.defaultProps = {
  blogs: [],
};

function BlogsTable({ blogs }) {
  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
      key: "stt",
    },
    {
      title: "Tên bài viết",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Ngày tạo",
      dataIndex: "createDate",
      key: "createDate",
    },
    {
      title: "Thao tác",
      key: "action",
      render: (text, record) => <BlogAction blogId={record.id} />,
    },
  ];
  return <Table dataSource={blogs} columns={columns} pagination={false} />;
}

export default BlogsTable;
