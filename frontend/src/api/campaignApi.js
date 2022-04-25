import axiosClient from './axiosClient';

const campaignApi = {
   viewCampaign: () => {
      const url = '/campaign';
      return axiosClient.get(url);
   },
};
export default campaignApi;
