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

   getCampainsForHr: () => {
      const url = '/campaign';
      return axiosClient.get(url);
   },

   getPositionForHr: () => {
      const url = '/position';
      return axiosClient.get(url);
   },

   postCampaignForHr: (data) => {
      const url = '/campaign';
      return axiosClient.post(url, data);
   },

   getDroplist: () => {
      const url = '/campaign/droplist';
      return axiosClient.get(url);
   },

   newCampaign: (data) => {
      const url = '/campaign/';
      return axiosClient.post(url, data);
   },

   applyCampaign: (data) => {
      const url = '/campaigns/apply-campaign';
      return axiosClient.post(url, data);
   },

   campaignStatistic: (params) => {
      const url = '/campaign/statistics';
      return axiosClient.get(url, { params });
   },
};

export default campaignApi;
