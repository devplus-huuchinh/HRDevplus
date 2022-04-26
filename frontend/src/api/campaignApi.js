import axiosClient from './axiosClient';

const campaignApi = {
   getCampainDetail: (campaignId) => {
      const url = `/campaigns/${campaignId}`;
      return axiosClient.get(url);
   },
   getCampains: (data) => {
      const url = '/campaigns';
      return axiosClient.get(url, data);
   },
};

export default campaignApi;
