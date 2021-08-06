import { DeleteTwoTone, EditTwoTone, InfoCircleTwoTone } from '@ant-design/icons';
import { Menu, Dropdown, Button, Modal, Typography, message } from "antd";
import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryUpdate, setCategoryFormVisible, deleteCategory } from 'features/Blog/blogSlice';
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { unwrapResult } from '@reduxjs/toolkit';

BlogCategoriesAction.propTypes = {
    categoryId: PropTypes.number,
};


BlogCategoriesAction.defaultProps = {
    categoryId: require,
}

const { confirm, Text } = Modal;


function BlogCategoriesAction(props) {
    const { categoryId } = props;
    const { blogCategories } = useSelector((state) => state.blog);
    const dispatch = useDispatch()

    const handleUpdate = () => {
        const category = blogCategories.find(c => c.id === categoryId);
        dispatch(setCategoryUpdate(category));
        dispatch(setCategoryFormVisible(true));
    }

    const handleDelete = () => {
        confirm({

            content: "Bạn có chắc chắn xóa không ?",
            async onOk() {
                try {
                    unwrapResult(await dispatch(deleteCategory({ categoryId })));
                    message.success(`Xóa thành công`);
                } catch (error) {
                    message.error("Xóa thất bại");
                }
            }
        })
    }

    const menu = (
        <Menu>
            <Menu.Item onClick={handleUpdate} >
                <div className="menu-adjust--center">

                    <EditTwoTone twoToneColor='#ad8b00' />
                    <span className='menu-title'>
                        Sửa thông tin
                    </span>
                </div>
            </Menu.Item>

            <Menu.Divider />
            <Menu.Item onClick={handleDelete} >
                <div className="menu-adjust--center">

                    <DeleteTwoTone twoToneColor='#a8071a' />
                    <span className='menu-title'>Xóa</span>
                </div>
            </Menu.Item>
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

export default BlogCategoriesAction;