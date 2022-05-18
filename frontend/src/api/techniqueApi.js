import axiosClient from './axiosClient';

const techniqueApi = {
   getAll: () => {
      const url = '/technique';
      return axiosClient.get(url);
   },
};

export default techniqueApi;
