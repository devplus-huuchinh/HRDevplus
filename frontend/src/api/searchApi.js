import axiosClient from './axiosClient';

const searchApi = {
   searchForCandidate: (params) => {
      const url = '/search/campaign-search';
      return axiosClient.get(url, { params });
   },

   searchProfile: (params) => {
      const url = '/search/profile-search';
      return axiosClient.get(url, { params });
   },
};

export default searchApi;
