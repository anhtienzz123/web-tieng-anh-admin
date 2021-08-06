import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button } from 'antd';
import { setCategoryFormVisible, addCategory, updateCategory } from 'features/Blog/blogSlice';
import ModalTitle from "components/ModalTitle";
import { FastField, Form, Formik } from "formik";
import InputField from "customfield/InputField";
import { categoryValidation } from 'features/Blog/initialAndValidateValues';
import blogCategoryApi from 'api/blogCategoryApi';
import { Divider, message, Space } from "antd";
BlogCategoriesAddForm.propTypes = {


};

function BlogCategoriesAddForm(props) {

    const [confirmLoading, setConfirmLoading] = useState(false);
    const { selectedCategoryBlog } = useSelector((state) => state.blog)
    const dispatch = useDispatch();

    const handleCancel = () => {
        dispatch(setCategoryFormVisible(false));
    };


    const [statusAction, setStatusAction] = useState(false);
    const handleSubmit = async (values, actions) => {
        const { id, name } = values;
        const category = { ...values };

        let CategoryIdWasSave = id;
        try {
            if (id) {
                await handleUpdate(category, actions);
            } else {
                await handleAddCategory(category, actions);

            }
        } catch (error) {
            console.log("loi");
        }

    };

    const handleAddCategory = async (blog, actions) => {
        const serverResult = await blogCategoryApi.addCategory(blog);
        setConfirmLoading(false)
        if (serverResult.error) {
            actions.setErrors(serverResult.error);
            throw new Error();
        }

        message.success("Thêm thành công");
        dispatch(addCategory(serverResult));
        dispatch(setCategoryFormVisible(false));
        return serverResult.id;
    };


    const handleUpdate = async (category, actions) => {
        const serverResult = await blogCategoryApi.updateCategory(category.id, category);
        setConfirmLoading(false)
        if (serverResult.error) {
            actions.setErrors(serverResult.errors);
            throw new Error();
        }
        message.success("Cập nhật thành công");
        dispatch(updateCategory(serverResult));
        dispatch(setCategoryFormVisible(false));
    }



    const formRef = useRef();

    const handleSubmitClick = () => {
        if (formRef.current) {
            formRef.current.handleSubmit();
            setConfirmLoading(true);
        }
    }


    return (
        <Modal
            title={<ModalTitle title={selectedCategoryBlog.id && 'Cập nhật'} />}
            visible={true}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
            onOk={handleSubmitClick}

        >
            <Formik
                initialValues={selectedCategoryBlog}
                onSubmit={handleSubmit}
                innerRef={formRef}
                validationSchema={categoryValidation.validationSchema}
                enableReinitialize={true}
            >
                {(formikProps) => {
                    const { values, errors, touched, isSubmitting } = formikProps;
                    console.log({ values, errors, touched, isSubmitting });
                    return (
                        <Form>
                            <FastField
                                name='name'
                                component={InputField}
                                title="Tên Category"
                                titleCol={6}
                                inputCol={18}
                                isRequire={true}
                                placeholder='Ví dụ: Ngữ Pháp'
                            />
                        </Form>
                    )
                }}

            </Formik>
        </Modal>

    );
}

export default BlogCategoriesAddForm;