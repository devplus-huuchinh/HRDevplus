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
};
export default profileApi;
