import axiosClient from './axiosClient';

const positionApi = {
   getAll: () => {
      const url = '/position';
      return axiosClient.get(url);
   },
};

export default positionApi;
