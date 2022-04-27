import axiosClient from './axiosClient';

const searchApi = {
   searchForCandidate: (params) => {
      const url = '/search/campaign-search';
      return axiosClient.get(url, { params });
   },
};

export default searchApi;
