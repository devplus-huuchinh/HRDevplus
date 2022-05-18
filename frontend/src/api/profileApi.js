import axiosClient from './axiosClient';

const profileApi = {
   getAllProfile: (params) => {
      const url = '/profiles';
      return axiosClient.get(url, { params });
   },
   dropdownData: () => {
      const url = '/profiles/dropdownlist';
      return axiosClient.get(url);
   },
   editStep: (data) => {
      const url = '/profile';
      return axiosClient.patch(url, data);
   },

   profileStatistics: (params) => {
      const url = '/profile/statistics';
      return axiosClient.get(url, { params });
   },

   profileDetail: (params) => {
      const url = '/profile/detail';
      return axiosClient.get(url, { params });
   },
};
export default profileApi;
