import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Col, Row, Select, Typography, Input } from "antd";

const { Text } = Typography;
const { Option } = Select;

BlogSearch.propTypes = {
  categories: PropTypes.array.isRequired,
  onChange: PropTypes.array.isRequired,
};

BlogSearch.defaultProps = {
  categories: [],
  onChange: null,
};

function BlogSearch({ categories, onChange }) {
  const [name, setName] = useState("");
  const [categorySlug, setCategorySlug] = useState("");

  const handleCategoryChange = (categoryId) => {
    if (categoryId === 0) {
      setCategorySlug("");
      return;
    }

    const index = categories.findIndex(
      (categoryEle) => categoryEle.id === categoryId
    );

    setCategorySlug(categories[index].slug);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    onChange({ name, categorySlug });
  }, [name, categorySlug]);

  return (
    <Row gutter={16}>
      <Col span={8} offset={4}>
        <Text strong>Tên blog: </Text>{" "}
        <Input
          name="name"
          style={{ width: "80%" }}
          onChange={handleNameChange}
        />
      </Col>

      <Col span={8}>
        <Text strong>Danh mục: </Text>{" "}
        <Select
          defaultValue={0}
          style={{ width: "80%" }}
          onChange={handleCategoryChange}
        >
          <Option value={0} key={-1}>
            -- Tất cả --
          </Option>
          {categories.map((categoryEle, index) => {
            const { id, name } = categoryEle;
            return (
              <Option value={id} key={index}>
                {name}
              </Option>
            );
          })}
        </Select>
      </Col>
    </Row>
  );
}

export default BlogSearch;
