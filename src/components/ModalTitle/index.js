import React from "react";
import PropTypes from "prop-types";
import { PlusOutlined } from "@ant-design/icons";
import { Typography } from "antd";

const { Title } = Typography;

ModalTitle.propTypes = {
  title: PropTypes.string,
};

ModalTitle.defaultProps = {
  title: "Thêm mới",
};

function ModalTitle(props) {
  const { title } = props;

  return (
    <Title level={4} className="common-color" style={{ color: "#007c7e" }}>
      <PlusOutlined /> &nbsp;
      {title.toUpperCase()}
    </Title>
  );
}

export default ModalTitle;
