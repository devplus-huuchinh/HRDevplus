import axiosClient from './axiosClient';

const campaignApi = {
   getCampains: (data) => {
      const url = '/campaigns';
      return axiosClient.get(url, data);
   },
};

export default campaignApi;
