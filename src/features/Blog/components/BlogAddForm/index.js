import { Divider, message, Space } from "antd";
import Modal from "antd/lib/modal/Modal";
import blogApi from "api/blogApi";
import ModalTitle from "components/ModalTitle";
import MyEditor from "components/MyEditor";
import ImageField from "customfield/ImageField";
import InputField from "customfield/InputField";
import SelectedField from "customfield/SelectField";
import { setLoading } from "features/Blog/blogSlice";
import { blogValues } from "features/Blog/initialAndValidateValues";
import { FastField, Form, Formik } from "formik";
import PropTypes from "prop-types";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

BlogAddForm.propTypes = {
  onFormVisble: PropTypes.func.isRequired,
};

BlogAddForm.defaultProps = {
  onFormVisble: null,
};

function BlogAddForm({ onFormVisble }) {
  const dispatch = useDispatch();
  const { blogCategories, selectedBlog } = useSelector((state) => state.blog);

  const formRef = useRef();

  const handleSubmitClick = () => {
    if (formRef.current) {
      formRef.current.handleSubmit();
    }
  };

  const handleFormSubmit = async (values, actions) => {
    dispatch(setLoading(true));
    const { id, name, description, categoryId, image } = values;

    const blog = { id, name, description, categoryId };

    let blogIdWasSave = id;
    // cập nhật
    if (id) {
      const resData = await blogApi.updateBlog(id, blog);

      // nếu như có lỗi
      if (resData.error) actions.setErrors(resData.error);
      else message.success("Cập nhật thành công");
    } else {
      // thêm
      const resData = await blogApi.addBlog(blog);
      blogIdWasSave = resData.id;
      // nếu như có lỗi
      if (resData.error) actions.setErrors(resData.error);
      else message.success("Thêm thành công");
    }

    if (image) blogApi.updateBlogImage(blogIdWasSave, image);

    onFormVisble(false);
    dispatch(setLoading(false));
  };

  return (
    <div id="blog-add-page">
      <Divider orientation="left">Thêm blog</Divider>
      <Modal
        title={<ModalTitle />}
        style={{ top: 30 }}
        visible={true}
        width={1000}
        onOk={handleSubmitClick}
        onCancel={() => onFormVisble(false)}
      >
        <Formik
          initialValues={selectedBlog}
          validationSchema={blogValues.validationSchema}
          innerRef={formRef}
          onSubmit={handleFormSubmit}
          enableReinitialize={true}
        >
          {(formikProps) => {
            return (
              <Form>
                <Space
                  direction="vertical"
                  size="large"
                  style={{ width: "100%" }}
                >
                  <FastField
                    name="name"
                    component={InputField}
                    title="Tên blog"
                    titleCol={6}
                    maxLength={200}
                    inputCol={18}
                    isRequire={true}
                    maxLength={200}
                  />

                  <FastField
                    name="description"
                    component={InputField}
                    title="Mô tả"
                    maxLength={500}
                    titleCol={6}
                    inputCol={18}
                    isRequire={true}
                    maxLength={500}
                  />

                  <FastField
                    name="image"
                    component={ImageField}
                    title="Ảnh"
                    titleCol={6}
                    inputCol={18}
                  />

                  <FastField
                    name="categoryId"
                    component={SelectedField}
                    title="Danh mục"
                    options={blogCategories.map((blog) => ({
                      key: blog.id,
                      value: blog.name,
                    }))}
                    titleCol={6}
                    inputCol={18}
                  />

                  <MyEditor />
                </Space>
              </Form>
            );
          }}
        </Formik>
      </Modal>
    </div>
  );
}

export default BlogAddForm;
