import React from 'react';
import PropTypes from 'prop-types';
import { Table, Tag, Space } from 'antd';
import BlogCategoriesAction from '../BlogCategoriesAction';
import { useSelector } from 'react-redux';

BlogCategoriesTable.propTypes = {

};

const columns = [
    {
        title: 'STT',
        dataIndex: 'stt',
        key: 'stt',

    },
    {
        title: 'Tên danh mục',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '',
        dataIndex: 'action',
        key: 'action',
        align: 'center',
        render: (text, record) => <BlogCategoriesAction categoryId={record.key} />,
    },

];

function BlogCategoriesTable(props) {
    const { blogCategories } = useSelector((state) => state.blog);
    const data = []
    if (blogCategories.length > 0) {
        blogCategories.forEach((element, index) => {
            let temp = {
                key: element.id,
                name: element.name,
                stt: index + 1
            };
            data.push(temp);
        })
    }
    return (
        <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            scroll={{ y: 420 }}
            style={{ height: '490px' }}
        />
    );
}

export default BlogCategoriesTable;