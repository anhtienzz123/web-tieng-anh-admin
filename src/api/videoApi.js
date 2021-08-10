import axiosClient from "./axiosClient";


const BASE_URL = '/admin/videos/categories';

const videoApi = {
    fetchCategoryVideo: () => {
        return axiosClient.get('/video-categories');
    },

    addCategoryVideo: (video) => {
        return axiosClient.post(BASE_URL, video);
    },

    updateCategoryVideo: (video, videoId) => {
        return axiosClient.put(`${BASE_URL}/${videoId}`, video);
    },

    deleteCategoryVideo: (videoId) => {
        return axiosClient.delete(`${BASE_URL}/${videoId}`);
    }
};

export default videoApi;