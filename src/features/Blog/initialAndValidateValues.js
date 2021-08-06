import { message } from "antd";
import * as Yup from "yup";

export const blogValues = {
  initial: {
    id: 0,
    name: "",
    description: "",
    image: "",
    categoryId: 0,
    content: "",
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required("Tên không được bỏ trống"),
    description: Yup.string().required("Mô tả không được bỏ trống"),
    categoryId: Yup.number().min(1, "Danh mục không được bỏ trống"),
    // content: Yup.string().required("Nội dung không được bỏ trống"),
  }),
};

export const categoryValidation = {

  initial: {
    name: ''
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required('Tên không được bỏ trống')
  })
}
