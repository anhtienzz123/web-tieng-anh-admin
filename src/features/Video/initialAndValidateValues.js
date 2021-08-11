import * as Yup from "yup";

export const videoValues = {
	initial: {
		id: 0,
		name: "",
		duration: 0,
		level: 0,
		description: "",
		categoryId: 0,
		image: "",
		video: "",
	},

	validationSchema: Yup.object().shape({
		name: Yup.string().required("Tên video không được bỏ trống"),
		duration: Yup.number()
			.required("Thời luọng video không được bỏ trống")
			.min(1, "Thời luọng video không được bỏ trống"),
		level: Yup.number().min(1, "Level không được bỏ trống"),
		description: Yup.string().required("Mô tả không được bỏ trống"),
		categoryId: Yup.number().min(1, "Danh mục video không được bỏ trống"),
	}),
};

export const videoCategoryValues = {
	initial: {
		id: 0,
		name: "",
	},

	validationSchema: Yup.object().shape({
		name: Yup.string().required("Tên danh mục video không được bỏ trống"),
	}),
};

export const videoWordValues = {
	initial: {
		id: 0,
		name: "",
		origin: "",
		frequency: 0,
		videoId: 0,
		sound: "",
	},

	validationSchema: Yup.object().shape({
		name: Yup.string().required("Từ vựng không được bỏ trống"),
		origin: Yup.string().required("Loại từ không được bỏ trống"),
		pronounce: Yup.string().required("Phát âm không được bỏ trống"),
		definition: Yup.string().required("Định nghĩa không được bỏ trống"),
		example: Yup.string().required("Ví dụ không được bỏ trống"),
		mean: Yup.string().required("Nghĩa không được bỏ trống"),
	}),
};
