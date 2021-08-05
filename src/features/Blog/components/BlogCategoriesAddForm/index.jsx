import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button } from 'antd';
import { setCategoryFormVisible } from 'features/Blog/blogSlice';
import ModalTitle from "components/ModalTitle";
BlogCategoriesAddForm.propTypes = {

};

function BlogCategoriesAddForm(props) {
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const { isCategoryFormVisible } = useSelector((state) => state.blog)
    const dispatch = useDispatch();
    const showModal = () => {
        setVisible(true);
    };

    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setVisible(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false);
        dispatch(setCategoryFormVisible(false));
    };


    return (
        <Modal
            title={<ModalTitle />}
            visible={isCategoryFormVisible}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}

        />

    );
}

export default BlogCategoriesAddForm;