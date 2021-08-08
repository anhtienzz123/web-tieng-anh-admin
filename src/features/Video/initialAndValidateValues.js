import { message } from "antd";
import * as Yup from "yup";

export const videoValues = {
    initial: {
        name: ''
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().required('Tên không được bỏ trống')
    })
};

export const categoryValidation = {


}