import axiosClient from "./axiosClient";

const URL = "/persons";

const studentApi = {
  getPersons: (name) => {
    return axiosClient.get(URL, {
      params: {
        name,
      },
    });
  },
};

export default studentApi;
