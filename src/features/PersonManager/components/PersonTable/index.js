import { Input, Space, Table } from "antd";
import { fetchPersons } from "features/PersonManager/personManagerSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const { Search } = Input;

PersonTable.propTypes = {};

PersonTable.defaultProps = {};

function PersonTable(props) {
  const dispatch = useDispatch();

  const { persons } = useSelector((state) => state.personManager);

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
  ];

  useEffect(() => {
    dispatch(fetchPersons({}));
  }, []);

  const onSearch = (value) => {
    dispatch(
      fetchPersons({
        name: value,
      })
    );
  };

  return (
    <div>
      <Space size="small" direction="vertical" style={{ width: "100%" }}>
        <Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
          onSearch={onSearch}
        />

        <Table dataSource={persons} columns={columns} />
      </Space>
    </div>
  );
}

export default PersonTable;
